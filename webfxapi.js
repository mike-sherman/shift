/*
 *	This script is used for WebFX Api pages
 *
 *	It defines one funtion and includes helptip.js, helptip.css and webfxapi.css
 */

document.write( "<script type='text/javascript' src='helptip.js'><\/script>" );
document.write( "<link type='text/css' rel='stylesheet' href='helptip.css' />" );
document.write( "<link type='text/css' rel='stylesheet' href='webfxapi.css' />" );

function toggleMethodArguments( e, a ) {
	if ( a && a.nextSibling &&
		typeof a.nextSibling.innerHTML != "undefined" &&
		typeof showHelpTip != "undefined" ) {
	
		showHelpTip( e, a.nextSibling.innerHTML );
		
	}
}
  