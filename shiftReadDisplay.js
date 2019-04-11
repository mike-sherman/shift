// shift.html - functions to read the display
//
// Copyright (c) 2004-2017 Michael Sherman. All rights reserved.
//
// LICENSE: LGPL
// 
// see shift.js for revision history

// These functions read the current value of all user inputs on the screen.

// read the cog values from the screen
function readCogs()
{
	if (document.mainForm.cog0.value < 1 || document.mainForm.cog0.value > 999)
	{
		cogs[0] = 999;
	} else {
		cogs[0]= parseInt(document.mainForm.cog0.value);
	}
	if (document.mainForm.cog1.value < 1 || document.mainForm.cog1.value > 999)
	{
		cogs[1] = 999;
	} else {
		cogs[1]= parseInt(document.mainForm.cog1.value);
	}
	if (document.mainForm.cog2.value < 1 || document.mainForm.cog2.value > 999)
	{
		cogs[2] = 999;
	} else {
		cogs[2]= parseInt(document.mainForm.cog2.value);
	}
	if (document.mainForm.cog3.value < 1 || document.mainForm.cog3.value > 999)
	{
		cogs[3] = 999;
	} else {
		cogs[3]= parseInt(document.mainForm.cog3.value);
	}
	if (document.mainForm.cog4.value < 1 || document.mainForm.cog4.value > 999)
	{
		cogs[4] = 999;
	} else {
		cogs[4]= parseInt(document.mainForm.cog4.value);
	}
	if (document.mainForm.cog5.value < 1 || document.mainForm.cog5.value > 999)
	{
		cogs[5] = 999;
	} else {
		cogs[5]= parseInt(document.mainForm.cog5.value);
	}
	if (document.mainForm.cog6.value < 1 || document.mainForm.cog6.value > 999)
	{
		cogs[6] = 999;
	} else {
		cogs[6]= parseInt(document.mainForm.cog6.value);
	}
	if (document.mainForm.cog7.value < 1 || document.mainForm.cog7.value > 999)
	{
		cogs[7] = 999;
	} else {
		cogs[7]= parseInt(document.mainForm.cog7.value);
	}
	if (document.mainForm.cog8.value < 1 || document.mainForm.cog8.value > 999)
	{
		cogs[8] = 999;
	} else {
		cogs[8]= parseInt(document.mainForm.cog8.value);
	}
	if (document.mainForm.cog9.value < 1 || document.mainForm.cog9.value > 999)
	{
		cogs[9] = 999;
	} else {
		cogs[9]= parseInt(document.mainForm.cog9.value);
	}
	if (document.mainForm.cog10.value < 1 || document.mainForm.cog10.value > 999)
	{
		cogs[10] = 999;
	} else {
		cogs[10]= parseInt(document.mainForm.cog10.value);
	}
   // fix empty slots and zero slots

   for ( i=0; i<11; i++){
     if ((cogs[i] == "") || (cogs[i] == 0)) 
	 {
       cogs[i] = 999;
     }
   }

   cassetteSelection = 0;	// changed something, not a stock cassette
   updateOutput();
}  

// read the cog values from the screen on the Cassette & Ring tab
function readxCogs()
{
	if (document.mainForm.cogx0.value < 1 || document.mainForm.cogx0.value > 999)
	{
		cogs[0] = 999;
	} else {
		cogs[0]= parseInt(document.mainForm.cogx0.value);
	}
	if (document.mainForm.cogx1.value < 1 || document.mainForm.cogx1.value > 999)
	{
		cogs[1] = 999;
	} else {
		cogs[1]= parseInt(document.mainForm.cogx1.value);
	}
	if (document.mainForm.cogx2.value < 1 || document.mainForm.cogx2.value > 999)
	{
		cogs[2] = 999;
	} else {
		cogs[2]= parseInt(document.mainForm.cogx2.value);
	}
	if (document.mainForm.cogx3.value < 1 || document.mainForm.cogx3.value > 999)
	{
		cogs[3] = 999;
	} else {
		cogs[3]= parseInt(document.mainForm.cogx3.value);
	}
	if (document.mainForm.cogx4.value < 1 || document.mainForm.cogx4.value > 999)
	{
		cogs[4] = 999;
	} else {
		cogs[4]= parseInt(document.mainForm.cogx4.value);
	}
	if (document.mainForm.cogx5.value < 1 || document.mainForm.cogx5.value > 999)
	{
		cogs[5] = 999;
	} else {
		cogs[5]= parseInt(document.mainForm.cogx5.value);
	}
	if (document.mainForm.cogx6.value < 1 || document.mainForm.cogx6.value > 999)
	{
		cogs[6] = 999;
	} else {
		cogs[6]= parseInt(document.mainForm.cogx6.value);
	}
	if (document.mainForm.cogx7.value < 1 || document.mainForm.cogx7.value > 999)
	{
		cogs[7] = 999;
	} else {
		cogs[7]= parseInt(document.mainForm.cogx7.value);
	}
	if (document.mainForm.cogx8.value < 1 || document.mainForm.cogx8.value > 999)
	{
		cogs[8] = 999;
	} else {
		cogs[8]= parseInt(document.mainForm.cogx8.value);
	}
	if (document.mainForm.cogx9.value < 1 || document.mainForm.cogx9.value > 999)
	{
		cogs[9] = 999;
	} else {
		cogs[9]= parseInt(document.mainForm.cogx9.value);
	}
	if (document.mainForm.cogx10.value < 1 || document.mainForm.cogx10.value > 999)
	{
		cogs[10] = 999;
	} else {
		cogs[10]= parseInt(document.mainForm.cogx10.value);
	}
   // fix empty slots and zero slots

   for ( i=0; i<11; i++){
     if ((cogs[i] == "") || (cogs[i] == 0)) 
	 {
       cogs[i] = 999;
     }
   }

   cassetteSelection = 0;	// changed something, not a stock cassette
   updateOutput();
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
