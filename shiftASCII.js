// shiftASCII.js - ASCII versions of the tables
//
// Copyright (c) 2004-2018 Michael Sherman. All rights reserved.
//
// LICENSE: LGPL
// 
// see shift.js for revision history


function gearChart()
{
	with(Math)
	outputString = new Array("", "", "");
  
	// fill in the heading box -------------------------------
	document.mainForm.gearTableLabel.value = "Gear Inch Chart - " + numCogs + " x " + numRings;

	
	// print the cog list ---------------------------------------
	outputString1 = "";
	outputString0 = "";
	// padding to center
	for ( i=0; i<11-numCogs; i++){
		outputString1 = outputString1 + "   ";
		outputString0 = outputString0 + "   ";
	}
	// the start of the lines
	outputString1 = outputString1 + "    |";
	outputString0 = outputString0 + "     ";
	// fill the lines
	for ( i=0; i<numCogs; i++){
		outputString1 = outputString1 + "    " + cogs[i];
		tmps = numCogs - i;
		//if ( tmps > 9 ){
		//	tmps = tmps / 10;
		//}
		if ( tmps > 9 ){
			outputString0 = outputString0 + "  (" + tmps + ")";
		} else {
			outputString0 = outputString0 + "   (" + tmps + ")";
		}
	}
	outputString0 = outputString0 + "\n";
  
	// draw the line --------------------------------------
	outputString2 = "\n";
	// padding to center
	for ( i=0; i<11-numCogs; i++){
		outputString2 = outputString2 + "   ";
	}
	// the start of the line
	outputString2 = outputString2 + "----+";
	for ( i=0; i<numCogs; i++){
		outputString2 = outputString2 + "------";
	}
	outputString2 = outputString2 + "\n";
  
	// draw a rows of gear values ----------------------------------------
	// padd to center
	outputString[0] = "";
	outputString[1] = "";
	outputString[2] = "";
	for ( i=0; i<11-numCogs; i++){
		outputString[0] = outputString[0] + "   ";
		outputString[1] = outputString[1] + "   ";
		outputString[2] = outputString[2] + "   ";
	}
	if ( numRings < 3 ) outputString[2] = "";	// mask if it will not be printed
	if ( numRings < 2 ) outputString[1] = "";	// mask if it will not be printed
	// write the values
	for ( j=(numRings-1); j>=0; j-- ){
		if (rings[j] > 0 && rings[j] < 999 ){
			outputString[j] = outputString[j] + " " + rings[j] + " |";
			for ( i=0; i<numCogs; i++){
				if ( Pvalue[(j*numCogs)+i] < 100){
					outputString[j] = outputString[j] + "  " + Pvalue[(j*numCogs)+i];
				} else {
					outputString[j] = outputString[j] + " " + Pvalue[(j*numCogs)+i];
				}
				// add trailing zero
				temp = Math.round(Pvalue[(j*numCogs)+i]);
				if ( Pvalue[(j*numCogs)+i] == temp ){
					outputString[j] = outputString[j] + ".0";
				}
			}
			outputString[j] = outputString[j] + "\n";
		}
	}
	// write the output
	document.mainForm.gearTable.value = outputString0 + outputString1 + outputString2 
    + outputString[2] + outputString[1] + outputString[0];
}

function rolloutTable()
{
	with(Math)
	outputString = new Array("", "", "");

//  11/18/2018 - moved to update displays
//	// check the selected rollout type - 7/21/2009
//	if ( document.mainForm.rolloutButton[0].checked == true ){
//		rolloutType = 0;  // english
//		//alert("getRolloutType = english");
//		//document.mainForm.debugarea.value = "rollout in mph"
//	} else {
//		rolloutType = 1;  // metric
//		//alert("getRolloutType = metric");
//		//document.mainForm.debugarea.value = "rollout in kph"
//	}
  
	// print the cog list
	// padding to center
	outputString1 = "";
	for ( i=0; i<11-numCogs; i++){
		outputString1 = outputString1 + "   ";
	}
	outputString1 = outputString1 + "    |";
	for ( i=0; i<numCogs; i++){
		outputString1 = outputString1 + "     " + cogs[i];
	}

	// draw the line
	outputString2 = "\n";
	for ( i=0; i<11-numCogs; i++){
		outputString2 = outputString2 + "   ";
	}
	outputString2 = outputString2 + "----+";
	for ( i=0; i<numCogs; i++){
		outputString2 = outputString2 + "-------";
	}
	outputString2 = outputString2 + "\n";
    
	// draw a rows of rollout values
	// padd to center
	outputString[0] = "";
	outputString[1] = "";
	outputString[2] = "";
	for ( i=0; i<11-numCogs; i++){
		outputString[0] = outputString[0] + "   ";
		outputString[1] = outputString[1] + "   ";
		outputString[2] = outputString[2] + "   ";
	}
	if ( numRings < 3 ) outputString[2] = "";	// mask if it will not be printed
	if ( numRings < 2 ) outputString[1] = "";	// mask if it will not be printed
	// draw the values
	for ( j=(numRings-1); j>=0; j-- ){
		if (rings[j] > 0 && rings[j] < 999 ){
			outputString[j] = outputString[j] + " " + rings[j] + " |";
			for ( i=0; i<numCogs; i++){
				temp1 = Prollout[(j*numCogs)+i];
				if ( rolloutType == 1 ){   // displaying metric rollouts
					temp1 = temp1 * 0.0254;
					temp1 = (Math.round(temp1 * 100)) / 100;  // round to 2 places
					if ( temp1 > 10){
						outputString[j] = outputString[j] + "  " + temp1;
					} else {
						outputString[j] = outputString[j] + "   " + temp1;
					}
					// add trailing zero
					if ( temp1 == Math.round(temp1) ){
						outputString[j] = outputString[j] + ".00";
					}else{
						if ( temp1 * 10 == Math.round(temp1 * 10) ){
							outputString[j] = outputString[j] + "0";
						}
					}
				} else {                // displaying english rollouts
					if ( temp1 < 100){
						outputString[j] = outputString[j] + "   " + temp1;
					} else {
						outputString[j] = outputString[j] + "  " + temp1;
					}
					// add trailing zero
					if ( temp1 == Math.round(temp1) ){
						outputString[j] = outputString[j] + ".0";
					}
				}
			}
			outputString[j] = outputString[j] + "\n";
		}
	}
	// write the output
	document.mainForm.rollout.value = outputString1 + outputString2 
		+ outputString[2] + outputString[1] + outputString[0];
}

function speedTable()
{
	with(Math)

  
	outputString = new Array("", "", "");
	// print the cog list
	// padding to center
	outputString1 = "";
	for ( i=0; i<11-numCogs; i++){
		outputString1 = outputString1 + "   ";
	}
	// draw the line
	outputString1 = outputString1 + "    |";
	for ( i=0; i<numCogs; i++){
		outputString1 = outputString1 + "    " + cogs[i];
	}

	// draw the line
	// padding to center
	outputString2 = "\n";
	for ( i=0; i<11-numCogs; i++){
		outputString2 = outputString2 + "   ";
	}
	outputString2 = outputString2 + "----+";
	for ( i=0; i<numCogs; i++){
		outputString2 = outputString2 + "------";
	}
	outputString2 = outputString2 + "\n";
  
	// draw a rows of speed values
	outputString[0] = "";
	outputString[1] = "";
	outputString[2] = "";
	for ( i=0; i<11-numCogs; i++){
		outputString[0] = outputString[0] + "   ";
		outputString[1] = outputString[1] + "   ";
		outputString[2] = outputString[2] + "   ";
	}
	if ( numRings < 3 ) outputString[2] = "";	// mask if it will not be printed
	if ( numRings < 2 ) outputString[1] = "";	// mask if it will not be printed
	for ( j=(numRings-1); j>=0; j-- ){
		if (rings[j] > 0 && rings[j] < 999 ){
			outputString[j] = outputString[j] + " " + rings[j] + " |";
			for ( i=0; i<numCogs; i++){
				if (speedType == 1) {  // display kph speeds
					Pspeed[(j*numCogs)+i] = Math.round((Pspeed[(j*numCogs)+i] * 1.609344)*10)/10;
				}
				if ( Pspeed[(j*numCogs)+i] < 10){
					outputString[j] = outputString[j] + "   " + Pspeed[(j*numCogs)+i];
				} else {
					outputString[j] = outputString[j] + "  " + Pspeed[(j*numCogs)+i];
				}  
				// add trailing zero
				temp = Math.round(Pspeed[(j*numCogs)+i]);
				if ( Pspeed[(j*numCogs)+i] == temp ){
					outputString[j] = outputString[j] + ".0";
				} 
			}
			outputString[j] = outputString[j] + "\n";
		}
	}
	// write the output
	document.mainForm.speed.value = outputString1 + outputString2 
    + outputString[2] + outputString[1] + outputString[0];
}

function sheldonRatios()
{
	with(Math)
	outputString = new Array("", "", "");

	// print the cog list
	// padding to center
	outputString1 = "";
	for ( i=0; i<11-numCogs; i++){
		outputString1 = outputString1 + "   ";
	}
	outputString1 = outputString1 + "    |";
	for ( i=0; i<numCogs; i++){
		outputString1 = outputString1 + "    " + cogs[i];
	}
	
	// draw the line
	outputString2 = "\n";
	for ( i=0; i<11-numCogs; i++){
		outputString2 = outputString2 + "   ";
	}
	outputString2 = outputString2 + "----+";
	for ( i=0; i<numCogs; i++){
		outputString2 = outputString2 + "------";
	}
	outputString2 = outputString2 + "\n";
  
	// draw a rows of gear values
	// padd to center
	outputString[0] = "";
	outputString[1] = "";
	outputString[2] = "";
	for ( i=0; i<11-numCogs; i++){
		outputString[0] = outputString[0] + "   ";
		outputString[1] = outputString[1] + "   ";
		outputString[2] = outputString[2] + "   ";
	}
	if ( numRings < 3 ) outputString[2] = "";	// mask if it will not be printed
	if ( numRings < 2 ) outputString[1] = "";	// mask if it will not be printed
	// draw the values
	for ( j=(numRings-1); j>=0; j-- ){
		if (rings[j] > 0 && rings[j] < 999 ){
			outputString[j] = outputString[j] + " " + rings[j] + " |";
			for ( i=0; i<numCogs; i++){
				if ( Pratio[(j*numCogs)+i] < 100){
					outputString[j] = outputString[j] + "  " + Pratio[(j*numCogs)+i];
				} else {
					outputString[j] = outputString[j] + " " + Pratio[(j*numCogs)+i];
				}
				// add trailing zero
				temp = Pratio[(j*numCogs)+i];
				if ( temp == Math.round(temp) ){
					//outputString = outputString + ".00";
					outputString[j] = outputString[j] + ".00";
				} else {
					if ( temp * 10 == Math.round(temp * 10) ){
						//outputString = outputString + "0";
						outputString[j] = outputString[j] + "0";
					}
				}
			}
			outputString[j] = outputString[j] + "\n";
		}
	}
	// write the output
	document.mainForm.sheldon.value = outputString1 + outputString2 
		+ outputString[2] + outputString[1] + outputString[0];
}

