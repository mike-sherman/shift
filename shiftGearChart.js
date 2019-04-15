// shift.html - gear inch chart
//
// Copyright (c) 2004-2017 Michael Sherman. All rights reserved.
//
// LICENSE: LGPL
// 
// see shift.js for revision history


function gearChartG()
{
	var cw = 45;	// grid cell width   -   GRID CELLS 45 wide X 20
	var ch = 20;	// grid cell height
	var divw = 600;	// width of our <dev>
	var leftside;	// where the left side of the table is
	var pad = 8; 	// padding on the left of number cells ~ 1 character width
	var cellpad;	// variable padding
	var row;		// used to hold y coord for current row
	var outputString;
	
	grtbl.setPrintable(true);
	grtbl.clear();
	grtbl.setColor(textcolor);
	grtbl.setStroke(1);
	//
	grtbl2.setPrintable(true);
	grtbl2.clear();
	grtbl2.setColor(textcolor);
	grtbl2.setStroke(1);

	with(Math)
	leftside = (divw -((numCogs + 1 ) * cw ))/2;
  
	// print the cog numbers------------------------------------
	grtbl.setColor(greytext);
	//
	grtbl2.setColor(greytext);

	row = ch;
	cellpad = pad * 2;
	if (displayOrder == 1)	// selectable display order
	{
		for ( i=0; i<numCogs; i++){
			tmps = numCogs - i;
			grtbl.drawString ("(" + tmps + ")", leftside + cw + (i * cw) + cellpad, row );
			//
			grtbl2.drawString ("(" + tmps + ")", leftside + cw + (i * cw) + cellpad, row );
		}
	}
	else
	{
		for ( i=0; i<numCogs; i++){
			tmps = i + 1;
			grtbl.drawString ("(" + tmps + ")", leftside + cw + (i * cw) + cellpad, row );
			//
			grtbl2.drawString ("(" + tmps + ")", leftside + cw + (i * cw) + cellpad, row );
		}
	}
	
	// fill in the heading box ---------------------------------
	grtbl.setColor(textcolor);
	grtbl.setFont("arial", "16px", Font.PLAIN);
	grtbl.drawStringRect("Gear Inches - " + numCogs + " x " + numRings, 0,0,divw,"center")
	grtbl.setFont("arial", "14px", Font.PLAIN);   // for the rest of the page
	//
	grtbl2.setColor(textcolor);
	grtbl2.setFont("arial", "16px", Font.PLAIN);
	grtbl2.drawStringRect("Gear Inches - " + numCogs + " x " + numRings, 0,0,divw)
	grtbl2.setFont("arial", "14px", Font.PLAIN);   // for the rest of the page

	grtbl.paint();
	//
	grtbl2.paint();

	// print the cog list ---------------------------------------
	grtbl.setColor(textcolor);
	//
	grtbl2.setColor(textcolor);

	cellpad = pad * 2;
	row = ch * 2;
	if (displayOrder == 1)	// selectable display order
	{
		for ( i=0; i<numCogs; i++){
			if (i == highlightGear)
			{
				grtbl.setColor(highlight);	// highlight cog
				//
				grtbl2.setColor(highlight);
			}
			else
			{
				grtbl.setColor(textcolor);
				//
				grtbl2.setColor(textcolor);
			}
			grtbl.drawString (cogs[i], leftside + cw + (i * cw) + cellpad, row );
			grtbl.setColor(textcolor);
			//
			grtbl2.drawString (cogs[i], leftside + cw + (i * cw) + cellpad, row );
			grtbl2.setColor(textcolor);
		}
	}
	else
	{
		for ( i=numCogs-1; i>=0; i--){
			if (i == highlightGear)
			{
				grtbl.setColor(highlight);	// highlight cog
				//
				grtbl2.setColor(highlight);
			}
			else
			{
				grtbl.setColor(textcolor);
				//
				grtbl2.setColor(textcolor);
			}
			grtbl.drawString (cogs[i], leftside + cw + ((numCogs-1-i) * cw) + cellpad, row );
			grtbl.setColor(textcolor);
			//
			grtbl2.drawString (cogs[i], leftside + cw + ((numCogs-1-i) * cw) + cellpad, row );
			grtbl2.setColor(textcolor);
		}
	}
	grtbl.paint();
	//
	grtbl2.paint();
	
	// draw the lines
	grtbl.drawLine ( leftside, ch * 3, leftside + ((numCogs + 1) * cw), ch * 3 );			// horz line
	grtbl.drawLine ( leftside + cw, ch * 2, leftside + cw, (ch * 2) + ((numRings + 1) * ch) );	// vert line
	grtbl.paint();
	//
	grtbl2.drawLine ( leftside, ch * 3, leftside + ((numCogs + 1) * cw), ch * 3 );			// horz line
	grtbl2.drawLine ( leftside + cw, ch * 2, leftside + cw, (ch * 2) + ((numRings + 1) * ch) );	// vert line
	grtbl2.paint();

	// highlight block of gears
	if (highlightON = 1)		// if highlighting is turned on
		if (highlightGear != 99)	// highlighting is turned on for cogs
		{
			grtbl.setColor(highlight2);	// highlight color
			//
			grtbl2.setColor(highlight2);

			if (displayOrder == 1)	// selectable display order
			{
				var hxcorner = leftside + (cw * 3) + ((highlightGear-2) * cw) + 3;
			}
			else
			{
				var hxcorner = leftside + ((numCogs -(highlightGear)) * cw) + 3;
			}
			var hycorner = ch * 3 + 2;
			grtbl.fillRect(hxcorner, hycorner, cw , (numRings * ch)-5);		// arguments are (x,y,w,h)
			grtbl.setColor(textcolor);
			grtbl.paint();
			//
			grtbl2.fillRect(hxcorner, hycorner, cw , (numRings * ch)-5);		// arguments are (x,y,w,h)
			grtbl2.setColor(textcolor);
			grtbl2.paint();
		}
//		if (highlightRing != 99)	// highlighting is turned on for rings
//		{
//			grtbl.setColor(highlight2);	// highlight color
//			if (displayOrder == 1)	// selectable display order
//			{
//				var hxcorner = leftside + (cw * 3) + ((highlightGear-2) * cw) + 3;
//				var hycorner = ch * 3 + 2;
//			}
//			else
//			{
//				var hxcorner = leftside + ((numCogs -(highlightGear)) * cw) + 3;
//				var hycorner = ch * 3 + 2;
//			}
//			grtbl.fillRect(hxcorner, hycorner, cw , (numRings * ch)-5);		// arguments are (x,y,w,h)
//			grtbl.setColor(textcolor);
//		}
//	}

	// draw a rows of gear values ----------------------------------------
	// write the values
	for ( j=(numRings-1); j>=0; j-- )		// for each chainring
	{
		cellpad = pad * 2;
		if (displayOrder == 1)			// selectable display order - 1 = small to large
		{
			row = (ch * 3) + (j * ch ); // small ring top
		}
		else
		{
			row = (ch * 3 ) + (((numRings-1) - j) * ch );
		}

		// draw the chain ring size  ------------------------------------------
		if (j == highlightRing)		// highlighted 
		{
			grtbl.setColor(highlight);	// highlight color
			grtbl.drawString (rings[j], leftside + cellpad, row );
			grtbl.setColor(textcolor);
			//
			grtbl2.setColor(highlight);	// highlight color
			grtbl2.drawString (rings[j], leftside + cellpad, row );
			grtbl2.setColor(textcolor);
		}
		else				// not highlighted
		{
			grtbl.drawString (rings[j], leftside + cellpad, row );
			//
			grtbl2.drawString (rings[j], leftside + cellpad, row );
		}
		grtbl.paint();
		//
		grtbl2.paint();

		if (rings[j] > 0 && rings[j] < 999 )
		{	// if we have a ring			
			for ( i=0; i<numCogs; i++)			// for each cog	
			{
				// add a leading space
				cellpad = pad;
				outputString = "";
				if ( Pvalue[(j*numCogs)+i] < 100)
				{
					cellpad = pad * 2;
				}
				outputString = outputString + Pvalue[(j*numCogs)+i];
				// add trailing zero
				temp = Math.round(Pvalue[(j*numCogs)+i]);
				if ( Pvalue[(j*numCogs)+i] == temp )
				{
					outputString = outputString + ".0";
				}
				if (displayOrder == 1)	// selectable display order - 1 = small to large
				{
					grtbl.drawString (outputString, leftside + cw + (i * cw) + cellpad, row);
					//
					grtbl2.drawString (outputString, leftside + cw + (i * cw) + cellpad, row);
				}
				else	// selectable display order - 0 = large to small
				{
					grtbl.drawString (outputString, leftside + ((numCogs-i) * cw) + cellpad, row);
					//
					grtbl2.drawString (outputString, leftside + ((numCogs-i) * cw) + cellpad, row);
				}
				grtbl.paint();
				//
				grtbl2.paint();
			}
		}
	}
	grtbl.paint();
	//
	grtbl2.paint();
}

