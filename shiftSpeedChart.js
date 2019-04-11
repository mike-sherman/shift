// shift.html - speed range chart
//
// Copyright (c) 2004-2017 Michael Sherman. All rights reserved.
//
// LICENSE: LGPL
// 
// see shift.js for revision history

function speedRangeTableG()
{
	var rowheight = 8;	// height of each row - keep it an even number
	var topline = 25;	// top line of grid - pixels from top of canvas
	var leftedge = 0;	// left edge of grid - pixels from left of canvas - FIXME - scaling error if not 0
	var canvas = 800;	// width of canvas
	var line = 25;		// the line we are working on - grid drawn top to bottom, then data drawn bottom to top
	var minspeed = 0;	// lowest speed displayed - mph - LEAVE IT AT ZERO
	var maxspeed = 0;	// highest speed displayed - mph
	var mmaxspeed = 0;	// highest speed displayed - kph

	var speedgrid = 5;	// vert grid spacing - mph
	var spdgrdspace = 0;	// spacing of speed grid lines
	var lowposition = 0;	// canvas position for low speed
	var speedlen = 0;	// length of the speed bar
	var fastest = 0;	// fastest speed we need to display
	
	var l;		// gear size values
	var j;
	var i2;		// for sorting
	var j2;

	speedrtbl.setPrintable(true);
	speedrtbl.clear();
	speedrtbl.setColor(textcolor);
	speedrtbl.setStroke(1);
	speedrtbl.setFont("arial", "14px", Font.PLAIN);
	//
	speedrtbl2.setPrintable(true);
	speedrtbl2.clear();
	speedrtbl2.setColor(textcolor);
	speedrtbl2.setStroke(1);
	speedrtbl2.setFont("arial", "14px", Font.PLAIN);
	

	with(Math)
	document.mainForm.lRPM.value = lRPM     // update display
	document.mainForm.lRPM2.value = lRPM
	document.mainForm.hRPM.value = hRPM
	document.mainForm.hRPM2.value = hRPM
		
	// check the selected speed table type ---------------------
	if ( document.mainForm.speedRangeButton[0].checked == true )
	{
		speedRangeType = 0;  // mph
		//document.mainForm.debugarea.value = "speed in mph"
	} else {
		speedRangeType = 1;  // kph
		//document.mainForm.debugarea.value = "speed in kph"
	}
	
	// find the fastest speed -----------------------------------
	for (j=0; j<numRings; j++)	// for each ring
	{
		if (rings[j] > 0 && rings[j] < 999 ){	// if we have a ring
			for ( i=numCogs-1; i>-1; i-- )	// for each cog	
			{
				if (Phspeed[(j*numCogs)+i] > fastest)
				{
					fastest = Phspeed[(j*numCogs)+i];
				}
			}
		}
	}
	maxspeed = 10 * (Math.round(fastest / 10));
	if (maxspeed < fastest)
	{
		maxspeed = maxspeed + speedgrid;
	}
	//document.mainForm.debugarea.value="fastest = " + fastest + " - maxspeed = " + maxspeed;
	// scale the grid
	pixpermph = Math.round((canvas - leftedge)/(maxspeed - minspeed));

	// draw the grid -------------------------------------------
	
	// draw horizontal lines -----------------------------------
	line = topline;
	speedrtbl.setStroke(1);
	speedrtbl.drawLine(leftedge,line,canvas,line);	// top
	//
	speedrtbl2.setStroke(1);
	speedrtbl2.drawLine(leftedge,line,canvas,line);	// top


	for (j=0; j<numRings; j++)
	{
		for ( i=numCogs-1; i>-1; i-- ){	// for each cog
			line = line + rowheight;
			if (showgrid != "hide")
			{
				speedrtbl.drawLine(leftedge,line,canvas,line);	// one for each gear
				//
				speedrtbl2.drawLine(leftedge,line,canvas,line);	// one for each gear
			}
		}
	}
	line = line + rowheight;
	speedrtbl.drawLine(leftedge,line,canvas,line);	// bottom
	//
	speedrtbl2.drawLine(leftedge,line,canvas,line);	// bottom
	
	
	// draw vertical grid -----------------------------------
	// left side of grid
	speedrtbl.drawLine(leftedge,topline,leftedge, topline+(numRings*numCogs*rowheight)+rowheight);
	//
	speedrtbl2.drawLine(leftedge,topline,leftedge, topline+(numRings*numCogs*rowheight)+rowheight);

	j = minspeed;	// should be 0
	speedrtbl.drawString (j, leftedge-5, 0);	// label
	//
	speedrtbl2.drawString (j, leftedge-5, 0);	// label
	// draw the vertical (speed) lines
	if (speedRangeType == 0) 	// mph
	{
		//spdgrdspace = Math.round(((canvas-leftedge)/(maxspeed-minspeed)) * speedgrid);
		spdgrdspace = Math.round(pixpermph * speedgrid);
	} else {					// km/h
		spdgrdspace = Math.round(((canvas-leftedge)/(((maxspeed  * 1.609344)*10)/10)) * speedgrid);
		//mmaxspeed = (maxspeed  * 1.609344)*10)/10;
	}
	j = j + speedgrid;
	l = leftedge + spdgrdspace;	
	while (l < canvas)   // km/h - mph lines
	{
		speedrtbl.drawLine(l,topline,l,topline+(numRings*numCogs*rowheight)+rowheight);			
		speedrtbl.drawString (j, l-10, 0);	// label
		//
		speedrtbl2.drawLine(l,topline,l,topline+(numRings*numCogs*rowheight)+rowheight);			
		speedrtbl2.drawString (j, l-10, 0);	// label
		l = l + spdgrdspace;
		j = j + speedgrid;
	}
	speedrtbl.drawString (j, l-15, 0);	// label - on kph usually hangs off the edge - should I remove?
	//
	speedrtbl2.drawString (j, l-15, 0);	// label - on kph usually hangs off the edge - should I remove?

	// right side of grid
	speedrtbl.drawLine(canvas,topline,canvas,topline+(numRings*numCogs*rowheight)+rowheight);
	//
	speedrtbl2.drawLine(canvas,topline,canvas,topline+(numRings*numCogs*rowheight)+rowheight);


	// now draw the bars -----------------------------------
	line = line - rowheight; // back up to bottom line
	if(sortgears == "no")	// unsorted display
	{
		//   for each chainring	
		for (j=0; j<numRings; j++)	// for each ring
		{
			if (rings[j] > 0 && rings[j] < 999 )	// if we have a ring
			{
				for ( i=numCogs-1; i>-1; i-- )	// for each cog	
				{
					with(Math)
					lowposition = Math.round(Plspeed[(j*numCogs)+i] * pixpermph);	// x position for low speed end of bar
					speedlen = Math.round(Phspeed[(j*numCogs)+i] * pixpermph)-lowposition;	// len of bar
					if (j==0) // first row - small chainring - red
					{
						if (i == highlightGear)
						{
							speedrtbl.setColor(highlight2);	// highlight cog
							//
							speedrtbl2.setColor(highlight2);	// highlight cog
						}
						else
						{
							speedrtbl.setColor(red);
							//
							speedrtbl2.setColor(red);
						}
						speedrtbl.fillRect(lowposition,(line-(rowheight/2))+1,speedlen,rowheight-2);
						speedrtbl.drawString (cogs[i], lowposition-20,line-rowheight-5);	// label
						//
						speedrtbl2.fillRect(lowposition,(line-(rowheight/2))+1,speedlen,rowheight-2);
						speedrtbl2.drawString (cogs[i], lowposition-20,line-rowheight-5);	// label
					}
					if (j==1) //  second row - black
					{
						if (i == highlightGear)
						{
							speedrtbl.setColor(highlight2);	// highlight cog
							//
							speedrtbl2.setColor(highlight2);	// highlight cog
						}
						else
						{
							speedrtbl.setColor(black);
							//
							speedrtbl2.setColor(black);
						}
						speedrtbl.fillRect(lowposition,(line-(rowheight/2))+1,speedlen,rowheight-2);
						speedrtbl.drawString (cogs[i], lowposition-20,line-rowheight-5);	// label
						//
						speedrtbl2.fillRect(lowposition,(line-(rowheight/2))+1,speedlen,rowheight-2);
						speedrtbl2.drawString (cogs[i], lowposition-20,line-rowheight-5);	// label
					}
					if (j==2) // third row - was orange
					{
						if (i == highlightGear)
						{
							speedrtbl.setColor(highlight2);	// highlight cog
							//
							speedrtbl2.setColor(highlight2);	// highlight cog
						}
						else
						{
							speedrtbl.setColor(blue);
							//
							speedrtbl2.setColor(blue);
						}
						speedrtbl.fillRect(lowposition,(line-(rowheight/2))+1,speedlen,rowheight-2);
						speedrtbl.drawString (cogs[i], lowposition-20,line-rowheight-5);	// label
						//
						speedrtbl2.fillRect(lowposition,(line-(rowheight/2))+1,speedlen,rowheight-2);
						speedrtbl2.drawString (cogs[i], lowposition-20,line-rowheight-5);	// label
					}
					line = line - rowheight;
				}	// end of for each cog
			}	// end of if we have a ring
		}	// end of for each ring
	}	// end of unsorted display
	else
	{	// start of sorted display
		j = 0;	// smallest ring on triple, or only ring
		if (numRings == 1 || numRings == 3 )	//  if there are 3 rings only sort the largest two
		{
			for ( i=numCogs-1; i>-1; i-- )	// for each cog
			{
				with(Math)
				lowposition = Math.round(Plspeed[(j*numCogs)+i] * pixpermph);	// x position for low speed end of bar
				speedlen = Math.round(Phspeed[(j*numCogs)+i] * pixpermph)-lowposition;	// len of bar
				if (i == highlightGear)
				{
					speedrtbl.setColor(highlight2);	// highlight cog
					//
					speedrtbl2.setColor(highlight2);	// highlight cog
				}
				else
				{
					speedrtbl.setColor(red);
					//
					speedrtbl2.setColor(red);
				}
				speedrtbl.fillRect(lowposition,(line-(rowheight/2))+1,speedlen,rowheight-2);
				speedrtbl.drawString (cogs[i], lowposition-20,line-rowheight-5);	// label
				//
				speedrtbl2.fillRect(lowposition,(line-(rowheight/2))+1,speedlen,rowheight-2);
				speedrtbl2.drawString (cogs[i], lowposition-20,line-rowheight-5);	// label
				line = line - rowheight;
			}
			j++;
		}
		if (numRings == 2 || numRings == 3 )	// for 2 and 3 chainrings
		{
			// now the two main rings
			j2 = j+1;		// big ring
			i = numCogs-1;	// pointer to speeds on small ring
			i2 = i;			// pointer to speeds on big ring
			while (i2 > -1)	// while we're not done with the cog for the big ring
			{
				// while gears on small ring lower than next large ring gear
				while ((Plspeed[(j*numCogs)+i] <= Plspeed[(j2*numCogs)+i2]) && i >= 0)
				{
					// display cogs from smaller ring
					with(Math)
					lowposition = Math.round(Plspeed[(j*numCogs)+i] * pixpermph);	// x position for low speed end of bar
					speedlen = Math.round(Phspeed[(j*numCogs)+i] * pixpermph)-lowposition;	// len of bar
					if (numRings > 2)	// with 3 chain rings, smaller one is black
					{
						if (i == highlightGear)
						{
							speedrtbl.setColor(highlight2);	// highlight cog
							//
							speedrtbl2.setColor(highlight2);	// highlight cog
						}
						else
						{
							speedrtbl.setColor(black);
							//
							speedrtbl2.setColor(black);
						}
					} 
					else	// with 2 chain rings, the smaller one is black
					{
						if (i == highlightGear)
						{
							speedrtbl.setColor(highlight2);	// highlight cog
							//
							speedrtbl2.setColor(highlight2);	// highlight cog
						}
						else
						{
							speedrtbl.setColor(red);
							//
							speedrtbl2.setColor(red);
						}
					}
					speedrtbl.fillRect(lowposition,(line-(rowheight/2))+1,speedlen,rowheight-2);
					speedrtbl.drawString (cogs[i], lowposition-20,line-rowheight-5);	// label
					//
					speedrtbl2.fillRect(lowposition,(line-(rowheight/2))+1,speedlen,rowheight-2);
					speedrtbl2.drawString (cogs[i], lowposition-20,line-rowheight-5);	// label
					line = line - rowheight;
					if (i > -1)		// not to end of this group of cogs
					{
						i--;
					}
				}
				while ( (Plspeed[(j2*numCogs)+i2] < Plspeed[(j*numCogs)+i]) || ( i == -1 && i2 > -1) )
				{
					// display cogs from larger (3rd) ring, it is blue
					with(Math)
					lowposition = Math.round(Plspeed[(j2*numCogs)+i2] * pixpermph);	// x position for low speed end of bar
					speedlen = Math.round(Phspeed[(j2*numCogs)+i2] * pixpermph)-lowposition;	// len of bar
					if (numRings > 2)
					{
						if (i2 == highlightGear)
						{
							speedrtbl.setColor(highlight2);	// highlight cog
							//
							speedrtbl2.setColor(highlight2);	// highlight cog
						}
						else
						{
							speedrtbl.setColor(blue);
							//
							speedrtbl2.setColor(blue);
						}
					}
					else
					{
						if (i2 == highlightGear)
						{
							speedrtbl.setColor(highlight2);	// highlight cog
							//
							speedrtbl2.setColor(highlight2);	// highlight cog
						}
						else
						{
							speedrtbl.setColor(black);
							//
							speedrtbl2.setColor(black);
						}
					}
					speedrtbl.fillRect(lowposition,(line-(rowheight/2))+1,speedlen,rowheight-2);
					speedrtbl.drawString (cogs[i2], lowposition-20,line-rowheight-5);	// label
					//
					speedrtbl2.fillRect(lowposition,(line-(rowheight/2))+1,speedlen,rowheight-2);
					speedrtbl2.drawString (cogs[i2], lowposition-20,line-rowheight-5);	// label
					line = line - rowheight;
					if ( i2 > -1 )
					{
						i2--;
					}
				}
			} // end of while
		} // end of else not 3 or 1 chain rings
	}	// end of sorted display
	speedrtbl.paint();
	//
	speedrtbl2.paint();
}
