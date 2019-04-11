// shift.html - rollout table
//
// Copyright (c) 2004-2017 Michael Sherman. All rights reserved.
//
// LICENSE: LGPL
// 
// see shift.js for revision history


function rolloutTableG()
{
	var cw = 45;	// grid cell width   -   GRID CELLS 45 wide X 20
	var ch = 20;	// grid cell height
	var divw = 600;	// width of our <dev>
	var leftside;	// where the left side of the table is
	var pad = 8; 	// padding on the left of number cells ~ 1 character width
	var cellpad;	// variable padding
	var row;	// used to hold y coord for current row
	var outputString;
	
//	functionality moved 11/16/2018 to shiftUpdateDisplay.js and shiftReadDisplay.js
//	// check the selected rollout type - 7/21/200
//	if ( document.mainForm.rolloutButton[0].checked == true ){
//		rolloutType = 0;  // english
//		//alert("getRolloutType = english");
//		//document.mainForm.debugarea.value = "\nrollout in mph"
//	} else {
//		rolloutType = 1;  // metric
//		//alert("getRolloutType = metric");
//		//document.mainForm.debugarea.value = "\nrollout in kph"
//	}
//  
//	// check the selected rollout type
//	if ( document.mainForm.rolloutButton[0].checked == true ){
//		rolloutType = 0;  // english
//		//alert("getRolloutType = english");
//	} else {
//		rolloutType = 1;  // metric
//		//alert("getRolloutType = metric");
//	}
  	
	rolltbl.setPrintable(true);
	rolltbl.clear();
	rolltbl.setColor(textcolor);
	rolltbl.setStroke(1);
	rolltbl.setFont("arial", "14px", Font.PLAIN);
	//
	rolltbl2.setPrintable(true);
	rolltbl2.clear();
	rolltbl2.setColor(textcolor);
	rolltbl2.setStroke(1);
	rolltbl2.setFont("arial", "14px", Font.PLAIN);

	with(Math)
	leftside = (divw -((numCogs + 1 ) * cw ))/2;
  	
	// print the cog list ---------------------------------------
	cellpad = pad * 2;
	row = 0;
	for ( i=0; i<numCogs; i++)
	{
		if (displayOrder == 1)	// selectable display order - 1 = small to large
		{
			if (i == highlightGear)
			{
				rolltbl.setColor(highlight);	// highlight cog
				//
				rolltbl2.setColor(highlight);
			}
			else
			{
				rolltbl.setColor(textcolor);
				//
				rolltbl2.setColor(textcolor);
			}
			rolltbl.drawString (cogs[i], leftside + cw + (i * cw) + cellpad, row );
			rolltbl.setColor(textcolor);
			//
			rolltbl2.drawString (cogs[i], leftside + cw + (i * cw) + cellpad, row );
			rolltbl2.setColor(textcolor);
		}
		else	// selectable display order - 1 = large to small
		{
			if (i == highlightGear)
			{
				rolltbl.setColor(highlight);	// highlight cog
				//
				rolltbl2.setColor(highlight);
			}
			else
			{
				rolltbl.setColor(textcolor);
				//
				rolltbl2.setColor(textcolor);
			}
			rolltbl.drawString (cogs[numCogs-1-i], leftside + cw + (i * cw) + cellpad, row );
			rolltbl.setColor(textcolor);
			//
			rolltbl2.drawString (cogs[numCogs-1-i], leftside + cw + (i * cw) + cellpad, row );
			rolltbl2.setColor(textcolor);
		}
	}
	// draw the lines ----------------------------------------
	rolltbl.drawLine ( leftside, ch, leftside + ((numCogs + 1) * cw), ch );			// horz line
	rolltbl2.drawLine ( leftside, ch, leftside + ((numCogs + 1) * cw), ch );
	rolltbl.drawLine ( leftside + cw, 0, leftside + cw, (numRings + 1) * ch );		// vert line
	rolltbl2.drawLine ( leftside + cw, 0, leftside + cw, (numRings + 1) * ch );

	// highlight block of gears ----------------------------------------
	if (highlightGear != 99)	// highlighting is turned on
	{
		rolltbl.setColor(highlight2);	// highlight cog
		//
		rolltbl2.setColor(highlight2);
		if (displayOrder == 1)	// selectable display order
		{
			var hxcorner = leftside + (cw * 3) + ((highlightGear-2) * cw) + 3;
		}
		else
		{
			var hxcorner = leftside + ((numCogs -(highlightGear)) * cw) + 3;
		}
		var hycorner = ch + 1 ;
		rolltbl.fillRect(hxcorner, hycorner, cw , (numRings * ch)-5);		// arguments are (x,y,w,h)
		rolltbl.setColor(textcolor);
		//
		rolltbl2.fillRect(hxcorner, hycorner, cw , (numRings * ch)-5);		// arguments are (x,y,w,h)
		rolltbl2.setColor(textcolor);
	}

	// draw a rows of gear values ----------------------------------------
	// write the values
	for ( j=(numRings-1); j>=0; j-- ){		// for each chainring
		cellpad = pad * 2;
		if (displayOrder == 1)			// selectable display order - 1 = small to large
		{
			row = (j + 1) * ch;
		}
		else							// selectable display order - 0 = large to small
		{
			row = (numRings-j) * ch;
		}
		rolltbl.drawString (rings[j], leftside + cellpad, row );
		//
		rolltbl2.drawString (rings[j], leftside + cellpad, row );

		if (rings[j] > 0 && rings[j] < 999 ){	// if we have a ring			
			for ( i=0; i<numCogs; i++){	// for each cog	
				// add a leading space
				cellpad = pad;
				outputString = "";				
				temp1 = Prollout[(j*numCogs)+i];
				if ( rolloutType == 1 ){   			// displaying metric rollouts
					temp1 = temp1 * 0.0254;
					temp1 = (Math.round(temp1 * 100)) / 100;  // round to 2 places
					if ( temp1 > 10){
						cellpad = pad * 1;
					} else {
						cellpad = pad * 2;
					}
					outputString = outputString + temp1;
					// add trailing zero
					if ( temp1 == Math.round(temp1) ){
						outputString = outputString + ".00";
					} else {
						if ( temp1 * 10 == Math.round(temp1 * 10) ){
							outputString = outputString + "0";
						}
					}
				} else {					// display english rollouts
					if ( temp1 < 100){
						cellpad = pad * 2;
					} else {
						cellpad = pad;
					}
					outputString = outputString + temp1;
					// add trailing zero
					temp = Math.round(temp1);
					if ( temp1 == temp ){
						outputString = outputString + ".0";
					}
				}
				if (displayOrder == 1)	// selectable display order - 1 = small to large
				{
					rolltbl.drawString (outputString, leftside + cw + (i * cw) + cellpad, row);
					//
					rolltbl2.drawString (outputString, leftside + cw + (i * cw) + cellpad, row);
				}
				else	// selectable display order - 1 = large to small
				{
					rolltbl.drawString (outputString, leftside + ((numCogs-i) * cw) + cellpad, row);
					//
					rolltbl2.drawString (outputString, leftside + ((numCogs-i) * cw) + cellpad, row);
				}
			}
		}
	}
	rolltbl.paint();
	//
	rolltbl2.paint();
}
