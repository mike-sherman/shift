// ---=== wheel radius' taken from Sheldon Browns web page ===---
// 
//
// Copyright (c) 2004-2017 Michael Sherman. All rights reserved.
//
// LICENSE: LGPL
// 
// see shift.js for revision history
//
// wheel size data arrays
wheel = new Array();
alt = new Array();
radius = new Array();
diameter = new Array();





//
// Wheel size data - this defines the value of the Wheel array
//
wheel[0]="27 x 1 3/8";
alt[0]="";
radius[0]=345;
diameter[0]=(345*2)/25.4;
//
wheel[1]="27 x 1 1/4";
alt[1]="";
radius[1]=343;
diameter[1]=(343*2)/25.4;
//
wheel[2]="27 x 1 1/8";
alt[2]="";
radius[2]=342;
diameter[2]=(342*2)/25.4;
//
wheel[3]="27 x 1";
alt[3]="";
radius[3]=340;
diameter[3]=(340*2)/25.4;
//
wheel[4]="700 x 44";
alt[4]="";
radius[4]=354;
diameter[4]=(354*2)/25.4;
//
wheel[5]="700 x 38";
alt[5]="";
radius[5]=347;
diameter[5]=(347*2)/25.4;
//
wheel[6]="700 x 35";	// 311+35 = 346 (-1)
alt[6]="";
radius[6]=345;
diameter[6]=(345*2)/25.4;
//
wheel[7]="700 x 32";   // (622/2)+32 = 343   (-1)
alt[7]="";
radius[7]=342;
diameter[7]=(342*2)/25.4;
//
wheel[8]="700 x 28";	// 311+28 = 339   (-1)
alt[8]="";
radius[8]=338;
diameter[8]=(338*2)/25.4;
//
wheel[9]="700 x 25";	// 311+25 = 336   (-1)
alt[9]="";
radius[9]=335;
diameter[9]=(335*2)/25.4;
//
wheel[10]="700 x 20";			// 311+20 = 331
alt[10]="";
radius[10]=330;
diameter[10]=(330*2)/25.4;
//
wheel[11]="28mm tubular";		// 338-311 = 27
alt[11]="wide tubular";
radius[11]=338;
diameter[11]=(338*2)/25.4;
//
wheel[12]="25mm tubular";		//335-311=24
alt[12]="narrow tubular";
radius[12]=335;
diameter[12]=(335*2)/25.4;
//
wheel[13]="650B x 40";
alt[13]="";
radius[13]=331;
diameter[13]=(331*2)/25.4;
//
wheel[14]="650B x 36";
alt[14]="";
radius[14]=327;
diameter[14]=(327*2)/25.4;
//
wheel[15]="650B x 33";
alt[15]="";
radius[15]=324;
diameter[15]=(324*2)/25.4;
//
wheel[16]="650B x 30";
alt[16]="";
radius[16]=321;
diameter[16]=(321*2)/25.4;
//
wheel[17]="26 x 2.125";
alt[17]="";
radius[17]=330;
diameter[17]=(330*2)/25.4;
//
wheel[18]="26 x 1.9";
alt[18]="";
radius[18]=324;
diameter[18]=(324*2)/25.4;
//
wheel[19]="26 x 1.5";
alt[19]="";
radius[19]=312;
diameter[19]=(312*2)/25.4;
//
wheel[20]="26 x 1.25";
alt[20]="";
radius[20]=311;
diameter[20]=(311*2)/25.4;
//
wheel[21]="26 x 1.0";
alt[21]="559mm";
radius[21]=305;
diameter[21]=(305*2)/25.4;
//
wheel[22]="650c";
alt[22]="26 x 1";
radius[22]=311;
diameter[22]=(311*2)/25.4;
//
wheel[23]="26 x 1 3/8";
alt[23]="590mm";
radius[23]=330;
diameter[23]=(330*2)/25.4;
//
wheel[24]="24";
alt[24]="";
radius[24]=305;
diameter[24]=(305*2)/25.4;
//
wheel[25]="24 x 1";
alt[25]="520mm";
radius[25]=279;
diameter[25]=(279*2)/25.4;
//
wheel[26]="20 x 1.75";
alt[26]="406mm";
radius[26]=254;
diameter[26]=(254*2)/25.4;
//
wheel[27]="20 x 1 1/4";
alt[27]="451mm";
radius[27]=257;
diameter[27]=(257*2)/25.4;
//
wheel[28]="17 x 1 1/4";
alt[28]="369mm";
radius[28]=211;
diameter[28]=(211*2)/25.4;
//
wheel[29]="16 x 1 3/8";
alt[29]="349mm";
radius[29]=204;
diameter[29]=(204*2)/25.4;
//
wheel[30]="29er x 1.9";		// 311+48 = 359 - subtract 1 like sheldon's #
alt[30]="700x48";
radius[30]=358;
diameter[30]=(358*2)/25.4;
//
wheel[31]="29er x 2.1";		//311+53 = 364
alt[31]="700x53";
radius[31]=363;
diameter[31]=(363*2)/25.4;
//
wheel[32]="29er x 2.2";		// 311+56 = 367
alt[32]="700x56";
radius[32]=366;
diameter[32]=(366*2)/25.4;
//
wheel[33]="23mm tubular";		//311+23=334
alt[33]="700x23";
radius[3]=333;
diameter[33]=(333*2)/25.4;
//
wheel[34]="20mm tubular";		//311+20=331
alt[34]="700x20";
radius[34]=330;
diameter[34]=(330*2)/25.4;
//
wheel[35]="700 x 23";	// 311+23 = 334   (-1)
alt[35]="";
radius[35]=333;
diameter[35]=(333*2)/25.4;
//
wheel[36]="20 x 1.5";	// 203+40-1 = 242
alt[36]="406mm";
radius[36]=242;
diameter[36]=(242*2)/25.4;
//
wheel[37]="700 x 30";   // (622/2)+30-1 = 340
alt[37]="";
radius[37]=340;
diameter[37]=(340*2)/25.4;
//
// 26x3.7, 26x4, 26x4.8 tires and 29x3
wheel[38]="26 x 3.7";   // (561/2)+94-1 = 373.5
alt[38]="";
radius[38]=373.5;
diameter[38]=(373.5*2)/25.4;
//
wheel[39]="26 x 4";   // (561/2)+101-1 = 381
alt[39]="";
radius[39]=381;
diameter[39]=(381*2)/25.4;
//
wheel[40]="26 x 4.8";   // (561/2)+122-1 = 401
alt[40]="";
radius[40]=401;
diameter[40]=(401*2)/25.4;
//
wheel[41]="29 x 3";   // (311/2)+76.2-1 = 230.7
alt[41]="700 x 76";
radius[41]=230.7;
diameter[41]=(230.7*2)/25.4;
//
// -----------end of wheel old size data-------------




// wheel sizes --------------------------------------
// removed leading 0's
wName[0] = "27 inch";
wNameA[0]="630 mm bead seat";
bead[0]=630;
//
wName[1] = "700C / 29er";
wNameA[1]="622 mm bead seat";
bead[1]=622;
//
wName[2] = "650B / 27.5";
wNameA[2]="584 mm bead seat";
bead[2]=584;
//
wName[3] = "26 inch";
wNameA[3]="559 mm bead seat";
bead[3]=559;
//
wName[4] = "650C";
wNameA[4]="571 mm bead seat";
bead[4]=571;
//
wName[5] = "26 x 1 3/8 (S-6)";
wNameA[5]="597 mm bead seat";
bead[5]=597;
//
wName[6] = "26 x 1 3/8 (E.A.3)";
wNameA[6]="590 mm bead seat";
bead[6]=590;
//
wName[8] = "20 inch";
wNameA[8]="451 mm bead seat";
bead[8]=451;
//
wName[7] = "Terry 24 x 1 inch";
wNameA[7]="520 mm bead seat";
bead[7]=520;
//
wName[9] = "16 inch";
wNameA[9]="349 mm bead seat";
bead[9]=349;
//

// tire sizes ------------------------------------
tName[0] ="18 mm";
tWidth[0] = 18;
//
tName[1] ="19 mm";
tWidth[1] = 19;
//
tName[2] ="20 mm";
tWidth[2] = 20;
//
tName[3] ="21 mm";
tWidth[3] = 21;
//
tName[4] ="22 mm";
tWidth[04] = 22;
//
tName[5] ="23 mm";
tWidth[5] = 23;
//
tName[6] ="24 mm";
tWidth[6] = 24;
//
tName[7] ="1 inch / 25 mm";
tWidth[7] = 25;
//
tName[8] ="26 mm";             // SyntaxError: 08 is not a legal ECMA-262 octal constant
tWidth[8] = 26;                // SyntaxError: 08 is not a legal ECMA-262 octal constant
//
tName[9] ="27 mm";             // SyntaxError: 09 is not a legal ECMA-262 octal constant
tWidth[9] = 27;                // SyntaxError: 09 is not a legal ECMA-262 octal constant
//
tName[10] ="1 1/8 inch / 28 mm";
tWidth[10] = 28;
//
tName[11] ="29 mm";
tWidth[11] = 29;
//
tName[12] ="30 mm";
tWidth[12] = 30;
//
tName[13] ="31 mm";
tWidth[13] = 31;
//
tName[14] ="1.25 inch / 32 mm";
tWidth[14] = 32;
//
tName[15] ="33 mm";
tWidth[15] = 33;
//
tName[16] ="1.34 inch / 34 mm";
tWidth[16] = 34;
//
tName[17] ="1.375 inch / 35 mm";
tWidth[17] = 35;
//
tName[18] ="36 mm";
tWidth[18] = 36;
//
tName[19] ="37 mm";
tWidth[19] = 37;
//
tName[20] ="38 mm";
tWidth[20] = 38;
//
tName[21] ="39 mm";
tWidth[21] = 39;
//
tName[22] ="40 mm";
tWidth[22] = 40;
//
tName[23] ="41 mm";
tWidth[23] = 41;
//
tName[24] ="42 mm";
tWidth[24] = 42;
//
tName[25] ="43 mm";
tWidth[25] = 43;
//
tName[26] ="44 mm";
tWidth[26] = 44;
//
tName[27] ="45 mm";
tWidth[27] = 45;
//
tName[28] ="46 mm";
tWidth[28] = 46;
//
tName[29] ="47 mm";
tWidth[29] = 47;
//
tName[30] ="1.9 inch / 48 mm";
tWidth[30] = 48;
//
tName[31] ="1.95 inch / 49 mm";
tWidth[31] = 49.00;
//
tName[32] ="50 mm";
tWidth[32] = 50.00;
//
tName[33] ="2.0 inch / 51 mm";
tWidth[33] = 50.80;
//
tName[34] ="51 mm";
tWidth[34] = 51.00;
//
tName[35] ="52 mm";
tWidth[35] = 52.00;
//
tName[36] ="2.1 inch / 53 mm";
tWidth[36] = 53.00;
//
tName[37] ="54 mm";
tWidth[37] = 54.00;
//
tName[38] ="55 mm";
tWidth[38] = 55.00;
//
tName[39] ="2.2 inch / 56 mm";
tWidth[39] = 56.00;
//
tName[40] ="57 mm";
tWidth[40] = 57.00;
//
tName[41] ="58 mm";
tWidth[41] = 58.00;
//
tName[42] ="2.3 inch";
tWidth[42] = 58.42;
//
tName[43] ="59 mm";
tWidth[43] = 59.00;
//
tName[44] ="60 mm";
tWidth[44] = 60.00;
//
tName[45] ="2.4 inch";
tWidth[45] = 60.96;
//
tName[46] ="65 mm";
tWidth[46] = 65.00;
//
tName[47] ="70 mm";
tWidth[47] = 70.00;
//
tName[48] ="75 mm";
tWidth[48] = 75.00;
//
tName[49] ="3.0 inch / 76 mm";
tWidth[49] = 76.00;
//
tName[50] ="80 mm";
tWidth[50] = 80.00;
//
tName[51] ="85 mm";
tWidth[51] = 85.00;
//
tName[52] ="90 mm";
tWidth[52] = 90.00;
//
tName[53] ="3.7 inch / 94 mm";
tWidth[53] = 93.98;
//
tName[54] ="95 mm";
tWidth[54] = 95.00;
//
tName[55] ="100 mm";
tWidth[55] = 100.00;
//
tName[56] ="4 inch / 101 mm";
tWidth[56] = 101.60;
//
tName[57] ="105 mm";
tWidth[57] = 105.00;
//
tName[58] ="110 mm";
tWidth[58] = 110.00;
//
tName[59] ="115 mm";
tWidth[59] = 115.00;
//
tName[60] ="120 mm";
tWidth[60] = 120.00;
//
tName[61] ="4.8 inch / 122 mm";
tWidth[61] = 121.92;
//
tName[62] ="125 mm";
tWidth[62] = 125.00;
//
