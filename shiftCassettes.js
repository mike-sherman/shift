// this is the selectCassette function for sh ift.js
// 05/05/2009	correct cogs - sachs 13-28, 6 sp and 13-32, 7 sp
// 				SUNTOUR Perfect 6-speed freewheel w/ 14-28 gearing; 
//				cogs are 14-16-18-21-24-28
// 02/04/2010	fix duplicate cassette numbers 105 and above
//				there is no # 104
// 12/29/2010	add IRD freewheels
// 03/04/2011	SRAM X5 cassette - it's an 11-34, 9-speed cassette 
//              cogs are 11,13,15,17,20,23,26,30,34 as the cog sizes. 
//              Ken Benson <ken@bkenbenson.com>
// 12/11/2017   add new cassettes, remove redundant cassettes 
//              generated from spreadsheet
// 05/09/2019   add cassettes
//
// Copyright (c) 2004-2017 Michael Sherman. All rights reserved.
//
// LICENSE: LGPL
// 
// see sh ift.js for revision history

function selectCassette()
{
  cassetteOption = document.mainForm.cassette.options.selectedIndex;
  cassetteSelection = document.mainForm.cassette.options[document.mainForm.cassette.options.selectedIndex].value;
  setCassette();
}

function selectxCassette()
{
  cassetteOption = document.mainForm.cassettex.options.selectedIndex;
  cassetteSelection = document.mainForm.cassettex.options[document.mainForm.cassettex.options.selectedIndex].value;
  setCassette();
}


function setCassette()
{

  if ( cassetteSelection == 83 ){ // Campagnolo 9 Speed Cassette 11-21
    cassetteName = "// Campagnolo 9 Speed Cassette 11-21";
     cogs[0] = 11;
     cogs[1] = 12;
     cogs[2] = 13;
     cogs[3] = 14;
     cogs[4] = 15;
     cogs[5] = 16;
     cogs[6] = 17;
     cogs[7] = 19;
     cogs[8] = 21;
     cogs[9] = 999;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 94 ){ // Campagnolo 9 speed Cassette 11-23
    cassetteName = "Campagnolo 9 speed Cassette 11-23";
     cogs[0] = 11;
     cogs[1] = 12;
     cogs[2] = 13;
     cogs[3] = 14;
     cogs[4] = 15;
     cogs[5] = 17;
     cogs[6] = 19;
     cogs[7] = 21;
     cogs[8] = 23;
     cogs[9] = 999;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 85 ){ // Campagnolo 9 Speed Cassette 12-21
    cassetteName = "Campagnolo 9 Speed Cassette 12-21";
     cogs[0] = 12;
     cogs[1] = 13;
     cogs[2] = 14;
     cogs[3] = 15;
     cogs[4] = 16;
     cogs[5] = 17;
     cogs[6] = 18;
     cogs[7] = 19;
     cogs[8] = 21;
     cogs[9] = 999;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 95 ){ // Campagnolo 9 speed Cassette 12-23
    cassetteName = "Campagnolo 9 speed Cassette 12-23";
     cogs[0] = 12;
     cogs[1] = 13;
     cogs[2] = 14;
     cogs[3] = 15;
     cogs[4] = 16;
     cogs[5] = 17;
     cogs[6] = 19;
     cogs[7] = 21;
     cogs[8] = 23;
     cogs[9] = 999;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 96 ){ // Campagnolo 9 speed Cassette 13-23
    cassetteName = "Campagnolo 9 speed Cassette 13-23";
     cogs[0] = 13;
     cogs[1] = 14;
     cogs[2] = 15;
     cogs[3] = 16;
     cogs[4] = 17;
     cogs[5] = 18;
     cogs[6] = 19;
     cogs[7] = 21;
     cogs[8] = 23;
     cogs[9] = 999;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 88 ){ // Campagnolo 9 Speed Cassette 13-26
    cassetteName = "Campagnolo 9 Speed Cassette 13-26";
     cogs[0] = 13;
     cogs[1] = 14;
     cogs[2] = 15;
     cogs[3] = 16;
     cogs[4] = 17;
     cogs[5] = 19;
     cogs[6] = 21;
     cogs[7] = 23;
     cogs[8] = 26;
     cogs[9] = 999;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 98 ){ // Campagnolo Veloce Cassette 9 speed 13-28
    cassetteName = "Campagnolo Veloce Cassette 9 speed 13-28";
     cogs[0] = 13;
     cogs[1] = 14;
     cogs[2] = 15;
     cogs[3] = 17;
     cogs[4] = 19;
     cogs[5] = 21;
     cogs[6] = 23;
     cogs[7] = 25;
     cogs[8] = 28;
     cogs[9] = 999;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 60 ){ // Shimano 9 Speed Cassette 11-21
    cassetteName = "Shimano 9 Speed Cassette 11-21";
     cogs[0] = 11;
     cogs[1] = 12;
     cogs[2] = 13;
     cogs[3] = 14;
     cogs[4] = 15;
     cogs[5] = 16;
     cogs[6] = 17;
     cogs[7] = 19;
     cogs[8] = 21;
     cogs[9] = 999;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 61 ){ // Shimano 9 Speed Cassette 11-23
    cassetteName = "Shimano 9 Speed Cassette 11-23";
     cogs[0] = 11;
     cogs[1] = 12;
     cogs[2] = 13;
     cogs[3] = 14;
     cogs[4] = 15;
     cogs[5] = 17;
     cogs[6] = 19;
     cogs[7] = 21;
     cogs[8] = 23;
     cogs[9] = 999;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 66 ){ // Shimano 9 speed Cassette 11-32
    cassetteName = "Shimano 9 speed Cassette 11-32";
     cogs[0] = 11;
     cogs[1] = 12;
     cogs[2] = 14;
     cogs[3] = 16;
     cogs[4] = 18;
     cogs[5] = 21;
     cogs[6] = 24;
     cogs[7] = 28;
     cogs[8] = 32;
     cogs[9] = 999;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 62 ){ // Shimano 9 Speed Cassette 12-21
    cassetteName = "Shimano 9 Speed Cassette 12-21";
     cogs[0] = 12;
     cogs[1] = 13;
     cogs[2] = 14;
     cogs[3] = 15;
     cogs[4] = 16;
     cogs[5] = 17;
     cogs[6] = 18;
     cogs[7] = 19;
     cogs[8] = 21;
     cogs[9] = 999;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 63 ){ // Shimano 9 Speed Cassette 12-23
    cassetteName = "Shimano 9 Speed Cassette 12-23";
     cogs[0] = 12;
     cogs[1] = 13;
     cogs[2] = 14;
     cogs[3] = 15;
     cogs[4] = 16;
     cogs[5] = 17;
     cogs[6] = 19;
     cogs[7] = 21;
     cogs[8] = 23;
     cogs[9] = 999;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 64 ){ // Shimano 9 Speed Cassette 12-25
    cassetteName = "Shimano 9 Speed Cassette 12-25";
     cogs[0] = 12;
     cogs[1] = 13;
     cogs[2] = 14;
     cogs[3] = 15;
     cogs[4] = 17;
     cogs[5] = 19;
     cogs[6] = 21;
     cogs[7] = 23;
     cogs[8] = 25;
     cogs[9] = 999;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 65 ){ // Shimano 9 Speed Cassette 12-27
    cassetteName = "Shimano 9 Speed Cassette 12-27";
     cogs[0] = 12;
     cogs[1] = 13;
     cogs[2] = 14;
     cogs[3] = 15;
     cogs[4] = 17;
     cogs[5] = 19;
     cogs[6] = 21;
     cogs[7] = 24;
     cogs[8] = 27;
     cogs[9] = 999;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 75 ){ // Shimano 9 speed Cassette 13-23
    cassetteName = "Shimano 9 speed Cassette 13-23";
     cogs[0] = 13;
     cogs[1] = 14;
     cogs[2] = 15;
     cogs[3] = 16;
     cogs[4] = 17;
     cogs[5] = 18;
     cogs[6] = 19;
     cogs[7] = 21;
     cogs[8] = 23;
     cogs[9] = 999;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 76 ){ // Shimano 9 speed Cassette 13-25
    cassetteName = "Shimano 9 speed Cassette 13-25";
     cogs[0] = 13;
     cogs[1] = 14;
     cogs[2] = 15;
     cogs[3] = 16;
     cogs[4] = 17;
     cogs[5] = 19;
     cogs[6] = 21;
     cogs[7] = 23;
     cogs[8] = 25;
     cogs[9] = 999;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 77 ){ // Shimano 9 speed Cassette 14-25
    cassetteName = "Shimano 9 speed Cassette 14-25";
     cogs[0] = 14;
     cogs[1] = 15;
     cogs[2] = 16;
     cogs[3] = 17;
     cogs[4] = 18;
     cogs[5] = 19;
     cogs[6] = 21;
     cogs[7] = 23;
     cogs[8] = 25;
     cogs[9] = 999;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 59 ){ // Shimano 9sp Mega 9 Cassette 12-34
    cassetteName = "Shimano 9sp Mega 9 Cassette 12-34";
     cogs[0] = 12;
     cogs[1] = 14;
     cogs[2] = 16;
     cogs[3] = 18;
     cogs[4] = 20;
     cogs[5] = 23;
     cogs[6] = 26;
     cogs[7] = 30;
     cogs[8] = 34;
     cogs[9] = 999;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 144 ){ // Shimano HG50 9 speed Cassette 11-25
    cassetteName = "Shimano HG50 9 speed Cassette 11-25";
     cogs[0] = 11;
     cogs[1] = 12;
     cogs[2] = 13;
     cogs[3] = 15;
     cogs[4] = 17;
     cogs[5] = 19;
     cogs[6] = 21;
     cogs[7] = 23;
     cogs[8] = 25;
     cogs[9] = 999;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 146 ){ // Shimano HG50 9 speed Cassette 11-30
    cassetteName = "Shimano HG50 9 speed Cassette 11-30";
     cogs[0] = 11;
     cogs[1] = 12;
     cogs[2] = 14;
     cogs[3] = 16;
     cogs[4] = 18;
     cogs[5] = 20;
     cogs[6] = 23;
     cogs[7] = 26;
     cogs[8] = 30;
     cogs[9] = 999;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 68 ){ // Shimano M750 9 speed Cassette 11-34
    cassetteName = "Shimano M750 9 speed Cassette 11-34";
     cogs[0] = 11;
     cogs[1] = 13;
     cogs[2] = 15;
     cogs[3] = 17;
     cogs[4] = 20;
     cogs[5] = 23;
     cogs[6] = 26;
     cogs[7] = 30;
     cogs[8] = 34;
     cogs[9] = 999;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 56 ){ // SRAM 7.0 9 Speed Cassette 11-32
    cassetteName = "SRAM 7.0 9 Speed Cassette 11-32";
     cogs[0] = 11;
     cogs[1] = 12;
     cogs[2] = 14;
     cogs[3] = 16;
     cogs[4] = 18;
     cogs[5] = 21;
     cogs[6] = 24;
     cogs[7] = 28;
     cogs[8] = 32;
     cogs[9] = 999;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 142 ){ // SRAM X5 9 Speed Cassette 11-34
    cassetteName = "SRAM X5 9 Speed Cassette 11-34";
     cogs[0] = 11;
     cogs[1] = 13;
     cogs[2] = 15;
     cogs[3] = 17;
     cogs[4] = 20;
     cogs[5] = 23;
     cogs[6] = 26;
     cogs[7] = 30;
     cogs[8] = 34;
     cogs[9] = 999;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 99 ){ // Campagnolo 10 speed Cassette 11-21
    cassetteName = "Campagnolo 10 speed Cassette 11-21";
     cogs[0] = 11;
     cogs[1] = 12;
     cogs[2] = 13;
     cogs[3] = 14;
     cogs[4] = 15;
     cogs[5] = 16;
     cogs[6] = 17;
     cogs[7] = 18;
     cogs[8] = 19;
     cogs[9] = 21;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 100 ){ // Campagnolo 10 speed Cassette 11-23
    cassetteName = "Campagnolo 10 speed Cassette 11-23";
     cogs[0] = 11;
     cogs[1] = 12;
     cogs[2] = 13;
     cogs[3] = 14;
     cogs[4] = 15;
     cogs[5] = 16;
     cogs[6] = 17;
     cogs[7] = 19;
     cogs[8] = 21;
     cogs[9] = 23;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 101 ){ // Campagnolo 10 speed Cassette 12-25
    cassetteName = "Campagnolo 10 speed Cassette 12-25";
     cogs[0] = 12;
     cogs[1] = 13;
     cogs[2] = 14;
     cogs[3] = 15;
     cogs[4] = 16;
     cogs[5] = 17;
     cogs[6] = 19;
     cogs[7] = 21;
     cogs[8] = 23;
     cogs[9] = 25;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 102 ){ // Campagnolo 10 speed Cassette 13-26
    cassetteName = "Campagnolo 10 speed Cassette 13-26";
     cogs[0] = 13;
     cogs[1] = 14;
     cogs[2] = 15;
     cogs[3] = 16;
     cogs[4] = 17;
     cogs[5] = 18;
     cogs[6] = 19;
     cogs[7] = 21;
     cogs[8] = 23;
     cogs[9] = 26;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 149 ){ // Campagnolo 10 speed Cassette 12-27
    cassetteName = "Campagnolo 10 speed Cassette 12-27";
     cogs[0] = 12;
     cogs[1] = 13;
     cogs[2] = 14;
     cogs[3] = 15;
     cogs[4] = 17;
     cogs[5] = 19;
     cogs[6] = 21;
     cogs[7] = 23;
     cogs[8] = 25;
     cogs[9] = 27;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 103 ){ // Campagnolo 10 speed Cassette 13-29
    cassetteName = "Campagnolo 10 speed Cassette 13-29";
     cogs[0] = 13;
     cogs[1] = 14;
     cogs[2] = 15;
     cogs[3] = 16;
     cogs[4] = 17;
     cogs[5] = 19;
     cogs[6] = 21;
     cogs[7] = 23;
     cogs[8] = 26;
     cogs[9] = 29;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 148 ){ // Campagnolo 10 speed Cassette 12-30
    cassetteName = "Campagnolo 10 speed Cassette 12-30";
     cogs[0] = 12;
     cogs[1] = 13;
     cogs[2] = 14;
     cogs[3] = 15;
     cogs[4] = 17;
     cogs[5] = 19;
     cogs[6] = 21;
     cogs[7] = 24;
     cogs[8] = 27;
     cogs[9] = 30;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 150 ){ // IRD-Campag 10 speed Cassette 11-30
    cassetteName = "IRD-Campag 10 speed Cassette 11-30";
     cogs[0] = 11;
     cogs[1] = 13;
     cogs[2] = 15;
     cogs[3] = 17;
     cogs[4] = 19;
     cogs[5] = 21;
     cogs[6] = 23;
     cogs[7] = 25;
     cogs[8] = 27;
     cogs[9] = 30;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 121 ){ // Dura Ace 10 speed Cassette 11-23
    cassetteName = "Dura Ace 10 speed Cassette 11-23";
     cogs[0] = 11;
     cogs[1] = 12;
     cogs[2] = 13;
     cogs[3] = 14;
     cogs[4] = 15;
     cogs[5] = 16;
     cogs[6] = 17;
     cogs[7] = 19;
     cogs[8] = 21;
     cogs[9] = 23;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 120 ){ // Dura Ace 10 speed Cassette 12-21
    cassetteName = "Dura Ace 10 speed Cassette 12-21";
     cogs[0] = 12;
     cogs[1] = 13;
     cogs[2] = 14;
     cogs[3] = 15;
     cogs[4] = 16;
     cogs[5] = 17;
     cogs[6] = 18;
     cogs[7] = 19;
     cogs[8] = 20;
     cogs[9] = 21;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 122 ){ // Dura Ace 10 speed Cassette 12-23
    cassetteName = "Dura Ace 10 speed Cassette 12-23";
     cogs[0] = 12;
     cogs[1] = 13;
     cogs[2] = 14;
     cogs[3] = 15;
     cogs[4] = 16;
     cogs[5] = 17;
     cogs[6] = 18;
     cogs[7] = 19;
     cogs[8] = 21;
     cogs[9] = 23;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 123 ){ // Dura Ace 10 speed Cassette 12-25
    cassetteName = "Dura Ace 10 speed Cassette 12-25";
     cogs[0] = 12;
     cogs[1] = 13;
     cogs[2] = 14;
     cogs[3] = 15;
     cogs[4] = 16;
     cogs[5] = 17;
     cogs[6] = 19;
     cogs[7] = 21;
     cogs[8] = 23;
     cogs[9] = 25;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 125 ){ // Dura Ace 10 speed Cassette 12-27
    cassetteName = "Dura Ace 10 speed Cassette 12-27";
     cogs[0] = 12;
     cogs[1] = 13;
     cogs[2] = 14;
     cogs[3] = 15;
     cogs[4] = 16;
     cogs[5] = 17;
     cogs[6] = 19;
     cogs[7] = 21;
     cogs[8] = 24;
     cogs[9] = 27;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 124 ){ // Dura Ace 10 speed Cassette 13-25
    cassetteName = "Dura Ace 10 speed Cassette 13-25";
     cogs[0] = 13;
     cogs[1] = 14;
     cogs[2] = 15;
     cogs[3] = 16;
     cogs[4] = 17;
     cogs[5] = 18;
     cogs[6] = 19;
     cogs[7] = 21;
     cogs[8] = 23;
     cogs[9] = 25;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 70 ){ // Shimano 10 speed Cassette 11-27
    cassetteName = "Shimano 10 speed Cassette 11-27";
     cogs[0] = 11;
     cogs[1] = 12;
     cogs[2] = 13;
     cogs[3] = 14;
     cogs[4] = 15;
     cogs[5] = 17;
     cogs[6] = 19;
     cogs[7] = 21;
     cogs[8] = 24;
     cogs[9] = 27;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 69 ){ // Shimano 10 speed Cassette 11-28
    cassetteName = "Shimano 10 speed Cassette 11-28";
     cogs[0] = 11;
     cogs[1] = 12;
     cogs[2] = 13;
     cogs[3] = 14;
     cogs[4] = 15;
     cogs[5] = 17;
     cogs[6] = 19;
     cogs[7] = 21;
     cogs[8] = 24;
     cogs[9] = 28;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 78 ){ // Shimano 10 speed Cassette 11-32
    cassetteName = "Shimano 10 speed Cassette 11-32";
     cogs[0] = 11;
     cogs[1] = 12;
     cogs[2] = 14;
     cogs[3] = 16;
     cogs[4] = 18;
     cogs[5] = 20;
     cogs[6] = 22;
     cogs[7] = 25;
     cogs[8] = 28;
     cogs[9] = 32;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 74 ){ // Shimano 10 speed Cassette 11-34
    cassetteName = "Shimano 10 speed Cassette 11-34";
     cogs[0] = 11;
     cogs[1] = 13;
     cogs[2] = 15;
     cogs[3] = 17;
     cogs[4] = 19;
     cogs[5] = 21;
     cogs[6] = 23;
     cogs[7] = 26;
     cogs[8] = 30;
     cogs[9] = 34;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 71 ){ // Shimano 10 speed Cassette 11-25
    cassetteName = "Shimano 10 speed Cassette 11-25";
     cogs[0] = 11;
     cogs[1] = 12;
     cogs[2] = 13;
     cogs[3] = 14;
     cogs[4] = 15;
     cogs[5] = 17;
     cogs[6] = 19;
     cogs[7] = 21;
     cogs[8] = 23;
     cogs[9] = 25;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 73 ){ // Shimano 10 speed Cassette 11-36
    cassetteName = "Shimano 10 speed Cassette 11-36";
     cogs[0] = 11;
     cogs[1] = 13;
     cogs[2] = 15;
     cogs[3] = 17;
     cogs[4] = 19;
     cogs[5] = 21;
     cogs[6] = 24;
     cogs[7] = 28;
     cogs[8] = 32;
     cogs[9] = 36;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 92 ){ // SRAM 10 speed Cassette 11-25
    cassetteName = "SRAM 10 speed Cassette 11-25";
     cogs[0] = 11;
     cogs[1] = 12;
     cogs[2] = 13;
     cogs[3] = 14;
     cogs[4] = 15;
     cogs[5] = 17;
     cogs[6] = 19;
     cogs[7] = 21;
     cogs[8] = 23;
     cogs[9] = 25;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 145 ){ // SRAM 10 speed Cassette 11-26
    cassetteName = "SRAM 10 speed Cassette 11-26";
     cogs[0] = 11;
     cogs[1] = 12;
     cogs[2] = 13;
     cogs[3] = 14;
     cogs[4] = 15;
     cogs[5] = 17;
     cogs[6] = 19;
     cogs[7] = 21;
     cogs[8] = 23;
     cogs[9] = 26;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 81 ){ // SRAM 10 speed Cassette 11-28 - corrected
    cassetteName = "SRAM 10 speed Cassette 11-28 - corrected";
     cogs[0] = 11;
     cogs[1] = 12;
     cogs[2] = 13;
     cogs[3] = 14;
     cogs[4] = 15;
     cogs[5] = 17;
     cogs[6] = 19;
     cogs[7] = 22;
     cogs[8] = 25;
     cogs[9] = 28;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 91 ){ // SRAM 10 speed Cassette 11-32
    cassetteName = "SRAM 10 speed Cassette 11-32";
     cogs[0] = 11;
     cogs[1] = 12;
     cogs[2] = 14;
     cogs[3] = 15;
     cogs[4] = 17;
     cogs[5] = 19;
     cogs[6] = 22;
     cogs[7] = 25;
     cogs[8] = 28;
     cogs[9] = 32;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 84 ){ // SRAM 10 speed Cassette 11-36
    cassetteName = "SRAM 10 speed Cassette 11-36";
     cogs[0] = 11;
     cogs[1] = 13;
     cogs[2] = 15;
     cogs[3] = 17;
     cogs[4] = 19;
     cogs[5] = 22;
     cogs[6] = 25;
     cogs[7] = 28;
     cogs[8] = 32;
     cogs[9] = 36;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 93 ){ // SRAM 10 speed Cassette 12-25 - corrected
    cassetteName = "SRAM 10 speed Cassette 12-25 - corrected";
     cogs[0] = 12;
     cogs[1] = 13;
     cogs[2] = 14;
     cogs[3] = 15;
     cogs[4] = 16;
     cogs[5] = 17;
     cogs[6] = 19;
     cogs[7] = 21;
     cogs[8] = 23;
     cogs[9] = 25;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 143 ){ // SRAM 10 speed Cassette 12-28
    cassetteName = "SRAM 10 speed Cassette 12-28";
     cogs[0] = 12;
     cogs[1] = 13;
     cogs[2] = 14;
     cogs[3] = 15;
     cogs[4] = 16;
     cogs[5] = 17;
     cogs[6] = 19;
     cogs[7] = 22;
     cogs[8] = 25;
     cogs[9] = 28;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 97 ){ // SRAM 10 speed Cassette 12-32
    cassetteName = "SRAM 10 speed Cassette 12-32";
     cogs[0] = 12;
     cogs[1] = 13;
     cogs[2] = 14;
     cogs[3] = 15;
     cogs[4] = 17;
     cogs[5] = 19;
     cogs[6] = 22;
     cogs[7] = 25;
     cogs[8] = 28;
     cogs[9] = 32;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 126 ){ // Campagnolo 11 speed Cassette 11-23 - corrected
    cassetteName = "Campagnolo 11 speed Cassette 11-23 - corrected";
     cogs[0] = 11;
     cogs[1] = 12;
     cogs[2] = 13;
     cogs[3] = 14;
     cogs[4] = 15;
     cogs[5] = 16;
     cogs[6] = 17;
     cogs[7] = 18;
     cogs[8] = 19;
     cogs[9] = 21;
     cogs[10] = 23;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 127 ){ // Campagnolo 11 speed Cassette 11-25 - corrected
    cassetteName = "Campagnolo 11 speed Cassette 11-25 - corrected";
     cogs[0] = 11;
     cogs[1] = 12;
     cogs[2] = 13;
     cogs[3] = 14;
     cogs[4] = 15;
     cogs[5] = 16;
     cogs[6] = 17;
     cogs[7] = 19;
     cogs[8] = 21;
     cogs[9] = 23;
     cogs[10] = 25;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 128 ){ // Campagnolo 11 speed Cassette 12-25
    cassetteName = "Campagnolo 11 speed Cassette 12-25";
     cogs[0] = 12;
     cogs[1] = 13;
     cogs[2] = 14;
     cogs[3] = 15;
     cogs[4] = 16;
     cogs[5] = 17;
     cogs[6] = 18;
     cogs[7] = 19;
     cogs[8] = 21;
     cogs[9] = 23;
     cogs[10] = 25;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 129 ){ // Campagnolo 11 speed Cassette 12-27
    cassetteName = "Campagnolo 11 speed Cassette 12-27";
     cogs[0] = 12;
     cogs[1] = 13;
     cogs[2] = 14;
     cogs[3] = 15;
     cogs[4] = 16;
     cogs[5] = 17;
     cogs[6] = 19;
     cogs[7] = 21;
     cogs[8] = 23;
     cogs[9] = 25;
     cogs[10] = 27;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 147 ){ // Campagnolo 11 speed Cassette 11-32
    cassetteName = "Campagnolo 11 speed Cassette 11-32";
     cogs[0] = 11;
     cogs[1] = 12;
     cogs[2] = 13;
     cogs[3] = 14;
     cogs[4] = 15;
     cogs[5] = 17;
     cogs[6] = 18;
     cogs[7] = 22;
     cogs[8] = 25;
     cogs[9] = 28;
     cogs[10] = 32;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 49 ){ // Shimano 11 speed Cassette 11-25
    cassetteName = "Shimano 11 speed Cassette 11-25";
     cogs[0] = 11;
     cogs[1] = 12;
     cogs[2] = 13;
     cogs[3] = 14;
     cogs[4] = 15;
     cogs[5] = 16;
     cogs[6] = 17;
     cogs[7] = 19;
     cogs[8] = 21;
     cogs[9] = 23;
     cogs[10] = 25;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 47 ){ // Shimano 11 speed Cassette 11-28
    cassetteName = "Shimano 11 speed Cassette 11-28";
     cogs[0] = 11;
     cogs[1] = 12;
     cogs[2] = 13;
     cogs[3] = 14;
     cogs[4] = 15;
     cogs[5] = 17;
     cogs[6] = 19;
     cogs[7] = 21;
     cogs[8] = 23;
     cogs[9] = 25;
     cogs[10] = 28;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 46 ){ // Shimano 11 speed Cassette 11-30
    cassetteName = "Shimano 11 speed Cassette 11-30";
     cogs[0] = 11;
     cogs[1] = 12;
     cogs[2] = 13;
     cogs[3] = 14;
     cogs[4] = 15;
     cogs[5] = 17;
     cogs[6] = 19;
     cogs[7] = 21;
     cogs[8] = 24;
     cogs[9] = 27;
     cogs[10] = 30;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 72 ){ // Shimano 11 speed Cassette 11-40 - corrected
    cassetteName = "Shimano 11 speed Cassette 11-40 - corrected";
     cogs[0] = 11;
     cogs[1] = 13;
     cogs[2] = 15;
     cogs[3] = 17;
     cogs[4] = 19;
     cogs[5] = 21;
     cogs[6] = 24;
     cogs[7] = 27;
     cogs[8] = 31;
     cogs[9] = 35;
     cogs[10] = 40;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 79 ){ // Shimano 11 speed Cassette 11-42
    cassetteName = "Shimano 11 speed Cassette 11-42";
     cogs[0] = 11;
     cogs[1] = 13;
     cogs[2] = 15;
     cogs[3] = 17;
     cogs[4] = 19;
     cogs[5] = 21;
     cogs[6] = 24;
     cogs[7] = 28;
     cogs[8] = 32;
     cogs[9] = 37;
     cogs[10] = 42;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 80 ){ // Shimano 11 speed Cassette 11-46
    cassetteName = "Shimano 11 speed Cassette 11-46";
     cogs[0] = 11;
     cogs[1] = 13;
     cogs[2] = 15;
     cogs[3] = 17;
     cogs[4] = 19;
     cogs[5] = 21;
     cogs[6] = 24;
     cogs[7] = 28;
     cogs[8] = 32;
     cogs[9] = 37;
     cogs[10] = 46;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 67 ){ // Shimano 11 speed Cassette 12-25
    cassetteName = "Shimano 11 speed Cassette 12-25";
     cogs[0] = 12;
     cogs[1] = 13;
     cogs[2] = 14;
     cogs[3] = 15;
     cogs[4] = 16;
     cogs[5] = 17;
     cogs[6] = 18;
     cogs[7] = 19;
     cogs[8] = 21;
     cogs[9] = 23;
     cogs[10] = 25;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 48 ){ // Shimano 11 speed Cassette 12-28
    cassetteName = "Shimano 11 speed Cassette 12-28";
     cogs[0] = 12;
     cogs[1] = 13;
     cogs[2] = 14;
     cogs[3] = 15;
     cogs[4] = 16;
     cogs[5] = 17;
     cogs[6] = 19;
     cogs[7] = 21;
     cogs[8] = 23;
     cogs[9] = 25;
     cogs[10] = 28;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 82 ){ // SRAM 11 speed Cassette 10-42
    cassetteName = "SRAM 11 speed Cassette 10-42";
     cogs[0] = 10;
     cogs[1] = 12;
     cogs[2] = 14;
     cogs[3] = 16;
     cogs[4] = 18;
     cogs[5] = 21;
     cogs[6] = 24;
     cogs[7] = 28;
     cogs[8] = 32;
     cogs[9] = 36;
     cogs[10] = 42;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 90 ){ // SRAM 11 speed Cassette 11-26
    cassetteName = "SRAM 11 speed Cassette 11-26";
     cogs[0] = 11;
     cogs[1] = 12;
     cogs[2] = 13;
     cogs[3] = 14;
     cogs[4] = 15;
     cogs[5] = 16;
     cogs[6] = 17;
     cogs[7] = 19;
     cogs[8] = 21;
     cogs[9] = 23;
     cogs[10] = 26;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 87 ){ // SRAM 11 speed Cassette 11-28
    cassetteName = "SRAM 11 speed Cassette 11-28";
     cogs[0] = 11;
     cogs[1] = 12;
     cogs[2] = 13;
     cogs[3] = 14;
     cogs[4] = 15;
     cogs[5] = 16;
     cogs[6] = 17;
     cogs[7] = 19;
     cogs[8] = 22;
     cogs[9] = 25;
     cogs[10] = 28;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 86 ){ // SRAM 11 speed Cassette 11-32
    cassetteName = "SRAM 11 speed Cassette 11-32";
     cogs[0] = 11;
     cogs[1] = 12;
     cogs[2] = 13;
     cogs[3] = 14;
     cogs[4] = 15;
     cogs[5] = 17;
     cogs[6] = 19;
     cogs[7] = 22;
     cogs[8] = 25;
     cogs[9] = 28;
     cogs[10] = 32;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 89 ){ // SRAM 11 speed Cassette 11-36
    cassetteName = "SRAM 11 speed Cassette 11-36";
     cogs[0] = 11;
     cogs[1] = 12;
     cogs[2] = 13;
     cogs[3] = 15;
     cogs[4] = 17;
     cogs[5] = 19;
     cogs[6] = 22;
     cogs[7] = 25;
     cogs[8] = 28;
     cogs[9] = 32;
     cogs[10] = 36;
     cogs[11] = 999;
   }  
    if ( cassetteSelection == 112 ){ // 5 Speed Freewheel 13-17
     cogs[0] = 13;
     cogs[1] = 14;
     cogs[2] = 15;
     cogs[3] = 16;
     cogs[4] = 17;
     cogs[5] = 999;
     cogs[6] = 999;
     cogs[7] = 999;
     cogs[8] = 999;
     cogs[9] = 999;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 113 ){ // 5 Speed Freewheel 13-18
    cassetteName = "5 Speed Freewheel 13-18";
     cogs[0] = 13;
     cogs[1] = 14;
     cogs[2] = 15;
     cogs[3] = 16;
     cogs[4] = 18;
     cogs[5] = 999;
     cogs[6] = 999;
     cogs[7] = 999;
     cogs[8] = 999;
     cogs[9] = 999;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 114 ){ // 5 Speed Freewheel 13-22
    cassetteName = "5 Speed Freewheel 13-22";
     cogs[0] = 13;
     cogs[1] = 14;
     cogs[2] = 16;
     cogs[3] = 19;
     cogs[4] = 22;
     cogs[5] = 999;
     cogs[6] = 999;
     cogs[7] = 999;
     cogs[8] = 999;
     cogs[9] = 999;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 115 ){ // 5 Speed Freewheel 13-24
    cassetteName = "5 Speed Freewheel 13-24";
     cogs[0] = 13;
     cogs[1] = 15;
     cogs[2] = 17;
     cogs[3] = 20;
     cogs[4] = 24;
     cogs[5] = 999;
     cogs[6] = 999;
     cogs[7] = 999;
     cogs[8] = 999;
     cogs[9] = 999;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 116 ){ // 5 Speed Freewheel 13-26
    cassetteName = "5 Speed Freewheel 13-26";
     cogs[0] = 13;
     cogs[1] = 16;
     cogs[2] = 19;
     cogs[3] = 22;
     cogs[4] = 26;
     cogs[5] = 999;
     cogs[6] = 999;
     cogs[7] = 999;
     cogs[8] = 999;
     cogs[9] = 999;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 117 ){ // 5 Speed Freewheel 13-28
    cassetteName = "5 Speed Freewheel 13-28";
     cogs[0] = 13;
     cogs[1] = 16;
     cogs[2] = 19;
     cogs[3] = 23;
     cogs[4] = 28;
     cogs[5] = 999;
     cogs[6] = 999;
     cogs[7] = 999;
     cogs[8] = 999;
     cogs[9] = 999;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 118 ){ // 5 Speed Freewheel 13-32
    cassetteName = "5 Speed Freewheel 13-32";
     cogs[0] = 13;
     cogs[1] = 16;
     cogs[2] = 20;
     cogs[3] = 26;
     cogs[4] = 32;
     cogs[5] = 999;
     cogs[6] = 999;
     cogs[7] = 999;
     cogs[8] = 999;
     cogs[9] = 999;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 119 ){ // 5 Speed Freewheel 13-34
    cassetteName = "5 Speed Freewheel 13-34";
     cogs[0] = 13;
     cogs[1] = 16;
     cogs[2] = 20;
     cogs[3] = 26;
     cogs[4] = 34;
     cogs[5] = 999;
     cogs[6] = 999;
     cogs[7] = 999;
     cogs[8] = 999;
     cogs[9] = 999;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 105 ){ // 5 Speed Freewheel 14-18
    cassetteName = "5 Speed Freewheel 14-18";
     cogs[0] = 14;
     cogs[1] = 15;
     cogs[2] = 16;
     cogs[3] = 17;
     cogs[4] = 18;
     cogs[5] = 999;
     cogs[6] = 999;
     cogs[7] = 999;
     cogs[8] = 999;
     cogs[9] = 999;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 106 ){ // 5 Speed Freewheel 14-22
    cassetteName = "5 Speed Freewheel 14-22";
     cogs[0] = 14;
     cogs[1] = 15;
     cogs[2] = 16;
     cogs[3] = 18;
     cogs[4] = 22;
     cogs[5] = 999;
     cogs[6] = 999;
     cogs[7] = 999;
     cogs[8] = 999;
     cogs[9] = 999;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 107 ){ // 5 Speed Freewheel 14-24
    cassetteName = "5 Speed Freewheel 14-24";
     cogs[0] = 14;
     cogs[1] = 16;
     cogs[2] = 18;
     cogs[3] = 21;
     cogs[4] = 24;
     cogs[5] = 999;
     cogs[6] = 999;
     cogs[7] = 999;
     cogs[8] = 999;
     cogs[9] = 999;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
     }
    if ( cassetteSelection == 108 ){ // 5 Speed Freewheel 14-26
    cassetteName = "5 Speed Freewheel 14-26";
     cogs[0] = 14;  
     cogs[1] = 16;
     cogs[2] = 18;
     cogs[3] = 21;
     cogs[4] = 26;
     cogs[5] = 999;
     cogs[6] = 999;
     cogs[7] = 999;
     cogs[8] = 999;
     cogs[9] = 999;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 109 ){ // 5 Speed Freewheel 14-28
    cassetteName = "5 Speed Freewheel 14-28";
     cogs[0] = 14;
     cogs[1] = 16;
     cogs[2] = 19;
     cogs[3] = 23;
     cogs[4] = 28;
     cogs[5] = 999;
     cogs[6] = 999;
     cogs[7] = 999;
     cogs[8] = 999;
     cogs[9] = 999;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 110 ){ // 5 Speed Freewheel 14-32
    cassetteName = "5 Speed Freewheel 14-32";
     cogs[0] = 14;
     cogs[1] = 17;
     cogs[2] = 21;
     cogs[3] = 26;
     cogs[4] = 32;
     cogs[5] = 999;
     cogs[6] = 999;
     cogs[7] = 999;
     cogs[8] = 999;
     cogs[9] = 999;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 111 ){ // 5 Speed Freewheel 14-34
    cassetteName = "5 Speed Freewheel 14-34";
     cogs[0] = 14;
     cogs[1] = 17;
     cogs[2] = 21;
     cogs[3] = 27;
     cogs[4] = 34;
     cogs[5] = 999;
     cogs[6] = 999;
     cogs[7] = 999;
     cogs[8] = 999;
     cogs[9] = 999;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 130 ){ // IRD 5 Speed Freewheel 13-24
    cassetteName = "IRD 5 Speed Freewheel 13-24";
     cogs[0] = 13;
     cogs[1] = 15;
     cogs[2] = 17;
     cogs[3] = 20;
     cogs[4] = 24;
     cogs[5] = 999;
     cogs[6] = 999;
     cogs[7] = 999;
     cogs[8] = 999;
     cogs[9] = 999;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 131 ){ // IRD 5 Speed Freewheel 13-28
    cassetteName = "IRD 5 Speed Freewheel 13-28";
     cogs[0] = 13;
     cogs[1] = 16;
     cogs[2] = 20;
     cogs[3] = 24;
     cogs[4] = 28;
     cogs[5] = 999;
     cogs[6] = 999;
     cogs[7] = 999;
     cogs[8] = 999;
     cogs[9] = 999;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 132 ){ // IRD 5 Speed Freewheel 13-32
    cassetteName = "IRD 5 Speed Freewheel 13-32";
     cogs[0] = 13;
     cogs[1] = 16;
     cogs[2] = 20;
     cogs[3] = 24;
     cogs[4] = 32;
     cogs[5] = 999;
     cogs[6] = 999;
     cogs[7] = 999;
     cogs[8] = 999;
     cogs[9] = 999;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 133 ){ // IRD 5 Speed Freewheel 14-28
    cassetteName = "IRD 5 Speed Freewheel 14-28";
     cogs[0] = 14;
     cogs[1] = 16;
     cogs[2] = 20;
     cogs[3] = 24;
     cogs[4] = 28;
     cogs[5] = 999;
     cogs[6] = 999;
     cogs[7] = 999;
     cogs[8] = 999;
     cogs[9] = 999;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 1 ){ // My touring bike 5 speed 13-30
    cassetteName = "My touring bike 5 speed 13-30";
     cogs[0] = 13;
     cogs[1] = 16;
     cogs[2] = 20;
     cogs[3] = 25;
     cogs[4] = 30;
     cogs[5] = 999;
     cogs[6] = 999;
     cogs[7] = 999;
     cogs[8] = 999;
     cogs[9] = 999;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 134 ){ // IRD 6 Speed Freewheel 13-24
    cassetteName = "IRD 6 Speed Freewheel 13-24";
     cogs[0] = 13;
     cogs[1] = 15;
     cogs[2] = 17;
     cogs[3] = 19;
     cogs[4] = 21;
     cogs[5] = 24;
     cogs[6] = 999;
     cogs[7] = 999;
     cogs[8] = 999;
     cogs[9] = 999;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 135 ){ // IRD 6 Speed Freewheel 13-28
    cassetteName = "IRD 6 Speed Freewheel 13-28";
     cogs[0] = 13;
     cogs[1] = 15;
     cogs[2] = 18;
     cogs[3] = 21;
     cogs[4] = 24;
     cogs[5] = 28;
     cogs[6] = 999;
     cogs[7] = 999;
     cogs[8] = 999;
     cogs[9] = 999;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 136 ){ // IRD 6 Speed Freewheel 14-32
    cassetteName = "IRD 6 Speed Freewheel 14-32";
     cogs[0] = 14;
     cogs[1] = 17;
     cogs[2] = 20;
     cogs[3] = 24;
     cogs[4] = 28;
     cogs[5] = 32;
     cogs[6] = 999;
     cogs[7] = 999;
     cogs[8] = 999;
     cogs[9] = 999;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 137 ){ // IRD 6 Speed Freewheel 14-34
    cassetteName = "IRD 6 Speed Freewheel 14-34";
     cogs[0] = 14;
     cogs[1] = 16;
     cogs[2] = 19;
     cogs[3] = 24;
     cogs[4] = 28;
     cogs[5] = 34;
     cogs[6] = 999;
     cogs[7] = 999;
     cogs[8] = 999;
     cogs[9] = 999;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 2 ){ // Sachs 6 Speed Freewheel 13-18
    cassetteName = "Sachs 6 Speed Freewheel 13-18";
     cogs[0] = 13;
     cogs[1] = 14;
     cogs[2] = 15;
     cogs[3] = 16;
     cogs[4] = 17;
     cogs[5] = 18;
     cogs[6] = 999;
     cogs[7] = 999;
     cogs[8] = 999;
     cogs[9] = 999;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 3 ){ // Sachs 6 Speed Freewheel 13-21
    cassetteName = "Sachs 6 Speed Freewheel 13-21";
     cogs[0] = 13;
     cogs[1] = 14;
     cogs[2] = 15;
     cogs[3] = 17;
     cogs[4] = 19;
     cogs[5] = 21;
     cogs[6] = 999;
     cogs[7] = 999;
     cogs[8] = 999;
     cogs[9] = 999;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 4 ){ // Sachs 6 Speed Freewheel 13-24
    cassetteName = "Sachs 6 Speed Freewheel 13-24";
     cogs[0] = 13;
     cogs[1] = 15;
     cogs[2] = 17;
     cogs[3] = 19;
     cogs[4] = 21;
     cogs[5] = 24;
     cogs[6] = 999;
     cogs[7] = 999;
     cogs[8] = 999;
     cogs[9] = 999;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 5 ){ // Sachs 6 Speed Freewheel 13-26
    cassetteName = "Sachs 6 Speed Freewheel 13-26";
     cogs[0] = 13;
     cogs[1] = 15;
     cogs[2] = 17;
     cogs[3] = 20;
     cogs[4] = 23;
     cogs[5] = 26;
     cogs[6] = 999;
     cogs[7] = 999;
     cogs[8] = 999;
     cogs[9] = 999;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 151 ){ // Shimano  HG40 6 speed mega 14-34
    cassetteName = "Shimano  HG40 6 speed mega 14-34";
     cogs[0] = 14;
     cogs[1] = 16;
     cogs[2] = 18;
     cogs[3] = 21;
     cogs[4] = 24;
     cogs[5] = 34;
     cogs[6] = 999;
     cogs[7] = 999;
     cogs[8] = 999;
     cogs[9] = 999;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 6 ){ // Sachs 6 Speed Freewheel 13-28
    cassetteName = "Sachs 6 Speed Freewheel 13-28";
     cogs[0] = 13;
     cogs[1] = 15;
     cogs[2] = 17;
     cogs[3] = 20;
     cogs[4] = 24;
     cogs[5] = 28;
     cogs[6] = 999;
     cogs[7] = 999;
     cogs[8] = 999;
     cogs[9] = 999;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 138 ){ // IRD 7 Speed Freewheel 13-24
    cassetteName = "IRD 7 Speed Freewheel 13-24";
     cogs[0] = 13;
     cogs[1] = 14;
     cogs[2] = 15;
     cogs[3] = 17;
     cogs[4] = 19;
     cogs[5] = 21;
     cogs[6] = 24;
     cogs[7] = 999;
     cogs[8] = 999;
     cogs[9] = 999;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 139 ){ // IRD 7 Speed Freewheel 13-28
    cassetteName = "IRD 7 Speed Freewheel 13-28";
     cogs[0] = 13;
     cogs[1] = 15;
     cogs[2] = 17;
     cogs[3] = 19;
     cogs[4] = 21;
     cogs[5] = 24;
     cogs[6] = 28;
     cogs[7] = 999;
     cogs[8] = 999;
     cogs[9] = 999;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 141 ){ // IRD 7 Speed Freewheel 13-32
    cassetteName = "IRD 7 Speed Freewheel 13-32";
     cogs[0] = 13;
     cogs[1] = 15;
     cogs[2] = 17;
     cogs[3] = 21;
     cogs[4] = 24;
     cogs[5] = 28;
     cogs[6] = 32;
     cogs[7] = 999;
     cogs[8] = 999;
     cogs[9] = 999;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 140 ){ // IRD 7 Speed Freewheel 13-32 mega
    cassetteName = "IRD 7 Speed Freewheel 13-32 mega";
     cogs[0] = 13;
     cogs[1] = 15;
     cogs[2] = 17;
     cogs[3] = 19;
     cogs[4] = 21;
     cogs[5] = 24;
     cogs[6] = 32;
     cogs[7] = 999;
     cogs[8] = 999;
     cogs[9] = 999;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 7 ){ // Sachs 7 speed freewheel 12-19
    cassetteName = "Sachs 7 speed freewheel 12-19";
     cogs[0] = 12;
     cogs[1] = 13;
     cogs[2] = 14;
     cogs[3] = 15;
     cogs[4] = 16;
     cogs[5] = 17;
     cogs[6] = 19;
     cogs[7] = 999;
     cogs[8] = 999;
     cogs[9] = 999;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 8 ){ // Sachs 7 speed freewheel 12-21
    cassetteName = "Sachs 7 speed freewheel 12-21";
     cogs[0] = 12;
     cogs[1] = 13;
     cogs[2] = 14;
     cogs[3] = 15;
     cogs[4] = 17;
     cogs[5] = 19;
     cogs[6] = 21;
     cogs[7] = 999;
     cogs[8] = 999;
     cogs[9] = 999;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 10 ){ // Sachs 7 speed freewheel 12-24
    cassetteName = "Sachs 7 speed freewheel 12-24";
     cogs[0] = 12;
     cogs[1] = 13;
     cogs[2] = 15;
     cogs[3] = 17;
     cogs[4] = 19;
     cogs[5] = 21;
     cogs[6] = 24;
     cogs[7] = 999;
     cogs[8] = 999;
     cogs[9] = 999;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 13 ){ // Sachs 7 speed freewheel 12-28
    cassetteName = "Sachs 7 speed freewheel 12-28";
     cogs[0] = 12;
     cogs[1] = 13;
     cogs[2] = 15;
     cogs[3] = 17;
     cogs[4] = 20;
     cogs[5] = 24;
     cogs[6] = 28;
     cogs[7] = 999;
     cogs[8] = 999;
     cogs[9] = 999;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 9 ){ // Sachs 7 speed freewheel 13-21
    cassetteName = "Sachs 7 speed freewheel 13-21";
     cogs[0] = 13;
     cogs[1] = 14;
     cogs[2] = 15;
     cogs[3] = 16;
     cogs[4] = 17;
     cogs[5] = 19;
     cogs[6] = 21;
     cogs[7] = 999;
     cogs[8] = 999;
     cogs[9] = 999;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 11 ){ // Sachs 7 speed freewheel 13-24
    cassetteName = "Sachs 7 speed freewheel 13-24";
     cogs[0] = 13;
     cogs[1] = 14;
     cogs[2] = 15;
     cogs[3] = 17;
     cogs[4] = 19;
     cogs[5] = 21;
     cogs[6] = 24;
     cogs[7] = 999;
     cogs[8] = 999;
     cogs[9] = 999;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 12 ){ // Sachs 7 speed freewheel 13-26
    cassetteName = "Sachs 7 speed freewheel 13-26";
     cogs[0] = 13;
     cogs[1] = 15;
     cogs[2] = 17;
     cogs[3] = 19;
     cogs[4] = 21;
     cogs[5] = 23;
     cogs[6] = 26;
     cogs[7] = 999;
     cogs[8] = 999;
     cogs[9] = 999;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 14 ){ // Sachs 7 speed freewheel 13-28
    cassetteName = "Sachs 7 speed freewheel 13-28";
     cogs[0] = 13;
     cogs[1] = 15;
     cogs[2] = 17;
     cogs[3] = 19;
     cogs[4] = 21;
     cogs[5] = 24;
     cogs[6] = 28;
     cogs[7] = 999;
     cogs[8] = 999;
     cogs[9] = 999;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 15 ){ // Sachs 7 speed freewheel 13-30
    cassetteName = "Sachs 7 speed freewheel 13-30";
     cogs[0] = 13;
     cogs[1] = 15;
     cogs[2] = 17;
     cogs[3] = 20;
     cogs[4] = 23;
     cogs[5] = 26;
     cogs[6] = 30;
     cogs[7] = 999;
     cogs[8] = 999;
     cogs[9] = 999;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 16 ){ // Sachs 7 speed freewheel 13-32
    cassetteName = "Sachs 7 speed freewheel 13-32";
     cogs[0] = 13;
     cogs[1] = 15;
     cogs[2] = 17;
     cogs[3] = 20;
     cogs[4] = 24;
     cogs[5] = 28;
     cogs[6] = 32;
     cogs[7] = 999;
     cogs[8] = 999;
     cogs[9] = 999;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 18 ){ // Shimano 7 speed cassette HG 70 11-28
    cassetteName = "Shimano 7 speed cassette HG 70 11-28";
     cogs[0] = 11;
     cogs[1] = 13;
     cogs[2] = 15;
     cogs[3] = 18;
     cogs[4] = 21;
     cogs[5] = 24;
     cogs[6] = 28;
     cogs[7] = 999;
     cogs[8] = 999;
     cogs[9] = 999;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 19 ){ // Shimano 7 speed cassette HG 90 12-21
    cassetteName = "Shimano 7 speed cassette HG 90 12-21";
     cogs[0] = 12;
     cogs[1] = 13;
     cogs[2] = 14;
     cogs[3] = 15;
     cogs[4] = 17;
     cogs[5] = 19;
     cogs[6] = 21;
     cogs[7] = 999;
     cogs[8] = 999;
     cogs[9] = 999;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 20 ){ // Shimano 7 speed cassette HG 90 12-28
    cassetteName = "Shimano 7 speed cassette HG 90 12-28";
     cogs[0] = 12;
     cogs[1] = 14;
     cogs[2] = 16;
     cogs[3] = 18;
     cogs[4] = 21;
     cogs[5] = 24;
     cogs[6] = 28;
     cogs[7] = 999;
     cogs[8] = 999;
     cogs[9] = 999;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 21 ){ // Shimano 7 speed cassette HG 90 13-21
    cassetteName = "Shimano 7 speed cassette HG 90 13-21";
     cogs[0] = 13;
     cogs[1] = 14;
     cogs[2] = 15;
     cogs[3] = 16;
     cogs[4] = 17;
     cogs[5] = 19;
     cogs[6] = 21;
     cogs[7] = 999;
     cogs[8] = 999;
     cogs[9] = 999;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 22 ){ // Shimano 7 speed cassette HG 90 13-23
    cassetteName = "Shimano 7 speed cassette HG 90 13-23";
     cogs[0] = 13;
     cogs[1] = 14;
     cogs[2] = 15;
     cogs[3] = 17;
     cogs[4] = 19;
     cogs[5] = 21;
     cogs[6] = 23;
     cogs[7] = 999;
     cogs[8] = 999;
     cogs[9] = 999;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 23 ){ // Shimano 7 speed cassette HG 90 13-26
    cassetteName = "Shimano 7 speed cassette HG 90 13-26";
     cogs[0] = 13;
     cogs[1] = 15;
     cogs[2] = 17;
     cogs[3] = 19;
     cogs[4] = 21;
     cogs[5] = 23;
     cogs[6] = 26;
     cogs[7] = 999;
     cogs[8] = 999;
     cogs[9] = 999;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 24 ){ // Shimano 7 speed cassette HG 90 13-28
    cassetteName = "Shimano 7 speed cassette HG 90 13-28";
     cogs[0] = 13;
     cogs[1] = 15;
     cogs[2] = 17;
     cogs[3] = 19;
     cogs[4] = 21;
     cogs[5] = 24;
     cogs[6] = 28;
     cogs[7] = 999;
     cogs[8] = 999;
     cogs[9] = 999;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 25 ){ // Shimano 7 speed cassette HG 90 13-30
    cassetteName = "Shimano 7 speed cassette HG 90 13-30";
     cogs[0] = 13;
     cogs[1] = 15;
     cogs[2] = 17;
     cogs[3] = 20;
     cogs[4] = 23;
     cogs[5] = 26;
     cogs[6] = 30;
     cogs[7] = 999;
     cogs[8] = 999;
     cogs[9] = 999;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 27 ){ // Shimano 7 speed cassette HG 90 13-34
    cassetteName = "Shimano 7 speed cassette HG 90 13-34";
     cogs[0] = 13;
     cogs[1] = 15;
     cogs[2] = 17;
     cogs[3] = 20;
     cogs[4] = 24;
     cogs[5] = 29;
     cogs[6] = 34;
     cogs[7] = 999;
     cogs[8] = 999;
     cogs[9] = 999;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 26 ){ // Shimano 7 speed cassette HG 90 14-32
    cassetteName = "Shimano 7 speed cassette HG 90 14-32";
     cogs[0] = 14;
     cogs[1] = 16;
     cogs[2] = 18;
     cogs[3] = 21;
     cogs[4] = 24;
     cogs[5] = 28;
     cogs[6] = 32;
     cogs[7] = 999;
     cogs[8] = 999;
     cogs[9] = 999;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 17 ){ // Sunrace 7 speed freewheel 13-28
    cassetteName = "Sunrace 7 speed freewheel 13-28";
     cogs[0] = 13;
     cogs[1] = 15;
     cogs[2] = 17;
     cogs[3] = 19;
     cogs[4] = 21;
     cogs[5] = 24;
     cogs[6] = 28;
     cogs[7] = 999;
     cogs[8] = 999;
     cogs[9] = 999;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 53 ){ // Campagnolo 8 Speed Cassette  12-23
    cassetteName = "Campagnolo 8 Speed Cassette  12-23";
     cogs[0] = 12;
     cogs[1] = 13;
     cogs[2] = 14;
     cogs[3] = 15;
     cogs[4] = 17;
     cogs[5] = 19;
     cogs[6] = 21;
     cogs[7] = 23;
     cogs[8] = 999;
     cogs[9] = 999;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 54 ){ // Campagnolo 8 Speed Cassette  13-23
    cassetteName = "Campagnolo 8 Speed Cassette  13-23";
     cogs[0] = 13;
     cogs[1] = 14;
     cogs[2] = 15;
     cogs[3] = 16;
     cogs[4] = 17;
     cogs[5] = 19;
     cogs[6] = 21;
     cogs[7] = 23;
     cogs[8] = 999;
     cogs[9] = 999;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 55 ){ // Campagnolo 8 Speed Cassette  13-26
    cassetteName = "Campagnolo 8 Speed Cassette  13-26";
     cogs[0] = 13;
     cogs[1] = 14;
     cogs[2] = 15;
     cogs[3] = 17;
     cogs[4] = 19;
     cogs[5] = 21;
     cogs[6] = 23;
     cogs[7] = 26;
     cogs[8] = 999;
     cogs[9] = 999;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 28 ){ // Sachs 8 speed freewheel 12-19
    cassetteName = "Sachs 8 speed freewheel 12-19";
     cogs[0] = 12;
     cogs[1] = 13;
     cogs[2] = 14;
     cogs[3] = 15;
     cogs[4] = 16;
     cogs[5] = 17;
     cogs[6] = 18;
     cogs[7] = 19;
     cogs[8] = 999;
     cogs[9] = 999;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 29 ){ // Sachs 8 speed freewheel 12-21
    cassetteName = "Sachs 8 speed freewheel 12-21";
     cogs[0] = 12;
     cogs[1] = 13;
     cogs[2] = 14;
     cogs[3] = 15;
     cogs[4] = 16;
     cogs[5] = 17;
     cogs[6] = 19;
     cogs[7] = 21;
     cogs[8] = 999;
     cogs[9] = 999;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 30 ){ // Sachs 8 speed freewheel 12-24
    cassetteName = "Sachs 8 speed freewheel 12-24";
     cogs[0] = 12;
     cogs[1] = 13;
     cogs[2] = 14;
     cogs[3] = 15;
     cogs[4] = 17;
     cogs[5] = 19;
     cogs[6] = 21;
     cogs[7] = 24;
     cogs[8] = 999;
     cogs[9] = 999;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 31 ){ // Sachs 8 speed freewheel 12-26
    cassetteName = "Sachs 8 speed freewheel 12-26";
     cogs[0] = 12;
     cogs[1] = 14;
     cogs[2] = 16;
     cogs[3] = 18;
     cogs[4] = 20;
     cogs[5] = 22;
     cogs[6] = 24;
     cogs[7] = 26;
     cogs[8] = 999;
     cogs[9] = 999;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 32 ){ // Sachs 8 speed freewheel 12-28
    cassetteName = "Sachs 8 speed freewheel 12-28";
     cogs[0] = 12;
     cogs[1] = 14;
     cogs[2] = 16;
     cogs[3] = 18;
     cogs[4] = 20;
     cogs[5] = 22;
     cogs[6] = 25;
     cogs[7] = 28;
     cogs[8] = 999;
     cogs[9] = 999;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 34 ){ // Sachs 8 speed freewheel 12-30
    cassetteName = "Sachs 8 speed freewheel 12-30";
     cogs[0] = 12;
     cogs[1] = 14;
     cogs[2] = 16;
     cogs[3] = 18;
     cogs[4] = 20;
     cogs[5] = 23;
     cogs[6] = 26;
     cogs[7] = 30;
     cogs[8] = 999;
     cogs[9] = 999;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 36 ){ // Sachs 8 speed freewheel 12-32
    cassetteName = "Sachs 8 speed freewheel 12-32";
     cogs[0] = 12;
     cogs[1] = 14;
     cogs[2] = 16;
     cogs[3] = 18;
     cogs[4] = 21;
     cogs[5] = 24;
     cogs[6] = 28;
     cogs[7] = 32;
     cogs[8] = 999;
     cogs[9] = 999;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 33 ){ // Sachs 8 speed freewheel 13-28
    cassetteName = "Sachs 8 speed freewheel 13-28";
     cogs[0] = 13;
     cogs[1] = 15;
     cogs[2] = 17;
     cogs[3] = 19;
     cogs[4] = 21;
     cogs[5] = 23;
     cogs[6] = 25;
     cogs[7] = 28;
     cogs[8] = 999;
     cogs[9] = 999;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 35 ){ // Sachs 8 speed freewheel 13-30
    cassetteName = "Sachs 8 speed freewheel 13-30";
     cogs[0] = 13;
     cogs[1] = 15;
     cogs[2] = 17;
     cogs[3] = 19;
     cogs[4] = 21;
     cogs[5] = 23;
     cogs[6] = 26;
     cogs[7] = 30;
     cogs[8] = 999;
     cogs[9] = 999;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 51 ){ // Sachs 8 speed Quartz Cassette for Sachs Freehubs 11-28
    cassetteName = "Sachs 8 speed Quartz Cassette for Sachs Freehubs 11-28";
     cogs[0] = 11;
     cogs[1] = 12;
     cogs[2] = 14;
     cogs[3] = 16;
     cogs[4] = 18;
     cogs[5] = 21;
     cogs[6] = 24;
     cogs[7] = 28;
     cogs[8] = 999;
     cogs[9] = 999;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 52 ){ // Sachs 8 speed Quartz Cassette for Sachs Freehubs 12-32
    cassetteName = "Sachs 8 speed Quartz Cassette for Sachs Freehubs 12-32";
     cogs[0] = 12;
     cogs[1] = 14;
     cogs[2] = 16;
     cogs[3] = 18;
     cogs[4] = 21;
     cogs[5] = 24;
     cogs[6] = 28;
     cogs[7] = 32;
     cogs[8] = 999;
     cogs[9] = 999;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 41 ){ // Shimano 8 speed Cassette 12-21
    cassetteName = "Shimano 8 speed Cassette 12-21";
     cogs[0] = 12;
     cogs[1] = 13;
     cogs[2] = 14;
     cogs[3] = 15;
     cogs[4] = 16;
     cogs[5] = 17;
     cogs[6] = 19;
     cogs[7] = 21;
     cogs[8] = 999;
     cogs[9] = 999;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 43 ){ // Shimano 8 speed Cassette 12-25
    cassetteName = "Shimano 8 speed Cassette 12-25";
     cogs[0] = 12;
     cogs[1] = 13;
     cogs[2] = 15;
     cogs[3] = 17;
     cogs[4] = 19;
     cogs[5] = 21;
     cogs[6] = 23;
     cogs[7] = 25;
     cogs[8] = 999;
     cogs[9] = 999;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 45 ){ // Shimano 8 speed Cassette 13-26
    cassetteName = "Shimano 8 speed Cassette 13-26";
     cogs[0] = 13;
     cogs[1] = 14;
     cogs[2] = 15;
     cogs[3] = 17;
     cogs[4] = 19;
     cogs[5] = 21;
     cogs[6] = 23;
     cogs[7] = 26;
     cogs[8] = 999;
     cogs[9] = 999;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 37 ){ // Shimano Deore XT 8 Speed IG Cassette 11-28
    cassetteName = "Shimano Deore XT 8 Speed IG Cassette 11-28";
     cogs[0] = 11;
     cogs[1] = 12;
     cogs[2] = 14;
     cogs[3] = 16;
     cogs[4] = 18;
     cogs[5] = 21;
     cogs[6] = 24;
     cogs[7] = 28;
     cogs[8] = 999;
     cogs[9] = 999;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 38 ){ // Shimano Deore XT 8 Speed IG Cassette 11-30
    cassetteName = "Shimano Deore XT 8 Speed IG Cassette 11-30";
     cogs[0] = 11;
     cogs[1] = 13;
     cogs[2] = 15;
     cogs[3] = 17;
     cogs[4] = 20;
     cogs[5] = 23;
     cogs[6] = 26;
     cogs[7] = 30;
     cogs[8] = 999;
     cogs[9] = 999;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 44 ){ // Shimano Dura Ace HG 8 spd Cassette 13-23
    cassetteName = "Shimano Dura Ace HG 8 spd Cassette 13-23";
     cogs[0] = 13;
     cogs[1] = 14;
     cogs[2] = 15;
     cogs[3] = 16;
     cogs[4] = 17;
     cogs[5] = 19;
     cogs[6] = 21;
     cogs[7] = 23;
     cogs[8] = 999;
     cogs[9] = 999;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 42 ){ // Shimano speed Cassette 12-23
    cassetteName = "Shimano speed Cassette 12-23";
     cogs[0] = 12;
     cogs[1] = 13;
     cogs[2] = 14;
     cogs[3] = 15;
     cogs[4] = 17;
     cogs[5] = 19;
     cogs[6] = 21;
     cogs[7] = 23;
     cogs[8] = 999;
     cogs[9] = 999;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 39 ){ // Shimano XTR 8sp HG Cassette 12-28
    cassetteName = "Shimano XTR 8sp HG Cassette 12-28";
     cogs[0] = 12;
     cogs[1] = 13;
     cogs[2] = 14;
     cogs[3] = 16;
     cogs[4] = 18;
     cogs[5] = 21;
     cogs[6] = 24;
     cogs[7] = 28;
     cogs[8] = 999;
     cogs[9] = 999;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 40 ){ // Shimano XTR 8sp HG Cassette 12-32
    cassetteName = "Shimano XTR 8sp HG Cassette 12-32";
     cogs[0] = 12;
     cogs[1] = 14;
     cogs[2] = 16;
     cogs[3] = 18;
     cogs[4] = 21;
     cogs[5] = 24;
     cogs[6] = 28;
     cogs[7] = 32;
     cogs[8] = 999;
     cogs[9] = 999;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 57 ){ // Shimano XTR TI 8 speed Cassette Cogs 11-30
    cassetteName = "Shimano XTR TI 8 speed Cassette Cogs 11-30";
     cogs[0] = 11;
     cogs[1] = 13;
     cogs[2] = 15;
     cogs[3] = 17;
     cogs[4] = 20;
     cogs[5] = 23;
     cogs[6] = 26;
     cogs[7] = 30;
     cogs[8] = 999;
     cogs[9] = 999;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 58 ){ // Shimano XTR TI 8 speed Cassette Cogs 12-32
    cassetteName = "Shimano XTR TI 8 speed Cassette Cogs 12-32";
     cogs[0] = 12;
     cogs[1] = 14;
     cogs[2] = 16;
     cogs[3] = 18;
     cogs[4] = 21;
     cogs[5] = 24;
     cogs[6] = 28;
     cogs[7] = 32;
     cogs[8] = 999;
     cogs[9] = 999;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 50 ){ // Sram 5.0 8 speed Cassette 11-32
    cassetteName = "Sram 5.0 8 speed Cassette 11-32";
     cogs[0] = 11;
     cogs[1] = 12;
     cogs[2] = 14;
     cogs[3] = 16;
     cogs[4] = 18;
     cogs[5] = 21;
     cogs[6] = 26;
     cogs[7] = 32;
     cogs[8] = 999;
     cogs[9] = 999;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 152 ){ // Shimano 11 speed Cassette 14-28
    cassetteName = "Shimano 11 speed Cassette 14-28";
     cogs[0] = 14;
     cogs[1] = 15;
     cogs[2] = 16;
     cogs[3] = 17;
     cogs[4] = 18;
     cogs[5] = 19;
     cogs[6] = 20;
     cogs[7] = 21;
     cogs[8] = 23;
     cogs[9] = 25;
     cogs[10] = 28;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 153){ // Shimano 11 speed Cassette 11-32
    cassetteName = "Shimano 11 speed Cassette 11-32";
     cogs[0] = 11;
     cogs[1] = 12;
     cogs[2] = 13;
     cogs[3] = 14;
     cogs[4] = 16;
     cogs[5] = 18;
     cogs[6] = 20;
     cogs[7] = 22;
     cogs[8] = 25;
     cogs[9] = 28;
     cogs[10] = 32;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection ==  154){ // Shimano 11 speed Cassette 11-34
    cassetteName = "Shimano 11 speed Cassette 11-34";
     cogs[0] = 11;
     cogs[1] = 13;
     cogs[2] = 15;
     cogs[3] = 17;
     cogs[4] = 19;
     cogs[5] = 21;
     cogs[6] = 23;
     cogs[7] = 25;
     cogs[8] = 27;
     cogs[9] = 30;
     cogs[10] = 34;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection ==  155){ // SRAM 10 speed Cassette 11-23
    cassetteName = "SRAM 10 speed Cassette 11-23";
     cogs[0] = 11;
     cogs[1] = 12;
     cogs[2] = 13;
     cogs[3] = 14;
     cogs[4] = 15;
     cogs[5] = 16;
     cogs[6] = 17;
     cogs[7] = 19;
     cogs[8] = 21;
     cogs[9] = 23;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection ==  156){ // SRAM 10 speed Cassette 12-26
    cassetteName = "SRAM 10 speed Cassette 12-26";
     cogs[0] = 12;
     cogs[1] = 13;
     cogs[2] = 14;
     cogs[3] = 15;
     cogs[4] = 16;
     cogs[5] = 17;
     cogs[6] = 19;
     cogs[7] = 21;
     cogs[8] = 23;
     cogs[9] = 26;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 157 ){ // SRAM 10 speed Cassette 12-27
    cassetteName = "SRAM 10 speed Cassette 12-27";
     cogs[0] = 12;
     cogs[1] = 13;
     cogs[2] = 14;
     cogs[3] = 15;
     cogs[4] = 16;
     cogs[5] = 17;
     cogs[6] = 19;
     cogs[7] = 21;
     cogs[8] = 24;
     cogs[9] = 27;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 158 ){ // SRAM 11 speed Cassette 11-25
    cassetteName = "SRAM 11 speed Cassette 11-25";
     cogs[0] = 11;
     cogs[1] = 12;
     cogs[2] = 13;
     cogs[3] = 14;
     cogs[4] = 15;
     cogs[5] = 16;
     cogs[6] = 17;
     cogs[7] = 19;
     cogs[8] = 21;
     cogs[9] = 23;
     cogs[10] = 25;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 159 ){ // SRAM 11 speed Cassette 11-30
    cassetteName = "SRAM 11 speed Cassette 11-30";
     cogs[0] = 11;
     cogs[1] = 12;
     cogs[2] = 13;
     cogs[3] = 14;
     cogs[4] = 15;
     cogs[5] = 17;
     cogs[6] = 19;
     cogs[7] = 21;
     cogs[8] = 24;
     cogs[9] = 27;
     cogs[10] = 30;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 160 ){ // SRAM 11 speed Cassette 11-42
    cassetteName = "SRAM 11 speed Cassette 11-42";
     cogs[0] = 11;
     cogs[1] = 13;
     cogs[2] = 15;
     cogs[3] = 17;
     cogs[4] = 19;
     cogs[5] = 22;
     cogs[6] = 25;
     cogs[7] = 28;
     cogs[8] = 32;
     cogs[9] = 36;
     cogs[10] = 42;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 161 ){ // Campagnolo 11 speed Cassette 11-27
    cassetteName = "Campagnolo 11 speed Cassette 11-27";
     cogs[0] = 11;
     cogs[1] = 12;
     cogs[2] = 13;
     cogs[3] = 14;
     cogs[4] = 15;
     cogs[5] = 17;
     cogs[6] = 19;
     cogs[7] = 21;
     cogs[8] = 23;
     cogs[9] = 25;
     cogs[10] = 27;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 162 ){ // Campagnolo 11 speed Cassette 11-29
    cassetteName = "Campagnolo 11 speed Cassette 11-29";
     cogs[0] = 11;
     cogs[1] = 12;
     cogs[2] = 13;
     cogs[3] = 14;
     cogs[4] = 15;
     cogs[5] = 17;
     cogs[6] = 19;
     cogs[7] = 21;
     cogs[8] = 23;
     cogs[9] = 26;
     cogs[10] = 29;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 163 ){ // Campagnolo 11 speed Cassette 12-29
    cassetteName = "Campagnolo 11 speed Cassette 12-29";
     cogs[0] = 12;
     cogs[1] = 13;
     cogs[2] = 14;
     cogs[3] = 15;
     cogs[4] = 16;
     cogs[5] = 17;
     cogs[6] = 19;
     cogs[7] = 21;
     cogs[8] = 23;
     cogs[9] = 26;
     cogs[10] = 29;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 164 ){ // SRAM 12 speed Cassette 10-26
    cassetteName = "SRAM 12 speed Cassette 10-26";
     cogs[0] = 10;
     cogs[1] = 11;
     cogs[2] = 12;
     cogs[3] = 13;
     cogs[4] = 14;
     cogs[5] = 15;
     cogs[6] = 16;
     cogs[7] = 17;
     cogs[8] = 19;
     cogs[9] = 21;
     cogs[10] = 23;
     cogs[11] = 26;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 165 ){ // SRAM 12 speed Cassette 10-28
    cassetteName = "SRAM 12 speed Cassette 10-28";
     cogs[0] = 10;
     cogs[1] = 11;
     cogs[2] = 12;
     cogs[3] = 13;
     cogs[4] = 14;
     cogs[5] = 15;
     cogs[6] = 16;
     cogs[7] = 17;
     cogs[8] = 19;
     cogs[9] = 21;
     cogs[10] = 24;
     cogs[11] = 28;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 166 ){ // SRAM 12 speed Cassette 10-33
    cassetteName = "SRAM 12 speed Cassette 10-33";
     cogs[0] = 10;
     cogs[1] = 11;
     cogs[2] = 12;
     cogs[3] = 13;
     cogs[4] = 14;
     cogs[5] = 15;
     cogs[6] = 17;
     cogs[7] = 19;
     cogs[8] = 21;
     cogs[9] = 24;
     cogs[10] = 28;
     cogs[11] = 33;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 167 ){ // Campagnolo 12 speed Cassette 11-29
    cassetteName = "Campagnolo 12 speed Cassette 11-29";
     cogs[0] = 11;
     cogs[1] = 12;
     cogs[2] = 13;
     cogs[3] = 14;
     cogs[4] = 15;
     cogs[5] = 16;
     cogs[6] = 17;
     cogs[7] = 19;
     cogs[8] = 21;
     cogs[9] = 23;
     cogs[10] = 26;
     cogs[11] = 29;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 168 ){ // Campagnolo 12 speed Cassette 11-32
    cassetteName = "Campagnolo 12 speed Cassette 11-32";
     cogs[0] = 11;
     cogs[1] = 12;
     cogs[2] = 13;
     cogs[3] = 14;
     cogs[4] = 15;
     cogs[5] = 16;
     cogs[6] = 17;
     cogs[7] = 19;
     cogs[8] = 22;
     cogs[9] = 25;
     cogs[10] = 28;
     cogs[11] = 32;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 169 ){ // Campagnolo 12 speed Cassette 11-34
    cassetteName = "Campagnolo 12 speed Cassette 11-34";
     cogs[0] = 11;
     cogs[1] = 12;
     cogs[2] = 13;
     cogs[3] = 14;
     cogs[4] = 15;
     cogs[5] = 16;
     cogs[6] = 17;
     cogs[7] = 19;
     cogs[8] = 22;
     cogs[9] = 25;
     cogs[10] = 29;
     cogs[11] = 34;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 170 ){ // Campagnolo 11 speed Cassette 12-32
    cassetteName = "Campagnolo 11 speed Cassette 12-32";
     cogs[0] = 12;
     cogs[1] = 13;
     cogs[2] = 14;
     cogs[3] = 15;
     cogs[4] = 16;
     cogs[5] = 17;
     cogs[6] = 19;
     cogs[7] = 22;
     cogs[8] = 25;
     cogs[9] = 27;
     cogs[10] = 32;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 171 ){ // Box Two 11 speed 11-46
    cassetteName = "Box Two 11 speed 11-46";
     cogs[0] = 11;
     cogs[1] = 13;
     cogs[2] = 15;
     cogs[3] = 18;
     cogs[4] = 21;
     cogs[5] = 24;
     cogs[6] = 28;
     cogs[7] = 32;
     cogs[8] = 36;
     cogs[9] = 40;
     cogs[10] = 46;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 172 ){ // Box Two 11 speed 11-50
    cassetteName = "Box Two 11 speed 11-50";
     cogs[0] = 11;
     cogs[1] = 13;
     cogs[2] = 15;
     cogs[3] = 18;
     cogs[4] = 21;
     cogs[5] = 24;
     cogs[6] = 28;
     cogs[7] = 32;
     cogs[8] = 36;
     cogs[9] = 42;
     cogs[10] = 50;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 173 ){ // e*thirteen 11 speed 9-34
    cassetteName = "e*thirteen 11 speed 9-34";
     cogs[0] = 9;
     cogs[1] = 11;
     cogs[2] = 13;
     cogs[3] = 15;
     cogs[4] = 17;
     cogs[5] = 19;
     cogs[6] = 21;
     cogs[7] = 24;
     cogs[8] = 27;
     cogs[9] = 30;
     cogs[10] = 34;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 174 ){ // e*thirteen 11 speed 9-39
    cassetteName = "e*thirteen 11 speed 9-39";
     cogs[0] = 9;
     cogs[1] = 11;
     cogs[2] = 13;
     cogs[3] = 15;
     cogs[4] = 17;
     cogs[5] = 19;
     cogs[6] = 21;
     cogs[7] = 24;
     cogs[8] = 28;
     cogs[9] = 33;
     cogs[10] = 39;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 175 ){ // e*thirteen 11 speed 9-42
    cassetteName = "e*thirteen 11 speed 9-42";
     cogs[0] = 9;
     cogs[1] = 11;
     cogs[2] = 13;
     cogs[3] = 15;
     cogs[4] = 17;
     cogs[5] = 20;
     cogs[6] = 23;
     cogs[7] = 27;
     cogs[8] = 31;
     cogs[9] = 36;
     cogs[10] = 42;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 176 ){ // e*thirteen 11 speed 9-46
    cassetteName = "e*thirteen 11 speed 9-46";
     cogs[0] = 9;
     cogs[1] = 10;
     cogs[2] = 12;
     cogs[3] = 14;
     cogs[4] = 17;
     cogs[5] = 20;
     cogs[6] = 24;
     cogs[7] = 28;
     cogs[8] = 33;
     cogs[9] = 39;
     cogs[10] = 46;
     cogs[11] = 999;
     cogs[12] = 999;
   }
   if ( cassetteSelection == 177 ){  // Garbaruk 11 speed 10-46	
   cassetteName = "Garbaruk 11 speed 10-46	";
     cogs[0] = 10;
     cogs[1] = 12;
     cogs[2] = 14;
     cogs[3] = 16;
     cogs[4] = 19;
     cogs[5] = 22;
     cogs[6] = 26;
     cogs[7] = 30;
     cogs[8] = 36;
     cogs[9] = 42;
     cogs[10] = 46;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 178 ){  // Garbaruk 11 speed 10-48	
    cassetteName = "Garbaruk 11 speed 10-48	";
     cogs[0] = 10;
     cogs[1] = 12;
     cogs[2] = 14;
     cogs[3] = 16;
     cogs[4] = 19;
     cogs[5] = 22;
     cogs[6] = 26;
     cogs[7] = 30;
     cogs[8] = 36;
     cogs[9] = 42;
     cogs[10] = 48;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 179 ){  // Garbaruk 11 speed 10-50	
    cassetteName = "Garbaruk 11 speed 10-50	";
     cogs[0] = 10;
     cogs[1] = 12;
     cogs[2] = 14;
     cogs[3] = 16;
     cogs[4] = 19;
     cogs[5] = 22;
     cogs[6] = 26;
     cogs[7] = 30;
     cogs[8] = 36;
     cogs[9] = 42;
     cogs[10] = 50;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 180 ){  // Garbaruk 11 speed 11-46	
    cassetteName = "Garbaruk 11 speed 11-46	";
     cogs[0] = 11;
     cogs[1] = 13;
     cogs[2] = 15;
     cogs[3] = 17;
     cogs[4] = 20;
     cogs[5] = 24;
     cogs[6] = 28;
     cogs[7] = 32;
     cogs[8] = 36;
     cogs[9] = 42;
     cogs[10] = 46;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 181 ){  // Garbaruk 11 speed 11-48	
    cassetteName = "Garbaruk 11 speed 11-48	";
     cogs[0] = 11;
     cogs[1] = 13;
     cogs[2] = 15;
     cogs[3] = 17;
     cogs[4] = 20;
     cogs[5] = 24;
     cogs[6] = 28;
     cogs[7] = 32;
     cogs[8] = 36;
     cogs[9] = 42;
     cogs[10] = 48;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 182 ){  // Garbaruk 11 speed 11-50	
    cassetteName = "Garbaruk 11 speed 11-50	";
     cogs[0] = 11;
     cogs[1] = 13;
     cogs[2] = 15;
     cogs[3] = 17;
     cogs[4] = 20;
     cogs[5] = 24;
     cogs[6] = 28;
     cogs[7] = 32;
     cogs[8] = 36;
     cogs[9] = 42;
     cogs[10] = 50;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 183 ){  // Hope 11 speed 10-40	10	
    cassetteName = "Hope 11 speed 10-40	10	";
     cogs[0] = 10
     cogs[1] = 12;
     cogs[2] = 14;
     cogs[3] = 16;
     cogs[4] = 18;
     cogs[5] = 21;
     cogs[6] = 24;
     cogs[7] = 28;
     cogs[8] = 32;
     cogs[9] = 36;
     cogs[10] = 40;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 184 ){  // Hope 11 speed 10-44	
    cassetteName = "Hope 11 speed 10-44	";
     cogs[0] = 10;
     cogs[1] = 12;
     cogs[2] = 14;
     cogs[3] = 16;
     cogs[4] = 18;
     cogs[5] = 21;
     cogs[6] = 24;
     cogs[7] = 28;
     cogs[8] = 32;
     cogs[9] = 38;
     cogs[10] = 44;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 185 ){  // Hope 11 speed 10-48	
    cassetteName = "Hope 11 speed 10-48	";
     cogs[0] = 10;
     cogs[1] = 12;
     cogs[2] = 14;
     cogs[3] = 16;
     cogs[4] = 18;
     cogs[5] = 21;
     cogs[6] = 24;
     cogs[7] = 28;
     cogs[8] = 33;
     cogs[9] = 40;
     cogs[10] = 48;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 186 ){  // Leonardi 11 speed 9-36	
    cassetteName = "Leonardi 11 speed 9-36	";
     cogs[0] = 9;
     cogs[1] = 10;
     cogs[2] = 12;
     cogs[3] = 14;
     cogs[4] = 16;
     cogs[5] = 18;
     cogs[6] = 20;
     cogs[7] = 23;
     cogs[8] = 27;
     cogs[9] = 31;
     cogs[10] = 36;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 187 ){  // Leonardi 11 speed 9-42	
    cassetteName = "Leonardi 11 speed 9-42	";
     cogs[0] = 9;
     cogs[1] = 11;
     cogs[2] = 13;
     cogs[3] = 15;
     cogs[4] = 17;
     cogs[5] = 20;
     cogs[6] = 23;
     cogs[7] = 27;
     cogs[8] = 31;
     cogs[9] = 36;
     cogs[10] = 42;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 188 ){  // Leonardi 11 speed 9-45	
    cassetteName = "Leonardi 11 speed 9-45	";
     cogs[0] = 9;
     cogs[1] = 11;
     cogs[2] = 13;
     cogs[3] = 15;
     cogs[4] = 17;
     cogs[5] = 20;
     cogs[6] = 23;
     cogs[7] = 27;
     cogs[8] = 32;
     cogs[9] = 38;
     cogs[10] = 45;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 189 ){  // Microsh ift 11-speed 11-25	
    cassetteName = "Microsh ift 11-speed 11-25	";
     cogs[0] = 11;
     cogs[1] = 12;
     cogs[2] = 13;
     cogs[3] = 14;
     cogs[4] = 15;
     cogs[5] = 16;
     cogs[6] = 17;
     cogs[7] = 19;
     cogs[8] = 21;
     cogs[9] = 23;
     cogs[10] = 25;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 190 ){  // Microsh ift 11-speed 11-28	
    cassetteName = "Microsh ift 11-speed 11-28	";
     cogs[0] = 11;
     cogs[1] = 12;
     cogs[2] = 13;
     cogs[3] = 14;
     cogs[4] = 15;
     cogs[5] = 16;
     cogs[6] = 17;
     cogs[7] = 19;
     cogs[8] = 21;
     cogs[9] = 24;
     cogs[10] = 28;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 191 ){  // Microsh ift 11-speed 11-32	
    cassetteName = "Microsh ift 11-speed 11-32	";
     cogs[0] = 11;
     cogs[1] = 12;
     cogs[2] = 13;
     cogs[3] = 14;
     cogs[4] = 15;
     cogs[5] = 17;
     cogs[6] = 19;
     cogs[7] = 21;
     cogs[8] = 24;
     cogs[9] = 28;
     cogs[10] = 32;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 192 ){  // Microsh ift 11-speed 11-40	
    cassetteName = "Microsh ift 11-speed 11-40	";
     cogs[0] = 11;
     cogs[1] = 13;
     cogs[2] = 15;
     cogs[3] = 17;
     cogs[4] = 19;
     cogs[5] = 21;
     cogs[6] = 24;
     cogs[7] = 28;
     cogs[8] = 32;
     cogs[9] = 36;
     cogs[10] = 40;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 193 ){  // Microsh ift 11-speed 11-42	
    cassetteName = "Microsh ift 11-speed 11-42	";
     cogs[0] = 11;
     cogs[1] = 13;
     cogs[2] = 15;
     cogs[3] = 17;
     cogs[4] = 19;
     cogs[5] = 21;
     cogs[6] = 24;
     cogs[7] = 28;
     cogs[8] = 32;
     cogs[9] = 36;
     cogs[10] = 42;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 194 ){  // Sunrace 11 speed 10-42	
    cassetteName = "Sunrace 11 speed 10-42	";
     cogs[0] = 10;
     cogs[1] = 12;
     cogs[2] = 14;
     cogs[3] = 16;
     cogs[4] = 18;
     cogs[5] = 21;
     cogs[6] = 24;
     cogs[7] = 28;
     cogs[8] = 32;
     cogs[9] = 36;
     cogs[10] = 42;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 195 ){  // Sunrace 11 speed 11-40	
    cassetteName = "Sunrace 11 speed 11-40	";
     cogs[0] = 11;
     cogs[1] = 13;
     cogs[2] = 15;
     cogs[3] = 17;
     cogs[4] = 19;
     cogs[5] = 21;
     cogs[6] = 24;
     cogs[7] = 28;
     cogs[8] = 32;
     cogs[9] = 36;
     cogs[10] = 40;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 196 ){  // Sunrace 11 speed 11-42	
    cassetteName = "Sunrace 11 speed 11-42	";
     cogs[0] = 11;
     cogs[1] = 13;
     cogs[2] = 15;
     cogs[3] = 17;
     cogs[4] = 19;
     cogs[5] = 21;
     cogs[6] = 24;
     cogs[7] = 28;
     cogs[8] = 32;
     cogs[9] = 36;
     cogs[10] = 42;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 197 ){  // Sunrace 11 speed 11-46	
    cassetteName = "Sunrace 11 speed 11-46	";
     cogs[0] = 11;
     cogs[1] = 13;
     cogs[2] = 15;
     cogs[3] = 18;
     cogs[4] = 21;
     cogs[5] = 24;
     cogs[6] = 28;
     cogs[7] = 32;
     cogs[8] = 36;
     cogs[9] = 40;
     cogs[10] = 46;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 198 ){  // Sunrace 11 speed 11-50	
    cassetteName = "Sunrace 11 speed 11-50	";
     cogs[0] = 11;
     cogs[1] = 13;
     cogs[2] = 15;
     cogs[3] = 18;
     cogs[4] = 21;
     cogs[5] = 24;
     cogs[6] = 28;
     cogs[7] = 32;
     cogs[8] = 36;
     cogs[9] = 42;
     cogs[10] = 50;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 199 ){  // Shimano 12 speed 10-45	
    cassetteName = "Shimano 12 speed 10-45	";
     cogs[0] = 10;
     cogs[1] = 12;
     cogs[2] = 14;
     cogs[3] = 16;
     cogs[4] = 18;
     cogs[5] = 21;
     cogs[6] = 24;
     cogs[7] = 28;
     cogs[8] = 32;
     cogs[9] = 36;
     cogs[10] = 40;
     cogs[11] = 45;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 200 ){  // Shimano 12 speed 10-51	
    cassetteName = "Shimano 12 speed 10-51	";
     cogs[0] = 10;
     cogs[1] = 12;
     cogs[2] = 14;
     cogs[3] = 16;
     cogs[4] = 18;
     cogs[5] = 21;
     cogs[6] = 24;
     cogs[7] = 28;
     cogs[8] = 33;
     cogs[9] = 39;
     cogs[10] = 45;
     cogs[11] = 51;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 201 ){  // SRAM 12 speed 10-50	
    cassetteName = "SRAM 12 speed 10-50	";
     cogs[0] = 10;
     cogs[1] = 12;
     cogs[2] = 14;
     cogs[3] = 16;
     cogs[4] = 18;
     cogs[5] = 21;
     cogs[6] = 24;
     cogs[7] = 28;
     cogs[8] = 32;
     cogs[9] = 36;
     cogs[10] = 42;
     cogs[11] = 50	;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 202 ){  // SRAM 12 speed 11-50	
    cassetteName = "SRAM 12 speed 11-50	";
     cogs[0] = 11;
     cogs[1] = 13;
     cogs[2] = 15;
     cogs[3] = 17;
     cogs[4] = 19;
     cogs[5] = 22;
     cogs[6] = 25;
     cogs[7] = 28;
     cogs[8] = 32;
     cogs[9] = 36;
     cogs[10] = 42;
     cogs[11] = 50	;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 203 ){  // e*thirteen 12 speed 9-46	
    cassetteName = "e*thirteen 12 speed 9-46	";
     cogs[0] = 9;
     cogs[1] = 10;
     cogs[2] = 12;
     cogs[3] = 14;
     cogs[4] = 16;
     cogs[5] = 18;
     cogs[6] = 21;
     cogs[7] = 24;
     cogs[8] = 28;
     cogs[9] = 33;
     cogs[10] = 39;
     cogs[11] = 46;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 204 ){  // Garbaruk 12 speed 10-48	
    cassetteName = "Garbaruk 12 speed 10-48	";
     cogs[0] = 10;
     cogs[1] = 12;
     cogs[2] = 14;
     cogs[3] = 16;
     cogs[4] = 18;
     cogs[5] = 21;
     cogs[6] = 24;
     cogs[7] = 28;
     cogs[8] = 32;
     cogs[9] = 36;
     cogs[10] = 42;
     cogs[11] = 48;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 205 ){  // Garbaruk 12 speed 10-50	
    cassetteName = "Garbaruk 12 speed 10-50	";
     cogs[0] = 10;
     cogs[1] = 12;
     cogs[2] = 14;
     cogs[3] = 16;
     cogs[4] = 18;
     cogs[5] = 21;
     cogs[6] = 24;
     cogs[7] = 28;
     cogs[8] = 32;
     cogs[9] = 36;
     cogs[10] = 42;
     cogs[11] = 50;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 206 ){  // Leonardi 12 speed 9-46	
    cassetteName = "Leonardi 12 speed 9-46	";
     cogs[0] = 9;
     cogs[1] = 11;
     cogs[2] = 13;
     cogs[3] = 15;
     cogs[4] = 17;
     cogs[5] = 20;
     cogs[6] = 23;
     cogs[7] = 27;
     cogs[8] = 31;
     cogs[9] = 35;
     cogs[10] = 40;
     cogs[11] = 46;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 207 ){  // Leonardi 12 speed 9-48	
    cassetteName = "Leonardi 12 speed 9-48	";
     cogs[0] = 9;
     cogs[1] = 11;
     cogs[2] = 13;
     cogs[3] = 15;
     cogs[4] = 17;
     cogs[5] = 20;
     cogs[6] = 23;
     cogs[7] = 27;
     cogs[8] = 31;
     cogs[9] = 35;
     cogs[10] = 41;
     cogs[11] = 48;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 208 ){  // Rotor 12 speed 11-36	
    cassetteName = "Rotor 12 speed 11-36	";
     cogs[0] = 11;
     cogs[1] = 12;
     cogs[2] = 13;
     cogs[3] = 14;
     cogs[4] = 15;
     cogs[5] = 17;
     cogs[6] = 19;
     cogs[7] = 21;
     cogs[8] = 24;
     cogs[9] = 27;
     cogs[10] = 31;
     cogs[11] = 36;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 209 ){  // Rotor 12 speed 11-39	
    cassetteName = "Rotor 12 speed 11-39	";
     cogs[0] = 11;
     cogs[1] = 12;
     cogs[2] = 13;
     cogs[3] = 14;
     cogs[4] = 15;
     cogs[5] = 17;
     cogs[6] = 19;
     cogs[7] = 21;
     cogs[8] = 24;
     cogs[9] = 28;
     cogs[10] = 33;
     cogs[11] = 39;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 210 ){  // Rotor 12 speed 11-46	
    cassetteName = "Rotor 12 speed 11-46	";
     cogs[0] = 11;
     cogs[1] = 12;
     cogs[2] = 13;
     cogs[3] = 15;
     cogs[4] = 17;
     cogs[5] = 19;
     cogs[6] = 22;
     cogs[7] = 25;
     cogs[8] = 29;
     cogs[9] = 34;
     cogs[10] = 39;
     cogs[11] = 46;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 211 ){  // Rotor 12 speed 11-52	
    cassetteName = "Rotor 12 speed 11-52	";
     cogs[0] = 11;
     cogs[1] = 12;
     cogs[2] = 13;
     cogs[3] = 15;
     cogs[4] = 17;
     cogs[5] = 19;
     cogs[6] = 22;
     cogs[7] = 26;
     cogs[8] = 31;
     cogs[9] = 37;
     cogs[10] = 44;
     cogs[11] = 52;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 212 ){  // Sunrace 12 speed 10-50	
    cassetteName = "Sunrace 12 speed 10-50	";
     cogs[0] = 10;
     cogs[1] = 12;
     cogs[2] = 14;
     cogs[3] = 16;
     cogs[4] = 18;
     cogs[5] = 21;
     cogs[6] = 24;
     cogs[7] = 28;
     cogs[8] = 32;
     cogs[9] = 36;
     cogs[10] = 42;
     cogs[11] = 50;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 213 ){  // Sunrace 12 speed 11-50	
    cassetteName = "Sunrace 12 speed 11-50	";
     cogs[0] = 11;
     cogs[1] = 13;
     cogs[2] = 15;
     cogs[3] = 17;
     cogs[4] = 19;
     cogs[5] = 21;
     cogs[6] = 24;
     cogs[7] = 28;
     cogs[8] = 32;
     cogs[9] = 36;
     cogs[10] = 42;
     cogs[11] = 50;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 214 ){  // Rotor 13 speed 10-36	
    cassetteName = "Rotor 13 speed 10-36	";
     cogs[0] = 10;
     cogs[1] = 11;
     cogs[2] = 12;
     cogs[3] = 13;
     cogs[4] = 14;
     cogs[5] = 15;
     cogs[6] = 17;
     cogs[7] = 19;
     cogs[8] = 21;
     cogs[9] = 24;
     cogs[10] = 27;
     cogs[11] = 31;
     cogs[12] = 36;
   }
    if ( cassetteSelection == 215 ){  // Rotor 13 speed 10-39	
    cassetteName = "Rotor 13 speed 10-39	";
     cogs[0] = 10;
     cogs[1] = 11;
     cogs[2] = 12;
     cogs[3] = 13;
     cogs[4] = 14;
     cogs[5] = 15;
     cogs[6] = 17;
     cogs[7] = 19;
     cogs[8] = 21;
     cogs[9] = 24;
     cogs[10] = 28;
     cogs[11] = 33;
     cogs[12] = 39;
   }
    if ( cassetteSelection == 216 ){  // Rotor 13 speed 10-46	
    cassetteName = "Rotor 13 speed 10-46	";
     cogs[0] = 10;
     cogs[1] = 11;
     cogs[2] = 12;
     cogs[3] = 13;
     cogs[4] = 15;
     cogs[5] = 17;
     cogs[6] = 19;
     cogs[7] = 22;
     cogs[8] = 25;
     cogs[9] = 29;
     cogs[10] = 34;
     cogs[11] = 39;
     cogs[12] = 46;
   }
    if ( cassetteSelection == 217 ){  // Rotor 13 speed 10-52	
    cassetteName = "Rotor 13 speed 10-52	";
     cogs[0] = 10;
     cogs[1] = 11;
     cogs[2] = 12;
     cogs[3] = 13;
     cogs[4] = 15;
     cogs[5] = 17;
     cogs[6] = 19;
     cogs[7] = 22;
     cogs[8] = 26;
     cogs[9] = 31;
     cogs[10] = 37;
     cogs[11] = 44;
     cogs[12] = 52;
   }
    if ( cassetteSelection == 218){   // SRAM 10-speed 11-36T
    cassetteName = "SRAM 10-speed 11-36T";
     cogs[0] = 11;
     cogs[1] = 12;
     cogs[2] = 14;
     cogs[3] = 16;
     cogs[4] = 18;
     cogs[5] = 21;
     cogs[6] = 26;
     cogs[7] = 28;
     cogs[8] = 32;
     cogs[9] = 36;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 219){   // SRAM 10-speed 11-36T
    cassetteName = "SRAM 10-speed 11-36T";
     cogs[0] = 11;
     cogs[1] = 12;
     cogs[2] = 14;
     cogs[3] = 16;
     cogs[4] = 18;
     cogs[5] = 21;
     cogs[6] = 24;
     cogs[7] = 28;
     cogs[8] = 32;
     cogs[9] = 36;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 220){   // SRAM 10-speed 11-36T
    cassetteName = "SRAM 10-speed 11-36T";
     cogs[0] = 11;
     cogs[1] = 13;
     cogs[2] = 15;
     cogs[3] = 17;
     cogs[4] = 19;
     cogs[5] = 22;
     cogs[6] = 25;
     cogs[7] = 28;
     cogs[8] = 32;
     cogs[9] = 36;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 227){   // SRAM 10-speed 12-36T
    cassetteName = "SRAM 10-speed 12-36T";
     cogs[0] = 12;
     cogs[1] = 13;
     cogs[2] = 15;
     cogs[3] = 17;
     cogs[4] = 19;
     cogs[5] = 22;
     cogs[6] = 25;
     cogs[7] = 28;
     cogs[8] = 32;
     cogs[9] = 36;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 221){   // Shimano 10-speed 11-21T
    cassetteName = "Shimano 10-speed 11-21T";
     cogs[0] = 11;
     cogs[1] = 12;
     cogs[2] = 13;
     cogs[3] = 14;
     cogs[4] = 15;
     cogs[5] = 16;
     cogs[6] = 17;
     cogs[7] = 18;
     cogs[8] = 19;
     cogs[9] = 21;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 222){   // Shimano 10-speed 12-28T
    cassetteName = "Shimano 10-speed 12-28T";
     cogs[0] = 12;
     cogs[1] = 13;
     cogs[2] = 14;
     cogs[3] = 15;
     cogs[4] = 17;
     cogs[5] = 19;
     cogs[6] = 21;
     cogs[7] = 23;
     cogs[8] = 25;
     cogs[9] = 28;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 223){   // Shimano 10-speed 12-30T
    cassetteName = "Shimano 10-speed 12-30T";
     cogs[0] = 12;
     cogs[1] = 13;
     cogs[2] = 14;
     cogs[3] = 15;
     cogs[4] = 17;
     cogs[5] = 19;
     cogs[6] = 21;
     cogs[7] = 24;
     cogs[8] = 27;
     cogs[9] = 30;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 224){   // Shimano 10-speed 14-25T
    cassetteName = "Shimano 10-speed 14-25T";
     cogs[0] = 14;
     cogs[1] = 15;
     cogs[2] = 16;
     cogs[3] = 17;
     cogs[4] = 19;
     cogs[5] = 19;
     cogs[6] = 20;
     cogs[7] = 21;
     cogs[8] = 23;
     cogs[9] = 25;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 225){   // Shimano 10-speed 15-25T
    cassetteName = "Shimano 10-speed 15-25T";
     cogs[0] = 15;
     cogs[1] = 16;
     cogs[2] = 17;
     cogs[3] = 19;
     cogs[4] = 19;
     cogs[5] = 20;
     cogs[6] = 21;
     cogs[7] = 22;
     cogs[8] = 23;
     cogs[9] = 25;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 226){   // Shimano 10-speed 16-27T
    cassetteName = "Shimano 10-speed 16-27T";
     cogs[0] = 16;
     cogs[1] = 17;
     cogs[2] = 19;
     cogs[3] = 19;
     cogs[4] = 20;
     cogs[5] = 21;
     cogs[6] = 22;
     cogs[7] = 23;
     cogs[8] = 25;
     cogs[9] = 27;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 228){   // Edco 10-speed 11-32T
    cassetteName = "Edco 10-speed 11-32T";
     cogs[0] = 11;
     cogs[1] = 12;
     cogs[2] = 13;
     cogs[3] = 14;
     cogs[4] = 15;
     cogs[5] = 16;
     cogs[6] = 18;
     cogs[7] = 21;
     cogs[8] = 24;
     cogs[9] = 32;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 229){   // Edco 10-speed 11-25T
    cassetteName = "Edco 10-speed 11-25T";
     cogs[0] = 11;
     cogs[1] = 12;
     cogs[2] = 13;
     cogs[3] = 14;
     cogs[4] = 15;
     cogs[5] = 17;
     cogs[6] = 19;
     cogs[7] = 21;
     cogs[8] = 23;
     cogs[9] = 25;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 230){   // Edco 10-speed 11-28T
    cassetteName = "Edco 10-speed 11-28T";
     cogs[0] = 11;
     cogs[1] = 12;
     cogs[2] = 13;
     cogs[3] = 14;
     cogs[4] = 15;
     cogs[5] = 17;
     cogs[6] = 19;
     cogs[7] = 21;
     cogs[8] = 24;
     cogs[9] = 28;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 231){   // Edco 10-speed 11-29T
    cassetteName = "Edco 10-speed 11-29T";
     cogs[0] = 11;
     cogs[1] = 12;
     cogs[2] = 13;
     cogs[3] = 14;
     cogs[4] = 15;
     cogs[5] = 17;
     cogs[6] = 21;
     cogs[7] = 24;
     cogs[8] = 27;
     cogs[9] = 29;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 232){   // Edco 10-speed 12-25T
    cassetteName = "Edco 10-speed 12-25T";
     cogs[0] = 12;
     cogs[1] = 13;
     cogs[2] = 14;
     cogs[3] = 15;
     cogs[4] = 16;
     cogs[5] = 17;
     cogs[6] = 19;
     cogs[7] = 21;
     cogs[8] = 23;
     cogs[9] = 25;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 233){   // Edco 10-speed 12-27T
    cassetteName = "Edco 10-speed 12-27T";
     cogs[0] = 12;
     cogs[1] = 13;
     cogs[2] = 14;
     cogs[3] = 15;
     cogs[4] = 16;
     cogs[5] = 17;
     cogs[6] = 19;
     cogs[7] = 21;
     cogs[8] = 24;
     cogs[9] = 27;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 234){   // Garbaruk 10-speed 11-42T
    cassetteName = "Garbaruk 10-speed 11-42T";
     cogs[0] = 11;
     cogs[1] = 13;
     cogs[2] = 15;
     cogs[3] = 17;
     cogs[4] = 20;
     cogs[5] = 24;
     cogs[6] = 28;
     cogs[7] = 32;
     cogs[8] = 38;
     cogs[9] = 42;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 235){   // Garbaruk 10-speed 11-45T
    cassetteName = "Garbaruk 10-speed 11-45T";
     cogs[0] = 11;
     cogs[1] = 13;
     cogs[2] = 15;
     cogs[3] = 17;
     cogs[4] = 20;
     cogs[5] = 24;
     cogs[6] = 28;
     cogs[7] = 32;
     cogs[8] = 38;
     cogs[9] = 45;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 236){   // microSH ifT 10-speed 11-25T
    cassetteName = "microSH ifT 10-speed 11-25T";
     cogs[0] = 11;
     cogs[1] = 12;
     cogs[2] = 13;
     cogs[3] = 14;
     cogs[4] = 15;
     cogs[5] = 17;
     cogs[6] = 19;
     cogs[7] = 21;
     cogs[8] = 23;
     cogs[9] = 25;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 237){   // microSH ifT 10-speed 11-28T
    cassetteName = "microSH ifT 10-speed 11-28T";
     cogs[0] = 11;
     cogs[1] = 12;
     cogs[2] = 13;
     cogs[3] = 14;
     cogs[4] = 15;
     cogs[5] = 17;
     cogs[6] = 19;
     cogs[7] = 21;
     cogs[8] = 24;
     cogs[9] = 28;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 238){   // microSH ifT 10-speed 11-32T
    cassetteName = "microSH ifT 10-speed 11-32T";
     cogs[0] = 11;
     cogs[1] = 12;
     cogs[2] = 13;
     cogs[3] = 15;
     cogs[4] = 17;
     cogs[5] = 19;
     cogs[6] = 21;
     cogs[7] = 24;
     cogs[8] = 28;
     cogs[9] = 32;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 239){   // microSH ifT 10-speed 11-34T
    cassetteName = "microSH ifT 10-speed 11-34T";
     cogs[0] = 11;
     cogs[1] = 12;
     cogs[2] = 13;
     cogs[3] = 15;
     cogs[4] = 17;
     cogs[5] = 19;
     cogs[6] = 21;
     cogs[7] = 24;
     cogs[8] = 28;
     cogs[9] = 34;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 240){   // microSH ifT 10-speed 11-36T
    cassetteName = "microSH ifT 10-speed 11-36T";
     cogs[0] = 11;
     cogs[1] = 13;
     cogs[2] = 15;
     cogs[3] = 17;
     cogs[4] = 19;
     cogs[5] = 21;
     cogs[6] = 24;
     cogs[7] = 28;
     cogs[8] = 32;
     cogs[9] = 36;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 241){   // microSH ifT 10-speed 11-40T
    cassetteName = "microSH ifT 10-speed 11-40T";
     cogs[0] = 11;
     cogs[1] = 13;
     cogs[2] = 15;
     cogs[3] = 18;
     cogs[4] = 21;
     cogs[5] = 24;
     cogs[6] = 28;
     cogs[7] = 32;
     cogs[8] = 36;
     cogs[9] = 40;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 242){   // microSH ifT 10-speed 11-42T
    cassetteName = "microSH ifT 10-speed 11-42T";
     cogs[0] = 11;
     cogs[1] = 13;
     cogs[2] = 15;
     cogs[3] = 18;
     cogs[4] = 21;
     cogs[5] = 24;
     cogs[6] = 28;
     cogs[7] = 32;
     cogs[8] = 36;
     cogs[9] = 42;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 243){   // SunRace 10-speed 11-25T
    cassetteName = "SunRace 10-speed 11-25T";
     cogs[0] = 11;
     cogs[1] = 12;
     cogs[2] = 13;
     cogs[3] = 14;
     cogs[4] = 15;
     cogs[5] = 17;
     cogs[6] = 19;
     cogs[7] = 21;
     cogs[8] = 23;
     cogs[9] = 25;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 244){   // SunRace 10-speed 11-28T
    cassetteName = "SunRace 10-speed 11-28T";
     cogs[0] = 11;
     cogs[1] = 12;
     cogs[2] = 13;
     cogs[3] = 14;
     cogs[4] = 15;
     cogs[5] = 17;
     cogs[6] = 19;
     cogs[7] = 21;
     cogs[8] = 24;
     cogs[9] = 28;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 245){   // SunRace 10-speed 11-32T
    cassetteName = "SunRace 10-speed 11-32T";
     cogs[0] = 11;
     cogs[1] = 12;
     cogs[2] = 13;
     cogs[3] = 15;
     cogs[4] = 17;
     cogs[5] = 19;
     cogs[6] = 21;
     cogs[7] = 24;
     cogs[8] = 28;
     cogs[9] = 32;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 246){   // SunRace 10-speed 11-34T
    cassetteName = "SunRace 10-speed 11-34T";
     cogs[0] = 11;
     cogs[1] = 12;
     cogs[2] = 13;
     cogs[3] = 15;
     cogs[4] = 17;
     cogs[5] = 19;
     cogs[6] = 21;
     cogs[7] = 24;
     cogs[8] = 28;
     cogs[9] = 34;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 247){   // SunRace 10-speed 11-36T
    cassetteName = "SunRace 10-speed 11-36T";
     cogs[0] = 11;
     cogs[1] = 13;
     cogs[2] = 15;
     cogs[3] = 17;
     cogs[4] = 19;
     cogs[5] = 21;
     cogs[6] = 24;
     cogs[7] = 28;
     cogs[8] = 32;
     cogs[9] = 36;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 248){   // SunRace 10-speed 11-40T
    cassetteName = "SunRace 10-speed 11-40T";
     cogs[0] = 11;
     cogs[1] = 13;
     cogs[2] = 15;
     cogs[3] = 18;
     cogs[4] = 21;
     cogs[5] = 24;
     cogs[6] = 28;
     cogs[7] = 32;
     cogs[8] = 36;
     cogs[9] = 40;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 249){   // SunRace 10-speed 11-42T
    cassetteName = "SunRace 10-speed 11-42T";
     cogs[0] = 11;
     cogs[1] = 13;
     cogs[2] = 15;
     cogs[3] = 18;
     cogs[4] = 21;
     cogs[5] = 24;
     cogs[6] = 28;
     cogs[7] = 32;
     cogs[8] = 36;
     cogs[9] = 42;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 250){   // SunRace 10-speed 12-28T
    cassetteName = "SunRace 10-speed 12-28T";
     cogs[0] = 12;
     cogs[1] = 13;
     cogs[2] = 14;
     cogs[3] = 15;
     cogs[4] = 17;
     cogs[5] = 19;
     cogs[6] = 21;
     cogs[7] = 23;
     cogs[8] = 25;
     cogs[9] = 28;
     cogs[10] = 999;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 251){   // Edco 11-speed 11-23T
    cassetteName = "Edco 11-speed 11-23T";
     cogs[0] = 11;
     cogs[1] = 12;
     cogs[2] = 13;
     cogs[3] = 14;
     cogs[4] = 15;
     cogs[5] = 16;
     cogs[6] = 17;
     cogs[7] = 18;
     cogs[8] = 19;
     cogs[9] = 21;
     cogs[10] = 23;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 252){   // Edco 11-speed 11-25T
    cassetteName = "Edco 11-speed 11-25T";
     cogs[0] = 11;
     cogs[1] = 12;
     cogs[2] = 13;
     cogs[3] = 14;
     cogs[4] = 15;
     cogs[5] = 16;
     cogs[6] = 17;
     cogs[7] = 19;
     cogs[8] = 21;
     cogs[9] = 23;
     cogs[10] = 25;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 253){   // Edco 11-speed 11-27T
    cassetteName = "Edco 11-speed 11-27T";
     cogs[0] = 11;
     cogs[1] = 12;
     cogs[2] = 13;
     cogs[3] = 14;
     cogs[4] = 15;
     cogs[5] = 16;
     cogs[6] = 17;
     cogs[7] = 19;
     cogs[8] = 21;
     cogs[9] = 24;
     cogs[10] = 27;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 254){   // Edco 11-speed 11-32T
    cassetteName = "Edco 11-speed 11-32T";
     cogs[0] = 11;
     cogs[1] = 12;
     cogs[2] = 13;
     cogs[3] = 14;
     cogs[4] = 15;
     cogs[5] = 16;
     cogs[6] = 18;
     cogs[7] = 21;
     cogs[8] = 24;
     cogs[9] = 28;
     cogs[10] = 32;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 255){   // Edco 11-speed 11-28T
    cassetteName = "Edco 11-speed 11-28T";
     cogs[0] = 11;
     cogs[1] = 12;
     cogs[2] = 13;
     cogs[3] = 14;
     cogs[4] = 15;
     cogs[5] = 17;
     cogs[6] = 19;
     cogs[7] = 21;
     cogs[8] = 23;
     cogs[9] = 25;
     cogs[10] = 28;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 256){   // Edco 11-speed 11-29T
    cassetteName = "Edco 11-speed 11-29T";
     cogs[0] = 11;
     cogs[1] = 12;
     cogs[2] = 13;
     cogs[3] = 14;
     cogs[4] = 15;
     cogs[5] = 17;
     cogs[6] = 19;
     cogs[7] = 21;
     cogs[8] = 24;
     cogs[9] = 27;
     cogs[10] = 29;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 257){   // Edco 11-speed 12-25T
    cassetteName = "Edco 11-speed 12-25T";
     cogs[0] = 12;
     cogs[1] = 13;
     cogs[2] = 14;
     cogs[3] = 15;
     cogs[4] = 16;
     cogs[5] = 17;
     cogs[6] = 18;
     cogs[7] = 19;
     cogs[8] = 21;
     cogs[9] = 23;
     cogs[10] = 25;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 258){   // Edco 11-speed 12-27T
    cassetteName = "Edco 11-speed 12-27T";
     cogs[0] = 12;
     cogs[1] = 13;
     cogs[2] = 14;
     cogs[3] = 15;
     cogs[4] = 16;
     cogs[5] = 17;
     cogs[6] = 18;
     cogs[7] = 19;
     cogs[8] = 21;
     cogs[9] = 24;
     cogs[10] = 27;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 259){   // Edco 11-speed 12-28T
    cassetteName = "Edco 11-speed 12-28T";
     cogs[0] = 12;
     cogs[1] = 13;
     cogs[2] = 14;
     cogs[3] = 15;
     cogs[4] = 16;
     cogs[5] = 17;
     cogs[6] = 19;
     cogs[7] = 21;
     cogs[8] = 23;
     cogs[9] = 25;
     cogs[10] = 28;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 260){   // Edco 11-speed 12-29T
    cassetteName = "Edco 11-speed 12-29T";
     cogs[0] = 12;
     cogs[1] = 13;
     cogs[2] = 14;
     cogs[3] = 15;
     cogs[4] = 16;
     cogs[5] = 17;
     cogs[6] = 19;
     cogs[7] = 21;
     cogs[8] = 24;
     cogs[9] = 27;
     cogs[10] = 29;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 261){   // Edco 11-speed 14-27T
    cassetteName = "Edco 11-speed 14-27T";
     cogs[0] = 14;
     cogs[1] = 15;
     cogs[2] = 16;
     cogs[3] = 17;
     cogs[4] = 18;
     cogs[5] = 19;
     cogs[6] = 20;
     cogs[7] = 21;
     cogs[8] = 23;
     cogs[9] = 25;
     cogs[10] = 27;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 262){   // Edco 11-speed 14-25T
    cassetteName = "Edco 11-speed 14-25T";
     cogs[0] = 14;
     cogs[1] = 15;
     cogs[2] = 16;
     cogs[3] = 17;
     cogs[4] = 18;
     cogs[5] = 19;
     cogs[6] = 21;
     cogs[7] = 22;
     cogs[8] = 23;
     cogs[9] = 24;
     cogs[10] = 25;
     cogs[11] = 999;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 263){   // e*thirteen 12-speed 9-50T
    cassetteName = "e*thirteen 12-speed 9-50T";
     cogs[0] = 9;
     cogs[1] = 11;
     cogs[2] = 13;
     cogs[3] = 15;
     cogs[4] = 17;
     cogs[5] = 20;
     cogs[6] = 23;
     cogs[7] = 27;
     cogs[8] = 31;
     cogs[9] = 36;
     cogs[10] = 42;
     cogs[11] = 50;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 264){   // Edco 12-speed 11-32T
    cassetteName = "Edco 12-speed 11-32T";
     cogs[0] = 11;
     cogs[1] = 12;
     cogs[2] = 13;
     cogs[3] = 14;
     cogs[4] = 15;
     cogs[5] = 16;
     cogs[6] = 17;
     cogs[7] = 19;
     cogs[8] = 22;
     cogs[9] = 25;
     cogs[10] = 28;
     cogs[11] = 32;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 265){   // Rotor 12-speed 11-36T
    cassetteName = "Rotor 12-speed 11-36T";
     cogs[0] = 11;
     cogs[1] = 12;
     cogs[2] = 13;
     cogs[3] = 14;
     cogs[4] = 15;
     cogs[5] = 17;
     cogs[6] = 19;
     cogs[7] = 21;
     cogs[8] = 24;
     cogs[9] = 27;
     cogs[10] = 31;
     cogs[11] = 36;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 266){   // Rotor 12-speed 11-39T
    cassetteName = "Rotor 12-speed 11-39T";
     cogs[0] = 11;
     cogs[1] = 12;
     cogs[2] = 13;
     cogs[3] = 14;
     cogs[4] = 15;
     cogs[5] = 17;
     cogs[6] = 19;
     cogs[7] = 21;
     cogs[8] = 24;
     cogs[9] = 28;
     cogs[10] = 33;
     cogs[11] = 39;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 267){   // Rotor 12-speed 11-46T
    cassetteName = "Rotor 12-speed 11-46T";
     cogs[0] = 11;
     cogs[1] = 12;
     cogs[2] = 13;
     cogs[3] = 15;
     cogs[4] = 17;
     cogs[5] = 19;
     cogs[6] = 22;
     cogs[7] = 25;
     cogs[8] = 29;
     cogs[9] = 34;
     cogs[10] = 39;
     cogs[11] = 46;
     cogs[12] = 999;
   }
    if ( cassetteSelection == 268){   // Rotor 12-speed 11-52T
    cassetteName = "Rotor 12-speed 11-52T";
     cogs[0] = 11;
     cogs[1] = 12;
     cogs[2] = 13;
     cogs[3] = 15;
     cogs[4] = 17;
     cogs[5] = 19;
     cogs[6] = 22;
     cogs[7] = 26;
     cogs[8] = 31;
     cogs[9] = 37;
     cogs[10] = 44;
     cogs[11] = 52;
     cogs[12] = 999;
   }
  
  // lastCassetteName = cassetteName;
  debugString = cassetteSelection;
  updateOutput();
}
