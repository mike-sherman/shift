// shift.html - functions to update the display
//
// Copyright (c) 2004-2017 Michael Sherman. All rights reserved.
//
// LICENSE: LGPL
// 
// see shift.js for revision history

function showDebug()
{
  document.mainForm.debugText = debugString;
}

function writeCassette() // write cassette selection to screen - is this used
{
	//document.mainForm.cassette.options[cassetteOption].selected = true;
	// set the correct item in the pull down menu
	for ( var i = 0; i < document.mainForm.cassette.options.length; i++ ) 
	{
		if ( document.mainForm.cassette.options[i].value == cassetteSelection ) 
		{
			document.mainForm.cassette.options[i].selected = true;
		     break;
		}
	}
}

function writexCassette() // write cassette selection to screen - is this used
{
	//document.mainForm.cassette.options[cassetteOption].selected = true;
	// set the correct item in the pull down menu
	for ( var i = 0; i < document.mainForm.cassettex.options.length; i++ ) 
	{
		if ( document.mainForm.cassettex.options[i].value == cassetteSelection ) 
		{
			document.mainForm.cassettex.options[i].selected = true;
		     break;
		}
	}
}

function writeRings()
{
   // how many rings do we have
   numRings = 0;
   for (i=0; i < rings.length; i++){
      if (rings[i] > 0 && rings[i] < 999 ){
         numRings ++;
      }
   }
   rings.sort(compareNum);
   if (rings[0] < 999){
      document.mainForm.ring0.value=rings[0];
   }else{
      document.mainForm.ring0.value="";
   }
   if (rings[1] < 999){
      document.mainForm.ring1.value=rings[1];
   }else{
      document.mainForm.ring1.value="";
   }
   if (rings[2] < 999){
      document.mainForm.ring2.value=rings[2];
   }else{
      document.mainForm.ring2.value="";
   }

}

// for the Cassette & Rings tab
function writexRings()
{
   // how many rings do we have
   numRings = 0;
   for (i=0; i < rings.length; i++){
      if (rings[i] > 0 && rings[i] < 999 ){
         numRings ++;
      }
   }
   rings.sort(compareNum);
   if (rings[0] < 999){
      document.mainForm.ringx0.value=rings[0];
   }else{
      document.mainForm.ringx0.value="";
   }
   if (rings[1] < 999){
      document.mainForm.ringx1.value=rings[1];
   }else{
      document.mainForm.ringx1.value="";
   }
   if (rings[2] < 999){
      document.mainForm.ringx2.value=rings[2];
   }else{
      document.mainForm.ringx2.value="";
   }

}

// update the cog boxes - prefix is "cog" or "cogx", sel is the matching cassette menu
function writeCogBoxes(prefix, sel)
{
	var i;
	if (hubActive())
	{	// show the hub's internal ratios, top gear first
		hubRatios.sort(compareNumDesc);
		numCogs = hubRatios.length;
		for (i = 0; i < 14; i++)
		{
			document.mainForm[prefix + i].size = 5;
			if (i < numCogs)
			{
				document.mainForm[prefix + i].value = hubRatios[i].toFixed(3);
			}
			else
			{
				document.mainForm[prefix + i].value = "";
			}
		}
	}
	else
	{
		// count the cogs
		numCogs = 0;
		for (i = 0; i < cogs.length; i++)
		{
			if (cogs[i] > 0 && cogs[i] < 999)
			{
				numCogs++;
			}
		}
		// sort the cogs
		cogs.sort(compareNum);
		for (i = 0; i < 14; i++)
		{
			document.mainForm[prefix + i].size = 2;
			if (cogs[i] < 999 || i == 0)
			{
				document.mainForm[prefix + i].value = cogs[i];
			}
			else
			{
				document.mainForm[prefix + i].value = "";
			}
		}
	}

	// set the correct item in the pull down menu
	for (i = 0; i < sel.options.length; i++)
	{
		if (sel.options[i].value == cassetteSelection)
		{
			sel.options[i].selected = true;
			break;
		}
	}
}

function writeCogs()	// Cassette tab
{
	writeCogBoxes("cog", document.mainForm.cassette);
}

function writexCogs()	// Cassette & Rings tab
{
	writeCogBoxes("cogx", document.mainForm.cassettex);
}



function updateCapacity()
{
   gFrontCapacity = rings[numRings-1] - rings[0];
   if (hubActive())
   {	// no rear derailleur with an internal gear hub
      gRearCapacity = "n/a";
   }
   else
   {
      gRearCapacity = gFrontCapacity + cogs[numCogs-1] - cogs[0];
   }

   document.mainForm.frontcap.value = gFrontCapacity;
   document.mainForm.rearcap.value = gRearCapacity;
   // cassette & rings tab
   document.mainForm.frontcapx.value = gFrontCapacity;
   document.mainForm.rearcapx.value = gRearCapacity;
}


function writeWheel()
{
	//document.mainForm.wheel.options[wheelOption].selected = true;
  
  // set the correct wheel size item in the pull down menu
  for ( var i = 0; i < document.mainForm.wheelsize.options.length; i++ ) 
	{
		if ( document.mainForm.wheelsize.options[i].value == wheelIndex ) 
		{
			document.mainForm.wheelsize.options[i].selected = true;
			break;
		}
  }

	// set the correct tire size item in the pull down menu
  for ( var i = 0; i < document.mainForm.tire.options.length; i++ ) 
	{
		if ( document.mainForm.tire.options[i].value == tireIndex ) 
		{
			document.mainForm.tire.options[i].selected = true;
			break;
		}
  }

	// set the correct tire deflection item in the pull down menu
  for ( var i = 0; i < document.mainForm.deflect.options.length; i++ ) 
	{
    if ( document.mainForm.deflect.options[i].value == deflection) 
		{
			document.mainForm.deflect.options[i].selected = true;
			break;
		}
  }

}

function writeCrank()
{
	//document.mainForm.crank.options[crankOption].selected = crank;
	// set the correct item in the pull down menu
	for ( var i = 0; i < document.mainForm.crank.options.length; i++ ) 
	{
		if ( document.mainForm.crank.options[i].value == crank ) 
		{
			document.mainForm.crank.options[i].selected = true;
			break;
		}
	}
}

function writeTitle()
{
  document.mainForm.pageTitle.value = pageTitle;
}

function writeCheckboxes()	// update checkbox and radio buttons on the screen
{

	if (speedRangeType == 0)
	{
      document.mainForm.speedRangeButton[0].checked = true;
      document.mainForm.speedRangeButton2[0].checked = true;
	}
	else
	{
      document.mainForm.speedRangeButton[1].checked = true;
      document.mainForm.speedRangeButton2[1].checked = true;
	}
	
   document.mainForm.lRPM.value = lRPM
   document.mainForm.lRPM2.value = lRPM

   document.mainForm.hRPM.value = hRPM
   document.mainForm.hRPM2.value = hRPM
	
	if (showgrid == "show")
	{
      document.mainForm.showgrid.checked = true;
      document.mainForm.showgrid2.checked = true;
	}
	else
	{
      document.mainForm.showgrid.checked = false;
      document.mainForm.showgrid2.checked = false;
	}
	
	if (sortgears == "yes")
	{
      document.mainForm.sortgears.checked = true;
      document.mainForm.sortgears2.checked = true;
	}
	else
	{
      document.mainForm.sortgears.checked = false;
      document.mainForm.sortgears2.checked = false;
   }
   
   // on the rollout tab
   if (rolloutType == 0)   // english
   {
      document.mainForm.rolloutButton[0].checked = true;  
      document.mainForm.rolloutButton2[0].checked = true;
      document.mainForm.rolloutButtonA[0].checked = true;
   }
   else
   {  // metric
      document.mainForm.rolloutButton[1].checked = true;  
      document.mainForm.rolloutButton2[1].checked = true;
      document.mainForm.rolloutButtonA[1].checked = true;
   }

   // on the speed table
   if (speedType == 0)  // mph
   {
      document.mainForm.speedButton[0].checked = true;
      document.mainForm.speedButtonA[0].checked = true;
   } 
   else {
      document.mainForm.speedButton[1].checked = true;
      document.mainForm.speedButtonA[1].checked = true;
   }
   
   document.mainForm.RPM.value = RPM;
	document.mainForm.RPMa.value = RPM;

   // these are on the save tab
	if (displayOrder == 1)		// order of cogs
	{
		document.mainForm.orderButton[1].checked = true;	// small to large
	}
	else
	{
		document.mainForm.orderButton[0].checked = true;	// large to small
	}
	
	speedrtbl.paint();
}

function gearHighlight(hcog)  // highlight cog the mouse is over
{	// if Graphical tables and Highlighting enabled and there is a cog
   if (highlightON == 1 && (hcog < numCogs || hcog == 99))
   {
		highlightGear = hcog;
		gearChartG();
		semiLogG();
		speedRangeTableG();
		sheldonRatiosG();
		rolloutTableG();
	}	
}

function ringHighlight(hring)  // highlight ring the mouse is over
{	// if Graphical tables and Highlighting enabled and there is a cog
	if (highlightON == 1 && (hring < numRings || hring == 99))
	{
		highlightRing = hring;
		gearChartG();
		semiLogG();
		speedRangeTableG();
		sheldonRatiosG();
		rolloutTableG();
	}	
}

function writeURL()
{
   createBookMarkString();
   // not allowed in current browsers
   document.mainForm.pageURL.value = url;
}

function updateBrowser()
{
   document.mainForm.browser.value = browserType;
}
