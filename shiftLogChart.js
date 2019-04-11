// shift.html - semi-log chart
//
// Copyright (c) 2004-2017 Michael Sherman. All rights reserved.
//
// LICENSE: LGPL
// 
// see shift.js for revision history


function semiLogG()
{
	with(Math)
	var num1 = log(20);
	with(Math)
	var num2 = log(130);
	var line = 0;
	var l;
	var j; 			// gear size values
	var line = 25;	// where the line is in the <div> 
	var mt = 8;		// len of major tic marks
	var st = 5;		// len of small tic marks
	var r1 = 30;	// row positions  - was 30, 45, 60
	var r2 = 45;
	var r3 = 60;
  
	logtbl.setPrintable(true);
	logtbl.clear();
	logtbl.setColor(textcolor);
	logtbl.setFont("arial", "10px", Font.PLAIN);
	//
	logtbl2.setPrintable(true);
	logtbl2.clear();
	logtbl2.setColor(textcolor);
//	logtbl2.setFont("arial", "16px", Font.PLAIN);
//	logtbl2.drawStringRect("Log Chart",0,0)
	logtbl2.setFont("arial", "10px", Font.PLAIN);   // for the rest of the page

	// draw the log scale
	// the next line of the table = print a line
	logtbl.setStroke(1);
	logtbl.drawLine(0,line,800,line);
	//
	logtbl2.setStroke(1);
	logtbl2.drawLine(0,line,800,line);
	
	for (j=20; j<131; j+=10){  // label 20" to 130" gears
		with(Math)
		l = (log(j) - num1) * (w2/(num2-num1)) +1;
		logtbl.setStroke(1);
		//
		logtbl2.setStroke(1);

		// draw tick marks on the line
		logtbl.drawLine(l,line-mt,l,line);
		//
		logtbl2.drawLine(l,line-mt,l,line);

		// write the label for the log table
		logtbl.drawString(j,l,5);
		//
		logtbl2.drawString(j,l,5);
	}  
	for (j=20; j<131; j+=5){  // label the 5" points
		with(Math)
		l = (log(j) - num1) * (w2/(num2-num1)) +1;
		logtbl.setStroke(1);
		//
		logtbl2.setStroke(1);

		// draw tick marks on the line
		logtbl.drawLine(l,line-st,l,line);
		//
		logtbl2.drawLine(l,line-st,l,line);
	}  

	// now draw the gears
	//   for each chainring
	for (j=0; j<numRings; j++){
		// for each cog
		for ( i=numCogs-1; i>-1; i-- ){
			with(Math)
			l = ((log(((rings[j] / cogs[i]) * wheelSize)) - num1) * (w2/(num2-num1))) +1;
			logtbl.setStroke(2);
			//
			logtbl2.setStroke(2);

			if (j==0) // first row - small chainring - circles 
			{
				if (i == highlightGear)
				{
					logtbl.setColor(highlight2);	// highlight cog
					//
					logtbl2.setColor(highlight2);

					//logtbl.fillEllipse(l-5, r1+1, 11,11);
					logtbl.fillEllipse(l-10, r1-4, 21,21);
					//
					logtbl2.fillEllipse(l-10, r1-4, 21,21);
				}
				logtbl.setColor(red);
				logtbl.drawEllipse(l-2, r1, 2,2);
				logtbl.setStroke(1);
				logtbl.drawLine(l,r1,l,r1+10);
				//
				logtbl2.setColor(red);
				logtbl2.drawEllipse(l-2, r1, 2,2);
				logtbl2.setStroke(1);
				logtbl2.drawLine(l,r1,l,r1+10);
			}
			if (j==1) //  second row - triangles
			{
				if (i == highlightGear)
				{
					logtbl.setColor(highlight2);	// highlight cog
					//
					logtbl2.setColor(highlight2);

					//logtbl.fillEllipse(l-5, r2+1, 11,11);
					logtbl.fillEllipse(l-10, r2-4, 21,21);
					//
					logtbl2.fillEllipse(l-10, r2-4, 21,21);
				}
				logtbl.setColor(black);
				//
				logtbl2.setColor(black);

				var Xpoints = new Array(l-3, l+3, l);
				var Ypoints = new Array(r2+2, r2+2, r2-1);
				logtbl.fillPolygon(Xpoints,Ypoints);
				logtbl.setStroke(1);
				logtbl.drawLine(l,r2,l,r2+10);
				//
				logtbl2.fillPolygon(Xpoints,Ypoints);
				logtbl2.setStroke(1);
				logtbl2.drawLine(l,r2,l,r2+10);
			}
			if (j==2) // third row - squares
			{
				if (i == highlightGear)
				{
					logtbl.setColor(highlight2);	// highlight cog
					//
					logtbl2.setColor(highlight2);

					//logtbl.fillEllipse(l-5, r3+1, 11,11);
					logtbl.fillEllipse(l-10, r3-4, 21,21);
					//
					logtbl2.fillEllipse(l-10, r3-4, 21,21);
				}
				logtbl.setColor(blue);
				logtbl.drawRect(l-2, r3, 2, 2);
				logtbl.setStroke(1);
				logtbl.drawLine(l,r3,l,r3+10);
				//
				logtbl2.setColor(blue);
				logtbl2.drawRect(l-2, r3, 2, 2);
				logtbl2.setStroke(1);
				logtbl2.drawLine(l,r3,l,r3+10);
			}	
		}
	}
	logtbl.paint();
	//
	logtbl2.paint();
}
