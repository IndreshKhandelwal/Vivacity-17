<!DOCTYPE html>
<html>

<head>

    <title>Vivacity || A Surreal Symphony</title>

    <script type="text/javascript">	if (screen.width >= 760) {
    	document.location = "mobile.php";
    	}
    </script>
<?php include("tmeta_index.php"); ?>
<style type="text/css">
  @import url(http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css);
.container1 {
  text-align: center;
  position: relative;
  margin: 3em auto 0 auto;
  margin-left: -100px;
  width: 7em;
  color: white;
  cursor: pointer;
}

.menu {
  position: relative;width:12em;font-size:1.2em;
  padding: 1em 0;
  background: #111;
  z-index: 100;
}

.opsi{
  position: absolute;
  width: 12em;
  padding: 1em 0;
  font-size: 1.3em;
  top: 0;
  transition: top 0.2s ease-in-out;
}

.siji {
  transition-delay:0;
  background: transparent;
  z-index: 50;
}
.loro {
  transition-delay:.05s;
  background: transparent;
  z-index: 49;
}
.telu{
  transition-delay:.1s;
  background: transparent;
  z-index: 48;
}
.papat {
  transition-delay:.15s;
  background: transparent;
  z-index: 47;
}
.limo {
  transition-delay:.2s;
  background: transparent;
  z-index: 46;
}
.spon{
  transition-delay:.25s;
  background: transparent;
  z-index: 45;
}

.container1:hover > .siji{
  top: 4.7em;
}

.container1:hover > .loro {
  top: 8.1em;
}

.container1:hover > .telu {
  top: 11.5em;
}

.container1:hover > .papat {
  top: 14.9em;
}

.container1:hover > .limo {
  top: 18.3em;
}
.container1:hover > .spon {
  top: 21.7em;
}
</style>
<style type="text/css">

.ray {
  position: absolute;
  top: 0;
  border-radius: 20px;
  z-index: 0;
  -webkit-transform: translate3d(0, 0, 0);
  -khtml-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
  -ms-transform: translate3d(0, 0, 0);
  -o-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

.ray:nth-child(2) {
  height: 20px;
  width: 100%;
  position: absolute;
  margin: auto;
  top: -20px;
  left: 0;
  z-index: 9999;
  opacity: 0.7;
  -webkit-border-radius: 50%;
  -khtml-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;
  border-radius: 50%;
  -webkit-animation: light-field 42000ms ease-in-out infinite alternate;
  -khtml-animation: light-field 42000ms ease-in-out infinite alternate;
  -moz-animation: light-field 42000ms ease-in-out infinite alternate;
  -ms-animation: light-field 42000ms ease-in-out infinite alternate;
  -o-animation: light-field 42000ms ease-in-out infinite alternate;
  animation: light-field 42000ms ease-in-out infinite alternate;
}
.ray:nth-child(3) {
  left: 48%;
  height: 342px;
  margin-top: -100px;
  width: 4px;
  background: #ff5900;
  -webkit-filter: blur(12.4px);
  -khtml-filter: blur(12.4px);
  -moz-filter: blur(12.4px);
  -ms-filter: blur(12.4px);
  -o-filter: blur(12.4px);
  filter: blur(12.4px);
  -webkit-animation: sml-fade ease-in-out 6569ms infinite, wiggle1 ease-in-out 6860ms infinite;
  -khtml-animation: sml-fade ease-in-out 6569ms infinite, wiggle1 ease-in-out 6860ms infinite;
  -moz-animation: sml-fade ease-in-out 6569ms infinite, wiggle1 ease-in-out 6860ms infinite;
  -ms-animation: sml-fade ease-in-out 6569ms infinite, wiggle1 ease-in-out 6860ms infinite;
  -o-animation: sml-fade ease-in-out 6569ms infinite, wiggle1 ease-in-out 6860ms infinite;
  animation: sml-fade ease-in-out 6569ms infinite, wiggle1 ease-in-out 6860ms infinite;
}
.ray:nth-child(4) {
  left: 44%;
  height: 151px;
  margin-top: -100px;
  width: 3px;
  background: #ff7700;
  -webkit-filter: blur(9.4px);
  -khtml-filter: blur(9.4px);
  -moz-filter: blur(9.4px);
  -ms-filter: blur(9.4px);
  -o-filter: blur(9.4px);
  filter: blur(9.4px);
  -webkit-animation: sml-fade ease-in-out 6715ms infinite, wiggle1 ease-in-out 6872ms infinite;
  -khtml-animation: sml-fade ease-in-out 6715ms infinite, wiggle1 ease-in-out 6872ms infinite;
  -moz-animation: sml-fade ease-in-out 6715ms infinite, wiggle1 ease-in-out 6872ms infinite;
  -ms-animation: sml-fade ease-in-out 6715ms infinite, wiggle1 ease-in-out 6872ms infinite;
  -o-animation: sml-fade ease-in-out 6715ms infinite, wiggle1 ease-in-out 6872ms infinite;
  animation: sml-fade ease-in-out 6715ms infinite, wiggle1 ease-in-out 6872ms infinite;
}
.ray:nth-child(5) {
  left: 33%;
  height: 142px;
  margin-top: -100px;
  width: 3px;
  background: #ff9500;
  -webkit-filter: blur(8.4px);
  -khtml-filter: blur(8.4px);
  -moz-filter: blur(8.4px);
  -ms-filter: blur(8.4px);
  -o-filter: blur(8.4px);
  filter: blur(8.4px);
  -webkit-animation: sml-fade ease-in-out 6714ms infinite, wiggle2 ease-in-out 6581ms infinite;
  -khtml-animation: sml-fade ease-in-out 6714ms infinite, wiggle2 ease-in-out 6581ms infinite;
  -moz-animation: sml-fade ease-in-out 6714ms infinite, wiggle2 ease-in-out 6581ms infinite;
  -ms-animation: sml-fade ease-in-out 6714ms infinite, wiggle2 ease-in-out 6581ms infinite;
  -o-animation: sml-fade ease-in-out 6714ms infinite, wiggle2 ease-in-out 6581ms infinite;
  animation: sml-fade ease-in-out 6714ms infinite, wiggle2 ease-in-out 6581ms infinite;
}
.ray:nth-child(6) {
  left: 53%;
  height: 226px;
  margin-top: -100px;
  width: 3px;
  background: #ffb300;
  -webkit-filter: blur(9.4px);
  -khtml-filter: blur(9.4px);
  -moz-filter: blur(9.4px);
  -ms-filter: blur(9.4px);
  -o-filter: blur(9.4px);
  filter: blur(9.4px);
  -webkit-animation: sml-fade ease-in-out 6547ms infinite, wiggle3 ease-in-out 6278ms infinite;
  -khtml-animation: sml-fade ease-in-out 6547ms infinite, wiggle3 ease-in-out 6278ms infinite;
  -moz-animation: sml-fade ease-in-out 6547ms infinite, wiggle3 ease-in-out 6278ms infinite;
  -ms-animation: sml-fade ease-in-out 6547ms infinite, wiggle3 ease-in-out 6278ms infinite;
  -o-animation: sml-fade ease-in-out 6547ms infinite, wiggle3 ease-in-out 6278ms infinite;
  animation: sml-fade ease-in-out 6547ms infinite, wiggle3 ease-in-out 6278ms infinite;
}
.ray:nth-child(7) {
  left: 56%;
  height: 261px;
  margin-top: -100px;
  width: 3px;
  background: #ffd000;
  -webkit-filter: blur(9.4px);
  -khtml-filter: blur(9.4px);
  -moz-filter: blur(9.4px);
  -ms-filter: blur(9.4px);
  -o-filter: blur(9.4px);
  filter: blur(9.4px);
  -webkit-animation: sml-fade ease-in-out 6890ms infinite, wiggle2 ease-in-out 6554ms infinite;
  -khtml-animation: sml-fade ease-in-out 6890ms infinite, wiggle2 ease-in-out 6554ms infinite;
  -moz-animation: sml-fade ease-in-out 6890ms infinite, wiggle2 ease-in-out 6554ms infinite;
  -ms-animation: sml-fade ease-in-out 6890ms infinite, wiggle2 ease-in-out 6554ms infinite;
  -o-animation: sml-fade ease-in-out 6890ms infinite, wiggle2 ease-in-out 6554ms infinite;
  animation: sml-fade ease-in-out 6890ms infinite, wiggle2 ease-in-out 6554ms infinite;
}
.ray:nth-child(8) {
  left: 1%;
  height: 334px;
  margin-top: -100px;
  width: 4px;
  background: #ffee00;
  -webkit-filter: blur(9.4px);
  -khtml-filter: blur(9.4px);
  -moz-filter: blur(9.4px);
  -ms-filter: blur(9.4px);
  -o-filter: blur(9.4px);
  filter: blur(9.4px);
  -webkit-animation: sml-fade ease-in-out 6934ms infinite, wiggle1 ease-in-out 6777ms infinite;
  -khtml-animation: sml-fade ease-in-out 6934ms infinite, wiggle1 ease-in-out 6777ms infinite;
  -moz-animation: sml-fade ease-in-out 6934ms infinite, wiggle1 ease-in-out 6777ms infinite;
  -ms-animation: sml-fade ease-in-out 6934ms infinite, wiggle1 ease-in-out 6777ms infinite;
  -o-animation: sml-fade ease-in-out 6934ms infinite, wiggle1 ease-in-out 6777ms infinite;
  animation: sml-fade ease-in-out 6934ms infinite, wiggle1 ease-in-out 6777ms infinite;
}
.ray:nth-child(9) {
  left: 17%;
  height: 158px;
  margin-top: -100px;
  width: 4px;
  background: #f2ff00;
  -webkit-filter: blur(11.4px);
  -khtml-filter: blur(11.4px);
  -moz-filter: blur(11.4px);
  -ms-filter: blur(11.4px);
  -o-filter: blur(11.4px);
  filter: blur(11.4px);
  -webkit-animation: sml-fade ease-in-out 6843ms infinite, wiggle3 ease-in-out 6441ms infinite;
  -khtml-animation: sml-fade ease-in-out 6843ms infinite, wiggle3 ease-in-out 6441ms infinite;
  -moz-animation: sml-fade ease-in-out 6843ms infinite, wiggle3 ease-in-out 6441ms infinite;
  -ms-animation: sml-fade ease-in-out 6843ms infinite, wiggle3 ease-in-out 6441ms infinite;
  -o-animation: sml-fade ease-in-out 6843ms infinite, wiggle3 ease-in-out 6441ms infinite;
  animation: sml-fade ease-in-out 6843ms infinite, wiggle3 ease-in-out 6441ms infinite;
}
.ray:nth-child(10) {
  left: 87%;
  height: 319px;
  margin-top: -100px;
  width: 3px;
  background: #d5ff00;
  -webkit-filter: blur(10.4px);
  -khtml-filter: blur(10.4px);
  -moz-filter: blur(10.4px);
  -ms-filter: blur(10.4px);
  -o-filter: blur(10.4px);
  filter: blur(10.4px);
  -webkit-animation: sml-fade ease-in-out 6602ms infinite, wiggle3 ease-in-out 6395ms infinite;
  -khtml-animation: sml-fade ease-in-out 6602ms infinite, wiggle3 ease-in-out 6395ms infinite;
  -moz-animation: sml-fade ease-in-out 6602ms infinite, wiggle3 ease-in-out 6395ms infinite;
  -ms-animation: sml-fade ease-in-out 6602ms infinite, wiggle3 ease-in-out 6395ms infinite;
  -o-animation: sml-fade ease-in-out 6602ms infinite, wiggle3 ease-in-out 6395ms infinite;
  animation: sml-fade ease-in-out 6602ms infinite, wiggle3 ease-in-out 6395ms infinite;
}
.ray:nth-child(11) {
  left: 43%;
  height: 448px;
  margin-top: -100px;
  width: 4px;
  background: #b7ff00;
  -webkit-filter: blur(10.4px);
  -khtml-filter: blur(10.4px);
  -moz-filter: blur(10.4px);
  -ms-filter: blur(10.4px);
  -o-filter: blur(10.4px);
  filter: blur(10.4px);
  -webkit-animation: sml-fade ease-in-out 6573ms infinite, wiggle1 ease-in-out 6657ms infinite;
  -khtml-animation: sml-fade ease-in-out 6573ms infinite, wiggle1 ease-in-out 6657ms infinite;
  -moz-animation: sml-fade ease-in-out 6573ms infinite, wiggle1 ease-in-out 6657ms infinite;
  -ms-animation: sml-fade ease-in-out 6573ms infinite, wiggle1 ease-in-out 6657ms infinite;
  -o-animation: sml-fade ease-in-out 6573ms infinite, wiggle1 ease-in-out 6657ms infinite;
  animation: sml-fade ease-in-out 6573ms infinite, wiggle1 ease-in-out 6657ms infinite;
}
.ray:nth-child(12) {
  left: 72%;
  height: 282px;
  margin-top: -100px;
  width: 4px;
  background: #99ff00;
  -webkit-filter: blur(9.4px);
  -khtml-filter: blur(9.4px);
  -moz-filter: blur(9.4px);
  -ms-filter: blur(9.4px);
  -o-filter: blur(9.4px);
  filter: blur(9.4px);
  -webkit-animation: sml-fade ease-in-out 6762ms infinite, wiggle2 ease-in-out 6380ms infinite;
  -khtml-animation: sml-fade ease-in-out 6762ms infinite, wiggle2 ease-in-out 6380ms infinite;
  -moz-animation: sml-fade ease-in-out 6762ms infinite, wiggle2 ease-in-out 6380ms infinite;
  -ms-animation: sml-fade ease-in-out 6762ms infinite, wiggle2 ease-in-out 6380ms infinite;
  -o-animation: sml-fade ease-in-out 6762ms infinite, wiggle2 ease-in-out 6380ms infinite;
  animation: sml-fade ease-in-out 6762ms infinite, wiggle2 ease-in-out 6380ms infinite;
}
.ray:nth-child(13) {
  left: 23%;
  height: 353px;
  margin-top: -100px;
  width: 3px;
  background: #7bff00;
  -webkit-filter: blur(9.4px);
  -khtml-filter: blur(9.4px);
  -moz-filter: blur(9.4px);
  -ms-filter: blur(9.4px);
  -o-filter: blur(9.4px);
  filter: blur(9.4px);
  -webkit-animation: sml-fade ease-in-out 6266ms infinite, wiggle2 ease-in-out 6819ms infinite;
  -khtml-animation: sml-fade ease-in-out 6266ms infinite, wiggle2 ease-in-out 6819ms infinite;
  -moz-animation: sml-fade ease-in-out 6266ms infinite, wiggle2 ease-in-out 6819ms infinite;
  -ms-animation: sml-fade ease-in-out 6266ms infinite, wiggle2 ease-in-out 6819ms infinite;
  -o-animation: sml-fade ease-in-out 6266ms infinite, wiggle2 ease-in-out 6819ms infinite;
  animation: sml-fade ease-in-out 6266ms infinite, wiggle2 ease-in-out 6819ms infinite;
}
.ray:nth-child(14) {
  left: 86%;
  height: 170px;
  margin-top: -100px;
  width: 4px;
  background: #5eff00;
  -webkit-filter: blur(9.4px);
  -khtml-filter: blur(9.4px);
  -moz-filter: blur(9.4px);
  -ms-filter: blur(9.4px);
  -o-filter: blur(9.4px);
  filter: blur(9.4px);
  -webkit-animation: sml-fade ease-in-out 6139ms infinite, wiggle1 ease-in-out 6518ms infinite;
  -khtml-animation: sml-fade ease-in-out 6139ms infinite, wiggle1 ease-in-out 6518ms infinite;
  -moz-animation: sml-fade ease-in-out 6139ms infinite, wiggle1 ease-in-out 6518ms infinite;
  -ms-animation: sml-fade ease-in-out 6139ms infinite, wiggle1 ease-in-out 6518ms infinite;
  -o-animation: sml-fade ease-in-out 6139ms infinite, wiggle1 ease-in-out 6518ms infinite;
  animation: sml-fade ease-in-out 6139ms infinite, wiggle1 ease-in-out 6518ms infinite;
}
.ray:nth-child(15) {
  left: 64%;
  height: 181px;
  margin-top: -100px;
  width: 4px;
  background: #40ff00;
  -webkit-filter: blur(11.4px);
  -khtml-filter: blur(11.4px);
  -moz-filter: blur(11.4px);
  -ms-filter: blur(11.4px);
  -o-filter: blur(11.4px);
  filter: blur(11.4px);
  -webkit-animation: sml-fade ease-in-out 6564ms infinite, wiggle2 ease-in-out 6773ms infinite;
  -khtml-animation: sml-fade ease-in-out 6564ms infinite, wiggle2 ease-in-out 6773ms infinite;
  -moz-animation: sml-fade ease-in-out 6564ms infinite, wiggle2 ease-in-out 6773ms infinite;
  -ms-animation: sml-fade ease-in-out 6564ms infinite, wiggle2 ease-in-out 6773ms infinite;
  -o-animation: sml-fade ease-in-out 6564ms infinite, wiggle2 ease-in-out 6773ms infinite;
  animation: sml-fade ease-in-out 6564ms infinite, wiggle2 ease-in-out 6773ms infinite;
}
.ray:nth-child(16) {
  left: 18%;
  height: 305px;
  margin-top: -100px;
  width: 3px;
  background: #22ff00;
  -webkit-filter: blur(9.4px);
  -khtml-filter: blur(9.4px);
  -moz-filter: blur(9.4px);
  -ms-filter: blur(9.4px);
  -o-filter: blur(9.4px);
  filter: blur(9.4px);
  -webkit-animation: sml-fade ease-in-out 6974ms infinite, wiggle2 ease-in-out 6600ms infinite;
  -khtml-animation: sml-fade ease-in-out 6974ms infinite, wiggle2 ease-in-out 6600ms infinite;
  -moz-animation: sml-fade ease-in-out 6974ms infinite, wiggle2 ease-in-out 6600ms infinite;
  -ms-animation: sml-fade ease-in-out 6974ms infinite, wiggle2 ease-in-out 6600ms infinite;
  -o-animation: sml-fade ease-in-out 6974ms infinite, wiggle2 ease-in-out 6600ms infinite;
  animation: sml-fade ease-in-out 6974ms infinite, wiggle2 ease-in-out 6600ms infinite;
}
.ray:nth-child(17) {
  left: 45%;
  height: 301px;
  margin-top: -100px;
  width: 4px;
  background: #04ff00;
  -webkit-filter: blur(12.4px);
  -khtml-filter: blur(12.4px);
  -moz-filter: blur(12.4px);
  -ms-filter: blur(12.4px);
  -o-filter: blur(12.4px);
  filter: blur(12.4px);
  -webkit-animation: sml-fade ease-in-out 6552ms infinite, wiggle1 ease-in-out 6253ms infinite;
  -khtml-animation: sml-fade ease-in-out 6552ms infinite, wiggle1 ease-in-out 6253ms infinite;
  -moz-animation: sml-fade ease-in-out 6552ms infinite, wiggle1 ease-in-out 6253ms infinite;
  -ms-animation: sml-fade ease-in-out 6552ms infinite, wiggle1 ease-in-out 6253ms infinite;
  -o-animation: sml-fade ease-in-out 6552ms infinite, wiggle1 ease-in-out 6253ms infinite;
  animation: sml-fade ease-in-out 6552ms infinite, wiggle1 ease-in-out 6253ms infinite;
}
.ray:nth-child(18) {
  left: 19%;
  height: 266px;
  margin-top: -100px;
  width: 3px;
  background: #00ff1a;
  -webkit-filter: blur(9.4px);
  -khtml-filter: blur(9.4px);
  -moz-filter: blur(9.4px);
  -ms-filter: blur(9.4px);
  -o-filter: blur(9.4px);
  filter: blur(9.4px);
  -webkit-animation: sml-fade ease-in-out 6732ms infinite, wiggle1 ease-in-out 6771ms infinite;
  -khtml-animation: sml-fade ease-in-out 6732ms infinite, wiggle1 ease-in-out 6771ms infinite;
  -moz-animation: sml-fade ease-in-out 6732ms infinite, wiggle1 ease-in-out 6771ms infinite;
  -ms-animation: sml-fade ease-in-out 6732ms infinite, wiggle1 ease-in-out 6771ms infinite;
  -o-animation: sml-fade ease-in-out 6732ms infinite, wiggle1 ease-in-out 6771ms infinite;
  animation: sml-fade ease-in-out 6732ms infinite, wiggle1 ease-in-out 6771ms infinite;
}
.ray:nth-child(19) {
  left: 34%;
  height: 107px;
  margin-top: -100px;
  width: 3px;
  background: #00ff37;
  -webkit-filter: blur(9.4px);
  -khtml-filter: blur(9.4px);
  -moz-filter: blur(9.4px);
  -ms-filter: blur(9.4px);
  -o-filter: blur(9.4px);
  filter: blur(9.4px);
  -webkit-animation: sml-fade ease-in-out 6237ms infinite, wiggle2 ease-in-out 6163ms infinite;
  -khtml-animation: sml-fade ease-in-out 6237ms infinite, wiggle2 ease-in-out 6163ms infinite;
  -moz-animation: sml-fade ease-in-out 6237ms infinite, wiggle2 ease-in-out 6163ms infinite;
  -ms-animation: sml-fade ease-in-out 6237ms infinite, wiggle2 ease-in-out 6163ms infinite;
  -o-animation: sml-fade ease-in-out 6237ms infinite, wiggle2 ease-in-out 6163ms infinite;
  animation: sml-fade ease-in-out 6237ms infinite, wiggle2 ease-in-out 6163ms infinite;
}
.ray:nth-child(20) {
  left: 61%;
  height: 125px;
  margin-top: -100px;
  width: 3px;
  background: #00ff55;
  -webkit-filter: blur(10.4px);
  -khtml-filter: blur(10.4px);
  -moz-filter: blur(10.4px);
  -ms-filter: blur(10.4px);
  -o-filter: blur(10.4px);
  filter: blur(10.4px);
  -webkit-animation: sml-fade ease-in-out 6603ms infinite, wiggle3 ease-in-out 6697ms infinite;
  -khtml-animation: sml-fade ease-in-out 6603ms infinite, wiggle3 ease-in-out 6697ms infinite;
  -moz-animation: sml-fade ease-in-out 6603ms infinite, wiggle3 ease-in-out 6697ms infinite;
  -ms-animation: sml-fade ease-in-out 6603ms infinite, wiggle3 ease-in-out 6697ms infinite;
  -o-animation: sml-fade ease-in-out 6603ms infinite, wiggle3 ease-in-out 6697ms infinite;
  animation: sml-fade ease-in-out 6603ms infinite, wiggle3 ease-in-out 6697ms infinite;
}
.ray:nth-child(21) {
  left: 40%;
  height: 393px;
  margin-top: -100px;
  width: 3px;
  background: #00ff73;
  -webkit-filter: blur(8.4px);
  -khtml-filter: blur(8.4px);
  -moz-filter: blur(8.4px);
  -ms-filter: blur(8.4px);
  -o-filter: blur(8.4px);
  filter: blur(8.4px);
  -webkit-animation: sml-fade ease-in-out 6143ms infinite, wiggle3 ease-in-out 6874ms infinite;
  -khtml-animation: sml-fade ease-in-out 6143ms infinite, wiggle3 ease-in-out 6874ms infinite;
  -moz-animation: sml-fade ease-in-out 6143ms infinite, wiggle3 ease-in-out 6874ms infinite;
  -ms-animation: sml-fade ease-in-out 6143ms infinite, wiggle3 ease-in-out 6874ms infinite;
  -o-animation: sml-fade ease-in-out 6143ms infinite, wiggle3 ease-in-out 6874ms infinite;
  animation: sml-fade ease-in-out 6143ms infinite, wiggle3 ease-in-out 6874ms infinite;
}
.ray:nth-child(22) {
  left: 82%;
  height: 150px;
  margin-top: -100px;
  width: 3px;
  background: #00ff91;
  -webkit-filter: blur(9.4px);
  -khtml-filter: blur(9.4px);
  -moz-filter: blur(9.4px);
  -ms-filter: blur(9.4px);
  -o-filter: blur(9.4px);
  filter: blur(9.4px);
  -webkit-animation: sml-fade ease-in-out 6059ms infinite, wiggle2 ease-in-out 6627ms infinite;
  -khtml-animation: sml-fade ease-in-out 6059ms infinite, wiggle2 ease-in-out 6627ms infinite;
  -moz-animation: sml-fade ease-in-out 6059ms infinite, wiggle2 ease-in-out 6627ms infinite;
  -ms-animation: sml-fade ease-in-out 6059ms infinite, wiggle2 ease-in-out 6627ms infinite;
  -o-animation: sml-fade ease-in-out 6059ms infinite, wiggle2 ease-in-out 6627ms infinite;
  animation: sml-fade ease-in-out 6059ms infinite, wiggle2 ease-in-out 6627ms infinite;
}
.ray:nth-child(23) {
  left: 95%;
  height: 214px;
  margin-top: -100px;
  width: 4px;
  background: #00ffae;
  -webkit-filter: blur(12.4px);
  -khtml-filter: blur(12.4px);
  -moz-filter: blur(12.4px);
  -ms-filter: blur(12.4px);
  -o-filter: blur(12.4px);
  filter: blur(12.4px);
  -webkit-animation: sml-fade ease-in-out 6128ms infinite, wiggle2 ease-in-out 6798ms infinite;
  -khtml-animation: sml-fade ease-in-out 6128ms infinite, wiggle2 ease-in-out 6798ms infinite;
  -moz-animation: sml-fade ease-in-out 6128ms infinite, wiggle2 ease-in-out 6798ms infinite;
  -ms-animation: sml-fade ease-in-out 6128ms infinite, wiggle2 ease-in-out 6798ms infinite;
  -o-animation: sml-fade ease-in-out 6128ms infinite, wiggle2 ease-in-out 6798ms infinite;
  animation: sml-fade ease-in-out 6128ms infinite, wiggle2 ease-in-out 6798ms infinite;
}
.ray:nth-child(24) {
  left: 9%;
  height: 269px;
  margin-top: -100px;
  width: 4px;
  background: #00ffcc;
  -webkit-filter: blur(11.4px);
  -khtml-filter: blur(11.4px);
  -moz-filter: blur(11.4px);
  -ms-filter: blur(11.4px);
  -o-filter: blur(11.4px);
  filter: blur(11.4px);
  -webkit-animation: sml-fade ease-in-out 6607ms infinite, wiggle1 ease-in-out 6688ms infinite;
  -khtml-animation: sml-fade ease-in-out 6607ms infinite, wiggle1 ease-in-out 6688ms infinite;
  -moz-animation: sml-fade ease-in-out 6607ms infinite, wiggle1 ease-in-out 6688ms infinite;
  -ms-animation: sml-fade ease-in-out 6607ms infinite, wiggle1 ease-in-out 6688ms infinite;
  -o-animation: sml-fade ease-in-out 6607ms infinite, wiggle1 ease-in-out 6688ms infinite;
  animation: sml-fade ease-in-out 6607ms infinite, wiggle1 ease-in-out 6688ms infinite;
}
.ray:nth-child(25) {
  left: 22%;
  height: 146px;
  margin-top: -100px;
  width: 3px;
  background: #00ffea;
  -webkit-filter: blur(9.4px);
  -khtml-filter: blur(9.4px);
  -moz-filter: blur(9.4px);
  -ms-filter: blur(9.4px);
  -o-filter: blur(9.4px);
  filter: blur(9.4px);
  -webkit-animation: sml-fade ease-in-out 6795ms infinite, wiggle2 ease-in-out 6077ms infinite;
  -khtml-animation: sml-fade ease-in-out 6795ms infinite, wiggle2 ease-in-out 6077ms infinite;
  -moz-animation: sml-fade ease-in-out 6795ms infinite, wiggle2 ease-in-out 6077ms infinite;
  -ms-animation: sml-fade ease-in-out 6795ms infinite, wiggle2 ease-in-out 6077ms infinite;
  -o-animation: sml-fade ease-in-out 6795ms infinite, wiggle2 ease-in-out 6077ms infinite;
  animation: sml-fade ease-in-out 6795ms infinite, wiggle2 ease-in-out 6077ms infinite;
}
.ray:nth-child(26) {
  left: 69%;
  height: 283px;
  margin-top: -100px;
  width: 3px;
  background: #00f7ff;
  -webkit-filter: blur(9.4px);
  -khtml-filter: blur(9.4px);
  -moz-filter: blur(9.4px);
  -ms-filter: blur(9.4px);
  -o-filter: blur(9.4px);
  filter: blur(9.4px);
  -webkit-animation: sml-fade ease-in-out 6974ms infinite, wiggle1 ease-in-out 6102ms infinite;
  -khtml-animation: sml-fade ease-in-out 6974ms infinite, wiggle1 ease-in-out 6102ms infinite;
  -moz-animation: sml-fade ease-in-out 6974ms infinite, wiggle1 ease-in-out 6102ms infinite;
  -ms-animation: sml-fade ease-in-out 6974ms infinite, wiggle1 ease-in-out 6102ms infinite;
  -o-animation: sml-fade ease-in-out 6974ms infinite, wiggle1 ease-in-out 6102ms infinite;
  animation: sml-fade ease-in-out 6974ms infinite, wiggle1 ease-in-out 6102ms infinite;
}
.ray:nth-child(27) {
  left: 1%;
  height: 228px;
  margin-top: -100px;
  width: 3px;
  background: #00d9ff;
  -webkit-filter: blur(9.4px);
  -khtml-filter: blur(9.4px);
  -moz-filter: blur(9.4px);
  -ms-filter: blur(9.4px);
  -o-filter: blur(9.4px);
  filter: blur(9.4px);
  -webkit-animation: sml-fade ease-in-out 6538ms infinite, wiggle3 ease-in-out 6794ms infinite;
  -khtml-animation: sml-fade ease-in-out 6538ms infinite, wiggle3 ease-in-out 6794ms infinite;
  -moz-animation: sml-fade ease-in-out 6538ms infinite, wiggle3 ease-in-out 6794ms infinite;
  -ms-animation: sml-fade ease-in-out 6538ms infinite, wiggle3 ease-in-out 6794ms infinite;
  -o-animation: sml-fade ease-in-out 6538ms infinite, wiggle3 ease-in-out 6794ms infinite;
  animation: sml-fade ease-in-out 6538ms infinite, wiggle3 ease-in-out 6794ms infinite;
}
.ray:nth-child(28) {
  left: 33%;
  height: 399px;
  margin-top: -100px;
  width: 4px;
  background: #00bbff;
  -webkit-filter: blur(11.4px);
  -khtml-filter: blur(11.4px);
  -moz-filter: blur(11.4px);
  -ms-filter: blur(11.4px);
  -o-filter: blur(11.4px);
  filter: blur(11.4px);
  -webkit-animation: sml-fade ease-in-out 6101ms infinite, wiggle3 ease-in-out 6018ms infinite;
  -khtml-animation: sml-fade ease-in-out 6101ms infinite, wiggle3 ease-in-out 6018ms infinite;
  -moz-animation: sml-fade ease-in-out 6101ms infinite, wiggle3 ease-in-out 6018ms infinite;
  -ms-animation: sml-fade ease-in-out 6101ms infinite, wiggle3 ease-in-out 6018ms infinite;
  -o-animation: sml-fade ease-in-out 6101ms infinite, wiggle3 ease-in-out 6018ms infinite;
  animation: sml-fade ease-in-out 6101ms infinite, wiggle3 ease-in-out 6018ms infinite;
}
.ray:nth-child(29) {
  left: 58%;
  height: 325px;
  margin-top: -100px;
  width: 3px;
  background: #009dff;
  -webkit-filter: blur(10.4px);
  -khtml-filter: blur(10.4px);
  -moz-filter: blur(10.4px);
  -ms-filter: blur(10.4px);
  -o-filter: blur(10.4px);
  filter: blur(10.4px);
  -webkit-animation: sml-fade ease-in-out 6509ms infinite, wiggle3 ease-in-out 6490ms infinite;
  -khtml-animation: sml-fade ease-in-out 6509ms infinite, wiggle3 ease-in-out 6490ms infinite;
  -moz-animation: sml-fade ease-in-out 6509ms infinite, wiggle3 ease-in-out 6490ms infinite;
  -ms-animation: sml-fade ease-in-out 6509ms infinite, wiggle3 ease-in-out 6490ms infinite;
  -o-animation: sml-fade ease-in-out 6509ms infinite, wiggle3 ease-in-out 6490ms infinite;
  animation: sml-fade ease-in-out 6509ms infinite, wiggle3 ease-in-out 6490ms infinite;
}
.ray:nth-child(30) {
  left: 90%;
  height: 216px;
  margin-top: -100px;
  width: 4px;
  background: #0080ff;
  -webkit-filter: blur(9.4px);
  -khtml-filter: blur(9.4px);
  -moz-filter: blur(9.4px);
  -ms-filter: blur(9.4px);
  -o-filter: blur(9.4px);
  filter: blur(9.4px);
  -webkit-animation: sml-fade ease-in-out 6534ms infinite, wiggle1 ease-in-out 6666ms infinite;
  -khtml-animation: sml-fade ease-in-out 6534ms infinite, wiggle1 ease-in-out 6666ms infinite;
  -moz-animation: sml-fade ease-in-out 6534ms infinite, wiggle1 ease-in-out 6666ms infinite;
  -ms-animation: sml-fade ease-in-out 6534ms infinite, wiggle1 ease-in-out 6666ms infinite;
  -o-animation: sml-fade ease-in-out 6534ms infinite, wiggle1 ease-in-out 6666ms infinite;
  animation: sml-fade ease-in-out 6534ms infinite, wiggle1 ease-in-out 6666ms infinite;
}
.ray:nth-child(31) {
  left: 80%;
  height: 231px;
  margin-top: -100px;
  width: 4px;
  background: #0062ff;
  -webkit-filter: blur(11.4px);
  -khtml-filter: blur(11.4px);
  -moz-filter: blur(11.4px);
  -ms-filter: blur(11.4px);
  -o-filter: blur(11.4px);
  filter: blur(11.4px);
  -webkit-animation: sml-fade ease-in-out 6046ms infinite, wiggle1 ease-in-out 6339ms infinite;
  -khtml-animation: sml-fade ease-in-out 6046ms infinite, wiggle1 ease-in-out 6339ms infinite;
  -moz-animation: sml-fade ease-in-out 6046ms infinite, wiggle1 ease-in-out 6339ms infinite;
  -ms-animation: sml-fade ease-in-out 6046ms infinite, wiggle1 ease-in-out 6339ms infinite;
  -o-animation: sml-fade ease-in-out 6046ms infinite, wiggle1 ease-in-out 6339ms infinite;
  animation: sml-fade ease-in-out 6046ms infinite, wiggle1 ease-in-out 6339ms infinite;
}
.ray:nth-child(32) {
  left: 86%;
  height: 340px;
  margin-top: -100px;
  width: 3px;
  background: #0044ff;
  -webkit-filter: blur(10.4px);
  -khtml-filter: blur(10.4px);
  -moz-filter: blur(10.4px);
  -ms-filter: blur(10.4px);
  -o-filter: blur(10.4px);
  filter: blur(10.4px);
  -webkit-animation: sml-fade ease-in-out 6820ms infinite, wiggle3 ease-in-out 6128ms infinite;
  -khtml-animation: sml-fade ease-in-out 6820ms infinite, wiggle3 ease-in-out 6128ms infinite;
  -moz-animation: sml-fade ease-in-out 6820ms infinite, wiggle3 ease-in-out 6128ms infinite;
  -ms-animation: sml-fade ease-in-out 6820ms infinite, wiggle3 ease-in-out 6128ms infinite;
  -o-animation: sml-fade ease-in-out 6820ms infinite, wiggle3 ease-in-out 6128ms infinite;
  animation: sml-fade ease-in-out 6820ms infinite, wiggle3 ease-in-out 6128ms infinite;
}
.ray:nth-child(33) {
  left: 45%;
  height: 126px;
  margin-top: -100px;
  width: 4px;
  background: #0026ff;
  -webkit-filter: blur(12.4px);
  -khtml-filter: blur(12.4px);
  -moz-filter: blur(12.4px);
  -ms-filter: blur(12.4px);
  -o-filter: blur(12.4px);
  filter: blur(12.4px);
  -webkit-animation: sml-fade ease-in-out 6590ms infinite, wiggle2 ease-in-out 6559ms infinite;
  -khtml-animation: sml-fade ease-in-out 6590ms infinite, wiggle2 ease-in-out 6559ms infinite;
  -moz-animation: sml-fade ease-in-out 6590ms infinite, wiggle2 ease-in-out 6559ms infinite;
  -ms-animation: sml-fade ease-in-out 6590ms infinite, wiggle2 ease-in-out 6559ms infinite;
  -o-animation: sml-fade ease-in-out 6590ms infinite, wiggle2 ease-in-out 6559ms infinite;
  animation: sml-fade ease-in-out 6590ms infinite, wiggle2 ease-in-out 6559ms infinite;
}
.ray:nth-child(34) {
  left: 79%;
  height: 306px;
  margin-top: -100px;
  width: 3px;
  background: #0009ff;
  -webkit-filter: blur(8.4px);
  -khtml-filter: blur(8.4px);
  -moz-filter: blur(8.4px);
  -ms-filter: blur(8.4px);
  -o-filter: blur(8.4px);
  filter: blur(8.4px);
  -webkit-animation: sml-fade ease-in-out 6590ms infinite, wiggle3 ease-in-out 6192ms infinite;
  -khtml-animation: sml-fade ease-in-out 6590ms infinite, wiggle3 ease-in-out 6192ms infinite;
  -moz-animation: sml-fade ease-in-out 6590ms infinite, wiggle3 ease-in-out 6192ms infinite;
  -ms-animation: sml-fade ease-in-out 6590ms infinite, wiggle3 ease-in-out 6192ms infinite;
  -o-animation: sml-fade ease-in-out 6590ms infinite, wiggle3 ease-in-out 6192ms infinite;
  animation: sml-fade ease-in-out 6590ms infinite, wiggle3 ease-in-out 6192ms infinite;
}
.ray:nth-child(35) {
  left: 39%;
  height: 444px;
  margin-top: -100px;
  width: 3px;
  background: #1500ff;
  -webkit-filter: blur(10.4px);
  -khtml-filter: blur(10.4px);
  -moz-filter: blur(10.4px);
  -ms-filter: blur(10.4px);
  -o-filter: blur(10.4px);
  filter: blur(10.4px);
  -webkit-animation: sml-fade ease-in-out 6099ms infinite, wiggle1 ease-in-out 6510ms infinite;
  -khtml-animation: sml-fade ease-in-out 6099ms infinite, wiggle1 ease-in-out 6510ms infinite;
  -moz-animation: sml-fade ease-in-out 6099ms infinite, wiggle1 ease-in-out 6510ms infinite;
  -ms-animation: sml-fade ease-in-out 6099ms infinite, wiggle1 ease-in-out 6510ms infinite;
  -o-animation: sml-fade ease-in-out 6099ms infinite, wiggle1 ease-in-out 6510ms infinite;
  animation: sml-fade ease-in-out 6099ms infinite, wiggle1 ease-in-out 6510ms infinite;
}
.ray:nth-child(36) {
  left: 23%;
  height: 450px;
  margin-top: -100px;
  width: 3px;
  background: #3300ff;
  -webkit-filter: blur(8.4px);
  -khtml-filter: blur(8.4px);
  -moz-filter: blur(8.4px);
  -ms-filter: blur(8.4px);
  -o-filter: blur(8.4px);
  filter: blur(8.4px);
  -webkit-animation: sml-fade ease-in-out 6650ms infinite, wiggle1 ease-in-out 6532ms infinite;
  -khtml-animation: sml-fade ease-in-out 6650ms infinite, wiggle1 ease-in-out 6532ms infinite;
  -moz-animation: sml-fade ease-in-out 6650ms infinite, wiggle1 ease-in-out 6532ms infinite;
  -ms-animation: sml-fade ease-in-out 6650ms infinite, wiggle1 ease-in-out 6532ms infinite;
  -o-animation: sml-fade ease-in-out 6650ms infinite, wiggle1 ease-in-out 6532ms infinite;
  animation: sml-fade ease-in-out 6650ms infinite, wiggle1 ease-in-out 6532ms infinite;
}
.ray:nth-child(37) {
  left: 81%;
  height: 256px;
  margin-top: -100px;
  width: 4px;
  background: #5100ff;
  -webkit-filter: blur(9.4px);
  -khtml-filter: blur(9.4px);
  -moz-filter: blur(9.4px);
  -ms-filter: blur(9.4px);
  -o-filter: blur(9.4px);
  filter: blur(9.4px);
  -webkit-animation: sml-fade ease-in-out 6317ms infinite, wiggle2 ease-in-out 6097ms infinite;
  -khtml-animation: sml-fade ease-in-out 6317ms infinite, wiggle2 ease-in-out 6097ms infinite;
  -moz-animation: sml-fade ease-in-out 6317ms infinite, wiggle2 ease-in-out 6097ms infinite;
  -ms-animation: sml-fade ease-in-out 6317ms infinite, wiggle2 ease-in-out 6097ms infinite;
  -o-animation: sml-fade ease-in-out 6317ms infinite, wiggle2 ease-in-out 6097ms infinite;
  animation: sml-fade ease-in-out 6317ms infinite, wiggle2 ease-in-out 6097ms infinite;
}
.ray:nth-child(38) {
  left: 54%;
  height: 317px;
  margin-top: -100px;
  width: 3px;
  background: #6f00ff;
  -webkit-filter: blur(10.4px);
  -khtml-filter: blur(10.4px);
  -moz-filter: blur(10.4px);
  -ms-filter: blur(10.4px);
  -o-filter: blur(10.4px);
  filter: blur(10.4px);
  -webkit-animation: sml-fade ease-in-out 6202ms infinite, wiggle2 ease-in-out 6789ms infinite;
  -khtml-animation: sml-fade ease-in-out 6202ms infinite, wiggle2 ease-in-out 6789ms infinite;
  -moz-animation: sml-fade ease-in-out 6202ms infinite, wiggle2 ease-in-out 6789ms infinite;
  -ms-animation: sml-fade ease-in-out 6202ms infinite, wiggle2 ease-in-out 6789ms infinite;
  -o-animation: sml-fade ease-in-out 6202ms infinite, wiggle2 ease-in-out 6789ms infinite;
  animation: sml-fade ease-in-out 6202ms infinite, wiggle2 ease-in-out 6789ms infinite;
}
.ray:nth-child(39) {
  left: 95%;
  height: 434px;
  margin-top: -100px;
  width: 3px;
  background: #8c00ff;
  -webkit-filter: blur(9.4px);
  -khtml-filter: blur(9.4px);
  -moz-filter: blur(9.4px);
  -ms-filter: blur(9.4px);
  -o-filter: blur(9.4px);
  filter: blur(9.4px);
  -webkit-animation: sml-fade ease-in-out 6796ms infinite, wiggle2 ease-in-out 6268ms infinite;
  -khtml-animation: sml-fade ease-in-out 6796ms infinite, wiggle2 ease-in-out 6268ms infinite;
  -moz-animation: sml-fade ease-in-out 6796ms infinite, wiggle2 ease-in-out 6268ms infinite;
  -ms-animation: sml-fade ease-in-out 6796ms infinite, wiggle2 ease-in-out 6268ms infinite;
  -o-animation: sml-fade ease-in-out 6796ms infinite, wiggle2 ease-in-out 6268ms infinite;
  animation: sml-fade ease-in-out 6796ms infinite, wiggle2 ease-in-out 6268ms infinite;
}
.ray:nth-child(40) {
  left: 71%;
  height: 357px;
  margin-top: -100px;
  width: 3px;
  background: #aa00ff;
  -webkit-filter: blur(10.4px);
  -khtml-filter: blur(10.4px);
  -moz-filter: blur(10.4px);
  -ms-filter: blur(10.4px);
  -o-filter: blur(10.4px);
  filter: blur(10.4px);
  -webkit-animation: sml-fade ease-in-out 7000ms infinite, wiggle1 ease-in-out 6884ms infinite;
  -khtml-animation: sml-fade ease-in-out 7000ms infinite, wiggle1 ease-in-out 6884ms infinite;
  -moz-animation: sml-fade ease-in-out 7000ms infinite, wiggle1 ease-in-out 6884ms infinite;
  -ms-animation: sml-fade ease-in-out 7000ms infinite, wiggle1 ease-in-out 6884ms infinite;
  -o-animation: sml-fade ease-in-out 7000ms infinite, wiggle1 ease-in-out 6884ms infinite;
  animation: sml-fade ease-in-out 7000ms infinite, wiggle1 ease-in-out 6884ms infinite;
}
.ray:nth-child(41) {
  left: 9%;
  height: 349px;
  margin-top: -100px;
  width: 3px;
  background: #c800ff;
  -webkit-filter: blur(10.4px);
  -khtml-filter: blur(10.4px);
  -moz-filter: blur(10.4px);
  -ms-filter: blur(10.4px);
  -o-filter: blur(10.4px);
  filter: blur(10.4px);
  -webkit-animation: sml-fade ease-in-out 6356ms infinite, wiggle3 ease-in-out 6183ms infinite;
  -khtml-animation: sml-fade ease-in-out 6356ms infinite, wiggle3 ease-in-out 6183ms infinite;
  -moz-animation: sml-fade ease-in-out 6356ms infinite, wiggle3 ease-in-out 6183ms infinite;
  -ms-animation: sml-fade ease-in-out 6356ms infinite, wiggle3 ease-in-out 6183ms infinite;
  -o-animation: sml-fade ease-in-out 6356ms infinite, wiggle3 ease-in-out 6183ms infinite;
  animation: sml-fade ease-in-out 6356ms infinite, wiggle3 ease-in-out 6183ms infinite;
}
.ray:nth-child(42) {
  left: 27%;
  height: 435px;
  margin-top: -100px;
  width: 3px;
  background: #e600ff;
  -webkit-filter: blur(9.4px);
  -khtml-filter: blur(9.4px);
  -moz-filter: blur(9.4px);
  -ms-filter: blur(9.4px);
  -o-filter: blur(9.4px);
  filter: blur(9.4px);
  -webkit-animation: sml-fade ease-in-out 6798ms infinite, wiggle3 ease-in-out 6804ms infinite;
  -khtml-animation: sml-fade ease-in-out 6798ms infinite, wiggle3 ease-in-out 6804ms infinite;
  -moz-animation: sml-fade ease-in-out 6798ms infinite, wiggle3 ease-in-out 6804ms infinite;
  -ms-animation: sml-fade ease-in-out 6798ms infinite, wiggle3 ease-in-out 6804ms infinite;
  -o-animation: sml-fade ease-in-out 6798ms infinite, wiggle3 ease-in-out 6804ms infinite;
  animation: sml-fade ease-in-out 6798ms infinite, wiggle3 ease-in-out 6804ms infinite;
}
.ray:nth-child(43) {
  left: 74%;
  height: 449px;
  margin-top: -100px;
  width: 4px;
  background: #ff00fb;
  -webkit-filter: blur(12.4px);
  -khtml-filter: blur(12.4px);
  -moz-filter: blur(12.4px);
  -ms-filter: blur(12.4px);
  -o-filter: blur(12.4px);
  filter: blur(12.4px);
  -webkit-animation: sml-fade ease-in-out 6444ms infinite, wiggle3 ease-in-out 6407ms infinite;
  -khtml-animation: sml-fade ease-in-out 6444ms infinite, wiggle3 ease-in-out 6407ms infinite;
  -moz-animation: sml-fade ease-in-out 6444ms infinite, wiggle3 ease-in-out 6407ms infinite;
  -ms-animation: sml-fade ease-in-out 6444ms infinite, wiggle3 ease-in-out 6407ms infinite;
  -o-animation: sml-fade ease-in-out 6444ms infinite, wiggle3 ease-in-out 6407ms infinite;
  animation: sml-fade ease-in-out 6444ms infinite, wiggle3 ease-in-out 6407ms infinite;
}
.ray:nth-child(44) {
  left: 22%;
  height: 396px;
  margin-top: -100px;
  width: 4px;
  background: #ff00dd;
  -webkit-filter: blur(10.4px);
  -khtml-filter: blur(10.4px);
  -moz-filter: blur(10.4px);
  -ms-filter: blur(10.4px);
  -o-filter: blur(10.4px);
  filter: blur(10.4px);
  -webkit-animation: sml-fade ease-in-out 6990ms infinite, wiggle1 ease-in-out 6679ms infinite;
  -khtml-animation: sml-fade ease-in-out 6990ms infinite, wiggle1 ease-in-out 6679ms infinite;
  -moz-animation: sml-fade ease-in-out 6990ms infinite, wiggle1 ease-in-out 6679ms infinite;
  -ms-animation: sml-fade ease-in-out 6990ms infinite, wiggle1 ease-in-out 6679ms infinite;
  -o-animation: sml-fade ease-in-out 6990ms infinite, wiggle1 ease-in-out 6679ms infinite;
  animation: sml-fade ease-in-out 6990ms infinite, wiggle1 ease-in-out 6679ms infinite;
}
.ray:nth-child(45) {
  left: 57%;
  height: 406px;
  margin-top: -100px;
  width: 3px;
  background: #ff00bf;
  -webkit-filter: blur(10.4px);
  -khtml-filter: blur(10.4px);
  -moz-filter: blur(10.4px);
  -ms-filter: blur(10.4px);
  -o-filter: blur(10.4px);
  filter: blur(10.4px);
  -webkit-animation: sml-fade ease-in-out 6036ms infinite, wiggle3 ease-in-out 6188ms infinite;
  -khtml-animation: sml-fade ease-in-out 6036ms infinite, wiggle3 ease-in-out 6188ms infinite;
  -moz-animation: sml-fade ease-in-out 6036ms infinite, wiggle3 ease-in-out 6188ms infinite;
  -ms-animation: sml-fade ease-in-out 6036ms infinite, wiggle3 ease-in-out 6188ms infinite;
  -o-animation: sml-fade ease-in-out 6036ms infinite, wiggle3 ease-in-out 6188ms infinite;
  animation: sml-fade ease-in-out 6036ms infinite, wiggle3 ease-in-out 6188ms infinite;
}
.ray:nth-child(46) {
  left: 3%;
  height: 316px;
  margin-top: -100px;
  width: 4px;
  background: #ff00a2;
  -webkit-filter: blur(11.4px);
  -khtml-filter: blur(11.4px);
  -moz-filter: blur(11.4px);
  -ms-filter: blur(11.4px);
  -o-filter: blur(11.4px);
  filter: blur(11.4px);
  -webkit-animation: sml-fade ease-in-out 6084ms infinite, wiggle3 ease-in-out 6765ms infinite;
  -khtml-animation: sml-fade ease-in-out 6084ms infinite, wiggle3 ease-in-out 6765ms infinite;
  -moz-animation: sml-fade ease-in-out 6084ms infinite, wiggle3 ease-in-out 6765ms infinite;
  -ms-animation: sml-fade ease-in-out 6084ms infinite, wiggle3 ease-in-out 6765ms infinite;
  -o-animation: sml-fade ease-in-out 6084ms infinite, wiggle3 ease-in-out 6765ms infinite;
  animation: sml-fade ease-in-out 6084ms infinite, wiggle3 ease-in-out 6765ms infinite;
}
.ray:nth-child(47) {
  left: 59%;
  height: 299px;
  margin-top: -100px;
  width: 3px;
  background: #ff0084;
  -webkit-filter: blur(8.4px);
  -khtml-filter: blur(8.4px);
  -moz-filter: blur(8.4px);
  -ms-filter: blur(8.4px);
  -o-filter: blur(8.4px);
  filter: blur(8.4px);
  -webkit-animation: sml-fade ease-in-out 6714ms infinite, wiggle3 ease-in-out 6125ms infinite;
  -khtml-animation: sml-fade ease-in-out 6714ms infinite, wiggle3 ease-in-out 6125ms infinite;
  -moz-animation: sml-fade ease-in-out 6714ms infinite, wiggle3 ease-in-out 6125ms infinite;
  -ms-animation: sml-fade ease-in-out 6714ms infinite, wiggle3 ease-in-out 6125ms infinite;
  -o-animation: sml-fade ease-in-out 6714ms infinite, wiggle3 ease-in-out 6125ms infinite;
  animation: sml-fade ease-in-out 6714ms infinite, wiggle3 ease-in-out 6125ms infinite;
}
.ray:nth-child(48) {
  left: 92%;
  height: 343px;
  margin-top: -100px;
  width: 4px;
  background: #ff0066;
  -webkit-filter: blur(12.4px);
  -khtml-filter: blur(12.4px);
  -moz-filter: blur(12.4px);
  -ms-filter: blur(12.4px);
  -o-filter: blur(12.4px);
  filter: blur(12.4px);
  -webkit-animation: sml-fade ease-in-out 6848ms infinite, wiggle3 ease-in-out 6829ms infinite;
  -khtml-animation: sml-fade ease-in-out 6848ms infinite, wiggle3 ease-in-out 6829ms infinite;
  -moz-animation: sml-fade ease-in-out 6848ms infinite, wiggle3 ease-in-out 6829ms infinite;
  -ms-animation: sml-fade ease-in-out 6848ms infinite, wiggle3 ease-in-out 6829ms infinite;
  -o-animation: sml-fade ease-in-out 6848ms infinite, wiggle3 ease-in-out 6829ms infinite;
  animation: sml-fade ease-in-out 6848ms infinite, wiggle3 ease-in-out 6829ms infinite;
}
.ray:nth-child(49) {
  left: 78%;
  height: 437px;
  margin-top: -100px;
  width: 4px;
  background: #ff0048;
  -webkit-filter: blur(10.4px);
  -khtml-filter: blur(10.4px);
  -moz-filter: blur(10.4px);
  -ms-filter: blur(10.4px);
  -o-filter: blur(10.4px);
  filter: blur(10.4px);
  -webkit-animation: sml-fade ease-in-out 6027ms infinite, wiggle3 ease-in-out 6237ms infinite;
  -khtml-animation: sml-fade ease-in-out 6027ms infinite, wiggle3 ease-in-out 6237ms infinite;
  -moz-animation: sml-fade ease-in-out 6027ms infinite, wiggle3 ease-in-out 6237ms infinite;
  -ms-animation: sml-fade ease-in-out 6027ms infinite, wiggle3 ease-in-out 6237ms infinite;
  -o-animation: sml-fade ease-in-out 6027ms infinite, wiggle3 ease-in-out 6237ms infinite;
  animation: sml-fade ease-in-out 6027ms infinite, wiggle3 ease-in-out 6237ms infinite;
}
.ray:nth-child(50) {
  left: 85%;
  height: 321px;
  margin-top: -100px;
  width: 4px;
  background: #ff002b;
  -webkit-filter: blur(10.4px);
  -khtml-filter: blur(10.4px);
  -moz-filter: blur(10.4px);
  -ms-filter: blur(10.4px);
  -o-filter: blur(10.4px);
  filter: blur(10.4px);
  -webkit-animation: sml-fade ease-in-out 6214ms infinite, wiggle1 ease-in-out 6426ms infinite;
  -khtml-animation: sml-fade ease-in-out 6214ms infinite, wiggle1 ease-in-out 6426ms infinite;
  -moz-animation: sml-fade ease-in-out 6214ms infinite, wiggle1 ease-in-out 6426ms infinite;
  -ms-animation: sml-fade ease-in-out 6214ms infinite, wiggle1 ease-in-out 6426ms infinite;
  -o-animation: sml-fade ease-in-out 6214ms infinite, wiggle1 ease-in-out 6426ms infinite;
  animation: sml-fade ease-in-out 6214ms infinite, wiggle1 ease-in-out 6426ms infinite;
}
.ray:nth-child(51) {
  left: 85%;
  height: 243px;
  width: 26px;
  background: #3300ff;
  -webkit-filter: blur(32.02px);
  -khtml-filter: blur(32.02px);
  -moz-filter: blur(32.02px);
  -ms-filter: blur(32.02px);
  -o-filter: blur(32.02px);
  filter: blur(32.02px);
  -webkit-animation: med-fade ease-in-out 6455ms infinite, wiggle3 ease-in-out 10338ms infinite;
  -khtml-animation: med-fade ease-in-out 6455ms infinite, wiggle3 ease-in-out 10338ms infinite;
  -moz-animation: med-fade ease-in-out 6455ms infinite, wiggle3 ease-in-out 10338ms infinite;
  -ms-animation: med-fade ease-in-out 6455ms infinite, wiggle3 ease-in-out 10338ms infinite;
  -o-animation: med-fade ease-in-out 6455ms infinite, wiggle3 ease-in-out 10338ms infinite;
  animation: med-fade ease-in-out 6455ms infinite, wiggle3 ease-in-out 10338ms infinite;
}
.ray:nth-child(52) {
  left: 31%;
  height: 367px;
  width: 24px;
  background: #6600ff;
  -webkit-filter: blur(19.48px);
  -khtml-filter: blur(19.48px);
  -moz-filter: blur(19.48px);
  -ms-filter: blur(19.48px);
  -o-filter: blur(19.48px);
  filter: blur(19.48px);
  -webkit-animation: med-fade ease-in-out 6536ms infinite, wiggle2 ease-in-out 14536ms infinite;
  -khtml-animation: med-fade ease-in-out 6536ms infinite, wiggle2 ease-in-out 14536ms infinite;
  -moz-animation: med-fade ease-in-out 6536ms infinite, wiggle2 ease-in-out 14536ms infinite;
  -ms-animation: med-fade ease-in-out 6536ms infinite, wiggle2 ease-in-out 14536ms infinite;
  -o-animation: med-fade ease-in-out 6536ms infinite, wiggle2 ease-in-out 14536ms infinite;
  animation: med-fade ease-in-out 6536ms infinite, wiggle2 ease-in-out 14536ms infinite;
}
.ray:nth-child(53) {
  left: 96%;
  height: 313px;
  width: 23px;
  background: #9900ff;
  -webkit-filter: blur(31.71px);
  -khtml-filter: blur(31.71px);
  -moz-filter: blur(31.71px);
  -ms-filter: blur(31.71px);
  -o-filter: blur(31.71px);
  filter: blur(31.71px);
  -webkit-animation: med-fade ease-in-out 6420ms infinite, wiggle3 ease-in-out 12007ms infinite;
  -khtml-animation: med-fade ease-in-out 6420ms infinite, wiggle3 ease-in-out 12007ms infinite;
  -moz-animation: med-fade ease-in-out 6420ms infinite, wiggle3 ease-in-out 12007ms infinite;
  -ms-animation: med-fade ease-in-out 6420ms infinite, wiggle3 ease-in-out 12007ms infinite;
  -o-animation: med-fade ease-in-out 6420ms infinite, wiggle3 ease-in-out 12007ms infinite;
  animation: med-fade ease-in-out 6420ms infinite, wiggle3 ease-in-out 12007ms infinite;
}
.ray:nth-child(54) {
  left: 81%;
  height: 236px;
  width: 28px;
  background: #cc00ff;
  -webkit-filter: blur(43.56px);
  -khtml-filter: blur(43.56px);
  -moz-filter: blur(43.56px);
  -ms-filter: blur(43.56px);
  -o-filter: blur(43.56px);
  filter: blur(43.56px);
  -webkit-animation: med-fade ease-in-out 6862ms infinite, wiggle3 ease-in-out 12345ms infinite;
  -khtml-animation: med-fade ease-in-out 6862ms infinite, wiggle3 ease-in-out 12345ms infinite;
  -moz-animation: med-fade ease-in-out 6862ms infinite, wiggle3 ease-in-out 12345ms infinite;
  -ms-animation: med-fade ease-in-out 6862ms infinite, wiggle3 ease-in-out 12345ms infinite;
  -o-animation: med-fade ease-in-out 6862ms infinite, wiggle3 ease-in-out 12345ms infinite;
  animation: med-fade ease-in-out 6862ms infinite, wiggle3 ease-in-out 12345ms infinite;
}
.ray:nth-child(55) {
  left: 37%;
  height: 276px;
  width: 16px;
  background: magenta;
  -webkit-filter: blur(17.32px);
  -khtml-filter: blur(17.32px);
  -moz-filter: blur(17.32px);
  -ms-filter: blur(17.32px);
  -o-filter: blur(17.32px);
  filter: blur(17.32px);
  -webkit-animation: med-fade ease-in-out 6363ms infinite, wiggle1 ease-in-out 6791ms infinite;
  -khtml-animation: med-fade ease-in-out 6363ms infinite, wiggle1 ease-in-out 6791ms infinite;
  -moz-animation: med-fade ease-in-out 6363ms infinite, wiggle1 ease-in-out 6791ms infinite;
  -ms-animation: med-fade ease-in-out 6363ms infinite, wiggle1 ease-in-out 6791ms infinite;
  -o-animation: med-fade ease-in-out 6363ms infinite, wiggle1 ease-in-out 6791ms infinite;
  animation: med-fade ease-in-out 6363ms infinite, wiggle1 ease-in-out 6791ms infinite;
}
.ray:nth-child(56) {
  left: 23%;
  height: 375px;
  width: 21px;
  background: #ff00cc;
  -webkit-filter: blur(21.17px);
  -khtml-filter: blur(21.17px);
  -moz-filter: blur(21.17px);
  -ms-filter: blur(21.17px);
  -o-filter: blur(21.17px);
  filter: blur(21.17px);
  -webkit-animation: med-fade ease-in-out 6404ms infinite, wiggle1 ease-in-out 10205ms infinite;
  -khtml-animation: med-fade ease-in-out 6404ms infinite, wiggle1 ease-in-out 10205ms infinite;
  -moz-animation: med-fade ease-in-out 6404ms infinite, wiggle1 ease-in-out 10205ms infinite;
  -ms-animation: med-fade ease-in-out 6404ms infinite, wiggle1 ease-in-out 10205ms infinite;
  -o-animation: med-fade ease-in-out 6404ms infinite, wiggle1 ease-in-out 10205ms infinite;
  animation: med-fade ease-in-out 6404ms infinite, wiggle1 ease-in-out 10205ms infinite;
}
.ray:nth-child(57) {
  left: 63%;
  height: 419px;
  width: 19px;
  background: #ff0099;
  -webkit-filter: blur(16.63px);
  -khtml-filter: blur(16.63px);
  -moz-filter: blur(16.63px);
  -ms-filter: blur(16.63px);
  -o-filter: blur(16.63px);
  filter: blur(16.63px);
  -webkit-animation: med-fade ease-in-out 6935ms infinite, wiggle3 ease-in-out 13315ms infinite;
  -khtml-animation: med-fade ease-in-out 6935ms infinite, wiggle3 ease-in-out 13315ms infinite;
  -moz-animation: med-fade ease-in-out 6935ms infinite, wiggle3 ease-in-out 13315ms infinite;
  -ms-animation: med-fade ease-in-out 6935ms infinite, wiggle3 ease-in-out 13315ms infinite;
  -o-animation: med-fade ease-in-out 6935ms infinite, wiggle3 ease-in-out 13315ms infinite;
  animation: med-fade ease-in-out 6935ms infinite, wiggle3 ease-in-out 13315ms infinite;
}
.ray:nth-child(58) {
  left: 88%;
  height: 411px;
  width: 25px;
  background: #ff0066;
  -webkit-filter: blur(39.25px);
  -khtml-filter: blur(39.25px);
  -moz-filter: blur(39.25px);
  -ms-filter: blur(39.25px);
  -o-filter: blur(39.25px);
  filter: blur(39.25px);
  -webkit-animation: med-fade ease-in-out 6748ms infinite, wiggle2 ease-in-out 10450ms infinite;
  -khtml-animation: med-fade ease-in-out 6748ms infinite, wiggle2 ease-in-out 10450ms infinite;
  -moz-animation: med-fade ease-in-out 6748ms infinite, wiggle2 ease-in-out 10450ms infinite;
  -ms-animation: med-fade ease-in-out 6748ms infinite, wiggle2 ease-in-out 10450ms infinite;
  -o-animation: med-fade ease-in-out 6748ms infinite, wiggle2 ease-in-out 10450ms infinite;
  animation: med-fade ease-in-out 6748ms infinite, wiggle2 ease-in-out 10450ms infinite;
}
.ray:nth-child(59) {
  left: 64%;
  height: 121px;
  width: 18px;
  background: #ff0033;
  -webkit-filter: blur(16.86px);
  -khtml-filter: blur(16.86px);
  -moz-filter: blur(16.86px);
  -ms-filter: blur(16.86px);
  -o-filter: blur(16.86px);
  filter: blur(16.86px);
  -webkit-animation: med-fade ease-in-out 6808ms infinite, wiggle1 ease-in-out 11653ms infinite;
  -khtml-animation: med-fade ease-in-out 6808ms infinite, wiggle1 ease-in-out 11653ms infinite;
  -moz-animation: med-fade ease-in-out 6808ms infinite, wiggle1 ease-in-out 11653ms infinite;
  -ms-animation: med-fade ease-in-out 6808ms infinite, wiggle1 ease-in-out 11653ms infinite;
  -o-animation: med-fade ease-in-out 6808ms infinite, wiggle1 ease-in-out 11653ms infinite;
  animation: med-fade ease-in-out 6808ms infinite, wiggle1 ease-in-out 11653ms infinite;
}
.ray:nth-child(60) {
  left: 77%;
  height: 355px;
  width: 30px;
  background: red;
  -webkit-filter: blur(35.1px);
  -khtml-filter: blur(35.1px);
  -moz-filter: blur(35.1px);
  -ms-filter: blur(35.1px);
  -o-filter: blur(35.1px);
  filter: blur(35.1px);
  -webkit-animation: med-fade ease-in-out 6531ms infinite, wiggle3 ease-in-out 14429ms infinite;
  -khtml-animation: med-fade ease-in-out 6531ms infinite, wiggle3 ease-in-out 14429ms infinite;
  -moz-animation: med-fade ease-in-out 6531ms infinite, wiggle3 ease-in-out 14429ms infinite;
  -ms-animation: med-fade ease-in-out 6531ms infinite, wiggle3 ease-in-out 14429ms infinite;
  -o-animation: med-fade ease-in-out 6531ms infinite, wiggle3 ease-in-out 14429ms infinite;
  animation: med-fade ease-in-out 6531ms infinite, wiggle3 ease-in-out 14429ms infinite;
}
.ray:nth-child(61) {
  left: 85%;
  height: 393px;
  width: 18px;
  background: #ff3300;
  -webkit-filter: blur(19.86px);
  -khtml-filter: blur(19.86px);
  -moz-filter: blur(19.86px);
  -ms-filter: blur(19.86px);
  -o-filter: blur(19.86px);
  filter: blur(19.86px);
  -webkit-animation: med-fade ease-in-out 6049ms infinite, wiggle3 ease-in-out 10045ms infinite;
  -khtml-animation: med-fade ease-in-out 6049ms infinite, wiggle3 ease-in-out 10045ms infinite;
  -moz-animation: med-fade ease-in-out 6049ms infinite, wiggle3 ease-in-out 10045ms infinite;
  -ms-animation: med-fade ease-in-out 6049ms infinite, wiggle3 ease-in-out 10045ms infinite;
  -o-animation: med-fade ease-in-out 6049ms infinite, wiggle3 ease-in-out 10045ms infinite;
  animation: med-fade ease-in-out 6049ms infinite, wiggle3 ease-in-out 10045ms infinite;
}
.ray:nth-child(62) {
  left: 53%;
  height: 135px;
  width: 27px;
  background: #ff6600;
  -webkit-filter: blur(26.79px);
  -khtml-filter: blur(26.79px);
  -moz-filter: blur(26.79px);
  -ms-filter: blur(26.79px);
  -o-filter: blur(26.79px);
  filter: blur(26.79px);
  -webkit-animation: med-fade ease-in-out 6639ms infinite, wiggle2 ease-in-out 13829ms infinite;
  -khtml-animation: med-fade ease-in-out 6639ms infinite, wiggle2 ease-in-out 13829ms infinite;
  -moz-animation: med-fade ease-in-out 6639ms infinite, wiggle2 ease-in-out 13829ms infinite;
  -ms-animation: med-fade ease-in-out 6639ms infinite, wiggle2 ease-in-out 13829ms infinite;
  -o-animation: med-fade ease-in-out 6639ms infinite, wiggle2 ease-in-out 13829ms infinite;
  animation: med-fade ease-in-out 6639ms infinite, wiggle2 ease-in-out 13829ms infinite;
}
.ray:nth-child(63) {
  left: 58%;
  height: 403px;
  width: 22px;
  background: #ff9900;
  -webkit-filter: blur(19.94px);
  -khtml-filter: blur(19.94px);
  -moz-filter: blur(19.94px);
  -ms-filter: blur(19.94px);
  -o-filter: blur(19.94px);
  filter: blur(19.94px);
  -webkit-animation: med-fade ease-in-out 6898ms infinite, wiggle1 ease-in-out 7566ms infinite;
  -khtml-animation: med-fade ease-in-out 6898ms infinite, wiggle1 ease-in-out 7566ms infinite;
  -moz-animation: med-fade ease-in-out 6898ms infinite, wiggle1 ease-in-out 7566ms infinite;
  -ms-animation: med-fade ease-in-out 6898ms infinite, wiggle1 ease-in-out 7566ms infinite;
  -o-animation: med-fade ease-in-out 6898ms infinite, wiggle1 ease-in-out 7566ms infinite;
  animation: med-fade ease-in-out 6898ms infinite, wiggle1 ease-in-out 7566ms infinite;
}
.ray:nth-child(64) {
  left: 73%;
  height: 375px;
  width: 16px;
  background: #ffcc00;
  -webkit-filter: blur(16.32px);
  -khtml-filter: blur(16.32px);
  -moz-filter: blur(16.32px);
  -ms-filter: blur(16.32px);
  -o-filter: blur(16.32px);
  filter: blur(16.32px);
  -webkit-animation: med-fade ease-in-out 6470ms infinite, wiggle1 ease-in-out 8067ms infinite;
  -khtml-animation: med-fade ease-in-out 6470ms infinite, wiggle1 ease-in-out 8067ms infinite;
  -moz-animation: med-fade ease-in-out 6470ms infinite, wiggle1 ease-in-out 8067ms infinite;
  -ms-animation: med-fade ease-in-out 6470ms infinite, wiggle1 ease-in-out 8067ms infinite;
  -o-animation: med-fade ease-in-out 6470ms infinite, wiggle1 ease-in-out 8067ms infinite;
  animation: med-fade ease-in-out 6470ms infinite, wiggle1 ease-in-out 8067ms infinite;
}
.ray:nth-child(65) {
  left: 55%;
  height: 263px;
  width: 25px;
  background: yellow;
  -webkit-filter: blur(37.25px);
  -khtml-filter: blur(37.25px);
  -moz-filter: blur(37.25px);
  -ms-filter: blur(37.25px);
  -o-filter: blur(37.25px);
  filter: blur(37.25px);
  -webkit-animation: med-fade ease-in-out 6620ms infinite, wiggle1 ease-in-out 13178ms infinite;
  -khtml-animation: med-fade ease-in-out 6620ms infinite, wiggle1 ease-in-out 13178ms infinite;
  -moz-animation: med-fade ease-in-out 6620ms infinite, wiggle1 ease-in-out 13178ms infinite;
  -ms-animation: med-fade ease-in-out 6620ms infinite, wiggle1 ease-in-out 13178ms infinite;
  -o-animation: med-fade ease-in-out 6620ms infinite, wiggle1 ease-in-out 13178ms infinite;
  animation: med-fade ease-in-out 6620ms infinite, wiggle1 ease-in-out 13178ms infinite;
}
.ray:nth-child(66) {
  left: 43%;
  height: 134px;
  width: 24px;
  background: #ccff00;
  -webkit-filter: blur(40.48px);
  -khtml-filter: blur(40.48px);
  -moz-filter: blur(40.48px);
  -ms-filter: blur(40.48px);
  -o-filter: blur(40.48px);
  filter: blur(40.48px);
  -webkit-animation: med-fade ease-in-out 6890ms infinite, wiggle2 ease-in-out 12937ms infinite;
  -khtml-animation: med-fade ease-in-out 6890ms infinite, wiggle2 ease-in-out 12937ms infinite;
  -moz-animation: med-fade ease-in-out 6890ms infinite, wiggle2 ease-in-out 12937ms infinite;
  -ms-animation: med-fade ease-in-out 6890ms infinite, wiggle2 ease-in-out 12937ms infinite;
  -o-animation: med-fade ease-in-out 6890ms infinite, wiggle2 ease-in-out 12937ms infinite;
  animation: med-fade ease-in-out 6890ms infinite, wiggle2 ease-in-out 12937ms infinite;
}
.ray:nth-child(67) {
  left: 92%;
  height: 133px;
  width: 22px;
  background: #99ff00;
  -webkit-filter: blur(19.94px);
  -khtml-filter: blur(19.94px);
  -moz-filter: blur(19.94px);
  -ms-filter: blur(19.94px);
  -o-filter: blur(19.94px);
  filter: blur(19.94px);
  -webkit-animation: med-fade ease-in-out 6288ms infinite, wiggle1 ease-in-out 11423ms infinite;
  -khtml-animation: med-fade ease-in-out 6288ms infinite, wiggle1 ease-in-out 11423ms infinite;
  -moz-animation: med-fade ease-in-out 6288ms infinite, wiggle1 ease-in-out 11423ms infinite;
  -ms-animation: med-fade ease-in-out 6288ms infinite, wiggle1 ease-in-out 11423ms infinite;
  -o-animation: med-fade ease-in-out 6288ms infinite, wiggle1 ease-in-out 11423ms infinite;
  animation: med-fade ease-in-out 6288ms infinite, wiggle1 ease-in-out 11423ms infinite;
}
.ray:nth-child(68) {
  left: 99%;
  height: 410px;
  width: 21px;
  background: #66ff00;
  -webkit-filter: blur(28.17px);
  -khtml-filter: blur(28.17px);
  -moz-filter: blur(28.17px);
  -ms-filter: blur(28.17px);
  -o-filter: blur(28.17px);
  filter: blur(28.17px);
  -webkit-animation: med-fade ease-in-out 6321ms infinite, wiggle1 ease-in-out 10261ms infinite;
  -khtml-animation: med-fade ease-in-out 6321ms infinite, wiggle1 ease-in-out 10261ms infinite;
  -moz-animation: med-fade ease-in-out 6321ms infinite, wiggle1 ease-in-out 10261ms infinite;
  -ms-animation: med-fade ease-in-out 6321ms infinite, wiggle1 ease-in-out 10261ms infinite;
  -o-animation: med-fade ease-in-out 6321ms infinite, wiggle1 ease-in-out 10261ms infinite;
  animation: med-fade ease-in-out 6321ms infinite, wiggle1 ease-in-out 10261ms infinite;
}
.ray:nth-child(69) {
  left: 29%;
  height: 216px;
  width: 17px;
  background: #33ff00;
  -webkit-filter: blur(16.09px);
  -khtml-filter: blur(16.09px);
  -moz-filter: blur(16.09px);
  -ms-filter: blur(16.09px);
  -o-filter: blur(16.09px);
  filter: blur(16.09px);
  -webkit-animation: med-fade ease-in-out 6273ms infinite, wiggle1 ease-in-out 10469ms infinite;
  -khtml-animation: med-fade ease-in-out 6273ms infinite, wiggle1 ease-in-out 10469ms infinite;
  -moz-animation: med-fade ease-in-out 6273ms infinite, wiggle1 ease-in-out 10469ms infinite;
  -ms-animation: med-fade ease-in-out 6273ms infinite, wiggle1 ease-in-out 10469ms infinite;
  -o-animation: med-fade ease-in-out 6273ms infinite, wiggle1 ease-in-out 10469ms infinite;
  animation: med-fade ease-in-out 6273ms infinite, wiggle1 ease-in-out 10469ms infinite;
}
.ray:nth-child(70) {
  left: 20%;
  height: 373px;
  width: 27px;
  background: lime;
  -webkit-filter: blur(46.79px);
  -khtml-filter: blur(46.79px);
  -moz-filter: blur(46.79px);
  -ms-filter: blur(46.79px);
  -o-filter: blur(46.79px);
  filter: blur(46.79px);
  -webkit-animation: med-fade ease-in-out 6816ms infinite, wiggle3 ease-in-out 6299ms infinite;
  -khtml-animation: med-fade ease-in-out 6816ms infinite, wiggle3 ease-in-out 6299ms infinite;
  -moz-animation: med-fade ease-in-out 6816ms infinite, wiggle3 ease-in-out 6299ms infinite;
  -ms-animation: med-fade ease-in-out 6816ms infinite, wiggle3 ease-in-out 6299ms infinite;
  -o-animation: med-fade ease-in-out 6816ms infinite, wiggle3 ease-in-out 6299ms infinite;
  animation: med-fade ease-in-out 6816ms infinite, wiggle3 ease-in-out 6299ms infinite;
}
.ray:nth-child(71) {
  left: 26%;
  height: 140px;
  width: 20px;
  background: #00ff33;
  -webkit-filter: blur(23.4px);
  -khtml-filter: blur(23.4px);
  -moz-filter: blur(23.4px);
  -ms-filter: blur(23.4px);
  -o-filter: blur(23.4px);
  filter: blur(23.4px);
  -webkit-animation: med-fade ease-in-out 6932ms infinite, wiggle1 ease-in-out 10650ms infinite;
  -khtml-animation: med-fade ease-in-out 6932ms infinite, wiggle1 ease-in-out 10650ms infinite;
  -moz-animation: med-fade ease-in-out 6932ms infinite, wiggle1 ease-in-out 10650ms infinite;
  -ms-animation: med-fade ease-in-out 6932ms infinite, wiggle1 ease-in-out 10650ms infinite;
  -o-animation: med-fade ease-in-out 6932ms infinite, wiggle1 ease-in-out 10650ms infinite;
  animation: med-fade ease-in-out 6932ms infinite, wiggle1 ease-in-out 10650ms infinite;
}
.ray:nth-child(72) {
  left: 60%;
  height: 391px;
  width: 24px;
  background: #00ff66;
  -webkit-filter: blur(26.48px);
  -khtml-filter: blur(26.48px);
  -moz-filter: blur(26.48px);
  -ms-filter: blur(26.48px);
  -o-filter: blur(26.48px);
  filter: blur(26.48px);
  -webkit-animation: med-fade ease-in-out 6756ms infinite, wiggle1 ease-in-out 9594ms infinite;
  -khtml-animation: med-fade ease-in-out 6756ms infinite, wiggle1 ease-in-out 9594ms infinite;
  -moz-animation: med-fade ease-in-out 6756ms infinite, wiggle1 ease-in-out 9594ms infinite;
  -ms-animation: med-fade ease-in-out 6756ms infinite, wiggle1 ease-in-out 9594ms infinite;
  -o-animation: med-fade ease-in-out 6756ms infinite, wiggle1 ease-in-out 9594ms infinite;
  animation: med-fade ease-in-out 6756ms infinite, wiggle1 ease-in-out 9594ms infinite;
}
.ray:nth-child(73) {
  left: 26%;
  height: 191px;
  width: 18px;
  background: #00ff99;
  -webkit-filter: blur(31.86px);
  -khtml-filter: blur(31.86px);
  -moz-filter: blur(31.86px);
  -ms-filter: blur(31.86px);
  -o-filter: blur(31.86px);
  filter: blur(31.86px);
  -webkit-animation: med-fade ease-in-out 6401ms infinite, wiggle3 ease-in-out 13914ms infinite;
  -khtml-animation: med-fade ease-in-out 6401ms infinite, wiggle3 ease-in-out 13914ms infinite;
  -moz-animation: med-fade ease-in-out 6401ms infinite, wiggle3 ease-in-out 13914ms infinite;
  -ms-animation: med-fade ease-in-out 6401ms infinite, wiggle3 ease-in-out 13914ms infinite;
  -o-animation: med-fade ease-in-out 6401ms infinite, wiggle3 ease-in-out 13914ms infinite;
  animation: med-fade ease-in-out 6401ms infinite, wiggle3 ease-in-out 13914ms infinite;
}
.ray:nth-child(74) {
  left: 94%;
  height: 245px;
  width: 29px;
  background: #00ffcc;
  -webkit-filter: blur(36.33px);
  -khtml-filter: blur(36.33px);
  -moz-filter: blur(36.33px);
  -ms-filter: blur(36.33px);
  -o-filter: blur(36.33px);
  filter: blur(36.33px);
  -webkit-animation: med-fade ease-in-out 6893ms infinite, wiggle1 ease-in-out 7236ms infinite;
  -khtml-animation: med-fade ease-in-out 6893ms infinite, wiggle1 ease-in-out 7236ms infinite;
  -moz-animation: med-fade ease-in-out 6893ms infinite, wiggle1 ease-in-out 7236ms infinite;
  -ms-animation: med-fade ease-in-out 6893ms infinite, wiggle1 ease-in-out 7236ms infinite;
  -o-animation: med-fade ease-in-out 6893ms infinite, wiggle1 ease-in-out 7236ms infinite;
  animation: med-fade ease-in-out 6893ms infinite, wiggle1 ease-in-out 7236ms infinite;
}
.ray:nth-child(75) {
  left: 66%;
  height: 260px;
  width: 21px;
  background: cyan;
  -webkit-filter: blur(21.17px);
  -khtml-filter: blur(21.17px);
  -moz-filter: blur(21.17px);
  -ms-filter: blur(21.17px);
  -o-filter: blur(21.17px);
  filter: blur(21.17px);
  -webkit-animation: med-fade ease-in-out 6540ms infinite, wiggle2 ease-in-out 12138ms infinite;
  -khtml-animation: med-fade ease-in-out 6540ms infinite, wiggle2 ease-in-out 12138ms infinite;
  -moz-animation: med-fade ease-in-out 6540ms infinite, wiggle2 ease-in-out 12138ms infinite;
  -ms-animation: med-fade ease-in-out 6540ms infinite, wiggle2 ease-in-out 12138ms infinite;
  -o-animation: med-fade ease-in-out 6540ms infinite, wiggle2 ease-in-out 12138ms infinite;
  animation: med-fade ease-in-out 6540ms infinite, wiggle2 ease-in-out 12138ms infinite;
}
.ray:nth-child(76) {
  left: 47%;
  height: 334px;
  width: 22px;
  background: #00ccff;
  -webkit-filter: blur(23.94px);
  -khtml-filter: blur(23.94px);
  -moz-filter: blur(23.94px);
  -ms-filter: blur(23.94px);
  -o-filter: blur(23.94px);
  filter: blur(23.94px);
  -webkit-animation: med-fade ease-in-out 6016ms infinite, wiggle2 ease-in-out 10948ms infinite;
  -khtml-animation: med-fade ease-in-out 6016ms infinite, wiggle2 ease-in-out 10948ms infinite;
  -moz-animation: med-fade ease-in-out 6016ms infinite, wiggle2 ease-in-out 10948ms infinite;
  -ms-animation: med-fade ease-in-out 6016ms infinite, wiggle2 ease-in-out 10948ms infinite;
  -o-animation: med-fade ease-in-out 6016ms infinite, wiggle2 ease-in-out 10948ms infinite;
  animation: med-fade ease-in-out 6016ms infinite, wiggle2 ease-in-out 10948ms infinite;
}
.ray:nth-child(77) {
  left: 93%;
  height: 334px;
  width: 24px;
  background: #0099ff;
  -webkit-filter: blur(28.48px);
  -khtml-filter: blur(28.48px);
  -moz-filter: blur(28.48px);
  -ms-filter: blur(28.48px);
  -o-filter: blur(28.48px);
  filter: blur(28.48px);
  -webkit-animation: med-fade ease-in-out 6846ms infinite, wiggle2 ease-in-out 6663ms infinite;
  -khtml-animation: med-fade ease-in-out 6846ms infinite, wiggle2 ease-in-out 6663ms infinite;
  -moz-animation: med-fade ease-in-out 6846ms infinite, wiggle2 ease-in-out 6663ms infinite;
  -ms-animation: med-fade ease-in-out 6846ms infinite, wiggle2 ease-in-out 6663ms infinite;
  -o-animation: med-fade ease-in-out 6846ms infinite, wiggle2 ease-in-out 6663ms infinite;
  animation: med-fade ease-in-out 6846ms infinite, wiggle2 ease-in-out 6663ms infinite;
}
.ray:nth-child(78) {
  left: 84%;
  height: 166px;
  width: 27px;
  background: #0066ff;
  -webkit-filter: blur(35.79px);
  -khtml-filter: blur(35.79px);
  -moz-filter: blur(35.79px);
  -ms-filter: blur(35.79px);
  -o-filter: blur(35.79px);
  filter: blur(35.79px);
  -webkit-animation: med-fade ease-in-out 6119ms infinite, wiggle1 ease-in-out 14579ms infinite;
  -khtml-animation: med-fade ease-in-out 6119ms infinite, wiggle1 ease-in-out 14579ms infinite;
  -moz-animation: med-fade ease-in-out 6119ms infinite, wiggle1 ease-in-out 14579ms infinite;
  -ms-animation: med-fade ease-in-out 6119ms infinite, wiggle1 ease-in-out 14579ms infinite;
  -o-animation: med-fade ease-in-out 6119ms infinite, wiggle1 ease-in-out 14579ms infinite;
  animation: med-fade ease-in-out 6119ms infinite, wiggle1 ease-in-out 14579ms infinite;
}
.ray:nth-child(79) {
  left: 38%;
  height: 316px;
  width: 20px;
  background: #0033ff;
  -webkit-filter: blur(23.4px);
  -khtml-filter: blur(23.4px);
  -moz-filter: blur(23.4px);
  -ms-filter: blur(23.4px);
  -o-filter: blur(23.4px);
  filter: blur(23.4px);
  -webkit-animation: med-fade ease-in-out 6493ms infinite, wiggle2 ease-in-out 8956ms infinite;
  -khtml-animation: med-fade ease-in-out 6493ms infinite, wiggle2 ease-in-out 8956ms infinite;
  -moz-animation: med-fade ease-in-out 6493ms infinite, wiggle2 ease-in-out 8956ms infinite;
  -ms-animation: med-fade ease-in-out 6493ms infinite, wiggle2 ease-in-out 8956ms infinite;
  -o-animation: med-fade ease-in-out 6493ms infinite, wiggle2 ease-in-out 8956ms infinite;
  animation: med-fade ease-in-out 6493ms infinite, wiggle2 ease-in-out 8956ms infinite;
}
.ray:nth-child(80) {
  left: 41%;
  height: 159px;
  width: 22px;
  background: blue;
  -webkit-filter: blur(22.94px);
  -khtml-filter: blur(22.94px);
  -moz-filter: blur(22.94px);
  -ms-filter: blur(22.94px);
  -o-filter: blur(22.94px);
  filter: blur(22.94px);
  -webkit-animation: med-fade ease-in-out 6807ms infinite, wiggle1 ease-in-out 8578ms infinite;
  -khtml-animation: med-fade ease-in-out 6807ms infinite, wiggle1 ease-in-out 8578ms infinite;
  -moz-animation: med-fade ease-in-out 6807ms infinite, wiggle1 ease-in-out 8578ms infinite;
  -ms-animation: med-fade ease-in-out 6807ms infinite, wiggle1 ease-in-out 8578ms infinite;
  -o-animation: med-fade ease-in-out 6807ms infinite, wiggle1 ease-in-out 8578ms infinite;
  animation: med-fade ease-in-out 6807ms infinite, wiggle1 ease-in-out 8578ms infinite;
}
.ray:nth-child(81) {
  left: 5%;
  height: 214px;
  width: 77px;
  background: #ff4d00;
  -webkit-filter: blur(74.35px);
  -khtml-filter: blur(74.35px);
  -moz-filter: blur(74.35px);
  -ms-filter: blur(74.35px);
  -o-filter: blur(74.35px);
  filter: blur(74.35px);
  -webkit-animation: big-fade ease-in-out 6452ms infinite, wiggle2 ease-in-out 15212ms infinite;
  -khtml-animation: big-fade ease-in-out 6452ms infinite, wiggle2 ease-in-out 15212ms infinite;
  -moz-animation: big-fade ease-in-out 6452ms infinite, wiggle2 ease-in-out 15212ms infinite;
  -ms-animation: big-fade ease-in-out 6452ms infinite, wiggle2 ease-in-out 15212ms infinite;
  -o-animation: big-fade ease-in-out 6452ms infinite, wiggle2 ease-in-out 15212ms infinite;
  animation: big-fade ease-in-out 6452ms infinite, wiggle2 ease-in-out 15212ms infinite;
}
.ray:nth-child(82) {
  left: 57%;
  height: 386px;
  width: 63px;
  background: #ff9900;
  -webkit-filter: blur(59.65px);
  -khtml-filter: blur(59.65px);
  -moz-filter: blur(59.65px);
  -ms-filter: blur(59.65px);
  -o-filter: blur(59.65px);
  filter: blur(59.65px);
  -webkit-animation: big-fade ease-in-out 6204ms infinite, wiggle1 ease-in-out 10992ms infinite;
  -khtml-animation: big-fade ease-in-out 6204ms infinite, wiggle1 ease-in-out 10992ms infinite;
  -moz-animation: big-fade ease-in-out 6204ms infinite, wiggle1 ease-in-out 10992ms infinite;
  -ms-animation: big-fade ease-in-out 6204ms infinite, wiggle1 ease-in-out 10992ms infinite;
  -o-animation: big-fade ease-in-out 6204ms infinite, wiggle1 ease-in-out 10992ms infinite;
  animation: big-fade ease-in-out 6204ms infinite, wiggle1 ease-in-out 10992ms infinite;
}
.ray:nth-child(83) {
  left: 83%;
  height: 282px;
  width: 66px;
  background: #ffe600;
  -webkit-filter: blur(76.3px);
  -khtml-filter: blur(76.3px);
  -moz-filter: blur(76.3px);
  -ms-filter: blur(76.3px);
  -o-filter: blur(76.3px);
  filter: blur(76.3px);
  -webkit-animation: big-fade ease-in-out 6101ms infinite, wiggle2 ease-in-out 7071ms infinite;
  -khtml-animation: big-fade ease-in-out 6101ms infinite, wiggle2 ease-in-out 7071ms infinite;
  -moz-animation: big-fade ease-in-out 6101ms infinite, wiggle2 ease-in-out 7071ms infinite;
  -ms-animation: big-fade ease-in-out 6101ms infinite, wiggle2 ease-in-out 7071ms infinite;
  -o-animation: big-fade ease-in-out 6101ms infinite, wiggle2 ease-in-out 7071ms infinite;
  animation: big-fade ease-in-out 6101ms infinite, wiggle2 ease-in-out 7071ms infinite;
}
.ray:nth-child(84) {
  left: 53%;
  height: 438px;
  width: 80px;
  background: #ccff00;
  -webkit-filter: blur(123px);
  -khtml-filter: blur(123px);
  -moz-filter: blur(123px);
  -ms-filter: blur(123px);
  -o-filter: blur(123px);
  filter: blur(123px);
  -webkit-animation: big-fade ease-in-out 6628ms infinite, wiggle3 ease-in-out 6049ms infinite;
  -khtml-animation: big-fade ease-in-out 6628ms infinite, wiggle3 ease-in-out 6049ms infinite;
  -moz-animation: big-fade ease-in-out 6628ms infinite, wiggle3 ease-in-out 6049ms infinite;
  -ms-animation: big-fade ease-in-out 6628ms infinite, wiggle3 ease-in-out 6049ms infinite;
  -o-animation: big-fade ease-in-out 6628ms infinite, wiggle3 ease-in-out 6049ms infinite;
  animation: big-fade ease-in-out 6628ms infinite, wiggle3 ease-in-out 6049ms infinite;
}
.ray:nth-child(85) {
  left: 35%;
  height: 192px;
  width: 63px;
  background: #80ff00;
  -webkit-filter: blur(66.65px);
  -khtml-filter: blur(66.65px);
  -moz-filter: blur(66.65px);
  -ms-filter: blur(66.65px);
  -o-filter: blur(66.65px);
  filter: blur(66.65px);
  -webkit-animation: big-fade ease-in-out 6135ms infinite, wiggle3 ease-in-out 8027ms infinite;
  -khtml-animation: big-fade ease-in-out 6135ms infinite, wiggle3 ease-in-out 8027ms infinite;
  -moz-animation: big-fade ease-in-out 6135ms infinite, wiggle3 ease-in-out 8027ms infinite;
  -ms-animation: big-fade ease-in-out 6135ms infinite, wiggle3 ease-in-out 8027ms infinite;
  -o-animation: big-fade ease-in-out 6135ms infinite, wiggle3 ease-in-out 8027ms infinite;
  animation: big-fade ease-in-out 6135ms infinite, wiggle3 ease-in-out 8027ms infinite;
}
.ray:nth-child(86) {
  left: 21%;
  height: 386px;
  width: 50px;
  background: #33ff00;
  -webkit-filter: blur(48.5px);
  -khtml-filter: blur(48.5px);
  -moz-filter: blur(48.5px);
  -ms-filter: blur(48.5px);
  -o-filter: blur(48.5px);
  filter: blur(48.5px);
  -webkit-animation: big-fade ease-in-out 6256ms infinite, wiggle3 ease-in-out 12183ms infinite;
  -khtml-animation: big-fade ease-in-out 6256ms infinite, wiggle3 ease-in-out 12183ms infinite;
  -moz-animation: big-fade ease-in-out 6256ms infinite, wiggle3 ease-in-out 12183ms infinite;
  -ms-animation: big-fade ease-in-out 6256ms infinite, wiggle3 ease-in-out 12183ms infinite;
  -o-animation: big-fade ease-in-out 6256ms infinite, wiggle3 ease-in-out 12183ms infinite;
  animation: big-fade ease-in-out 6256ms infinite, wiggle3 ease-in-out 12183ms infinite;
}
.ray:nth-child(87) {
  left: 42%;
  height: 189px;
  width: 66px;
  background: #00ff1a;
  -webkit-filter: blur(96.3px);
  -khtml-filter: blur(96.3px);
  -moz-filter: blur(96.3px);
  -ms-filter: blur(96.3px);
  -o-filter: blur(96.3px);
  filter: blur(96.3px);
  -webkit-animation: big-fade ease-in-out 6792ms infinite, wiggle3 ease-in-out 14505ms infinite;
  -khtml-animation: big-fade ease-in-out 6792ms infinite, wiggle3 ease-in-out 14505ms infinite;
  -moz-animation: big-fade ease-in-out 6792ms infinite, wiggle3 ease-in-out 14505ms infinite;
  -ms-animation: big-fade ease-in-out 6792ms infinite, wiggle3 ease-in-out 14505ms infinite;
  -o-animation: big-fade ease-in-out 6792ms infinite, wiggle3 ease-in-out 14505ms infinite;
  animation: big-fade ease-in-out 6792ms infinite, wiggle3 ease-in-out 14505ms infinite;
}
.ray:nth-child(88) {
  left: 73%;
  height: 300px;
  width: 48px;
  background: #00ff66;
  -webkit-filter: blur(56.4px);
  -khtml-filter: blur(56.4px);
  -moz-filter: blur(56.4px);
  -ms-filter: blur(56.4px);
  -o-filter: blur(56.4px);
  filter: blur(56.4px);
  -webkit-animation: big-fade ease-in-out 6689ms infinite, wiggle3 ease-in-out 12571ms infinite;
  -khtml-animation: big-fade ease-in-out 6689ms infinite, wiggle3 ease-in-out 12571ms infinite;
  -moz-animation: big-fade ease-in-out 6689ms infinite, wiggle3 ease-in-out 12571ms infinite;
  -ms-animation: big-fade ease-in-out 6689ms infinite, wiggle3 ease-in-out 12571ms infinite;
  -o-animation: big-fade ease-in-out 6689ms infinite, wiggle3 ease-in-out 12571ms infinite;
  animation: big-fade ease-in-out 6689ms infinite, wiggle3 ease-in-out 12571ms infinite;
}
.ray:nth-child(89) {
  left: 91%;
  height: 449px;
  width: 58px;
  background: #00ffb3;
  -webkit-filter: blur(76.9px);
  -khtml-filter: blur(76.9px);
  -moz-filter: blur(76.9px);
  -ms-filter: blur(76.9px);
  -o-filter: blur(76.9px);
  filter: blur(76.9px);
  -webkit-animation: big-fade ease-in-out 6682ms infinite, wiggle3 ease-in-out 6505ms infinite;
  -khtml-animation: big-fade ease-in-out 6682ms infinite, wiggle3 ease-in-out 6505ms infinite;
  -moz-animation: big-fade ease-in-out 6682ms infinite, wiggle3 ease-in-out 6505ms infinite;
  -ms-animation: big-fade ease-in-out 6682ms infinite, wiggle3 ease-in-out 6505ms infinite;
  -o-animation: big-fade ease-in-out 6682ms infinite, wiggle3 ease-in-out 6505ms infinite;
  animation: big-fade ease-in-out 6682ms infinite, wiggle3 ease-in-out 6505ms infinite;
}
.ray:nth-child(90) {
  left: 89%;
  height: 232px;
  width: 59px;
  background: cyan;
  -webkit-filter: blur(76.45px);
  -khtml-filter: blur(76.45px);
  -moz-filter: blur(76.45px);
  -ms-filter: blur(76.45px);
  -o-filter: blur(76.45px);
  filter: blur(76.45px);
  -webkit-animation: big-fade ease-in-out 6478ms infinite, wiggle3 ease-in-out 9501ms infinite;
  -khtml-animation: big-fade ease-in-out 6478ms infinite, wiggle3 ease-in-out 9501ms infinite;
  -moz-animation: big-fade ease-in-out 6478ms infinite, wiggle3 ease-in-out 9501ms infinite;
  -ms-animation: big-fade ease-in-out 6478ms infinite, wiggle3 ease-in-out 9501ms infinite;
  -o-animation: big-fade ease-in-out 6478ms infinite, wiggle3 ease-in-out 9501ms infinite;
  animation: big-fade ease-in-out 6478ms infinite, wiggle3 ease-in-out 9501ms infinite;
}
.ray:nth-child(91) {
  left: 9%;
  height: 101px;
  width: 51px;
  background: #00b3ff;
  -webkit-filter: blur(54.05px);
  -khtml-filter: blur(54.05px);
  -moz-filter: blur(54.05px);
  -ms-filter: blur(54.05px);
  -o-filter: blur(54.05px);
  filter: blur(54.05px);
  -webkit-animation: big-fade ease-in-out 6520ms infinite, wiggle1 ease-in-out 12649ms infinite;
  -khtml-animation: big-fade ease-in-out 6520ms infinite, wiggle1 ease-in-out 12649ms infinite;
  -moz-animation: big-fade ease-in-out 6520ms infinite, wiggle1 ease-in-out 12649ms infinite;
  -ms-animation: big-fade ease-in-out 6520ms infinite, wiggle1 ease-in-out 12649ms infinite;
  -o-animation: big-fade ease-in-out 6520ms infinite, wiggle1 ease-in-out 12649ms infinite;
  animation: big-fade ease-in-out 6520ms infinite, wiggle1 ease-in-out 12649ms infinite;
}
.ray:nth-child(92) {
  left: 48%;
  height: 185px;
  width: 58px;
  background: #0066ff;
  -webkit-filter: blur(36.9px);
  -khtml-filter: blur(36.9px);
  -moz-filter: blur(36.9px);
  -ms-filter: blur(36.9px);
  -o-filter: blur(36.9px);
  filter: blur(36.9px);
  -webkit-animation: big-fade ease-in-out 6836ms infinite, wiggle1 ease-in-out 8066ms infinite;
  -khtml-animation: big-fade ease-in-out 6836ms infinite, wiggle1 ease-in-out 8066ms infinite;
  -moz-animation: big-fade ease-in-out 6836ms infinite, wiggle1 ease-in-out 8066ms infinite;
  -ms-animation: big-fade ease-in-out 6836ms infinite, wiggle1 ease-in-out 8066ms infinite;
  -o-animation: big-fade ease-in-out 6836ms infinite, wiggle1 ease-in-out 8066ms infinite;
  animation: big-fade ease-in-out 6836ms infinite, wiggle1 ease-in-out 8066ms infinite;
}
.ray:nth-child(93) {
  left: 64%;
  height: 286px;
  width: 67px;
  background: #001aff;
  -webkit-filter: blur(91.85px);
  -khtml-filter: blur(91.85px);
  -moz-filter: blur(91.85px);
  -ms-filter: blur(91.85px);
  -o-filter: blur(91.85px);
  filter: blur(91.85px);
  -webkit-animation: big-fade ease-in-out 6630ms infinite, wiggle3 ease-in-out 15469ms infinite;
  -khtml-animation: big-fade ease-in-out 6630ms infinite, wiggle3 ease-in-out 15469ms infinite;
  -moz-animation: big-fade ease-in-out 6630ms infinite, wiggle3 ease-in-out 15469ms infinite;
  -ms-animation: big-fade ease-in-out 6630ms infinite, wiggle3 ease-in-out 15469ms infinite;
  -o-animation: big-fade ease-in-out 6630ms infinite, wiggle3 ease-in-out 15469ms infinite;
  animation: big-fade ease-in-out 6630ms infinite, wiggle3 ease-in-out 15469ms infinite;
}
.ray:nth-child(94) {
  left: 22%;
  height: 158px;
  width: 59px;
  background: #3300ff;
  -webkit-filter: blur(85.45px);
  -khtml-filter: blur(85.45px);
  -moz-filter: blur(85.45px);
  -ms-filter: blur(85.45px);
  -o-filter: blur(85.45px);
  filter: blur(85.45px);
  -webkit-animation: big-fade ease-in-out 6820ms infinite, wiggle2 ease-in-out 15798ms infinite;
  -khtml-animation: big-fade ease-in-out 6820ms infinite, wiggle2 ease-in-out 15798ms infinite;
  -moz-animation: big-fade ease-in-out 6820ms infinite, wiggle2 ease-in-out 15798ms infinite;
  -ms-animation: big-fade ease-in-out 6820ms infinite, wiggle2 ease-in-out 15798ms infinite;
  -o-animation: big-fade ease-in-out 6820ms infinite, wiggle2 ease-in-out 15798ms infinite;
  animation: big-fade ease-in-out 6820ms infinite, wiggle2 ease-in-out 15798ms infinite;
}
.ray:nth-child(95) {
  left: 82%;
  height: 213px;
  width: 79px;
  background: #8000ff;
  -webkit-filter: blur(106.45px);
  -khtml-filter: blur(106.45px);
  -moz-filter: blur(106.45px);
  -ms-filter: blur(106.45px);
  -o-filter: blur(106.45px);
  filter: blur(106.45px);
  -webkit-animation: big-fade ease-in-out 6143ms infinite, wiggle1 ease-in-out 15383ms infinite;
  -khtml-animation: big-fade ease-in-out 6143ms infinite, wiggle1 ease-in-out 15383ms infinite;
  -moz-animation: big-fade ease-in-out 6143ms infinite, wiggle1 ease-in-out 15383ms infinite;
  -ms-animation: big-fade ease-in-out 6143ms infinite, wiggle1 ease-in-out 15383ms infinite;
  -o-animation: big-fade ease-in-out 6143ms infinite, wiggle1 ease-in-out 15383ms infinite;
  animation: big-fade ease-in-out 6143ms infinite, wiggle1 ease-in-out 15383ms infinite;
}
.ray:nth-child(96) {
  left: 93%;
  height: 122px;
  width: 71px;
  background: #cc00ff;
  -webkit-filter: blur(65.05px);
  -khtml-filter: blur(65.05px);
  -moz-filter: blur(65.05px);
  -ms-filter: blur(65.05px);
  -o-filter: blur(65.05px);
  filter: blur(65.05px);
  -webkit-animation: big-fade ease-in-out 6807ms infinite, wiggle1 ease-in-out 12217ms infinite;
  -khtml-animation: big-fade ease-in-out 6807ms infinite, wiggle1 ease-in-out 12217ms infinite;
  -moz-animation: big-fade ease-in-out 6807ms infinite, wiggle1 ease-in-out 12217ms infinite;
  -ms-animation: big-fade ease-in-out 6807ms infinite, wiggle1 ease-in-out 12217ms infinite;
  -o-animation: big-fade ease-in-out 6807ms infinite, wiggle1 ease-in-out 12217ms infinite;
  animation: big-fade ease-in-out 6807ms infinite, wiggle1 ease-in-out 12217ms infinite;
}
.ray:nth-child(97) {
  left: 11%;
  height: 297px;
  width: 76px;
  background: #ff00e6;
  -webkit-filter: blur(84.8px);
  -khtml-filter: blur(84.8px);
  -moz-filter: blur(84.8px);
  -ms-filter: blur(84.8px);
  -o-filter: blur(84.8px);
  filter: blur(84.8px);
  -webkit-animation: big-fade ease-in-out 6175ms infinite, wiggle2 ease-in-out 14875ms infinite;
  -khtml-animation: big-fade ease-in-out 6175ms infinite, wiggle2 ease-in-out 14875ms infinite;
  -moz-animation: big-fade ease-in-out 6175ms infinite, wiggle2 ease-in-out 14875ms infinite;
  -ms-animation: big-fade ease-in-out 6175ms infinite, wiggle2 ease-in-out 14875ms infinite;
  -o-animation: big-fade ease-in-out 6175ms infinite, wiggle2 ease-in-out 14875ms infinite;
  animation: big-fade ease-in-out 6175ms infinite, wiggle2 ease-in-out 14875ms infinite;
}
.ray:nth-child(98) {
  left: 28%;
  height: 110px;
  width: 72px;
  background: #ff0099;
  -webkit-filter: blur(63.6px);
  -khtml-filter: blur(63.6px);
  -moz-filter: blur(63.6px);
  -ms-filter: blur(63.6px);
  -o-filter: blur(63.6px);
  filter: blur(63.6px);
  -webkit-animation: big-fade ease-in-out 6845ms infinite, wiggle3 ease-in-out 15941ms infinite;
  -khtml-animation: big-fade ease-in-out 6845ms infinite, wiggle3 ease-in-out 15941ms infinite;
  -moz-animation: big-fade ease-in-out 6845ms infinite, wiggle3 ease-in-out 15941ms infinite;
  -ms-animation: big-fade ease-in-out 6845ms infinite, wiggle3 ease-in-out 15941ms infinite;
  -o-animation: big-fade ease-in-out 6845ms infinite, wiggle3 ease-in-out 15941ms infinite;
  animation: big-fade ease-in-out 6845ms infinite, wiggle3 ease-in-out 15941ms infinite;
}
.ray:nth-child(99) {
  left: 48%;
  height: 443px;
  width: 62px;
  background: #ff004d;
  -webkit-filter: blur(59.1px);
  -khtml-filter: blur(59.1px);
  -moz-filter: blur(59.1px);
  -ms-filter: blur(59.1px);
  -o-filter: blur(59.1px);
  filter: blur(59.1px);
  -webkit-animation: big-fade ease-in-out 6923ms infinite, wiggle3 ease-in-out 15890ms infinite;
  -khtml-animation: big-fade ease-in-out 6923ms infinite, wiggle3 ease-in-out 15890ms infinite;
  -moz-animation: big-fade ease-in-out 6923ms infinite, wiggle3 ease-in-out 15890ms infinite;
  -ms-animation: big-fade ease-in-out 6923ms infinite, wiggle3 ease-in-out 15890ms infinite;
  -o-animation: big-fade ease-in-out 6923ms infinite, wiggle3 ease-in-out 15890ms infinite;
  animation: big-fade ease-in-out 6923ms infinite, wiggle3 ease-in-out 15890ms infinite;
}
.ray:nth-child(100) {
  left: 51%;
  height: 118px;
  width: 42px;
  background: red;
  -webkit-filter: blur(29.1px);
  -khtml-filter: blur(29.1px);
  -moz-filter: blur(29.1px);
  -ms-filter: blur(29.1px);
  -o-filter: blur(29.1px);
  filter: blur(29.1px);
  -webkit-animation: big-fade ease-in-out 6818ms infinite, wiggle1 ease-in-out 7023ms infinite;
  -khtml-animation: big-fade ease-in-out 6818ms infinite, wiggle1 ease-in-out 7023ms infinite;
  -moz-animation: big-fade ease-in-out 6818ms infinite, wiggle1 ease-in-out 7023ms infinite;
  -ms-animation: big-fade ease-in-out 6818ms infinite, wiggle1 ease-in-out 7023ms infinite;
  -o-animation: big-fade ease-in-out 6818ms infinite, wiggle1 ease-in-out 7023ms infinite;
  animation: big-fade ease-in-out 6818ms infinite, wiggle1 ease-in-out 7023ms infinite;
}

@-webkit-keyframes sml-fade {
  0% {
    opacity: 0.15;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0.2;
  }
}
@-khtml-keyframes sml-fade {
  0% {
    opacity: 0.15;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0.2;
  }
}
@-moz-keyframes sml-fade {
  0% {
    opacity: 0.15;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0.2;
  }
}
@-ms-keyframes sml-fade {
  0% {
    opacity: 0.15;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0.2;
  }
}
@-o-keyframes sml-fade {
  0% {
    opacity: 0.15;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0.2;
  }
}
@keyframes sml-fade {
  0% {
    opacity: 0.15;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0.2;
  }
}
@-webkit-keyframes med-fade {
  0% {
    opacity: 0.2;
  }
  50% {
    opacity: 0.1;
  }
  100% {
    opacity: 0.15;
  }
}
@-khtml-keyframes med-fade {
  0% {
    opacity: 0.2;
  }
  50% {
    opacity: 0.1;
  }
  100% {
    opacity: 0.15;
  }
}
@-moz-keyframes med-fade {
  0% {
    opacity: 0.2;
  }
  50% {
    opacity: 0.1;
  }
  100% {
    opacity: 0.15;
  }
}
@-ms-keyframes med-fade {
  0% {
    opacity: 0.2;
  }
  50% {
    opacity: 0.1;
  }
  100% {
    opacity: 0.15;
  }
}
@-o-keyframes med-fade {
  0% {
    opacity: 0.2;
  }
  50% {
    opacity: 0.1;
  }
  100% {
    opacity: 0.15;
  }
}
@keyframes med-fade {
  0% {
    opacity: 0.2;
  }
  50% {
    opacity: 0.1;
  }
  100% {
    opacity: 0.15;
  }
}
@-webkit-keyframes big-fade {
  0% {
    opacity: 0.2;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0.15;
  }
}
@-khtml-keyframes big-fade {
  0% {
    opacity: 0.2;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0.15;
  }
}
@-moz-keyframes big-fade {
  0% {
    opacity: 0.2;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0.15;
  }
}
@-ms-keyframes big-fade {
  0% {
    opacity: 0.2;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0.15;
  }
}
@-o-keyframes big-fade {
  0% {
    opacity: 0.2;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0.15;
  }
}
@keyframes big-fade {
  0% {
    opacity: 0.2;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0.15;
  }
}
@-webkit-keyframes wiggle0 {
  0% {
    -webkit-transform: translate3d(100px, -100px, 0);
    -khtml-transform: translate3d(100px, -100px, 0);
    -moz-transform: translate3d(100px, -100px, 0);
    -ms-transform: translate3d(100px, -100px, 0);
    -o-transform: translate3d(100px, -100px, 0);
    transform: translate3d(100px, -100px, 0);
  }
  50% {
    -webkit-transform: translate3d(134px, 134px, 0);
    -khtml-transform: translate3d(134px, 134px, 0);
    -moz-transform: translate3d(134px, 134px, 0);
    -ms-transform: translate3d(134px, 134px, 0);
    -o-transform: translate3d(134px, 134px, 0);
    transform: translate3d(134px, 134px, 0);
    -webkit-transform: scaleX(1.5);
  }
  100% {
    -webkit-transform: translate3d(100px, -100px, 0);
    -khtml-transform: translate3d(100px, -100px, 0);
    -moz-transform: translate3d(100px, -100px, 0);
    -ms-transform: translate3d(100px, -100px, 0);
    -o-transform: translate3d(100px, -100px, 0);
    transform: translate3d(100px, -100px, 0);
  }
}
@-khtml-keyframes wiggle0 {
  0% {
    -webkit-transform: translate3d(100px, -100px, 0);
    -khtml-transform: translate3d(100px, -100px, 0);
    -moz-transform: translate3d(100px, -100px, 0);
    -ms-transform: translate3d(100px, -100px, 0);
    -o-transform: translate3d(100px, -100px, 0);
    transform: translate3d(100px, -100px, 0);
  }
  50% {
    -webkit-transform: translate3d(134px, 134px, 0);
    -khtml-transform: translate3d(134px, 134px, 0);
    -moz-transform: translate3d(134px, 134px, 0);
    -ms-transform: translate3d(134px, 134px, 0);
    -o-transform: translate3d(134px, 134px, 0);
    transform: translate3d(134px, 134px, 0);
    -webkit-transform: scaleX(1.5);
  }
  100% {
    -webkit-transform: translate3d(100px, -100px, 0);
    -khtml-transform: translate3d(100px, -100px, 0);
    -moz-transform: translate3d(100px, -100px, 0);
    -ms-transform: translate3d(100px, -100px, 0);
    -o-transform: translate3d(100px, -100px, 0);
    transform: translate3d(100px, -100px, 0);
  }
}
@-moz-keyframes wiggle0 {
  0% {
    -webkit-transform: translate3d(100px, -100px, 0);
    -khtml-transform: translate3d(100px, -100px, 0);
    -moz-transform: translate3d(100px, -100px, 0);
    -ms-transform: translate3d(100px, -100px, 0);
    -o-transform: translate3d(100px, -100px, 0);
    transform: translate3d(100px, -100px, 0);
  }
  50% {
    -webkit-transform: translate3d(134px, 134px, 0);
    -khtml-transform: translate3d(134px, 134px, 0);
    -moz-transform: translate3d(134px, 134px, 0);
    -ms-transform: translate3d(134px, 134px, 0);
    -o-transform: translate3d(134px, 134px, 0);
    transform: translate3d(134px, 134px, 0);
    -webkit-transform: scaleX(1.5);
  }
  100% {
    -webkit-transform: translate3d(100px, -100px, 0);
    -khtml-transform: translate3d(100px, -100px, 0);
    -moz-transform: translate3d(100px, -100px, 0);
    -ms-transform: translate3d(100px, -100px, 0);
    -o-transform: translate3d(100px, -100px, 0);
    transform: translate3d(100px, -100px, 0);
  }
}
@-ms-keyframes wiggle0 {
  0% {
    -webkit-transform: translate3d(100px, -100px, 0);
    -khtml-transform: translate3d(100px, -100px, 0);
    -moz-transform: translate3d(100px, -100px, 0);
    -ms-transform: translate3d(100px, -100px, 0);
    -o-transform: translate3d(100px, -100px, 0);
    transform: translate3d(100px, -100px, 0);
  }
  50% {
    -webkit-transform: translate3d(134px, 134px, 0);
    -khtml-transform: translate3d(134px, 134px, 0);
    -moz-transform: translate3d(134px, 134px, 0);
    -ms-transform: translate3d(134px, 134px, 0);
    -o-transform: translate3d(134px, 134px, 0);
    transform: translate3d(134px, 134px, 0);
    -webkit-transform: scaleX(1.5);
  }
  100% {
    -webkit-transform: translate3d(100px, -100px, 0);
    -khtml-transform: translate3d(100px, -100px, 0);
    -moz-transform: translate3d(100px, -100px, 0);
    -ms-transform: translate3d(100px, -100px, 0);
    -o-transform: translate3d(100px, -100px, 0);
    transform: translate3d(100px, -100px, 0);
  }
}
@-o-keyframes wiggle0 {
  0% {
    -webkit-transform: translate3d(100px, -100px, 0);
    -khtml-transform: translate3d(100px, -100px, 0);
    -moz-transform: translate3d(100px, -100px, 0);
    -ms-transform: translate3d(100px, -100px, 0);
    -o-transform: translate3d(100px, -100px, 0);
    transform: translate3d(100px, -100px, 0);
  }
  50% {
    -webkit-transform: translate3d(134px, 134px, 0);
    -khtml-transform: translate3d(134px, 134px, 0);
    -moz-transform: translate3d(134px, 134px, 0);
    -ms-transform: translate3d(134px, 134px, 0);
    -o-transform: translate3d(134px, 134px, 0);
    transform: translate3d(134px, 134px, 0);
    -webkit-transform: scaleX(1.5);
  }
  100% {
    -webkit-transform: translate3d(100px, -100px, 0);
    -khtml-transform: translate3d(100px, -100px, 0);
    -moz-transform: translate3d(100px, -100px, 0);
    -ms-transform: translate3d(100px, -100px, 0);
    -o-transform: translate3d(100px, -100px, 0);
    transform: translate3d(100px, -100px, 0);
  }
}
@keyframes wiggle0 {
  0% {
    -webkit-transform: translate3d(100px, -100px, 0);
    -khtml-transform: translate3d(100px, -100px, 0);
    -moz-transform: translate3d(100px, -100px, 0);
    -ms-transform: translate3d(100px, -100px, 0);
    -o-transform: translate3d(100px, -100px, 0);
    transform: translate3d(100px, -100px, 0);
  }
  50% {
    -webkit-transform: translate3d(134px, 134px, 0);
    -khtml-transform: translate3d(134px, 134px, 0);
    -moz-transform: translate3d(134px, 134px, 0);
    -ms-transform: translate3d(134px, 134px, 0);
    -o-transform: translate3d(134px, 134px, 0);
    transform: translate3d(134px, 134px, 0);
    -webkit-transform: scaleX(1.5);
  }
  100% {
    -webkit-transform: translate3d(100px, -100px, 0);
    -khtml-transform: translate3d(100px, -100px, 0);
    -moz-transform: translate3d(100px, -100px, 0);
    -ms-transform: translate3d(100px, -100px, 0);
    -o-transform: translate3d(100px, -100px, 0);
    transform: translate3d(100px, -100px, 0);
  }
}
@-webkit-keyframes wiggle1 {
  0% {
    -webkit-transform: translate3d(12px, -100px, 0);
    -khtml-transform: translate3d(12px, -100px, 0);
    -moz-transform: translate3d(12px, -100px, 0);
    -ms-transform: translate3d(12px, -100px, 0);
    -o-transform: translate3d(12px, -100px, 0);
    transform: translate3d(12px, -100px, 0);
  }
  50% {
    -webkit-transform: translate3d(54px, 54px, 0);
    -khtml-transform: translate3d(54px, 54px, 0);
    -moz-transform: translate3d(54px, 54px, 0);
    -ms-transform: translate3d(54px, 54px, 0);
    -o-transform: translate3d(54px, 54px, 0);
    transform: translate3d(54px, 54px, 0);
    -webkit-transform: scaleX(2);
  }
  100% {
    -webkit-transform: translate3d(12px, -100px, 0);
    -khtml-transform: translate3d(12px, -100px, 0);
    -moz-transform: translate3d(12px, -100px, 0);
    -ms-transform: translate3d(12px, -100px, 0);
    -o-transform: translate3d(12px, -100px, 0);
    transform: translate3d(12px, -100px, 0);
  }
}
@-khtml-keyframes wiggle1 {
  0% {
    -webkit-transform: translate3d(12px, -100px, 0);
    -khtml-transform: translate3d(12px, -100px, 0);
    -moz-transform: translate3d(12px, -100px, 0);
    -ms-transform: translate3d(12px, -100px, 0);
    -o-transform: translate3d(12px, -100px, 0);
    transform: translate3d(12px, -100px, 0);
  }
  50% {
    -webkit-transform: translate3d(54px, 54px, 0);
    -khtml-transform: translate3d(54px, 54px, 0);
    -moz-transform: translate3d(54px, 54px, 0);
    -ms-transform: translate3d(54px, 54px, 0);
    -o-transform: translate3d(54px, 54px, 0);
    transform: translate3d(54px, 54px, 0);
    -webkit-transform: scaleX(2);
  }
  100% {
    -webkit-transform: translate3d(12px, -100px, 0);
    -khtml-transform: translate3d(12px, -100px, 0);
    -moz-transform: translate3d(12px, -100px, 0);
    -ms-transform: translate3d(12px, -100px, 0);
    -o-transform: translate3d(12px, -100px, 0);
    transform: translate3d(12px, -100px, 0);
  }
}
@-moz-keyframes wiggle1 {
  0% {
    -webkit-transform: translate3d(12px, -100px, 0);
    -khtml-transform: translate3d(12px, -100px, 0);
    -moz-transform: translate3d(12px, -100px, 0);
    -ms-transform: translate3d(12px, -100px, 0);
    -o-transform: translate3d(12px, -100px, 0);
    transform: translate3d(12px, -100px, 0);
  }
  50% {
    -webkit-transform: translate3d(54px, 54px, 0);
    -khtml-transform: translate3d(54px, 54px, 0);
    -moz-transform: translate3d(54px, 54px, 0);
    -ms-transform: translate3d(54px, 54px, 0);
    -o-transform: translate3d(54px, 54px, 0);
    transform: translate3d(54px, 54px, 0);
    -webkit-transform: scaleX(2);
  }
  100% {
    -webkit-transform: translate3d(12px, -100px, 0);
    -khtml-transform: translate3d(12px, -100px, 0);
    -moz-transform: translate3d(12px, -100px, 0);
    -ms-transform: translate3d(12px, -100px, 0);
    -o-transform: translate3d(12px, -100px, 0);
    transform: translate3d(12px, -100px, 0);
  }
}
@-ms-keyframes wiggle1 {
  0% {
    -webkit-transform: translate3d(12px, -100px, 0);
    -khtml-transform: translate3d(12px, -100px, 0);
    -moz-transform: translate3d(12px, -100px, 0);
    -ms-transform: translate3d(12px, -100px, 0);
    -o-transform: translate3d(12px, -100px, 0);
    transform: translate3d(12px, -100px, 0);
  }
  50% {
    -webkit-transform: translate3d(54px, 54px, 0);
    -khtml-transform: translate3d(54px, 54px, 0);
    -moz-transform: translate3d(54px, 54px, 0);
    -ms-transform: translate3d(54px, 54px, 0);
    -o-transform: translate3d(54px, 54px, 0);
    transform: translate3d(54px, 54px, 0);
    -webkit-transform: scaleX(2);
  }
  100% {
    -webkit-transform: translate3d(12px, -100px, 0);
    -khtml-transform: translate3d(12px, -100px, 0);
    -moz-transform: translate3d(12px, -100px, 0);
    -ms-transform: translate3d(12px, -100px, 0);
    -o-transform: translate3d(12px, -100px, 0);
    transform: translate3d(12px, -100px, 0);
  }
}
@-o-keyframes wiggle1 {
  0% {
    -webkit-transform: translate3d(12px, -100px, 0);
    -khtml-transform: translate3d(12px, -100px, 0);
    -moz-transform: translate3d(12px, -100px, 0);
    -ms-transform: translate3d(12px, -100px, 0);
    -o-transform: translate3d(12px, -100px, 0);
    transform: translate3d(12px, -100px, 0);
  }
  50% {
    -webkit-transform: translate3d(54px, 54px, 0);
    -khtml-transform: translate3d(54px, 54px, 0);
    -moz-transform: translate3d(54px, 54px, 0);
    -ms-transform: translate3d(54px, 54px, 0);
    -o-transform: translate3d(54px, 54px, 0);
    transform: translate3d(54px, 54px, 0);
    -webkit-transform: scaleX(2);
  }
  100% {
    -webkit-transform: translate3d(12px, -100px, 0);
    -khtml-transform: translate3d(12px, -100px, 0);
    -moz-transform: translate3d(12px, -100px, 0);
    -ms-transform: translate3d(12px, -100px, 0);
    -o-transform: translate3d(12px, -100px, 0);
    transform: translate3d(12px, -100px, 0);
  }
}
@keyframes wiggle1 {
  0% {
    -webkit-transform: translate3d(12px, -100px, 0);
    -khtml-transform: translate3d(12px, -100px, 0);
    -moz-transform: translate3d(12px, -100px, 0);
    -ms-transform: translate3d(12px, -100px, 0);
    -o-transform: translate3d(12px, -100px, 0);
    transform: translate3d(12px, -100px, 0);
  }
  50% {
    -webkit-transform: translate3d(54px, 54px, 0);
    -khtml-transform: translate3d(54px, 54px, 0);
    -moz-transform: translate3d(54px, 54px, 0);
    -ms-transform: translate3d(54px, 54px, 0);
    -o-transform: translate3d(54px, 54px, 0);
    transform: translate3d(54px, 54px, 0);
    -webkit-transform: scaleX(2);
  }
  100% {
    -webkit-transform: translate3d(12px, -100px, 0);
    -khtml-transform: translate3d(12px, -100px, 0);
    -moz-transform: translate3d(12px, -100px, 0);
    -ms-transform: translate3d(12px, -100px, 0);
    -o-transform: translate3d(12px, -100px, 0);
    transform: translate3d(12px, -100px, 0);
  }
}
@-webkit-keyframes wiggle2 {
  0% {
    -webkit-transform: translate3d(-8px, -100px, 0);
    -khtml-transform: translate3d(-8px, -100px, 0);
    -moz-transform: translate3d(-8px, -100px, 0);
    -ms-transform: translate3d(-8px, -100px, 0);
    -o-transform: translate3d(-8px, -100px, 0);
    transform: translate3d(-8px, -100px, 0);
  }
  50% {
    -webkit-transform: translate3d(-81px, -81px, 0);
    -khtml-transform: translate3d(-81px, -81px, 0);
    -moz-transform: translate3d(-81px, -81px, 0);
    -ms-transform: translate3d(-81px, -81px, 0);
    -o-transform: translate3d(-81px, -81px, 0);
    transform: translate3d(-81px, -81px, 0);
    -webkit-transform: scaleX(2.5);
  }
  100% {
    -webkit-transform: translate3d(-8px, -100px, my3, 0);
    -khtml-transform: translate3d(-8px, -100px, my3, 0);
    -moz-transform: translate3d(-8px, -100px, my3, 0);
    -ms-transform: translate3d(-8px, -100px, my3, 0);
    -o-transform: translate3d(-8px, -100px, my3, 0);
    transform: translate3d(-8px, -100px, my3, 0);
  }
}
@-khtml-keyframes wiggle2 {
  0% {
    -webkit-transform: translate3d(-8px, -100px, 0);
    -khtml-transform: translate3d(-8px, -100px, 0);
    -moz-transform: translate3d(-8px, -100px, 0);
    -ms-transform: translate3d(-8px, -100px, 0);
    -o-transform: translate3d(-8px, -100px, 0);
    transform: translate3d(-8px, -100px, 0);
  }
  50% {
    -webkit-transform: translate3d(-81px, -81px, 0);
    -khtml-transform: translate3d(-81px, -81px, 0);
    -moz-transform: translate3d(-81px, -81px, 0);
    -ms-transform: translate3d(-81px, -81px, 0);
    -o-transform: translate3d(-81px, -81px, 0);
    transform: translate3d(-81px, -81px, 0);
    -webkit-transform: scaleX(2.5);
  }
  100% {
    -webkit-transform: translate3d(-8px, -100px, my3, 0);
    -khtml-transform: translate3d(-8px, -100px, my3, 0);
    -moz-transform: translate3d(-8px, -100px, my3, 0);
    -ms-transform: translate3d(-8px, -100px, my3, 0);
    -o-transform: translate3d(-8px, -100px, my3, 0);
    transform: translate3d(-8px, -100px, my3, 0);
  }
}
@-moz-keyframes wiggle2 {
  0% {
    -webkit-transform: translate3d(-8px, -100px, 0);
    -khtml-transform: translate3d(-8px, -100px, 0);
    -moz-transform: translate3d(-8px, -100px, 0);
    -ms-transform: translate3d(-8px, -100px, 0);
    -o-transform: translate3d(-8px, -100px, 0);
    transform: translate3d(-8px, -100px, 0);
  }
  50% {
    -webkit-transform: translate3d(-81px, -81px, 0);
    -khtml-transform: translate3d(-81px, -81px, 0);
    -moz-transform: translate3d(-81px, -81px, 0);
    -ms-transform: translate3d(-81px, -81px, 0);
    -o-transform: translate3d(-81px, -81px, 0);
    transform: translate3d(-81px, -81px, 0);
    -webkit-transform: scaleX(2.5);
  }
  100% {
    -webkit-transform: translate3d(-8px, -100px, my3, 0);
    -khtml-transform: translate3d(-8px, -100px, my3, 0);
    -moz-transform: translate3d(-8px, -100px, my3, 0);
    -ms-transform: translate3d(-8px, -100px, my3, 0);
    -o-transform: translate3d(-8px, -100px, my3, 0);
    transform: translate3d(-8px, -100px, my3, 0);
  }
}
@-ms-keyframes wiggle2 {
  0% {
    -webkit-transform: translate3d(-8px, -100px, 0);
    -khtml-transform: translate3d(-8px, -100px, 0);
    -moz-transform: translate3d(-8px, -100px, 0);
    -ms-transform: translate3d(-8px, -100px, 0);
    -o-transform: translate3d(-8px, -100px, 0);
    transform: translate3d(-8px, -100px, 0);
  }
  50% {
    -webkit-transform: translate3d(-81px, -81px, 0);
    -khtml-transform: translate3d(-81px, -81px, 0);
    -moz-transform: translate3d(-81px, -81px, 0);
    -ms-transform: translate3d(-81px, -81px, 0);
    -o-transform: translate3d(-81px, -81px, 0);
    transform: translate3d(-81px, -81px, 0);
    -webkit-transform: scaleX(2.5);
  }
  100% {
    -webkit-transform: translate3d(-8px, -100px, my3, 0);
    -khtml-transform: translate3d(-8px, -100px, my3, 0);
    -moz-transform: translate3d(-8px, -100px, my3, 0);
    -ms-transform: translate3d(-8px, -100px, my3, 0);
    -o-transform: translate3d(-8px, -100px, my3, 0);
    transform: translate3d(-8px, -100px, my3, 0);
  }
}
@-o-keyframes wiggle2 {
  0% {
    -webkit-transform: translate3d(-8px, -100px, 0);
    -khtml-transform: translate3d(-8px, -100px, 0);
    -moz-transform: translate3d(-8px, -100px, 0);
    -ms-transform: translate3d(-8px, -100px, 0);
    -o-transform: translate3d(-8px, -100px, 0);
    transform: translate3d(-8px, -100px, 0);
  }
  50% {
    -webkit-transform: translate3d(-81px, -81px, 0);
    -khtml-transform: translate3d(-81px, -81px, 0);
    -moz-transform: translate3d(-81px, -81px, 0);
    -ms-transform: translate3d(-81px, -81px, 0);
    -o-transform: translate3d(-81px, -81px, 0);
    transform: translate3d(-81px, -81px, 0);
    -webkit-transform: scaleX(2.5);
  }
  100% {
    -webkit-transform: translate3d(-8px, -100px, my3, 0);
    -khtml-transform: translate3d(-8px, -100px, my3, 0);
    -moz-transform: translate3d(-8px, -100px, my3, 0);
    -ms-transform: translate3d(-8px, -100px, my3, 0);
    -o-transform: translate3d(-8px, -100px, my3, 0);
    transform: translate3d(-8px, -100px, my3, 0);
  }
}
@keyframes wiggle2 {
  0% {
    -webkit-transform: translate3d(-8px, -100px, 0);
    -khtml-transform: translate3d(-8px, -100px, 0);
    -moz-transform: translate3d(-8px, -100px, 0);
    -ms-transform: translate3d(-8px, -100px, 0);
    -o-transform: translate3d(-8px, -100px, 0);
    transform: translate3d(-8px, -100px, 0);
  }
  50% {
    -webkit-transform: translate3d(-81px, -81px, 0);
    -khtml-transform: translate3d(-81px, -81px, 0);
    -moz-transform: translate3d(-81px, -81px, 0);
    -ms-transform: translate3d(-81px, -81px, 0);
    -o-transform: translate3d(-81px, -81px, 0);
    transform: translate3d(-81px, -81px, 0);
    -webkit-transform: scaleX(2.5);
  }
  100% {
    -webkit-transform: translate3d(-8px, -100px, my3, 0);
    -khtml-transform: translate3d(-8px, -100px, my3, 0);
    -moz-transform: translate3d(-8px, -100px, my3, 0);
    -ms-transform: translate3d(-8px, -100px, my3, 0);
    -o-transform: translate3d(-8px, -100px, my3, 0);
    transform: translate3d(-8px, -100px, my3, 0);
  }
}
@-webkit-keyframes wiggle3 {
  0% {
    -webkit-transform: translate3d(-54px, -100px, 0);
    -khtml-transform: translate3d(-54px, -100px, 0);
    -moz-transform: translate3d(-54px, -100px, 0);
    -ms-transform: translate3d(-54px, -100px, 0);
    -o-transform: translate3d(-54px, -100px, 0);
    transform: translate3d(-54px, -100px, 0);
  }
  50% {
    -webkit-transform: translate3d(-83px, 83px, 0);
    -khtml-transform: translate3d(-83px, 83px, 0);
    -moz-transform: translate3d(-83px, 83px, 0);
    -ms-transform: translate3d(-83px, 83px, 0);
    -o-transform: translate3d(-83px, 83px, 0);
    transform: translate3d(-83px, 83px, 0);
    -webkit-transform: scaleX(3);
  }
  100% {
    -webkit-transform: translate3d(-54px, -100px, 0);
    -khtml-transform: translate3d(-54px, -100px, 0);
    -moz-transform: translate3d(-54px, -100px, 0);
    -ms-transform: translate3d(-54px, -100px, 0);
    -o-transform: translate3d(-54px, -100px, 0);
    transform: translate3d(-54px, -100px, 0);
  }
}
@-khtml-keyframes wiggle3 {
  0% {
    -webkit-transform: translate3d(-54px, -100px, 0);
    -khtml-transform: translate3d(-54px, -100px, 0);
    -moz-transform: translate3d(-54px, -100px, 0);
    -ms-transform: translate3d(-54px, -100px, 0);
    -o-transform: translate3d(-54px, -100px, 0);
    transform: translate3d(-54px, -100px, 0);
  }
  50% {
    -webkit-transform: translate3d(-83px, 83px, 0);
    -khtml-transform: translate3d(-83px, 83px, 0);
    -moz-transform: translate3d(-83px, 83px, 0);
    -ms-transform: translate3d(-83px, 83px, 0);
    -o-transform: translate3d(-83px, 83px, 0);
    transform: translate3d(-83px, 83px, 0);
    -webkit-transform: scaleX(3);
  }
  100% {
    -webkit-transform: translate3d(-54px, -100px, 0);
    -khtml-transform: translate3d(-54px, -100px, 0);
    -moz-transform: translate3d(-54px, -100px, 0);
    -ms-transform: translate3d(-54px, -100px, 0);
    -o-transform: translate3d(-54px, -100px, 0);
    transform: translate3d(-54px, -100px, 0);
  }
}
@-moz-keyframes wiggle3 {
  0% {
    -webkit-transform: translate3d(-54px, -100px, 0);
    -khtml-transform: translate3d(-54px, -100px, 0);
    -moz-transform: translate3d(-54px, -100px, 0);
    -ms-transform: translate3d(-54px, -100px, 0);
    -o-transform: translate3d(-54px, -100px, 0);
    transform: translate3d(-54px, -100px, 0);
  }
  50% {
    -webkit-transform: translate3d(-83px, 83px, 0);
    -khtml-transform: translate3d(-83px, 83px, 0);
    -moz-transform: translate3d(-83px, 83px, 0);
    -ms-transform: translate3d(-83px, 83px, 0);
    -o-transform: translate3d(-83px, 83px, 0);
    transform: translate3d(-83px, 83px, 0);
    -webkit-transform: scaleX(3);
  }
  100% {
    -webkit-transform: translate3d(-54px, -100px, 0);
    -khtml-transform: translate3d(-54px, -100px, 0);
    -moz-transform: translate3d(-54px, -100px, 0);
    -ms-transform: translate3d(-54px, -100px, 0);
    -o-transform: translate3d(-54px, -100px, 0);
    transform: translate3d(-54px, -100px, 0);
  }
}
@-ms-keyframes wiggle3 {
  0% {
    -webkit-transform: translate3d(-54px, -100px, 0);
    -khtml-transform: translate3d(-54px, -100px, 0);
    -moz-transform: translate3d(-54px, -100px, 0);
    -ms-transform: translate3d(-54px, -100px, 0);
    -o-transform: translate3d(-54px, -100px, 0);
    transform: translate3d(-54px, -100px, 0);
  }
  50% {
    -webkit-transform: translate3d(-83px, 83px, 0);
    -khtml-transform: translate3d(-83px, 83px, 0);
    -moz-transform: translate3d(-83px, 83px, 0);
    -ms-transform: translate3d(-83px, 83px, 0);
    -o-transform: translate3d(-83px, 83px, 0);
    transform: translate3d(-83px, 83px, 0);
    -webkit-transform: scaleX(3);
  }
  100% {
    -webkit-transform: translate3d(-54px, -100px, 0);
    -khtml-transform: translate3d(-54px, -100px, 0);
    -moz-transform: translate3d(-54px, -100px, 0);
    -ms-transform: translate3d(-54px, -100px, 0);
    -o-transform: translate3d(-54px, -100px, 0);
    transform: translate3d(-54px, -100px, 0);
  }
}
@-o-keyframes wiggle3 {
  0% {
    -webkit-transform: translate3d(-54px, -100px, 0);
    -khtml-transform: translate3d(-54px, -100px, 0);
    -moz-transform: translate3d(-54px, -100px, 0);
    -ms-transform: translate3d(-54px, -100px, 0);
    -o-transform: translate3d(-54px, -100px, 0);
    transform: translate3d(-54px, -100px, 0);
  }
  50% {
    -webkit-transform: translate3d(-83px, 83px, 0);
    -khtml-transform: translate3d(-83px, 83px, 0);
    -moz-transform: translate3d(-83px, 83px, 0);
    -ms-transform: translate3d(-83px, 83px, 0);
    -o-transform: translate3d(-83px, 83px, 0);
    transform: translate3d(-83px, 83px, 0);
    -webkit-transform: scaleX(3);
  }
  100% {
    -webkit-transform: translate3d(-54px, -100px, 0);
    -khtml-transform: translate3d(-54px, -100px, 0);
    -moz-transform: translate3d(-54px, -100px, 0);
    -ms-transform: translate3d(-54px, -100px, 0);
    -o-transform: translate3d(-54px, -100px, 0);
    transform: translate3d(-54px, -100px, 0);
  }
}
@keyframes wiggle3 {
  0% {
    -webkit-transform: translate3d(-54px, -100px, 0);
    -khtml-transform: translate3d(-54px, -100px, 0);
    -moz-transform: translate3d(-54px, -100px, 0);
    -ms-transform: translate3d(-54px, -100px, 0);
    -o-transform: translate3d(-54px, -100px, 0);
    transform: translate3d(-54px, -100px, 0);
  }
  50% {
    -webkit-transform: translate3d(-83px, 83px, 0);
    -khtml-transform: translate3d(-83px, 83px, 0);
    -moz-transform: translate3d(-83px, 83px, 0);
    -ms-transform: translate3d(-83px, 83px, 0);
    -o-transform: translate3d(-83px, 83px, 0);
    transform: translate3d(-83px, 83px, 0);
    -webkit-transform: scaleX(3);
  }
  100% {
    -webkit-transform: translate3d(-54px, -100px, 0);
    -khtml-transform: translate3d(-54px, -100px, 0);
    -moz-transform: translate3d(-54px, -100px, 0);
    -ms-transform: translate3d(-54px, -100px, 0);
    -o-transform: translate3d(-54px, -100px, 0);
    transform: translate3d(-54px, -100px, 0);
  }
}



</style>
<style type="text/css">

@-moz-keyframes borboletas-pos-loop {
  0% {
    -moz-transform: translate(0, 0);
    transform: translate(0, 0);
  }
  25% {
    -moz-transform: translate(100px, 0);
    transform: translate(100px, 0);
  }
  50% {
    -moz-transform: translate(30px, -70px);
    transform: translate(30px, -70px);
  }
  75% {
    -moz-transform: translate(0px, 20px);
    transform: translate(0px, 20px);
  }
  100% {
    -moz-transform: translate(-100px, -50px);
    transform: translate(-100px, -50px);
  }
}
@-webkit-keyframes borboletas-pos-loop {
  0% {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }
  25% {
    -webkit-transform: translate(100px, 0);
    transform: translate(100px, 0);
  }
  50% {
    -webkit-transform: translate(30px, -70px);
    transform: translate(30px, -70px);
  }
  75% {
    -webkit-transform: translate(0px, 20px);
    transform: translate(0px, 20px);
  }
  100% {
    -webkit-transform: translate(-100px, -50px);
    transform: translate(-100px, -50px);
  }
}
@keyframes borboletas-pos-loop {
  0% {
    -moz-transform: translate(0, 0);
    -ms-transform: translate(0, 0);
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }
  25% {
    -moz-transform: translate(100px, 0);
    -ms-transform: translate(100px, 0);
    -webkit-transform: translate(100px, 0);
    transform: translate(100px, 0);
  }
  50% {
    -moz-transform: translate(30px, -70px);
    -ms-transform: translate(30px, -70px);
    -webkit-transform: translate(30px, -70px);
    transform: translate(30px, -70px);
  }
  75% {
    -moz-transform: translate(0px, 20px);
    -ms-transform: translate(0px, 20px);
    -webkit-transform: translate(0px, 20px);
    transform: translate(0px, 20px);
  }
  100% {
    -moz-transform: translate(-100px, -50px);
    -ms-transform: translate(-100px, -50px);
    -webkit-transform: translate(-100px, -50px);
    transform: translate(-100px, -50px);
  }
}
.borboletas {
  position: absolute;
  left: 50%;
  bottom: 100px;
  -moz-animation: borboletas-pos-loop 7s ease-in-out infinite alternate-reverse;
  -webkit-animation: borboletas-pos-loop 7s ease-in-out infinite alternate-reverse;
  animation: borboletas-pos-loop 7s ease-in-out infinite alternate-reverse;
}

.borboleta-oval-squish {
  -moz-transform: scale(0.3, 1);
  -ms-transform: scale(0.3, 1);
  -webkit-transform: scale(0.3, 1);
  transform: scale(0.3, 1);
}

@-moz-keyframes borboleta-radial-loop {
  0% {
    -moz-transform: rotate(0);
    transform: rotate(0);
  }
  100% {
    -moz-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@-webkit-keyframes borboleta-radial-loop {
  0% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes borboleta-radial-loop {
  0% {
    -moz-transform: rotate(0);
    -ms-transform: rotate(0);
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }
  100% {
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
.borboleta-1 {
  -moz-animation: borboleta-radial-loop 10s linear infinite;
  -webkit-animation: borboleta-radial-loop 10s linear infinite;
  animation: borboleta-radial-loop 10s linear infinite;
}

.borboleta-2 {
  -moz-animation: borboleta-radial-loop 15s linear infinite;
  -webkit-animation: borboleta-radial-loop 15s linear infinite;
  animation: borboleta-radial-loop 15s linear infinite;
}
.borboleta-3 {
  -moz-animation: borboleta-radial-loop 20s linear infinite;
  -webkit-animation: borboleta-radial-loop 20s linear infinite;
  animation: borboleta-radial-loop 20s linear infinite;
}

@-moz-keyframes borboleta-oval-loop {
  0% {
    -moz-transform: rotate(0) scale(3.3, 1);
    transform: rotate(0) scale(3.3, 1);
  }
  100% {
    -moz-transform: rotate(-360deg) scale(3.3, 1);
    transform: rotate(-360deg) scale(3.3, 1);
  }
}
@-webkit-keyframes borboleta-oval-loop {
  0% {
    -webkit-transform: rotate(0) scale(3.3, 1);
    transform: rotate(0) scale(3.3, 1);
  }
  100% {
    -webkit-transform: rotate(-360deg) scale(3.3, 1);
    transform: rotate(-360deg) scale(3.3, 1);
  }
}
@keyframes borboleta-oval-loop {
  0% {
    -moz-transform: rotate(0) scale(3.3, 1);
    -ms-transform: rotate(0) scale(3.3, 1);
    -webkit-transform: rotate(0) scale(3.3, 1);
    transform: rotate(0) scale(3.3, 1);
  }
  100% {
    -moz-transform: rotate(-360deg) scale(3.3, 1);
    -ms-transform: rotate(-360deg) scale(3.3, 1);
    -webkit-transform: rotate(-360deg) scale(3.3, 1);
    transform: rotate(-360deg) scale(3.3, 1);
  }
}
.borboleta-oval {
  position: absolute;
  -moz-animation: borboleta-radial-loop 1.2s linear infinite;
  -webkit-animation: borboleta-radial-loop 1.2s linear infinite;
  animation: borboleta-radial-loop 1.2s linear infinite;
}

.borboleta-radial {
  position: absolute;
  left: 80px;
  top: 0;
  -moz-animation: borboleta-oval-loop 1.2s linear infinite;
  -webkit-animation: borboleta-oval-loop 1.2s linear infinite;
  animation: borboleta-oval-loop 1.2s linear infinite;
}

.borboleta-2 .borboleta-oval {
  -moz-animation: borboleta-radial-loop 1.5s linear infinite;
  -webkit-animation: borboleta-radial-loop 1.5s linear infinite;
  animation: borboleta-radial-loop 1.5s linear infinite;
}

.borboleta-2 .borboleta-radial {
  -moz-animation: borboleta-oval-loop 1.5s linear infinite;
  -webkit-animation: borboleta-oval-loop 1.5s linear infinite;
  animation: borboleta-oval-loop 1.5s linear infinite;
}
.borboleta-3 .borboleta-oval {
  -moz-animation: borboleta-radial-loop 1.5s linear infinite;
  -webkit-animation: borboleta-radial-loop 1.5s linear infinite;
  animation: borboleta-radial-loop 1.5s linear infinite;
}

.borboleta-3 .borboleta-radial {
  -moz-animation: borboleta-oval-loop 1.5s linear infinite;
  -webkit-animation: borboleta-oval-loop 1.5s linear infinite;
  animation: borboleta-oval-loop 1.5s linear infinite;
}

.borboleta-gfx {
  position: absolute;
  top: 0;
  left: 0;
  width: 25px;
  height: 20px;
}

@-moz-keyframes borboleta-gfx-upright-loop {
  0% {
    -moz-transform: rotate(0);
    transform: rotate(0);
  }
  100% {
    -moz-transform: rotate(-360deg);
    transform: rotate(-360deg);
  }
}
@-webkit-keyframes borboleta-gfx-upright-loop {
  0% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }
  100% {
    -webkit-transform: rotate(-360deg);
    transform: rotate(-360deg);
  }
}
@keyframes borboleta-gfx-upright-loop {
  0% {
    -moz-transform: rotate(0);
    -ms-transform: rotate(0);
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }
  100% {
    -moz-transform: rotate(-360deg);
    -ms-transform: rotate(-360deg);
    -webkit-transform: rotate(-360deg);
    transform: rotate(-360deg);
  }
}
.borboleta-1 .borboleta-gfx {
  -moz-animation: borboleta-gfx-upright-loop 10s linear infinite;
  -webkit-animation: borboleta-gfx-upright-loop 10s linear infinite;
  animation: borboleta-gfx-upright-loop 10s linear infinite;
}

.borboleta-2 .borboleta-gfx {
  -moz-animation: borboleta-gfx-upright-loop 15s linear infinite;
  -webkit-animation: borboleta-gfx-upright-loop 15s linear infinite;
  animation: borboleta-gfx-upright-loop 15s linear infinite;
}
.borboleta-3 .borboleta-gfx {
  -moz-animation: borboleta-gfx-upright-loop 20s linear infinite;
  -webkit-animation: borboleta-gfx-upright-loop 20s linear infinite;
  animation: borboleta-gfx-upright-loop 20s linear infinite;
}


@-moz-keyframes borboleta-anim-loop {
  0% {
    -moz-transform: scale(1, 1.2) rotate(40deg);
    transform: scale(1, 1.2) rotate(40deg);
  }
  100% {
    -moz-transform: scale(0.7, -1) rotate(-40deg);
    transform: scale(0.7, -1) rotate(-40deg);
  }
}
@-webkit-keyframes borboleta-anim-loop {
  0% {
    -webkit-transform: scale(1, 1.2) rotate(40deg);
    transform: scale(1, 1.2) rotate(40deg);
  }
  100% {
    -webkit-transform: scale(0.7, -1) rotate(-40deg);
    transform: scale(0.7, -1) rotate(-40deg);
  }
}
@keyframes borboleta-anim-loop {
  0% {
    -moz-transform: scale(1, 1.2) rotate(40deg);
    -ms-transform: scale(1, 1.2) rotate(40deg);
    -webkit-transform: scale(1, 1.2) rotate(40deg);
    transform: scale(1, 1.2) rotate(40deg);
  }
  100% {
    -moz-transform: scale(0.7, -1) rotate(-40deg);
    -ms-transform: scale(0.7, -1) rotate(-40deg);
    -webkit-transform: scale(0.7, -1) rotate(-40deg);
    transform: scale(0.7, -1) rotate(-40deg);
  }
}
.borboleta-anim {
  background: radial-gradient(closest-side at 50% 50%, #e07599 50%, rgba(255, 255, 255, 0) 50%), radial-gradient(closest-side at 50% 50%, #e07599 50%, rgba(255, 255, 255, 0) 50%);
  background-repeat: no-repeat;
  background-size: 90% 70%,100% 70%;
  background-position: 20% -40%,0 40%;
  width: 25px;
  height: 20px;
  -moz-animation: borboleta-anim-loop 150ms ease-in-out infinite alternate-reverse;
  -webkit-animation: borboleta-anim-loop 150ms ease-in-out infinite alternate-reverse;
  animation: borboleta-anim-loop 150ms ease-in-out infinite alternate-reverse;
}

</style>
</head>
<body style="background: #050c19;">

    <div class="preloader" id="preloader" style=" background-color: black;">
    <div class="sound"></div>

    </div>
    <main class="main">

        <div class="sound"></div>
        <div class="cover">

            <div class="cover__link">
                				<div class="social-links">
                                            <a href="https://www.facebook.com/Vivacity.LNMIIT/" target="_blank" class="social-links__item"><img src="assets/i/facebook-icon-white.svg" alt="" width="9px" height="17px"></a>
                                                                <a href="https://twitter.com/vivacitylnmiit" target="_blank" class="social-links__item"><img src="assets/i/twitter-icon-white.svg" alt="" width="20px" height="15px"></a>
                                                                <a href="https://www.youtube.com/channel/UCCXudggcgy8rk1kswC3st8w" target="_blank" class="social-links__item"><img src="assets/i/youtube-icon-white.png" alt="" width="20px" height="15px"></a>
                                                                <a href="https://www.instagram.com/vivacity_lnmiit/" target="_blank" class="social-links__item"><img src="assets/i/instagram-icon-white.svg" alt="" width="15px" height="15px"></a>
                                                                <a href="mailto:vivacity.thelnmiit@gmail.com" target="_blank" class="social-links__item"><img src="assets/i/gmail-icon-white.png" alt="" width="18px" height="15px"></a>
                                    </div>
                                    <div class="container1">
										<div class="menu">
										<i class="fa fa-bars"></i>
										  </div>
										<div class="opsi siji">
										<a href="index.php">Home</a>
										  </div>
										<div class="opsi loro" id="loro">
										<a>Events</a>
										  </div>
										<div class="opsi telu" id="telu">
										<a>Gallery</a>
										  </div>
										<div class="opsi papat" id="papat">
										<a>Contact</a>
										</div>
										<div class="opsi limo">
										<a>Schedule</a>
										  </div>
										<div class="opsi spon">
										<a href="sponsors.php">Sponsors</a>
										  </div>
										  </div>
									</div>

            <div class="cover__scroll">
                <div class="cover__scroll-icon"></div>
            </div>
            <section class="cover__scene cover__scene_0"></section>
            <section class="cover__scene cover__scene_1">
                <img style="max-width:100%" src="images/website logo.png"/>
                <div class="ray"></div><div class="ray"></div><div class="ray"></div><div class="ray"></div><div class="ray"></div><div class="ray"></div><div class="ray"></div><div class="ray">
                </div><div class="ray"></div><div class="ray"></div><div class="ray"></div><div class="ray"></div><div class="ray"></div><div class="ray"></div><div class="ray"></div>
                <div class="ray"></div><div class="ray"></div><div class="ray"></div><div class="ray"></div><div class="ray"></div><div class="ray"></div><div class="ray"></div><div class="ray">
                </div><div class="ray"></div><div class="ray"></div><div class="ray"></div><div class="ray"></div><div class="ray"></div><div class="ray"></div><div class="ray"></div>
                <div class="ray">
                </div><div class="ray"></div><div class="ray"></div><div class="ray"></div><div class="ray"></div><div class="ray"></div><div class="ray"></div><div class="ray"></div>
                <div class="ray"></div><div class="ray"></div><div class="ray"></div><div class="ray"></div><div class="ray"></div><div class="ray"></div><div class="ray"></div>
                <div class="ray"></div><div class="ray"></div><div class="ray"></div><div class="ray"></div><div class="ray"></div><div class="ray"></div><div class="ray"></div><div class="ray">
                </div><div class="ray"></div><div class="ray"></div><div class="ray"></div><div class="ray"></div><div class="ray"></div><div class="ray"></div><div class="ray"></div>
                <div class="ray"></div><div class="ray"></div><div class="ray"></div><div class="ray"></div><div class="ray"></div><div class="ray"></div><div class="ray"></div><div class="ray">
                </div><div class="ray"></div><div class="ray"></div><div class="ray"></div>

                  <div class="borboletas">
  <div class="borboleta-1">
    <div class="borboleta-oval-squish">
      <div class="borboleta-oval">
        <div class="borboleta-radial">
          <div class="borboleta-gfx">
            <div class="borboleta-anim"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="borboleta-2">
    <div class="borboleta-oval-squish">
      <div class="borboleta-oval">
        <div class="borboleta-radial">
          <div class="borboleta-gfx">
            <div class="borboleta-anim"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="borboleta-3">
    <div class="borboleta-oval-squish">
      <div class="borboleta-oval">
        <div class="borboleta-radial">
          <div class="borboleta-gfx">
            <div class="borboleta-anim"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div></section>
            <div class="cover__spacer cover__spacer_21"></div>
            <section class="cover__scene cover__scene_2">
                <div class="cover__box">
                    <div class="cover__drops">
                        <div class="cover__drops-item cover__drops-item_1"></div>
                        <div class="cover__drops-item cover__drops-item_2"></div>
                        <div class="cover__drops-item cover__drops-item_3"></div>
                        <div class="cover__drops-item cover__drops-item_4"></div>
                        <div class="cover__drops-item cover__drops-item_5"></div>
                        <div class="cover__drops-item cover__drops-item_6"></div>
                        <div class="cover__drops-item cover__drops-item_7"></div>
                        <div class="cover__drops-item cover__drops-item_8"></div>
                        <div class="cover__drops-item cover__drops-item_9"></div>
                        <div class="cover__drops-item cover__drops-item_10"></div>
                        <div class="cover__drops-item cover__drops-item_11"></div>
                        <div class="cover__drops-item cover__drops-item_12"></div>
                        <div class="cover__drops-item cover__drops-item_13"></div>
                        <div class="cover__drops-item cover__drops-item_14"></div>
                    </div>
                  </div>
            </section>
            <br><br><br><br><br>
            <div class="cover__spacer cover__spacer_22"></div>
            <div class="cover__spacer cover__spacer_31"></div>
            <section class="cover__scene cover__scene_3">
                <div class="cover__subtitle">
                    <svg>
                        <defs>
                            <linearGradient id="subtitleGradient1" x1="0" y1="0" x2="100%" y2="0">
                                <stop offset="0%" style="stop-color:#fff; stop-opacity: 1;" class="start"></stop>
                                <stop offset="0%" style="stop-color:#fff; stop-opacity: 0;" class="end"></stop>
                            </linearGradient>
                            <linearGradient id="subtitleGradient2" x1="0" y1="0" x2="100%" y2="0">
                                <stop offset="0%" style="stop-color:#fff; stop-opacity: 1;" class="start"></stop>
                                <stop offset="0%" style="stop-color:#fff; stop-opacity: 0;" class="end"></stop>
                            </linearGradient>
                            <linearGradient id="subtitleGradient3" x1="0" y1="0" x2="100%" y2="0">
                                <stop offset="0%" style="stop-color:#fff; stop-opacity: 1;" class="start"></stop>
                                <stop offset="0%" style="stop-color:#fff; stop-opacity: 0;" class="end"></stop>
                            </linearGradient>
                        </defs>
                        <text fill="url('#subtitleGradient1')" x="50%" y="0" dy="5em">A Symphonic Song  </text>
                        <text fill="url('#subtitleGradient2')" x="50%" y="0" dy="10em">of</text>
                        <text fill="url('#subtitleGradient3')" x="50%" y="0" dy="15em">Surreal Symphony</text>
                    </svg>
                </div>
            </section>
            <div class="cover__spacer cover__spacer_32"></div>
        </div>
        <section class="synopsis">
                <div class="synopsis__el synopsis__el_1">
                    <div data-depth="0.8" class="layer"><img src="assets/i/cover-drop-2.png" alt=""></div>
                </div>
                <div class="synopsis__el synopsis__el_2">
                    <div data-depth="0.2" class="layer"><img src="assets/i/cover-drop-2-1.png" alt=""></div>
                </div>
                <div class="synopsis__el synopsis__el_3">
                    <div data-depth="0.1" class="layer"><img src="assets/i/cover-drop-2-2.png" alt=""></div>
                </div>
                <div class="container">
                    <h2 class="synopsis__title"><div data-depth="0.1" class="layer" style="font-size:25px;">Synopsis</div></h2>
                                            <div class="synopsis__description-short">
                            <div data-depth="0.4" class="layer">A kaleidoscopic quest through the realm of eccentric jubilance.
</div>
                        </div>
                                                                <div class="synopsis__description-full">
                            <div data-depth="0.2" class="layer">
                                <p>Our lives are led by a constant struggle between mind and the soul. While some of us lose all our mind and embrace the soul to be dubbed as insane, others lose all their soul and embrace the mind  to become intellectuals, while yet others lose both and become accepted. VIVACITYs invites you to embark upon a surreal odyssey into the mystical realms of the Bizarre. Hear the shrieks of a soundless symphony that leads to a weird blend of euphoria and nostalgia all the while creating a treasure trove of memories.</p>
                            </div>
                        </div>
                                        <div class="synopsis__footer">
                        <div data-depth="0.1" class="layer social-links">
                                                            <a href="https://www.facebook.com/Vivacity.LNMIIT/" target="_blank" class="social-links__item"><img src="assets/i/facebook-icon.svg" alt="" width="9px" height="17px"></a>
                                                                                        <a href="https://twitter.com/vivacitylnmiit" target="_blank" class="social-links__item"><img src="assets/i/twitter-icon.svg" alt="" width="20px" height="15px"></a>
                                                                                        <a href="https://www.youtube.com/channel/UCCXudggcgy8rk1kswC3st8w" target="_blank" class="social-links__item"><img src="assets/i/youtube-icon-pink.png" alt="" width="20px" height="15px"></a>
                                                                                        <a href="https://www.instagram.com/vivacity_lnmiit/" target="_blank" class="social-links__item"><img src="assets/i/instagram-icon.svg" alt="" width="15px" height="15px"></a>
                                                                                        <a href="mailto:vivacity.thelnmiit@gmail.com" target="_blank" class="social-links__item"><img src="assets/i/gmail-icon-pink.png" alt="" width="18px" height="15px"></a>
                                                    </div>
                    </div>
                </div>
            </section>

         <section class="news" id="news">
                <div class="news__el news__el_1">
                    <div data-depth="0.4" class="layer"><img src="assets/i/news-drop-1.png" alt=""></div>
                </div>
                <div class="news__el news__el_2">
                    <div data-depth="0.1" class="layer"><img src="assets/i/news-drop-2.png" alt=""></div>
                </div>
                <div class="container">
                    <h2 class="news__title">
                    <div data-depth="0.1" class="layer" style="font-size:25px;">Events</div></h2>
                    <div data-depth="0.05" class="layer">
                        <div class="news__list">
                                                            <div class="news__list-item">
                                    <div class="post">
                                        <div class="post__title">PRONITE <br><span style="font-size:15px;">*(Coming Soon)</span></div>
                                        <div class="post__image"><img src="upload/news/1/10/image/pronite home.jpg" alt=""></div>
                                        <div class="post__date">
                                            <div data-depth="0.05" class="layer">
                                                <div class="post__date-month">Jan</div>
                                                <div class="post__date-day">29</div>
                                            </div>
                                        </div>
                                        <div class="post__text"><p>"Look at the stars , look how they shine for you."<br /><span style="margin-left:110px;">- Chris Martin</span></p>
</div>
                                    </div>
                                </div>
                                                            <div class="news__list-item">

                                    <div class="post">
                                        <div class="post__title">CAMPUS <br> PRINCESS <br><span style="font-size:15px;">*(Coming Soon)</span></div>
                                        <div class="post__image"><img src="upload/news/9/9/image/cp home.jpg" alt=""></div>
                                        <div class="post__date">
                                            <div data-depth="0.05" class="layer">
                                                <div class="post__date-month">Jan</div>
                                                <div class="post__date-day">27</div>
                                            </div>
                                        </div>
                                        <div class="post__text"><p>"I don't do fashion.I AM fashion"<br /><span style="margin-left:110px;">- Coco Chanel</span></p>
</div>
                                    </div>
                                </div>

                                                            <div class="news__list-item">
                                                            <a href="razzmatazz.php" style="text-decoration:none;">
                                    <div class="post">
                                        <div class="post__title">DANCE</div>
                                        <div class="post__image"><img src="upload/news/2/2/image/dance home.jpg" alt=""></div>
                                        <div class="post__date">
                                            <div data-depth="0.05" class="layer">
                                                <div class="post__date-month">Jan</div>
                                                <div class="post__date-day">27</div>
                                            </div>
                                        </div>
                                        <div class="post__text"><p>"Dance is the hidden language of the soul of the body"<br/><span style="margin-left:110px;">- Martha Graham</span></p>
</div>
                                    </div></a>
                                </div>
                                                            <div class="news__list-item">
                                                            <a href="rangshala.php" style="text-decoration:none;">
                                    <div class="post">
                                        <div class="post__title">DRAMATICS</div>
                                        <div class="post__image"><img src="upload/news/6/6/image/drama home.jpg" alt=""></div>
                                        <div class="post__date">
                                            <div data-depth="0.05" class="layer">
                                                <div class="post__date-month">Jan</div>
                                                <div class="post__date-day">28</div>
                                            </div>
                                        </div>
                                        <div class="post__text"><p>"Drama is life with the dull part left out"<br><span style="margin-left:110px;">- Alfred Hitchcock</span></p>
</div>
                                    </div></a>
                                </div>

                                <div class="news__list-item">
                                                            <a href="Raddrock.php" style="text-decoration:none;">
                                    <div class="post">
                                        <div class="post__title">MUSIC</div>
                                        <div class="post__image"><img src="upload/news/4/4/image/music home.jpg" alt=""></div>
                                        <div class="post__date">
                                            <div data-depth="0.05" class="layer">
                                                <div class="post__date-month">Jan</div>
                                                <div class="post__date-day">28</div>
                                            </div>
                                        </div>
                                        <div class="post__text"><p>"Music is all about transporting people:Speaking a language which language is failed to express"<br/><span style="margin-left:110px;">- A. R. Rahaman</span></p>
</div>
                                    </div></a>
                                </div>
                                                            <div class="news__list-item">
                                                            <a href="vogue.php" style="text-decoration:none;">
                                    <div class="post">
                                        <div class="post__title">LIFE 'N' STYLE</div>
                                        <div class="post__image"><img src="upload/news/2/2/image/fashion home.jpg" alt=""></div>
                                        <div class="post__date">
                                            <div data-depth="0.05" class="layer">
                                                <div class="post__date-month">Jan</div>
                                                <div class="post__date-day">27</div>
                                            </div>
                                        </div>
                                        <div class="post__text"><p>"Fashion is about something that comes from within you"<br/><span style="margin-left:110px;">- Ralph Lauren</span></p>
</div>
                                    </div></a>
                                </div>

                                <div class="news__list-item">
                                                            <a href="dota2.php" style="text-decoration:none;">
                                    <div class="post">
                                        <div class="post__title">GAMING</div>
                                        <div class="post__image"><img src="upload/news/2/2/image/gaming home.jpg" alt=""></div>
                                        <div class="post__date">
                                            <div data-depth="0.05" class="layer">
                                                <div class="post__date-month">Jan</div>
                                                <div class="post__date-day">27</div>
                                            </div>
                                        </div>
                                        <div class="post__text"><p>"Video games foster the mindset that allows creativity to grow"<br/><span style="margin-left:110px;">- nolan bushnell</span></p>
</div>
                                    </div></a>
                                </div>

                                <div class="news__list-item">
                                                            <a href="entertainment-quiz.php" style="text-decoration:none;">
                                    <div class="post">
                                        <div class="post__title">LITERARY</div>
                                        <div class="post__image"><img src="upload/news/2/2/image/literary home.jpg" alt=""></div>
                                        <div class="post__date">
                                            <div data-depth="0.05" class="layer">
                                                <div class="post__date-month">Jan</div>
                                                <div class="post__date-day">27</div>
                                            </div>
                                        </div>
                                        <div class="post__text"><p>"The purpose of literature is to turn blood into ink"<br /><span style="margin-left:110px;">- T. S. Eliot</span></p>
</div>
                                    </div></a>
                                </div>

                                <div class="news__list-item">
                                                            <a href="tattoo-tales.php" style="text-decoration:none;">
                                    <div class="post">
                                        <div class="post__title">ART AND CRAFT</div>
                                        <div class="post__image"><img src="upload/news/2/2/image/art and craft home.jpg" alt=""></div>
                                        <div class="post__date">
                                            <div data-depth="0.05" class="layer">
                                                <div class="post__date-month">Jan</div>
                                                <div class="post__date-day">28</div>
                                            </div>
                                        </div>
                                        <div class="post__text"><p>"The purpose of art is washing the dirt of daily life off our soul"<br/><span style="margin-left:110px;">- Pablo Picasso</span></p>
</div>
                                    </div></a>
                                </div>

                                <div class="news__list-item">
                                                            <a href="fun-mania.php" style="text-decoration:none;">
                                    <div class="post">
                                        <div class="post__title">INFORMALS</div>
                                        <div class="post__image"><img src="upload/news/2/2/image/fun home.jpg" alt=""></div>
                                        <div class="post__date">
                                            <div data-depth="0.05" class="layer">
                                                <div class="post__date-month">Jan</div>
                                                <div class="post__date-day">26</div>
                                            </div>
                                        </div>
                                        <div class="post__text"><p>"If you are wasting time having fun, you are not wasting time"<br/><span style="margin-left:110px;">- Tim Ferriss</span></p>
</div>
                                    </div></a>
                                </div>

                                <div class="news__list-item">
                                                            <a href="yp/index.html" style="text-decoration:none;" target="_blank">
                                    <div class="post">
                                        <div class="post__title">YOUTH </br> PARLIAMENT</div>
                                        <div class="post__image"><img src="upload/news/2/2/image/yp home.jpg" alt=""></div>
                                        <div class="post__date">
                                            <div data-depth="0.05" class="layer">
                                                <div class="post__date-month">Jan</div>
                                                <div class="post__date-day">28</div>
                                            </div>
                                        </div>
                                        <div class="post__text"><p>"In the parliament of the present every man represents a constituency of the past"<br/><span style="margin-left:110px;">- James Russell Lowell</span></p>
</div>
                                    </div></a>
                                </div>

                                <div class="news__list-item">

                                    <div class="post">
                                        <div class="post__title">STAND UP </br> COMEDY<br><span style="font-size:15px;">*(Coming Soon)</span></div>
                                        <div class="post__image"><img src="upload/news/2/2/image/spc home.jpg" alt=""></div>
                                        <div class="post__date">
                                            <div data-depth="0.05" class="layer">
                                                <div class="post__date-month">Jan</div>
                                                <div class="post__date-day">26</div>
                                            </div>
                                        </div>
                                        <div class="post__text"><p>"Life is a tragedy when seen in close-up,but a comedy in long shot"<br/><span style="margin-left:110px;">- Charlie Chaplin</span></p>
</div>
                                    </div>
                                </div>

                                <div class="news__list-item">

                                    <div class="post">
                                        <div class="post__title">MASTERCHEF<br><span style="font-size:15px;">*(Coming Soon)</span></div>
                                        <div class="post__image"><img src="upload/news/2/2/image/masterchef home.jpg" alt=""></div>
                                        <div class="post__date">
                                            <div data-depth="0.05" class="layer">
                                                <div class="post__date-month">Jan</div>
                                                <div class="post__date-day">28</div>
                                            </div>
                                        </div>
                                        <div class="post__text"><p>"A chef is a mixture maybe of artistry and carft you have learn the craft really to get there"<br/><span style="margin-left:110px;">- WolfGang Puck"</span></p>
</div>
                                    </div>
                                </div>
                                                    </div>
                    </div>
                </div>
            </section>

		                    <section class="video">
                <div class="container">
                    <h2 class="video__title"><div data-depth="0.08" class="layer" style="font-size:25px;">Theme</div></h2>
                    <div data-depth="0.05" class="layer">
                        <div style="background-image:url('')" class="video__box">
                                                            <div data-ytid="20x9uHUZ9rY" data-width="925" data-height="520"></div>
                                                    </div>
                    </div>
                    <div data-depth="0.15" class="layer">
                                            </div>
                </div>
            </section>

				            <section class="gallery" id="gallery">
                <div class="gallery__bg"></div>
                <div class="gallery__el gallery__el_1">
                    <div data-depth="0.2" class="layer"><img src="assets/i/gallery-drop-1.png" alt=""></div>
                </div>
                <div class="gallery__el gallery__el_2">
                    <div data-depth="0.4" class="layer"><img src="assets/i/gallery-drop-2.png" alt=""></div>
                </div>
                <h2 class="gallery__title"><div data-depth="0.25" class="layer" style="font-size:25px;">Gallery</div></h2>
                <div data-depth="0.05" class="layer">
                    <div class="gallery__list">
                                                    <div class="gallery__box">
                                                                    <img src="gallery/1.jpg" alt="">
                                                            </div>
                                                    <div class="gallery__box">
                                                                    <img src="gallery/2.jpg" alt="">
                                                            </div>
                                                    <div class="gallery__box">
                                                                    <img src="gallery/3.jpg" alt="">
                                                            </div>
                                                    <div class="gallery__box">
                                                                    <img src="gallery/4.jpg" alt="">
                                                            </div>
                                                    <div class="gallery__box">
                                                                    <img src="gallery/5.jpg" alt="">
                                                            </div>

                                            </div>
                                          <div class="gallery_footer">
                            <div data-depth="0.05" class="layer" style="margin-top:10px; margin-left:460px; "><a href="gallery.php" class="crew__more"><span style="font-size:25px;">Rest of the Gallery</span></a></div>
                            </div>
                </div>
            </section>

             <section class="crew" id="crew">
                <div class="crew__el crew__el_1">
                    <div data-depth="0.2" class="layer"><img src="assets/i/crew-el-1.png" alt=""></div>
                </div>
                <div class="crew__el crew__el_2"><img src="assets/i/crew-el-2.png" alt=""></div>
                <div class="crew__el crew__el_3"><img src="assets/i/crew-el-3.png" alt=""></div>
                <div class="container">
                    <h2 class="crew__title"><div data-depth="0.15" class="layer" style="font-size:25px;">Team</div></h2>
                    <div data-depth="0.3" class="layer">

                        <div class="crew__list">
                                                            <div class="crew__list-item">

                                                            <span class="crew__list-label">Finance</span>
                                                                <span class="crew__list-value"><a href="https://www.facebook.com/akshay.modi.587" style="text-decoration:none;" target="_blank">Akshay Modi</a></span>
	                                                            <span class="crew__list-value"><a href="https://www.facebook.com/profile.php?id=100008367075619&fref=ts" style="text-decoration:none;" target="_blank">Bhavuk Kabra</a></span>
	                                                            <span class="crew__list-value"><a href="https://www.facebook.com/anusha.agarwal.12" style="text-decoration:none;" target="_blank">Anusha Agarwal</a></span>

                                                            </div>

                                                            <div class="crew__list-item">

                                                            <span class="crew__list-label">Sponsorship</span>

	                                                            <span class="crew__list-value"><a href="https://www.facebook.com/akul.garg1" style="text-decoration:none;" target="_blank">Akul Garg</a></span>
	                                                            <span class="crew__list-value"><a href="https://www.facebook.com/parth.patsaria" style="text-decoration:none;" target="_blank">Parth Patsaria</a></span>
	                                                            <span class="crew__list-value"><a href="https://www.facebook.com/profile.php?id=100005260635089&fref=ts" style="text-decoration:none;" target="_blank">Ishita Kalra</a></span>
	                                                            <span class="crew__list-value"><a href="https://www.facebook.com/profile.php?id=100001392157658&fref=ts" style="text-decoration:none;" target="_blank">Anuj Gupta</a></span>
                                                            </div>

                                                            <div class="crew__list-item"><span class="crew__list-label">Media and Marketing</span>

	                                                            <span class="crew__list-value"><a href="https://www.facebook.com/mohit.jaswani" style="text-decoration:none;" target="_blank">Mohit Jaswani</a></span>
	                                                            <span class="crew__list-value"><a href="https://www.facebook.com/sarthak.soni.731" style="text-decoration:none;" target="_blank">Sarthak Soni</a></span>
                                                              <span class="crew__list-value"><a href="https://www.facebook.com/ishant.rajpuroht" style="text-decoration:none;" target="_blank">Ishant Rajprohit</a></span>
	                                                            <span class="crew__list-value"></span>

                                                            </div>

                                                            <div class="crew__list-item"><span class="crew__list-label">Designing</span>

	                                                            <span class="crew__list-value"><a href="https://www.facebook.com/aseem.saini0" style="text-decoration:none;" target="_blank">Aseem</a></span>
	                                                            <span class="crew__list-value"><a href="https://www.facebook.com/mohit.khatri3" style="text-decoration:none;" target="_blank">Mohit Khatri</a></span>
	                                                            <span class="crew__list-value"><a href="https://www.facebook.com/dude.vis" style="text-decoration:none;" target="_blank">Vismay Luhadiya</a></span>
	                                                            <span class="crew__list-value"><a href="https://www.facebook.com/ayush.frost" style="text-decoration:none;" target="_blank">Ayush Singh</a></span>

                                                            </div>

                                                            <div class="crew__list-item"><span class="crew__list-label">Web Development</span>

	                                                            <span class="crew__list-value"><a href="https://www.facebook.com/indresh.khandelwal" style="text-decoration:none;" target="_blank">Indresh Khandelwal</a></span>
	                                                            <span class="crew__list-value"><a href="https://www.facebook.com/aarush.verma.3766" style="text-decoration:none;" target="_blank">Aarush Verma</a></span>
	                                                            <span class="crew__list-value"><a href="https://www.facebook.com/yashasvi.jain.73" style="text-decoration:none;" target="_blank">Yashasvi Jain</a></span>
	                                                            <span class="crew__list-value"><a href="https://www.facebook.com/mudit.sharma.7393" style="text-decoration:none;" target="_blank">Mudit Sharma</a></span>
	                                                            <span class="crew__list-value"><a href="https://www.facebook.com/yashovardhanagrawal" style="text-decoration:none;" target="_blank">Yashovardhan Agrawal</a></span>

                                                            </div>
                                                            <div class="crew__list-item"><span class="crew__list-label">Event Management</span>

	                                                            <span class="crew__list-value"><a href="https://www.facebook.com/sarthak.agrawal.942" style="text-decoration:none;" target="_blank">Sarthak Agrawal</a></span>
	                                                            <span class="crew__list-value"><a href="https://www.facebook.com/sumit.jiyani" style="text-decoration:none;" target="_blank">Sumit Kumar Jiyani</a></span>

                                                            </div>

                                                    </div>
                    </div>
                                            <div class="crew__footer">
                            <div data-depth="0.05" class="layer"><a href="contact_us.php" class="crew__more"><span style="font-size:25px;">Rest of the Team</span></a></div>
                        </div>
                                    </div>
            </section>
        	</main>
    <footer class="footer">
        <div data-depth="0.1" class="layer social-links">
                                                            <a href="https://www.facebook.com/Vivacity.LNMIIT/" target="_blank" class="social-links__item"><img src="assets/i/facebook-icon.svg" alt="" width="9px" height="17px"></a>
                                                                                        <a href="https://twitter.com/vivacitylnmiit" target="_blank" class="social-links__item"><img src="assets/i/twitter-icon.svg" alt="" width="20px" height="15px"></a>
                                                                                        <a href="https://www.youtube.com/channel/UCCXudggcgy8rk1kswC3st8w" target="_blank" class="social-links__item"><img src="assets/i/youtube-icon-pink.png" alt="" width="20px" height="15px"></a>
                                                                                        <a href="https://www.instagram.com/vivacity_lnmiit/" target="_blank" class="social-links__item"><img src="assets/i/instagram-icon.svg" alt="" width="15px" height="15px"></a>
                                                                                        <a href="mailto:vivacity.thelnmiit@gmail.com" target="_blank" class="social-links__item"><img src="assets/i/gmail-icon-pink.png" alt="" width="18px" height="15px"></a>
                                                    </div>
    </footer>
    <?php include("scripts_index.php"); ?>
</body>
</html>
