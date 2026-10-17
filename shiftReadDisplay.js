// shift.html - functions to read the display
//
// Copyright (c) 2004-2017 Michael Sherman. All rights reserved.
//
// LICENSE: LGPL
// 
// see shift.js for revision history

// These functions read the current value of all user inputs on the screen.

// read the cog values from the screen
// prefix is "cog" for the Cassette tab, "cogx" for the Cassette & Rings tab
function readCogBoxes(prefix)
{
	var i, v;
	if (hubActive())
	{	// the boxes hold the hub's internal ratios
		hubRatios = new Array();
		for (i = 0; i < 14; i++)
		{
			v = parseFloat(document.mainForm[prefix + i].value);
			if (!isNaN(v) && v > 0 && v < 100)
			{
				hubRatios[hubRatios.length] = v;
			}
		}
		hubRatios.sort(compareNumDesc);
		if (hubRatios.length == 0)
		{
			hubRatios[0] = 1.000;
		}
		hubIndex = HUB_CUSTOM;		// changed something, not a stock hub
		proposedTitle = "Custom hub";
	}
	else
	{	// the boxes hold cog sizes
		for (i = 0; i < 14; i++)
		{
			v = parseInt(document.mainForm[prefix + i].value);
			if (isNaN(v) || v < 1 || v > 998)
			{
				v = 999;	// empty, zero or out of range = no cog
			}
			cogs[i] = v;
		}
		cassetteSelection = 0;	// changed something, not a stock cassette
		proposedTitle = "Custom";
	}
	setTitle();
	updateOutput();
}

function readCogs()		// Cassette tab
{
	readCogBoxes("cog");
}

function readxCogs()	// Cassette & Rings tab
{
	readCogBoxes("cogx");
}


// read the rings from the screen
function readRings()
{
   rings[0]= parseInt(document.mainForm.ring0.value);
   rings[1]= parseInt(document.mainForm.ring1.value);
   rings[2]= parseInt(document.mainForm.ring2.value);
   // fix empty slots and zero slots
   for ( i=0; i<3; i++){
     if ((rings[i] == "") || (rings[i] == 0)){
       rings[i] = 999;
     }
   }
   updateOutput();
}

// read the rings from the screen from the combined Cassettes & Rings tab
function readxRings()
{
   rings[0]= parseInt(document.mainForm.ringx0.value);
   rings[1]= parseInt(document.mainForm.ringx1.value);
   rings[2]= parseInt(document.mainForm.ringx2.value);
   // fix empty slots and zero slots
   for ( i=0; i<3; i++){
     if ((rings[i] == "") || (rings[i] == 0)){
       rings[i] = 999;
     }
   }
   updateOutput();
}

function readCrank()
{
   //alert("set crank Not Implemented Yet");
	 //crank = parseInt(document.mainForm.crank.options[document.mainForm.crank.options.selectedIndex].value);
	 crank = parseInt(document.mainForm.crank.options[document.mainForm.crank.options.selectedIndex].value);
   updateOutput();
}

//function readWheel() // old wheel table
//{
//   //alert("set wheel Not Implemented Yet");
//   wheelIndex = parseInt(document.mainForm.wheel.options[document.mainForm.wheel.options.selectedIndex].value);
//   updateOutput();
//}

function readWheelSize()
{
	wheelIndex = parseInt(document.mainForm.wheelsize.options[document.mainForm.wheelsize.options.selectedIndex].value);
	updateOutput();
}

function readTire()
{
	tireIndex = parseInt(document.mainForm.tire.options[document.mainForm.tire.options.selectedIndex].value);
	updateOutput();
}

function readDeflect()
{
	deflection = parseInt(document.mainForm.deflect.options[document.mainForm.deflect.options.selectedIndex].value);
	updateOutput();
}

function readRolloutType()	// rollout type
{
  if ( document.mainForm.rolloutButton[0].checked == true ){
    rolloutType = 0;  // english
  } else {
    rolloutType = 1;  // metric
  }
  updateOutput();
}

function readRolloutType2()	// rollout type for all-in-one
{
  if ( document.mainForm.rolloutButton2[0].checked == true ){
    rolloutType = 0;  // english
  } else {
    rolloutType = 1;  // metric
  }
  updateOutput();
}

function readRolloutTypeA()	// rollout type for all-in-one
{
  if ( document.mainForm.rolloutButtonA[0].checked == true ){
    rolloutType = 0;  // english
  } else {
    rolloutType = 1;  // metric
  }
  updateOutput();
}

function readTitle()
{
  pageTitle = document.mainForm.pageTitle.value;
  //document.mainForm.debugarea.value=pageTitle;
  updateOutput();
}

function readSpeedType()
{
  if ( document.mainForm.speedButton[0].checked == true ){
    speedType = 0;  // mph
    //document.mainForm.debugarea.value = "speed in mph"
  } else {
    speedType = 1;  // kph
    //document.mainForm.debugarea.value = "speed in kph"
  }
  updateOutput();
}

function readSpeedTypeA()
{
  if ( document.mainForm.speedButtonA[0].checked == true ){
    speedType = 0;  // mph
  } else {
    speedType = 1;  // kph
  }
  updateOutput();
}

function readSpeedRangeType()	// rpm/speed range table
{
  if ( document.mainForm.speedRangeButton[0].checked == true ){
    speedRangeType = 0;  // mph
  } else {
    speedRangeType = 1;  // kph
  }
  updateOutput();
}

function readSpeedRangeType2()	// rpm/speed range table on all-in-one
{
  if ( document.mainForm.speedRangeButton2[0].checked == true ){
    speedRangeType = 0;  // mph
  } else {
    speedRangeType = 1;  // kph
  }
  updateOutput();
}

function readGridONoff()	// grid on/off for rpm/speed range table
{
	if (document.mainForm.showgrid.checked)
	{
		showgrid = "show";
	}else{
		showgrid = "hide";
	}
	updateOutput();
}

function readGridONoff2()	// grid on/off for rpm/speed range table on all-in-one
{
	if (document.mainForm.showgrid2.checked)
	{
		showgrid = "show";
	}else{
		showgrid = "hide";
	}
	updateOutput();
}

function sortGears()	// sort gears rpm/speed range table
{
	if (document.mainForm.sortgears.checked)
	{
		sortgears = "yes";
	}else{
		sortgears = "no";
	}
	updateOutput();
}

function sortGears2()	// sort gears rpm/speed range table on all-in-one
{
	if (document.mainForm.sortgears2.checked)
	{
		sortgears = "yes";
	}else{
		sortgears = "no";
	}
	updateOutput();
}

function readDisplayType()
{
  if ( document.mainForm.typeButton[0].checked == true ){
    displayType = 0;  // ASCII
  } else {
    displayType = 1;  // Graphical
  }
  updateOutput();
}

function readDisplayOrder()
{
{
  if ( document.mainForm.orderButton[0].checked == true ){
    displayOrder = 0;  // Large to Small
  } else {
    displayOrder = 1;  // Small to Large (original)
  }
  updateOutput();
}
}

function readHighlight()
{
	if ( document.mainForm.HiLite.checked == true )
	{
		highlightON = 1;  // do highlighting
	} else {
		highlightON = 0;  // don't do highlighting
	}
}

// speed table
function readRPM() 
{
	RPM = parseInt(document.mainForm.RPM.value);
	//document.mainForm.debugarea.value = "RPM = " + RPM
    updateOutput();
}
function readRPMa() 
{
	RPM = parseInt(document.mainForm.RPMa.value);
	//document.mainForm.debugarea.value = "RPM = " + RPM
    updateOutput();
}

//  speed graph
function read_lRPM()	// rpm/speed range table
{
  lRPM = parseInt(document.mainForm.lRPM.value);
  RPMrangeCheck();
}
function read_lRPM2()	// rpm/speed range table
{
  lRPM = parseInt(document.mainForm.lRPM2.value);
  RPMrangeCheck();
}

function read_hRPM()	// rpm/speed range table
{
  hRPM = parseInt(document.mainForm.hRPM.value);
  RPMrangeCheck();
}
function read_hRPM2()	// rpm/speed range table
{
  hRPM = parseInt(document.mainForm.hRPM2.value);
  RPMrangeCheck();
}

function readDispOrder()	// displayOrder
{
	if (document.mainForm.orderButton[1].checked == true)
	{
	   displayOrder = 1;
	}
	else
	{
	   displayOrder = 0;
	}
}
