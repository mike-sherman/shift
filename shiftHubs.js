// shiftHubs.js - internal gear hubs
//
// Copyright (c) 2004-2026 Michael Sherman. All rights reserved.
//
// LICENSE: LGPL
// 
// see shift.js for revision history
//
// An internally geared hub has one fixed sprocket and a set of fixed
// internal ratios.  Each hub gear behaves like a virtual cog with
//
//      sprocket / ratio
//
// teeth, so the rest of the program can treat a hub exactly like a
// cassette by calling effectiveCog(i) wherever it used to read cogs[i].
//
// hubRatios[] is kept sorted largest ratio first (top gear first) so that
// index 0 is the highest gear - the same convention as cogs[], where
// index 0 is the smallest cog.
//
// While a hub is selected the cog boxes on the Cassette tabs show the
// hub's internal ratios instead of cog sizes.  They are greyed out and
// read only for a stock hub; choose "Custom hub" to enter your own.

var HUB_NONE = 0;		// derailleur gears - use cogs[]
var HUB_CUSTOM = 99;	// user entered ratios

// Ratios are listed lowest gear first, the way the manufacturers publish
// them.  'sprocket' is the usual stock sprocket, just a starting point.
// Please check the figures against the manufacturer's data before relying
// on them.
var hubTable = new Array();
hubTable[0] = null;
hubTable[1] = { name: "Rohloff Speedhub 500/14 (14-speed)", sprocket: 16,
	ratios: [0.279, 0.316, 0.360, 0.409, 0.464, 0.528, 0.600, 0.682, 0.774, 0.881, 1.000, 1.135, 1.292, 1.467] };
hubTable[2] = { name: "Shimano Alfine 11-speed (SG-S700)", sprocket: 18,
	ratios: [0.527, 0.681, 0.770, 0.878, 0.995, 1.134, 1.292, 1.462, 1.667, 1.888, 2.153] };
hubTable[3] = { name: "Shimano Alfine / Nexus 8-speed", sprocket: 18,
	ratios: [0.527, 0.644, 0.748, 0.851, 1.000, 1.223, 1.419, 1.615] };
hubTable[4] = { name: "Shimano Nexus 7-speed", sprocket: 20,
	ratios: [0.632, 0.741, 0.843, 0.989, 1.145, 1.335, 1.545] };
hubTable[5] = { name: "Shimano Nexus 4-speed", sprocket: 20,
	ratios: [1.000, 1.244, 1.500, 1.843] };
hubTable[6] = { name: "Shimano Nexus 3-speed", sprocket: 20,
	ratios: [0.733, 1.000, 1.360] };
hubTable[7] = { name: "SRAM i-Motion 9-speed", sprocket: 18,
	ratios: [0.542, 0.678, 0.773, 0.886, 1.000, 1.166, 1.333, 1.520, 1.843] };
hubTable[8] = { name: "SRAM i-3 / Sachs Torpedo 3-speed", sprocket: 18,
	ratios: [0.733, 1.000, 1.364] };
hubTable[9] = { name: "Sturmey-Archer 8-speed (X-RF8)", sprocket: 20,
	ratios: [1.000, 1.280, 1.450, 1.640, 1.860, 2.100, 2.380, 3.250] };
hubTable[10] = { name: "Sturmey-Archer 5-speed (X-RF5 wide)", sprocket: 18,
	ratios: [0.625, 0.750, 1.000, 1.333, 1.600] };
hubTable[11] = { name: "Sturmey-Archer 3-speed (AW)", sprocket: 18,
	ratios: [0.750, 1.000, 1.333] };
hubTable[12] = { name: "Sturmey-Archer S3X fixed 3-speed", sprocket: 18,
	ratios: [0.625, 0.750, 1.000] };

function compareNumDesc(a, b)
{
	return b - a;
}

function hubActive()
{
	return hubIndex != HUB_NONE;
}

function hubName(index)
{
	if (index == HUB_CUSTOM) return "Custom hub";
	if (hubTable[index]) return hubTable[index].name;
	return "";
}

function defaultSprocket(index)
{
	if (hubTable[index]) return hubTable[index].sprocket;
	return 18;
}

// copy the stock ratios of hub 'index' into hubRatios[], top gear first
function loadHubRatios(index)
{
	hubRatios = new Array();
	if (hubTable[index])
	{
		for (var i = 0; i < hubTable[index].ratios.length; i++)
		{
			hubRatios[i] = hubTable[index].ratios[i];
		}
		hubRatios.sort(compareNumDesc);
	}
}

// select hub 'index'.  keepSprocket = true leaves the current sprocket alone
// (used when restoring a saved set), otherwise the hub's usual sprocket is used.
function setHub(index, keepSprocket)
{
	index = parseInt(index);
	if (isNaN(index)) index = HUB_NONE;
	if (index == HUB_NONE)
	{
		hubIndex = HUB_NONE;
		hubRatios = new Array();
		sprocket = 999;
		proposedTitle = "Custom";
	}
	else if (index == HUB_CUSTOM)
	{
		hubIndex = HUB_CUSTOM;
		if (hubRatios.length == 0)
		{
			hubRatios[0] = 1.000;	// something to start editing from
		}
		proposedTitle = "Custom hub";
	}
	else if (hubTable[index])
	{
		hubIndex = index;
		loadHubRatios(index);
		proposedTitle = hubTable[index].name;
	}
	else
	{	// unknown hub
		setHub(HUB_NONE, keepSprocket);
		return;
	}
	if (hubActive())
	{
		if (!keepSprocket || sprocket < 1 || sprocket > 998)
		{
			sprocket = defaultSprocket(hubIndex);
		}
		cassetteSelection = 0;	// a hub replaces the cassette
	}
	highlightGear = 99;
}

// called from the hub pull down menus
function selectHub()
{
	setHub(document.mainForm.hub.options[document.mainForm.hub.options.selectedIndex].value, false);
	setTitle();
	updateOutput();
}

function selectxHub()	// Cassette & Rings tab
{
	setHub(document.mainForm.hubx.options[document.mainForm.hubx.options.selectedIndex].value, false);
	setTitle();
	updateOutput();
}

// read the hub sprocket boxes
function readSprocketValue(text)
{
	var s = parseInt(text);
	if (isNaN(s) || s < 1 || s > 998)
	{
		s = hubActive() ? defaultSprocket(hubIndex) : 999;
	}
	sprocket = s;
	updateOutput();
}

function readSprocket()
{
	readSprocketValue(document.mainForm.sprocket.value);
}

function readxSprocket()	// Cassette & Rings tab
{
	readSprocketValue(document.mainForm.sprocketx.value);
}

// the number of teeth hub gear i behaves like - or the real cog size
function effectiveCog(i)
{
	if (hubActive())
	{
		return sprocket / hubRatios[i];
	}
	return cogs[i];
}

// label for cog column i on the charts - the ratio for a hub, teeth for a cassette
function cogLabel(i)
{
	if (hubActive())
	{
		return hubRatios[i].toFixed(2);
	}
	return cogs[i];
}

// label for the bars on the speed range chart - the gear number for a hub
// (1 = lowest gear), teeth for a cassette
function speedLabel(i)
{
	if (hubActive())
	{
		return "" + (numCogs - i);
	}
	return cogs[i];
}

// cogLabel padded on the left to 'width' characters for the ASCII tables
function cogLabelPad(i, width)
{
	var s = "" + cogLabel(i);
	while (s.length < width)
	{
		s = " " + s;
	}
	return s;
}

// hubRatios as a string for cookies and bookmarks, and back again
function hubRatiosString()
{
	return hubRatios.join(",");
}

function parseHubRatios(text)
{
	var result = new Array();
	if (text == null || text == "") return result;
	var parts = ("" + text).split(",");
	for (var i = 0; i < parts.length; i++)
	{
		var r = parseFloat(parts[i]);
		if (!isNaN(r) && r > 0 && r < 100)
		{
			result[result.length] = r;
		}
	}
	result.sort(compareNumDesc);
	return result;
}

// fill the hub pull down menus from hubTable - called once at start up
function populateHubSelects()
{
	fillHubSelect(document.mainForm.hub);
	fillHubSelect(document.mainForm.hubx);
}

function fillHubSelect(sel)
{
	if (!sel) return;
	sel.options.length = 0;
	sel.options[0] = new Option("None - derailleur gears", HUB_NONE);
	for (var i = 1; i < hubTable.length; i++)
	{
		if (hubTable[i])
		{
			sel.options[sel.options.length] = new Option(hubTable[i].name, i);
		}
	}
	sel.options[sel.options.length] = new Option("Custom hub - edit the ratios", HUB_CUSTOM);
}

// update the hub controls on both cassette tabs
function writeHub()
{
	writeHubSelect(document.mainForm.hub);
	writeHubSelect(document.mainForm.hubx);
	writeSprocketBox(document.mainForm.sprocket);
	writeSprocketBox(document.mainForm.sprocketx);
	writeHubLocks();
}

function writeHubSelect(sel)
{
	if (!sel) return;
	for (var i = 0; i < sel.options.length; i++)
	{
		if (sel.options[i].value == hubIndex)
		{
			sel.options[i].selected = true;
			break;
		}
	}
}

function writeSprocketBox(box)
{
	if (!box) return;
	box.value = hubActive() ? sprocket : "";
	lockBox(box, !hubActive());	// no sprocket without a hub
}

// grey out a text box and make it read only (or undo that)
// readOnly rather than disabled, so the mouse-over highlighting keeps working
function lockBox(box, locked)
{
	if (!box) return;
	box.readOnly = locked;
	if (box.style)
	{
		box.style.backgroundColor = locked ? "#e4e4e4" : "";
		box.style.color = locked ? "#777777" : "";
	}
}

// a stock hub's ratios are fixed - only a Custom hub can be edited
function writeHubLocks()
{
	var lockRatios = hubActive() && hubIndex != HUB_CUSTOM;
	for (var i = 0; i < 14; i++)
	{
		lockBox(document.mainForm["cog" + i], lockRatios);
		lockBox(document.mainForm["cogx" + i], lockRatios);
	}
	// the cog - / + / X buttons: - and + make no sense for ratios,
	// X (drop a gear) is allowed on a Custom hub
	if (!document.querySelectorAll) return;
	var buttons = document.querySelectorAll("input[type=button]");
	for (var j = 0; j < buttons.length; j++)
	{
		var click = buttons[j].getAttribute("onClick") || "";
		if (/cogPlus|cogMinus/.test(click))
		{
			buttons[j].disabled = hubActive();
		}
		else if (/cogX/.test(click))
		{
			buttons[j].disabled = lockRatios;
		}
	}
}
