// shift.html - Sheldon's gain ratio table
//
// Copyright (c) 2004-2017 Michael Sherman. All rights reserved.
//
// LICENSE: LGPL
// 
// see shift.js for revision history


function sheldonRatiosG()
{
	var cw = 45;	// grid cell width   -   GRID CELLS 45 wide X 20
	var ch = 20;	// grid cell height
	var divw = 600;	// width of our <dev>
	var leftside;	// where the left side of the table is
	var pad = 8; 	// padding on the left of number cells ~ 1 character width
	var cellpad;	// variable padding
	var row;		// used to hold y coord for current row
	var outputString;
	
//	gaintbl.setPrintable(true);
	gaintbl.clear();
	gaintbl.setColor(textcolor);
	gaintbl.setStroke(1);
	gaintbl.setFont("arial", "14px", Font.PLAIN);
	//
	gaintbl2.clear();
	gaintbl2.setColor(textcolor);
	gaintbl2.setStroke(1);
	gaintbl2.setFont("arial", "14px", Font.PLAIN);

	with(Math)

	// print the cog numbers-----------------------------------
	leftside = (divw -((numCogs + 1 ) * cw ))/2;
	cellpad = pad * 2;
	row = 0;
	for ( i=0; i<numCogs; i++)
	{
		if (displayOrder == 1)	// selectable display order - 1 = small to large
		{
			if (i == highlightGear)
			{
				gaintbl.setColor(highlight);	// highlight cog
				//
				gaintbl2.setColor(highlight);
			}
			else
			{
				gaintbl.setColor(textcolor);
				//
				gaintbl2.setColor(textcolor);
			}
			gaintbl.drawString (cogs[i], leftside + cw + (i * cw) + cellpad, row );
			gaintbl.setColor(textcolor);
			//
			gaintbl2.drawString (cogs[i], leftside + cw + (i * cw) + cellpad, row );
			gaintbl2.setColor(textcolor);
		}
		else	// selectable display order - 1 = large to small
		{
			if (i == highlightGear)
			{
				gaintbl.setColor(highlight);	// highlight cog
				//
				gaintbl2.setColor(highlight);
			}
			else
			{
				gaintbl.setColor(textcolor);
				//
				gaintbl2.setColor(textcolor);
			}
			gaintbl.drawString (cogs[numCogs-1-i], leftside + cw + (i * cw) + cellpad, row );
			gaintbl.setColor(textcolor);
			//
			gaintbl2.drawString (cogs[numCogs-1-i], leftside + cw + (i * cw) + cellpad, row );
			gaintbl2.setColor(textcolor);
		}
	}
	// draw the lines ----------------------------------------
	gaintbl.drawLine ( leftside, ch, leftside + ((numCogs + 1) * cw), ch );			// horz line
	gaintbl.drawLine ( leftside + cw, 0, leftside + cw, (numRings + 1) * ch );		// vert line
	//
	gaintbl2.drawLine ( leftside, ch, leftside + ((numCogs + 1) * cw), ch );			// horz line
	gaintbl2.drawLine ( leftside + cw, 0, leftside + cw, (numRings + 1) * ch );		// vert line

	// highlight block of gears ----------------------------------------
	if (highlightGear != 99)	// highlighting is turned on
	{
		gaintbl.setColor(highlight2);	// highlight cog
		//
		gaintbl2.setColor(highlight2);

		if (displayOrder == 1)	// selectable display order
		{
			var hxcorner = leftside + (cw * 3) + ((highlightGear-2) * cw) + 3;
		}
		else
		{
			var hxcorner = leftside + ((numCogs -(highlightGear)) * cw) + 3;
		}
		var hycorner = ch + 1;
		gaintbl.fillRect(hxcorner, hycorner, cw , (numRings * ch)-5);		// arguments are (x,y,w,h)
		gaintbl.setColor(textcolor);
		//
		gaintbl2.fillRect(hxcorner, hycorner, cw , (numRings * ch)-5);		// arguments are (x,y,w,h)
		gaintbl2.setColor(textcolor);
	}

	// draw a rows of gear values ----------------------------------------
	// write the values
	for ( j=(numRings-1); j>=0; j-- ){		// for each chainring
		cellpad = pad * 2;
		if (displayOrder == 1)			// selectable display order - 1 = small to large
		{
			row = (j + 1) * ch;
		}
		else					// selectable display order - 0 = large to small
		{
			row = (numRings-j) * ch;
		}
		gaintbl.drawString (rings[j], leftside + cellpad, row );
		//
		gaintbl2.drawString (rings[j], leftside + cellpad, row );

		if (rings[j] > 0 && rings[j] < 999 ){	// if we have a ring			
			for ( i=0; i<numCogs; i++){	// for each cog	
				// add a leading space
				cellpad = pad;
				outputString = "";
				if ( Pratio[(j*numCogs)+i] < 100){
					cellpad = pad * 2;
				}
				outputString = outputString + Pratio[(j*numCogs)+i];
				// add trailing zero
				temp = Pratio[(j*numCogs)+i];
				if ( temp == Math.round(temp) ){
					outputString = outputString + ".00";
				} else {
					if ( temp * 10 == Math.round(temp * 10) ){
						outputString = outputString + "0";
					}
				}
				if (displayOrder == 1)	// selectable display order - 1 = small to large
				{	
					gaintbl.drawString (outputString, leftside + cw + (i * cw) + cellpad, row);
					//
					gaintbl2.drawString (outputString, leftside + cw + (i * cw) + cellpad, row);
				}
				else			// selectable display order - 0 = large to small
				{
					gaintbl.drawString (outputString, leftside + ((numCogs-i) * cw) + cellpad, row);
					//
					gaintbl2.drawString (outputString, leftside + ((numCogs-i) * cw) + cellpad, row);
				}
			}
		}
	}
	gaintbl.paint();
	//
	gaintbl2.paint();
}

