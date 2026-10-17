// shift.html interface (buttons) code
//
// Copyright (c) 2004-2017 Michael Sherman. All rights reserved.
//
// LICENSE: LGPL
// 
// see shift.js for revision history

// Cog control buttons
// whichCog is "cog0" .. "cog13" on the Cassette tab or "cogx0" .. "cogx13" on
// the Cassette & Rings tab - both tabs work on the same cogs[] array
function cogNumber ( whichCog )
{
  return parseInt(whichCog.replace(/^cogx?/, ""));
}

function cogPlus ( whichCog )
{
  var n = cogNumber(whichCog);
  if (hubActive() || isNaN(n)) return;	// hub ratios are typed in, not stepped
  if (n == 0){
    cogs[0]++;
  }else if (cogs[n] == 999 ){
    cogs[n]=parseInt(cogs[n-1])+1;
  }else{
    cogs[n]++;
  }
   // remove duplicate cogs
   for ( i=0; i<numCogs; i++){
		if (cogs[i] == cogs[i + 1]){
			cogs[i + 1] ++;
		}
   }
   cassetteSelection = 0;	// changed something, not a stock cassette
   proposedTitle = "Custom";
   setTitle();
   updateOutput();
}

function cogMinus ( whichCog )
{
  var n = cogNumber(whichCog);
  if (hubActive() || isNaN(n)) return;	// hub ratios are typed in, not stepped
  if (cogs[n] > 0 && cogs[n] < 999){
    cogs[n]--;
  }
   // remove duplicate cogs
   for ( i=numCogs; i>0; i--){
		if (cogs[i] == cogs[i - 1]){
			cogs[i - 1] --;
		}
   }
   cassetteSelection = 0;	// changed something, not a stock cassette
   proposedTitle = "Custom";
   setTitle();
   updateOutput();
}

function cogX ( whichCog )
{
  var n = cogNumber(whichCog);
  if (isNaN(n)) return;
  if (hubActive()){
    // drop one gear from the hub - keep at least one
    if (n < hubRatios.length && hubRatios.length > 1){
      hubRatios.splice(n, 1);
      hubIndex = HUB_CUSTOM;	// changed something, not a stock hub
      proposedTitle = "Custom hub";
    }
  }else{
    cogs[n]=999;
    cassetteSelection = 0;	// changed something, not a stock cassette
    proposedTitle = "Custom";
  }
   setTitle();
   updateOutput();
}

// ring control buttons
function ringPlus ( whichRing )
{
   switch(whichRing){
   case "ring0":
      rings[0]++;
      break;
   case "ring1":
      if (rings[1] == 999){
         rings[1] = parseInt(rings[0])+1;
      }else{
         rings[1]++;
      }
      break;
   case "ring2":
      if (rings[2] == 999){
         rings[2] = parseInt(rings[1])+1;
      }else{
         rings[2]++;
      }
      break;

  // Cassette & Rings tab

   case "ringx0":
      rings[0]++;
      break;
   case "ringx1":
      if (rings[1] == 999){
         rings[1] = parseInt(rings[0])+1;
      }else{
         rings[1]++;
      }
      break;
   case "ringx2":
      if (rings[2] == 999){
         rings[2] = parseInt(rings[1])+1;
      }else{
         rings[2]++;
      }
      break;

   default:
      break;
   }
   updateOutput();
}

function ringMinus ( whichRing )
{
   switch(whichRing){
   case "ring0":
      if (rings[0] > 0 && rings[0] < 999){
         rings[0]--;
      }
      break;
   case "ring1":
      if (rings[1] > 0 && rings[1] < 999){
         rings[1]--;
      }
      break;
   case "ring2":  // there's a bug here!
      if (rings[2] > 0 && rings[2] < 999){
         rings[2]--;
      }
      break;

      // Cassette & Rings tab
   case "ringx0":
      if (rings[0] > 0 && rings[0] < 999){
         rings[0]--;
      }
      break;
   case "ringx1":
      if (rings[1] > 0 && rings[1] < 999){
         rings[1]--;
      }
      break;
   case "ringx2":  // there's a bug here!
      if (rings[2] > 0 && rings[2] < 999){
         rings[2]--;
      }
      break;

   default:
      break;
   }
   updateOutput();
}

function ringX ( whichRing )
{
   switch(whichRing){
   case "ring0":
      rings[0]=999;
      break;
   case "ring1":
      rings[1]=999;
      break;
   case "ring2":
      rings[2]=999;
      break;

      // Cassette & Rings tab

   case "ringx0":
      rings[0]=999;
      break;
   case "ringx1":
      rings[1]=999;
      break;
   case "ringx2":
      rings[2]=999;
      break;


   default:
      break;
   }
   updateOutput();
}

function rpmMinus()
{
  RPM--;
  updateOutput();
  //document.mainForm.debugarea.value = "RPM - 1"
}

function rpmPlus()
{
  RPM++;
  updateOutput();
  //document.mainForm.debugarea.value = "RPM + 1"
}


function lrpmMinus()	// rpm/speed range table
{
  lRPM--;
  updateOutput();
  RPMrangeCheck();
}

function lrpmPlus()	// rpm/speed range table
{
  lRPM++;
  updateOutput();
  RPMrangeCheck();
}

function hrpmMinus()	// rpm/speed range table
{
  hRPM--;
  updateOutput();
  RPMrangeCheck();
}

function hrpmPlus()	// rpm/speed range table
{
  hRPM++;
  updateOutput();
  RPMrangeCheck();
}


