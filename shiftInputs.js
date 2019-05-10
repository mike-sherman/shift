// shift.html interface (buttons) code
//
// Copyright (c) 2004-2017 Michael Sherman. All rights reserved.
//
// LICENSE: LGPL
// 
// see shift.js for revision history

// Cog control buttons
function cogPlus ( whichCog )
{
  // i wish i knew how to use a variable in an assignment
  switch(whichCog){
  case "cog0":
    cogs[0]++;
    break;
  case "cog1":
    if (cogs[1] == 999 ){
      cogs[1]=parseInt(cogs[0])+1;
    }else{
      cogs[1]++;
    }
    break;
  case "cog2":
    if (cogs[2] == 999 ){
      cogs[2]=parseInt(cogs[1])+1;
    }else{
      cogs[2]++;
    }
    break;
  case "cog3":
    if (cogs[3] == 999 ){
      cogs[3]=parseInt(cogs[2])+1;
    }else{
      cogs[3]++;
    }
    break;
  case "cog4":
    if (cogs[4] == 999 ){
      cogs[4]=parseInt(cogs[3])+1;
    }else{
      cogs[4]++;
    }
    break;
  case "cog5":
    if (cogs[5] == 999 ){
      cogs[5]=parseInt(cogs[4])+1;
    }else{
      cogs[5]++;
    }
    break;
  case "cog6":
    if (cogs[6] == 999 ){
      cogs[6]=parseInt(cogs[5])+1;
    }else{
      cogs[6]++;
    }
    break;
  case "cog7":
    if (cogs[7] == 999 ){
      cogs[7]=parseInt(cogs[6])+1;
    }else{
      cogs[7]++;
    }
    break;
  case "cog8":
    if (cogs[8] == 999 ){
      cogs[8]=parseInt(cogs[7])+1;
    }else{
      cogs[8]++;
    }
    break;
  case "cog9":
    if (cogs[9] == 999  ){
      cogs[9]=parseInt(cogs[8])+1;
    }else{
      cogs[9]++;
    }
    break;
  case "cog10":
    if (cogs[10] == 999  ){
      cogs[10]=parseInt(cogs[9])+1;
    }else{
      cogs[10]++;
    }
    break;
  case "cog11":
    if (cogs[11] == 999  ){
      cogs[11]=parseInt(cogs[10])+1;
    }else{
      cogs[11]++;
    }
    break;
  case "cog12":
    if (cogs[12] == 999  ){
      cogs[12]=parseInt(cogs[11])+1;
    }else{
      cogs[12]++;
    }
    break;

  // Cassette & Rings tab

  case "cogx0":
    cogs[0]++;
    break;
  case "cogx1":
    if (cogs[1] == 999 ){
      cogs[1]=parseInt(cogs[0])+1;
    }else{
      cogs[1]++;
    }
    break;
  case "cogx2":
    if (cogs[2] == 999 ){
      cogs[2]=parseInt(cogs[1])+1;
    }else{
      cogs[2]++;
    }
    break;
  case "cogx3":
    if (cogs[3] == 999 ){
      cogs[3]=parseInt(cogs[2])+1;
    }else{
      cogs[3]++;
    }
    break;
  case "cogx4":
    if (cogs[4] == 999 ){
      cogs[4]=parseInt(cogs[3])+1;
    }else{
      cogs[4]++;
    }
    break;
  case "cogx5":
    if (cogs[5] == 999 ){
      cogs[5]=parseInt(cogs[4])+1;
    }else{
      cogs[5]++;
    }
    break;
  case "cogx6":
    if (cogs[6] == 999 ){
      cogs[6]=parseInt(cogs[5])+1;
    }else{
      cogs[6]++;
    }
    break;
  case "cogx7":
    if (cogs[7] == 999 ){
      cogs[7]=parseInt(cogs[6])+1;
    }else{
      cogs[7]++;
    }
    break;
  case "cogx8":
    if (cogs[8] == 999 ){
      cogs[8]=parseInt(cogs[7])+1;
    }else{
      cogs[8]++;
    }
    break;
  case "cogx9":
    if (cogs[9] == 999  ){
      cogs[9]=parseInt(cogs[8])+1;
    }else{
      cogs[9]++;
    }
    break;
  case "cogx10":
    if (cogs[10] == 999  ){
      cogs[10]=parseInt(cogs[9])+1;
    }else{
      cogs[10]++;
    }
    break;
  case "cogx11":
    if (cogs[11] == 999  ){
      cogs[11]=parseInt(cogs[10])+1;
    }else{
      cogs[11]++;
    }
    break;
  default:
    break;
  }
   // remove duplicate cogs
   for ( i=0; i<numCogs; i++){
		if (cogs[i] == cogs[i + 1]){
			cogs[i + 1] ++;
		}
   }
   cassetteSelection = 0;	// changed something, not a stock cassette
   updateOutput();
}

function cogMinus ( whichCog )
{
  switch (whichCog){
  case "cog0":
    if (cogs[0] > 0 && cogs[0] < 999){
      cogs[0]--;
    }
    break;
  case "cog1":
    if (cogs[1] > 0 && cogs[1] < 999){
      cogs[1]--;
    }
    break;
  case "cog2":
    if (cogs[2] > 0 && cogs[2] < 999){
      cogs[2]--;
    }
    break;
  case "cog3":
    if (cogs[3] > 0 && cogs[3] < 999){
      cogs[3]--;
    }
    break;
  case "cog4":
    if (cogs[4] > 0 && cogs[4] < 999){
      cogs[4]--;
    }
    break;
  case "cog5":
    if (cogs[5] > 0 && cogs[5] < 999){
      cogs[5]--;
    }
    break;
  case "cog6":
    if (cogs[6] > 0 && cogs[6] < 999){
      cogs[6]--;
    }
    break;
  case "cog7":
    if (cogs[7] > 0 && cogs[7] < 999){
      cogs[7]--;
    }
    break;
  case "cog8":
    if (cogs[8] > 0 && cogs[8] < 999){
      cogs[8]--;
    }
    break;
  case "cog9":
    if (cogs[9] > 0 && cogs[9] < 999){
      cogs[9]--;
    }
    break;
  case "cog10":
    if (cogs[10] > 0 && cogs[10] < 999){
      cogs[10]--;
    }
    break;
  case "cog11":
    if (cogs[11] > 0 && cogs[11] < 999){
      cogs[11]--;
    }
    break;
  case "cog12":
    if (cogs[12] > 0 && cogs[12] < 999){
      cogs[12]--;
    }
    break;

  // Cassette & Rings tab

  case "cogx0":
    if (cogs[0] > 0 && cogs[0] < 999){
      cogs[0]--;
    }
    break;
  case "cogx1":
    if (cogs[1] > 0 && cogs[1] < 999){
      cogs[1]--;
    }
    break;
  case "cogx2":
    if (cogs[2] > 0 && cogs[2] < 999){
      cogs[2]--;
    }
    break;
  case "cogx3":
    if (cogs[3] > 0 && cogs[3] < 999){
      cogs[3]--;
    }
    break;
  case "cogx4":
    if (cogs[4] > 0 && cogs[4] < 999){
      cogs[4]--;
    }
    break;
  case "cogx5":
    if (cogs[5] > 0 && cogs[5] < 999){
      cogs[5]--;
    }
    break;
  case "cogx6":
    if (cogs[6] > 0 && cogs[6] < 999){
      cogs[6]--;
    }
    break;
  case "cogx7":
    if (cogs[7] > 0 && cogs[7] < 999){
      cogs[7]--;
    }
    break;
  case "cogx8":
    if (cogs[8] > 0 && cogs[8] < 999){
      cogs[8]--;
    }
    break;
  case "cogx9":
    if (cogs[9] > 0 && cogs[9] < 999){
      cogs[9]--;
    }
    break;
  case "cogx10":
    if (cogs[10] > 0 && cogs[10] < 999){
      cogs[10]--;
    }
    break;
  case "cogx11":
    if (cogs[11] > 0 && cogs[11] < 999){
      cogs[11]--;
    }
    break;

   default:
      break;
   }
   // remove duplicate cogs
   for ( i=numCogs; i>0; i--){
		if (cogs[i] == cogs[i - 1]){
			cogs[i - 1] --;
		}
   }
   cassetteSelection = 0;	// changed something, not a stock cassette
   updateOutput();
}

function cogX ( whichCog )
{
   switch (whichCog){
   case "cog0":
      cogs[0]=999;
      break;
   case "cog1":
      cogs[1]=999;
      break;
   case "cog2":
      cogs[2]=999;
      break;
   case "cog3":
      cogs[3]=999;
      break;
   case "cog4":
      cogs[4]=999;
      break;
   case "cog5":
      cogs[5]=999;
      break;
   case "cog6":
      cogs[6]=999;
      break;
   case "cog7":
      cogs[7]=999;
      break;
   case "cog8":
      cogs[8]=999;
      break;
   case "cog9":
      cogs[9]=999;
      break;
   case "cog10":
      cogs[10]=999;
      break;
   case "cog11":
      cogs[11]=999;
      break;
   case "cog12":
      cogs[12]=999;
      break;

// Cassette & Rings tab

  case "cogx0":
    cogs[0]=999;
    break;
  case "cogx1":
    cogs[1]=999;
    break;
  case "cogx2":
    cogs[2]=999;
    break;
  case "cogx3":
    cogs[3]=999;
    break;
  case "cogx4":
    cogs[4]=999;
    break;
  case "cogx5":
    cogs[5]=999;
    break;
  case "cogx6":
    cogs[6]=999;
    break;
  case "cogx7":
    cogs[7]=999;
    break;
  case "cogx8":
    cogs[8]=999;
    break;
  case "cogx9":
    cogs[9]=999;
    break;
  case "cogx10":
    cogs[10]=999;
    break;
  case "cogx11":
    cogs[11]=999;
    break;

   default:
      break;
   }
   cassetteSelection = 0;	// changed something, not a stock cassette
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


