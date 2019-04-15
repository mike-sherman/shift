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
	for ( var i = 0; i < document.mainForm.xcassette.options.length; i++ ) 
	{
		if ( document.mainForm.xcassette.options[i].value == cassettexSelection ) 
		{
			document.mainForm.xcassette.options[i].selected = true;
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

function writeCogs()	// update the cog display
{
   // count the cogs
   numCogs = 0;
   for (i=0; i < cogs.length; i++){
      if (cogs[i] > 0 && cogs[i] < 999 ){
         numCogs ++;
      }
   }
   // sort the cogs
   cogs.sort(compareNum);
   document.mainForm.cog0.value=cogs[0];
   if (cogs[1] < 999){
      document.mainForm.cog1.value=cogs[1];
   }else{
      document.mainForm.cog1.value="";
   }
   if (cogs[2] < 999){
      document.mainForm.cog2.value=cogs[2];
   }else{
      document.mainForm.cog2.value="";
   }
   if (cogs[3] < 999){
      document.mainForm.cog3.value=cogs[3];
   }else{
      document.mainForm.cog3.value="";
   }
   if (cogs[4] < 999){
      document.mainForm.cog4.value=cogs[4];
   }else{
      document.mainForm.cog4.value="";
   }
   if (cogs[5] < 999){
      document.mainForm.cog5.value=cogs[5];
   }else{
      document.mainForm.cog5.value="";
   }
   if (cogs[6] < 999){
      document.mainForm.cog6.value=cogs[6];
   }else{
      document.mainForm.cog6.value="";
   }
   if (cogs[7] < 999){
      document.mainForm.cog7.value=cogs[7];
   }else{
      document.mainForm.cog7.value="";
   }
   if (cogs[8] < 999){
      document.mainForm.cog8.value=cogs[8];
   }else{
      document.mainForm.cog8.value="";
   }
   if (cogs[9] < 999){
      document.mainForm.cog9.value=cogs[9];
   }else{
      document.mainForm.cog9.value="";
   }
   if (cogs[10] < 999){
      document.mainForm.cog10.value=cogs[10];
   }else{
      document.mainForm.cog10.value="";
   }
   if (cogs[11] < 999){
      document.mainForm.cog11.value=cogs[11];
   }else{
      document.mainForm.cog11.value="";
   }
   if (cogs[12] < 999){
      document.mainForm.cog12.value=cogs[12];
   }else{
      document.mainForm.cog12.value="";
   }

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

// for the Cassette & Rings tab
function writexCogs()	// update the cog display
{
   // count the cogs
   numCogs = 0;
   for (i=0; i < cogs.length; i++){
      if (cogs[i] > 0 && cogs[i] < 999 ){
         numCogs ++;
      }
   }
   // sort the cogs
   cogs.sort(compareNum);
   document.mainForm.cogx0.value=cogs[0];
   if (cogs[1] < 999){
      document.mainForm.cogx1.value=cogs[1];
   }else{
      document.mainForm.cogx1.value="";
   }
   if (cogs[2] < 999){
      document.mainForm.cogx2.value=cogs[2];
   }else{
      document.mainForm.cogx2.value="";
   }
   if (cogs[3] < 999){
      document.mainForm.cogx3.value=cogs[3];
   }else{
      document.mainForm.cogx3.value="";
   }
   if (cogs[4] < 999){
      document.mainForm.cogx4.value=cogs[4];
   }else{
      document.mainForm.cogx4.value="";
   }
   if (cogs[5] < 999){
      document.mainForm.cogx5.value=cogs[5];
   }else{
      document.mainForm.cogx5.value="";
   }
   if (cogs[6] < 999){
      document.mainForm.cogx6.value=cogs[6];
   }else{
      document.mainForm.cogx6.value="";
   }
   if (cogs[7] < 999){
      document.mainForm.cogx7.value=cogs[7];
   }else{
      document.mainForm.cogx7.value="";
   }
   if (cogs[8] < 999){
      document.mainForm.cogx8.value=cogs[8];
   }else{
      document.mainForm.cogx8.value="";
   }
   if (cogs[9] < 999){
      document.mainForm.cogx9.value=cogs[9];
   }else{
      document.mainForm.cogx9.value="";
   }
   if (cogs[10] < 999){
      document.mainForm.cogx10.value=cogs[10];
   }else{
      document.mainForm.cogx10.value="";
   }

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



function updateCapacity()
{
   gFrontCapacity = rings[numRings-1] - rings[0];
   gRearCapacity = gFrontCapacity + cogs[numCogs-1] - cogs[0];

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
   //document.mainForm.pageURL.value = url;
}


