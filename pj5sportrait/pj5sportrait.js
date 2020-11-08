function setup() {
   createCanvas(600,600);
   noStroke();
}

function draw() {
//background
  background(215, 193, 135);

  
  //Neck (front)
  fill(255,229,200);
  noStroke()
  beginShape();
  vertex(415,533);
  vertex(418,499);
  vertex(225,390);
  vertex(218,436);
  vertex(254,510);
  vertex(299,549);
  vertex(358,572);
  vertex(392,579);
  vertex(406,552);

  endShape(CLOSE);
  
      //UnderShirt (front)
  fill(75);
  noStroke()
  beginShape();
  vertex(298,527);
  vertex(336,543);
  vertex(369,545);
  vertex(391,538);
  vertex(401,525);
  vertex(417,520);
  vertex(413,538);
  vertex(402,566);
  vertex(388,594);
  vertex(350,574);
  vertex(326,550);
  vertex(311,538);

  endShape(CLOSE);


  //Back Collar
  fill(112,40,14);
  noStroke()
  beginShape();
 vertex(218,429);
 vertex(205,376);
 vertex(229,366);
 vertex(241,399);

  endShape(CLOSE);
  
    //Shirt (w/o Collar)
  fill(175,64,23);
  noStroke()
  beginShape();
  vertex(1,511);
  vertex(79,469);
  vertex(143,445);
  vertex(171,435);
  vertex(173,424);
  vertex(190,401);
  vertex(207,376);
  vertex(218,372);
  vertex(207,387);
  vertex(214,412);
  vertex(226,436);
  vertex(261,486);
  vertex(275,505);
  vertex(298,527);
  vertex(326,548);
  vertex(362,573);
  vertex(392,580);
  vertex(408,545);
  vertex(417,517);
  vertex(454,470);
  vertex(464,486);
  vertex(488,490);
  vertex(511,502);
  vertex(541,525);
  vertex(583,560);
  vertex(599,599);
  vertex(0,598);

  endShape(CLOSE);
  
      //Collar
  fill(149,55,21);
  noStroke()
  beginShape();
  vertex(219,372);
  vertex(208,387);
  vertex(212,407);
  vertex(224,432);
  vertex(239,459);
  vertex(255,480);
       vertex(273,502);
       vertex(292,524);
       vertex(317,545);
       vertex(356,568);
       vertex(393,579);
       vertex(413,533);
       vertex(417,516);
       vertex(454,469);
       vertex(472,498);
       vertex(478,525);
       vertex(464,561);
       vertex(447,569);
       vertex(418,569);
       vertex(405,574);
       vertex(391,595);
       vertex(360,580);
       vertex(336,560);
       vertex(305,571);
       vertex(271,599);
       vertex(253,597);
       vertex(239,554);
       vertex(217,513);
       vertex(200,485);
       vertex(178,453);
       vertex(173,430);
       vertex(189,404);
       vertex(199,386);

  endShape(CLOSE);
  
     //face
  fill(255,229,200);
  noStroke()
  beginShape();
  vertex(217,277);
  vertex(227,209);
  vertex(241,142);
  vertex(319,121);
  vertex(374,121);
  vertex(441,127);
  vertex(498,165);
  vertex(509,216);
  vertex(509,247);
  vertex(502,339);
  vertex(478,414);
  vertex(432,498);
  vertex(402,524);
  vertex(365,531);
  vertex(326,521);
  vertex(285,492);
  vertex(228,413);
  vertex(223,362);

  endShape(CLOSE);
  
     //Hair
  fill(139,69,19);
  noStroke()
  beginShape();
  vertex(192,258);
  vertex(223,322);
  vertex(229,260);
  vertex(248,223);
  vertex(260,175);
  vertex(257,147);
  vertex(294,120);
  vertex(251,66);
  vertex(219,119);
  vertex(200,164);
  vertex(200,216);
  
  endShape(CLOSE);
  
  //ear
  fill(255,229,200);
  noStroke()
  beginShape();
  vertex(221,331);
  vertex(221,289);
  vertex(205,260);
  vertex(190,264);
  vertex(188,287);
  vertex(193,320);
  vertex(205,355);
  vertex(224,363);

  endShape(CLOSE);
  
  //Bangs
  fill(139,69,19);
  noStroke()
  beginShape();
  vertex(250,66);
  vertex(306,39);
  vertex(402,26);
  vertex(438,29);
  vertex(416,41);
  vertex(396,54);
  vertex(434,42);
  vertex(454,36);
  vertex(442,51);
  vertex(465,54);
  vertex(481,57);
  vertex(473,69);
  vertex(490,70);
  vertex(511,84);
  vertex(531,99);
  vertex(546,109);
  vertex(496,100);
  vertex(551,125);
  vertex(562,161);
  vertex(533,136);
  vertex(509,128);
  vertex(534,144);
  vertex(550,178);
  vertex(520,154);
  vertex(517,164);
  vertex(534,203);
  vertex(535,253);
  vertex(523,264);
  vertex(496,169);
  vertex(455,151);
  vertex(417,154);
  vertex(377,126);
  vertex(323,125);
  vertex(251,142);
  vertex(240,106);

  endShape(CLOSE);

  //Reflection Shine
  fill(255,243,228);
  noStroke()
  beginShape();
 vertex(217,321);
 vertex(220,353);
 vertex(223,367);
 vertex(231,355);
 vertex(238,343);
 vertex(240,359);
 vertex(241,373);
 vertex(241,389);
 vertex(248,400);
 vertex(255,392);
 vertex(252,370);
 vertex(251,351);
 vertex(254,339);
 vertex(262,313);
 vertex(254,285);
 vertex(248,268);
 vertex(267,254);
 vertex(282,247);
 vertex(287,229);
 vertex(275,219);
 vertex(249,242);
 vertex(235,256);
 vertex(226,269);
 vertex(218,283);
 vertex(216,301);

  endShape(CLOSE);

  //leftshirtshine
  fill(210,92,49);
  noStroke()
  beginShape();
 vertex(532,597);
 vertex(525,583);
 vertex(522,567);
 vertex(526,555);
 vertex(501,542);
 vertex(479,518);
 vertex(474,507);
 vertex(491,521);
 vertex(507,538);
 vertex(555,562);
 vertex(540,549);
 vertex(524,539);
 vertex(510,526);
 vertex(497,514);
 vertex(496,505);
 vertex(482,495);
 vertex(470,486);
 vertex(508,496);
 vertex(599,580);
 vertex(599,600);
 vertex(563,599);

  endShape(CLOSE);

  //lefteyelidbehind
  fill(180,138,120);
  noStroke()
  beginShape();
 vertex(285,284);
 vertex(289,271);
 vertex(306,261);
 vertex(323,260);
 vertex(339,262);
 vertex(350,274);
 vertex(352,284);
 vertex(346,284);
 vertex(326,277);
 vertex(308,276);

  endShape(CLOSE);

  //neckdark
  fill(242,214,183);
  noStroke()
  beginShape();
 vertex(225,360);
 vertex(214,389);
 vertex(217,412);
 vertex(233,447);
 vertex(259,483);
 vertex(294,511);
 vertex(333,529);
 vertex(312,510);
 vertex(310,498);
 vertex(319,489);
 vertex(305,489);
 vertex(293,493);
 vertex(273,476);
 vertex(249,441);
 vertex(231,406);
 vertex(227,382);

  endShape(CLOSE);

  //Lighter Face Side
  fill(255,243,228);
  noStroke()
  beginShape();
 vertex(377,528);
 vertex(382,510);
 vertex(392,488);
 vertex(378,489);
 vertex(388,475);
 vertex(408,457);
 vertex(403,417);
 vertex(392,389);
 vertex(408,288);
 vertex(415,250);
 vertex(362,220);
 vertex(393,207);
 vertex(447,219);
 vertex(469,202);
 vertex(490,170);
 vertex(511,205);
 vertex(515,252);
 vertex(506,336);
 vertex(456,457);
 vertex(414,517);

  endShape(CLOSE);

  //righteyelidbehind
  fill(180,138,120);
  noStroke()
  beginShape();
 vertex(417,293);
 vertex(429,283);
 vertex(451,275);
 vertex(468,278);
 vertex(480,287);
 vertex(482,297);
 vertex(463,291);
 vertex(443,290);

  endShape(CLOSE);

  //lips
  fill(191,112,104);
  noStroke()
  beginShape();
 vertex(336,433);
 vertex(350,443);
 vertex(368,448);
 vertex(393,451);
 vertex(410,449);
 vertex(424,443);
 vertex(433,438);
 vertex(424,430);
 vertex(411,422);
 vertex(400,423);
 vertex(388,422);
 vertex(378,419);
 vertex(362,423);
 vertex(347,427);

  endShape(CLOSE);


  //Highlight Face
  fill(255,251,245);
  noStroke()
  beginShape();
 vertex(400,519);
 vertex(408,504);
 vertex(399,489);
 vertex(392,475);
 vertex(414,471);
 vertex(436,449);
 vertex(443,438);
 vertex(431,423);
 vertex(397,389);
 vertex(418,378);
 vertex(434,398);
 vertex(446,418);
 vertex(463,415);
 vertex(472,390);
 vertex(460,373);
 vertex(450,354);
 vertex(409,290);
 vertex(452,338);
 vertex(474,342);
 vertex(463,321);
 vertex(467,305);
 vertex(475,295);
 vertex(490,299);
 vertex(496,284);
 vertex(496,267);
 vertex(497,249);
 vertex(490,241);
 vertex(463,238);
 vertex(457,223);
 vertex(474,216);
 vertex(481,187);
 vertex(488,172);
 vertex(511,205);
 vertex(512,259);
 vertex(509,339);
 vertex(463,453);
 vertex(429,496);
 vertex(415,515);

  endShape(CLOSE);

  //nose highlight
  fill(255,251,245);
  noStroke()
  beginShape();
 vertex(415,369);
 vertex(421,382);
 vertex(432,369);
 vertex(426,341);
 vertex(428,327);
 vertex(421,311);
 vertex(409,289);

  endShape(CLOSE);


  //left eyebrow
  fill(139,69,19);
  noStroke()
  beginShape();
  vertex(285,253);
  vertex(317,237);
  vertex(362,246);
  vertex(385,236);
  vertex(329,218);
  vertex(287,237);

  endShape(CLOSE);
  
  //righteyebrow
  fill(139,69,19);
  noStroke()
  beginShape();
  vertex(427,250);
  vertex(436,261);
  vertex(471,255);
  vertex(492,266);
  vertex(503,271);
  vertex(492,251);
  vertex(458,243);

  endShape(CLOSE);

  //Left Eye
  fill(240);
  noStroke()
  beginShape();
  vertex(287,284);
  vertex(298,283);
  vertex(309,285);
  vertex(318,287);
  vertex(330,285);
  vertex(338,283);
  vertex(347,284);
  vertex(339,275);
  vertex(325,269);
  vertex(310,268);
  vertex(297,273);

  endShape(CLOSE);


  //Right Eye
  fill(240);
  noStroke()
  beginShape();
  vertex(418,292);
  vertex(428,291);
  vertex(437,295);
  vertex(449,299);
  vertex(462,299);
  vertex(472,295);
  vertex(480,295);
  vertex(472,287);
  vertex(459,282);
  vertex(446,280);
  vertex(433,283);
  vertex(424,286);

  endShape(CLOSE);

  //Hair Shadow
  fill(242,214,183);
  noStroke()
  beginShape();
 vertex(383,132);
 vertex(420,156);
 vertex(447,182);
 vertex(475,208);
 vertex(487,229);
 vertex(488,211);
 vertex(477,192);
 vertex(456,150);
 vertex(422,134);

  endShape(CLOSE);

  //Nose Dark
  fill(242,214,183);
  noStroke()
  beginShape();
 vertex(367,325);
 vertex(361,334);
 vertex(361,346);
 vertex(349,357);
 vertex(346,368);
 vertex(353,380);
 vertex(364,384);
 vertex(357,372);
 vertex(358,360);
 vertex(368,356);
 vertex(376,346);
 vertex(373,335);

  endShape(CLOSE);

  //Nostril Dark
  fill(242,214,183);
  noStroke()
  beginShape();
 vertex(370,382);
 vertex(376,384);
 vertex(380,380);
 vertex(386,383);
 vertex(382,376);
 vertex(373,377);

  endShape(CLOSE);

  //Lip Dark
  fill(25);
  noStroke()
  beginShape();
 vertex(338,432);
 vertex(376,430);
 vertex(386,431);
 vertex(397,430);
 vertex(408,430);
 vertex(415,434);
 vertex(408,432);
 vertex(401,432);
 vertex(391,432);
 vertex(379,432);
 vertex(363,433);

  endShape(CLOSE);

  //Left Pupil
  fill(137,182,110);
  noStroke()
  beginShape();
 vertex(310,284);
 vertex(319,287);
 vertex(328,286);
 vertex(334,278);
 vertex(327,269);
 vertex(315,269);
 vertex(307,275);

  endShape(CLOSE);

  //Right Pupil
  fill(137,182,110);
  noStroke()
  beginShape();
 vertex(442,283);
 vertex(452,279);
 vertex(460,281);
 vertex(463,289);
 vertex(458,297);
 vertex(448,298);
 vertex(439,291);

  endShape(CLOSE);

  //Pupils
  noStroke();
  fill(0);
  ellipse(319,278, 9,9);
  ellipse(451,289, 9,9);

  }
