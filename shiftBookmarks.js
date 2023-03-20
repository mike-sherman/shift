// shift.html - bookmarks
//
// Copyright (c) 2004-2017 Michael Sherman. All rights reserved.
//
// LICENSE: LGPL
// 
// see shift.js for revision history

// STILL EXPERIMENTING HERE
/*  DEBUG INFO
http://www.ericdlarson.com/misc/chrome_command_line_flags.html

By default, cookies are not allowed on file://. They are needed in for
testing, for example page cycler and layout tests. See bug 1157243.
--enable-file-cookies
*/

function createBookMarkString()
{
	tempTitle = pageTitle
	while (tempTitle.indexOf(" ", 0) > 0)
	{
		tempTitle = tempTitle.replace(" ", "%20");
	}
	title="Gear Calculator - " + pageTitle;
	urlString = "?R0=" + rings[0] + "&R1=" + rings[1] + "&R2=" + rings[2] + "&C0=" + cogs[0] + "&C1=" + cogs[1] + "&C2=" + cogs[2] + "&C3=" + cogs[3] + "&C4=" + cogs[4] + 	"&C5=" + cogs[5] + "&C6=" + cogs[6] + "&C7=" + cogs[7] + "&C8=" + cogs[8] + "&C9=" + cogs[9] + 	"&C10=" + cogs[10] + "&C11=" + cogs[11] + "&C12=" + cogs[12] + "&CAS=" + cassetteSelection + "&WI=" + wheelIndex + "&TI=" + tireIndex + "&DO=" + deflectOption + "&CR=" + crank + 	"&RT=" + rolloutType + "&ST=" + speedType + "&RPM=" + RPM + "&SRT=" + speedRangeType + "&lRPM=" + lRPM + "&hRMP=" + hRPM + "&G=" + showgrid + "&S=" + sortgears + "&TITLE=" + pageTitle + "&HL=" + highlightON + "&DO=" + displayOrder;
	//urlString = "";

//	url="https://mike-sherman.github.io/shift/shift.html" + urlString;
	//url="file:///home/mike/Dropbox/www/shift/6.0/shift.html" + urlString;
	url = window.location.href + urlString;

}

function bookmarkSet()		// this is the only thing here that is used
{
	createBookMarkString();

	// ------------------------------------------------------------------------------
	if (window.sidebar)  // Mozilla Firefox Bookmark - bookmarks to sidebar - a hack
	{
		window.location = url;
	} 

	// ------------------------------------------------------------------------------
	else if ( window.external )  // IE Favorite - the only one that actually allows javascript to set bookmarks
	{
		window.external.AddFavorite( url, title); 
	}

	// ------------------------------------------------------------------------------
	else if (window.opera && window.print)  // Opera Hotlist
	{
		//return true; 
		// test me
		// http://www.dynamicdrive.com/dynamicindex9/addbook.htm
		var elem = document.createElement('a');
		elem.setAttribute('href',url);
		elem.setAttribute('title',title);
		elem.setAttribute('rel','sidebar');
		elem.click();
	}

	// ------------------------------------------------------------------------------
	// chrome
	else if(window.chrome)
	{
		window.location = url;
	}

	// ------------------------------------------------------------------------------
	// anything else
	else
	{
		window.location = url;
	}
}

