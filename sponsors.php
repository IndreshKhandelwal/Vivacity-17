<!DOCTYPE html>
<html>

<head>
    <title>Vivaicty</title>
    <?php include('tmeta_index.php') ?>
    
    <link rel="stylesheet" type="text/css" href="assets/ma.css">
<style type="text/css">
   .at-section__title {
  margin: 0 0 70px;
  color: #000;
  font-family: 'Roboto', sans-serif;
  font-size: 3.5rem;
  font-weight: 300;
  line-height: 2.625rem;
  text-align: center;
}
.at-grid {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-direction: row;
          flex-direction: row;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  background: transparent;
  
}
.at-grid[data-column="1"] .at-column {
  width: 100%;
  max-width: 100%;
  min-width: 100%;
  -ms-flex-preferred-size: 100%;
      flex-basis: 100%;
}
.at-grid[data-column="2"] .at-column {
  width: 50%;
  max-width: 50%;
  min-width: 50%;
  -ms-flex-preferred-size: 50%;
      flex-basis: 50%;
}
.at-grid[data-column="3"] .at-column {
  width: 33.33333%;
  max-width: 33.33333%;
  min-width: 33.33333%;
  -ms-flex-preferred-size: 33.33333%;
      flex-basis: 33.33333%;
}
.at-grid[data-column="4"] .at-column {
  width: 25%;
  max-width: 25%;
  min-width: 25%;
  -ms-flex-preferred-size: 25%;
      flex-basis: 25%;
}
.at-grid[data-column="5"] .at-column {
  width: 20%;
  max-width: 20%;
  min-width: 20%;
  -ms-flex-preferred-size: 20%;
      flex-basis: 20%;
}
.at-grid[data-column="6"] .at-column {
  width: 16.66667%;
  max-width: 16.66667%;
  min-width: 16.66667%;
  -ms-flex-preferred-size: 16.66667%;
      flex-basis: 16.66667%;
}
.at-grid[data-column="7"] .at-column {
  width: 14.28571%;
  max-width: 14.28571%;
  min-width: 14.28571%;
  -ms-flex-preferred-size: 14.28571%;
      flex-basis: 14.28571%;
}
.at-grid[data-column="8"] .at-column {
  width: 12.5%;
  max-width: 12.5%;
  min-width: 12.5%;
  -ms-flex-preferred-size: 12.5%;
      flex-basis: 12.5%;
}
.at-grid[data-column="9"] .at-column {
  width: 11.11111%;
  max-width: 11.11111%;
  min-width: 11.11111%;
  -ms-flex-preferred-size: 11.11111%;
      flex-basis: 11.11111%;
}
.at-column {
  z-index: 0;
  position: relative;
  background: trans;
  padding: 10px;
  box-sizing: border-box;
  -webkit-transition: box-shadow 0.2s ease, z-index 0s 0.2s ease, -webkit-transform 0.2s ease;
  transition: box-shadow 0.2s ease, z-index 0s 0.2s ease, -webkit-transform 0.2s ease;
  transition: box-shadow 0.2s ease, transform 0.2s ease, z-index 0s 0.2s ease;
  transition: box-shadow 0.2s ease, transform 0.2s ease, z-index 0s 0.2s ease, -webkit-transform 0.2s ease;
}
.at-column:before {
  content: "";
  display: block;
  padding-top: 100%;
}
.at-column:hover {
  z-index: 1;
  background-color: white;
  box-shadow: 0 8px 50px rgba(0, 0, 0, 0.2);
  -webkit-transform: scale(1.05);
          transform: scale(1.05);
  -webkit-transition: box-shadow 0.2s ease, z-index 0s 0s ease, -webkit-transform 0.2s ease;
  transition: box-shadow 0.2s ease, z-index 0s 0s ease, -webkit-transform 0.2s ease;
  transition: box-shadow 0.2s ease, transform 0.2s ease, z-index 0s 0s ease;
  transition: box-shadow 0.2s ease, transform 0.2s ease, z-index 0s 0s ease, -webkit-transform 0.2s ease;
}
.at-column:hover .at-social {
  margin: 16px 0 0;
  opacity: 1;
}
@media (max-width: 800px) {
  .at-column {
    width: 50% !important;
    max-width: 50% !important;
    min-width: 50% !important;
    -ms-flex-preferred-size: 50% !important;
        flex-basis: 50% !important;
  }
}
@media (max-width: 600px) {
  .at-column {
    width: 100% !important;
    max-width: 100% !important;
    min-width: 100% !important;
    -ms-flex-preferred-size: 100% !important;
        flex-basis: 100% !important;
  }
}
.at-user {
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  -webkit-transform: translate(0, -50%);
          transform: translate(0, -50%);
  text-align: center;
}
.at-user__avatar {
  width: 98px;
  height: 98px;
  border-radius: 100%;
  margin: 0 auto 20px;
  overflow: hidden;
}
.at-user__avatar img {
  display: block;
  width: 100%;
  max-width: 100%;
}
.at-user__name {
  color: #313435;
  font-family: 'Roboto', sans-serif;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 2.625rem;
}
.at-user__title {
  color: #6F808A;
  font-family: 'Roboto', sans-serif;
  font-size: 0.875rem;
  line-height: 2.375rem;
}
.at-social {
  
  opacity: 0;
  -webkit-transition: margin 0.2s ease, opacity 0.2s ease;
  transition: margin 0.2s ease, opacity 0.2s ease;
}
.at-social__item {
  display: inline-block;
  margin: 0 10px;
  margin-right: 55px;
}
.at-social__item a {
  display: block;
}
.at-social__item svg {
  fill: #515F65;
  display: block;
  height: 18px;
  -webkit-transition: fill 0.2s ease;
  transition: fill 0.2s ease;
}
.at-social__item svg:hover {
  fill: #788D96;
}

.container1 {
  max-width: 1170px;
  width: 100%;
  margin: 100px auto;
  box-sizing: border-box;
  -webkit-transform-origin: top center;
          transform-origin: top center;
  -webkit-transform: scale(0.8);
          transform: scale(0.8);
          padding-top:10px;
}

</style>
<style type="text/css">
  @import url(http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css);
.container2 {
  text-align: center;
  position: relative;
  margin: 3em auto 0 auto;
  width: 9em;
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

.container2:hover > .siji{
  top: 4.7em;
}

.container2:hover > .loro {
  top: 8.1em;
}

.container2:hover > .telu {
  top: 11.5em;
}

.container2:hover > .papat {
  top: 14.9em;
}

.container2:hover > .limo {
  top: 18.3em;
}
.container2:hover > .spon {
  top: 21.7em;
}
</style>
</head>
<body style="background: #050c19;">
    <div class="preloader" id="preloader" style=" background-color: black;"><!--
        <div class="preloader__spinner preloader__spinner_1"></div>
        <div class="preloader__spinner preloader__spinner_2"></div> -->
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
                                     <div class="container2">
                                        <div class="menu">
                                        <i class="fa fa-bars"></i>
                                          </div>
                                        <div class="opsi siji">
                                        <a href="index.php">Home</a>
                                          </div>
                                        <div class="opsi loro" id="loro">
                                        <a href="index.php">Events</a>
                                          </div>
                                        <div class="opsi telu" id="telu">
                                        <a href="gallery.php">Gallery</a>
                                          </div>
                                        <div class="opsi papat" id="papat">
                                        <a href="contact_us.php">Contact</a>
                                        </div>
                                        <div class="opsi limo">
                                        Schedule
                                          </div>
                                        <div class="opsi spon">
                                        <a href="sponsors.php">Sponsors</a>
                                          </div>
                                          </div>

            </div>

                <div id="page-builder">
                     <div class="at-section__title" style="color:white; margin-top:100px;">Sponsors 2017</div>
                     <p>Do you want to Sponsor? <a href="contact_us.php">Contact Here</a></p>
          <div id="module-columns-1" class="module-columns-wrapper module-wrapper wrapper transparent">
            <div class="module-columns-container container">


              <div class="row">



                <div class="cl3 column one-third">

                  <a class="column-img" href="https://paytm.com/" target="_blank">
                    <div class="image"><img  src="images/sponsors/paytm.jpg" alt="paytm" /></div>
                  </a>


                </div> <!-- .cl3 -->



                <div class="cl3 column one-third">

                  <a class="column-img" href="http://www.wondercement.com/" target="_blank">
                    <div class="image"><img  src="images/sponsors/wonder cement.jpg" alt="Wonder Cement" /></div>
                  </a>


                </div> <!-- .cl3 -->



                <div class="cl3 column one-third">

                  <a class="column-img" href="https://www.justdial.com/Jaipur/Laxmi-Buildcon-%3Cnear%3E-Jagat-Pura/0141PX141-X141-110204172619-E8G5_BZDET" target="_blank">
                    <div class="image"><img  src="images/sponsors/laxmibuildcon.jpg" alt="Laxmi Build Con" /></div>
                  </a>


                </div> <!-- .cl3 -->



              </div> <!-- .row -->
              <div class="row">



                <div class="cl3 column one-third">

                  <a class="column-img" href="https://www.facebook.com/EminenceGroupOfEntertainment/" target="_blank">
                    <div class="image"><img  src="images/sponsors/eminence.jpg" alt="Eminence" /></div>
                  </a>


                </div> <!-- .cl3 -->



                <div class="cl3 column one-third">

                  <a class="column-img" href="http://www.nikon.co.in/en_IN" target="_blank">
                    <div class="image"><img  src="images/sponsors/nikon.jpg" alt="Nikon" /></div>
                  </a>


                </div> <!-- .cl3 -->



                <div class="cl3 column one-third">

                  <a class="column-img" href="https://www.zoomcar.com/" target="_blank">
                    <div class="image"><img  src="images/sponsors/zoom car.jpg" alt="Zoom Car" /></div>
                  </a>


                </div> <!-- .cl3 -->



              </div> <!-- .row -->
              <div class="row">



                <div class="cl3 column one-third">

                  <a class="column-img" href="https://www.uber.com/en-IN/" target="_blank">
                    <div class="image"><img  src="images/sponsors/uber.jpg" alt="Uber" /></div>
                  </a>


                </div> <!-- .cl3 -->



                <div class="cl3 column one-third">

                  <a class="column-img" href="http://wtpjaipur.com/" target="_blank">
                    <div class="image"><img  src="images/sponsors/wtp.jpg" alt="WTP" /></div>
                  </a>


                </div> <!-- .cl3 -->



                <div class="cl3 column one-third">

                  <a class="column-img" href="https://www.facebook.com/AwaazStudio/?fref=ts" target="_blank">
                    <div class="image"><img  src="images/sponsors/aawaz.jpg" alt="Awaaz" /></div>
                  </a>


                </div> <!-- .cl3 -->



              </div> <!-- .row -->

              <div class="row">



                <div class="cl3 column one-third">

                  <a class="column-img" href="http://hippocabs.com/web/" target="_blank">
                    <div class="image"><img  src="images/sponsors/hippo cabs.jpg" alt="Hippo Cabs" /></div>
                  </a>


                </div> <!-- .cl3 -->



                <div class="cl3 column one-third">

                  <a class="column-img" href="https://www.facebook.com/Pink-Square-Mall-Jaipur-908966885815055/" target="_blank">
                    <div class="image"><img  src="images/sponsors/pink square.jpg" alt="Pink Square" /></div>
                  </a>


                </div> <!-- .cl3 -->



                <div class="cl3 column one-third">

                  <a class="column-img" href="https://www.nearbuy.com/" target="_blank">
                    <div class="image"><img  src="images/sponsors/nearby.jpg" alt="Nearbuy" /></div>
                  </a>


                </div> <!-- .cl3 -->



              </div> <!-- .row -->

              <div class="row">



                <div class="cl3 column one-third">

                  <a class="column-img" href="http://www.urbaneye.in/" target="_blank">
                    <div class="image"><img  src="images/sponsors/urban eye.jpg" alt="Urban Eye" /></div>
                  </a>


                </div> <!-- .cl3 -->



                <div class="cl3 column one-third">

                  <a class="column-img" href="http://www.shopclues.com/" target="_blank">
                    <div class="image"><img  src="images/sponsors/shopclues.jpg" alt="ShopClues" /></div>
                  </a>


                </div> <!-- .cl3 -->

              </div> <!-- .row -->


            </div><!-- .module-columns-container -->
          </div> <!-- .module-columns-wrapper -->

        </div> <!-- #page-builder -->
            </main>

             <main class="main">
                <div id="page-builder">
                     <div class="at-section__title" style="color:white; margin-top:100px;">Event - Sponsors</div>
          <div id="module-columns-1" class="module-columns-wrapper module-wrapper wrapper transparent">
            <div class="module-columns-container container">


              <div class="row">



                <div class="cl3 column one-third">

                  <a class="column-img" href="https://www.zomato.com/jaipur/ki-ka-kafe-vaishali-nagar" target="_blank">
                    <div class="image"><img  src="images/sponsors/vogue/kiandka.jpg" alt="Ki And Ka" /></div>
                  </a>


                </div> <!-- .cl3 -->



                <div class="cl3 column one-third">

                  <a class="column-img" href="https://www.zomato.com/TheVegetarianGrill" target="_blank">
                    <div class="image"><img  src="images/sponsors/razz/tvg.jpg" alt="TVG" /></div>
                  </a>


                </div> <!-- .cl3 -->



                <div class="cl3 column one-third">

                  <a class="column-img" href="http://www.steragro.com/" target="_blank">
                    <div class="image"><img  src="images/sponsors/masterchef/nova dairy.jpg" alt="Nova Dairy" /></div>
                  </a>


                </div> <!-- .cl3 -->



              </div> <!-- .row -->
              <div class="row">



                <div class="cl3 column one-third">

                  <a class="column-img" href="http://business.google.com/website/tres-beau/" target="_blank">
                    <div class="image"><img  src="images/sponsors/mr/tres beau.jpg" alt="Tres Beau" /></div>
                  </a>


                </div> <!-- .cl3 -->



                <div class="cl3 column one-third">

                  <a class="column-img" href="http://business.google.com/website/tres-beau/" target="_blank">
                    <div class="image"><img  src="images/sponsors/design/tres beau.jpg" alt="Tres Beau" /></div>
                  </a>


                </div> <!-- .cl3 -->



                <div class="cl3 column one-third">

                  <a class="column-img" href="http://eventgraphia.com/" target="_blank">
                    <div class="image"><img  src="images/sponsors/vogue/event graphia.jpg" alt="Event Graphia" /></div>
                  </a>


                </div> <!-- .cl3 -->



              </div> <!-- .row -->
              <div class="row">



                <div class="cl3 column one-third">

                  <a class="column-img" href="http://business.google.com/website/tres-beau/" target="_blank">
                    <div class="image"><img  src="images/sponsors/razz/tres beau.jpg" alt="Tres Beau" /></div>
                  </a>


                </div> <!-- .cl3 -->



                <div class="cl3 column one-third">

                  <a class="column-img" href="https://www.zomato.com/jaipur/sepoy-the-army-lounge-restaurant-malviya-nagar" target="_blank">
                    <div class="image"><img  src="images/sponsors/masterchef/sepoy.jpg" alt="Sepoy" /></div>
                  </a>


                </div> <!-- .cl3 -->



                <div class="cl3 column one-third">

                  <a class="column-img" href="http://www.yufta.com/" target="_blank">
                    <div class="image"><img  src="images/sponsors/mr/yufta.jpg" alt="Yufta" /></div>
                  </a>


                </div> <!-- .cl3 -->



              </div> <!-- .row -->

              <div class="row">



                <div class="cl3 column one-third">

                  <a class="column-img" href="https://www.voylla.com/" target="_blank">
                    <div class="image"><img  src="images/sponsors/mr/voylla.jpg" alt="Voylla" /></div>
                  </a>


                </div> <!-- .cl3 -->



                <div class="cl3 column one-third">

                  <a class="column-img" href="https://www.voylla.com/" target="_blank">
                    <div class="image"><img  src="images/sponsors/design/yufta.jpg" alt="Yufta" /></div>
                  </a>


                </div> <!-- .cl3 -->



                <div class="cl3 column one-third">

                  <a class="column-img" href="https://www.nearbuy.com/" target="_blank">
                    <div class="image"><img  src="images/sponsors/nearby.jpg" alt="Nearbuy" /></div>
                  </a>


                </div> <!-- .cl3 -->



              </div> <!-- .row -->

              <div class="row">



                <div class="cl3 column one-third">

                  <a class="column-img" href="http://www.urbaneye.in/" target="_blank">
                    <div class="image"><img  src="images/sponsors/urban eye.jpg" alt="Urban Eye" /></div>
                  </a>


                </div> <!-- .cl3 -->

              </div> <!-- .row -->


            </div><!-- .module-columns-container -->
          </div> <!-- .module-columns-wrapper -->

        </div> <!-- #page-builder -->
            </main>

            <main class="main">
                <div id="page-builder">
                     <div class="at-section__title" style="color:white; margin-top:100px;">Stall - Sponsors</div>
          <div id="module-columns-1" class="module-columns-wrapper module-wrapper wrapper transparent">
            <div class="module-columns-container container">


              <div class="row">



                <div class="cl3 column one-third">

                  <a class="column-img" href="https://www.zomato.com/jaipur/keventers-malviya-nagar" target="_blank">
                    <div class="image"><img  src="images/sponsors/stall/keventers.jpg" alt="Keventers" /></div>
                  </a>


                </div> <!-- .cl3 -->



                <div class="cl3 column one-third">

                  <a class="column-img" href="https://www.zomato.com/jaipur/pink-moustache-bais-godam" target="_blank">
                    <div class="image"><img  src="images/sponsors/stall/pink moustash.jpg" alt="Pink Moustash" /></div>
                  </a>


                </div> <!-- .cl3 -->



                <div class="cl3 column one-third">

                  <a class="column-img" href="https://www.zomato.com/jaipur/sepoy-the-army-lounge-restaurant-malviya-nagar" target="_blank">
                    <div class="image"><img  src="images/sponsors/stall/sepoy.jpg" alt="Sepoy" /></div>
                  </a>


                </div> <!-- .cl3 -->



              </div> <!-- .row -->
              <div class="row">



                <div class="cl3 column one-third">

                  <a class="column-img" href="http://hungeradda.com/" target="_blank">
                    <div class="image"><img  src="images/sponsors/stall/hungeradda.jpg" alt="Hunger Adda" /></div>
                  </a>


                </div> <!-- .cl3 -->



                <div class="cl3 column one-third">

                  <a class="column-img" href="https://www.zomato.com/jaipur/tinder-box-c-scheme" target="_blank">
                    <div class="image"><img  src="images/sponsors/stall/tinder box.jpg" alt="Tinder Box" /></div>
                  </a>


                </div> <!-- .cl3 -->



                <div class="cl3 column one-third">

                  <a class="column-img" href="https://www.zomato.com/jaipur/chickenette-raja-park" target="_blank">
                    <div class="image"><img  src="images/sponsors/stall/chickenette.jpg" alt="Chickenette" /></div>
                  </a>


                </div> <!-- .cl3 -->



              </div> <!-- .row -->
              <div class="row">



                <div class="cl3 column one-third">

                  <a class="column-img" href="https://en.wikipedia.org/wiki/The_Brew_Company" target="_blank">
                    <div class="image"><img  src="images/sponsors/stall/tbc.jpg" alt="The Brew Company" /></div>
                  </a>


                </div> <!-- .cl3 -->



                <div class="cl3 column one-third">

                  <a class="column-img" href="http://www.flavours24.in/" target="_blank">
                    <div class="image"><img  src="images/sponsors/stall/flavours 24.jpg" alt="Flavours 24" /></div>
                  </a>


                </div> <!-- .cl3 -->



                <div class="cl3 column one-third">

                  <a class="column-img" href="http://business.google.com/website/hook-me-up/" target="_blank">
                    <div class="image"><img  src="images/sponsors/stall/hook me up.jpg" alt="Hook Me Up" /></div>
                  </a>


                </div> <!-- .cl3 -->



              </div> <!-- .row -->

              <div class="row">



                <div class="cl3 column one-third">

                  <a class="column-img" href="http://www.republicofchicken.com/" target="_blank">
                    <div class="image"><img  src="images/sponsors/stall/republic of chicken.jpg" alt="Republic Of Chicken" /></div>
                  </a>


                </div> <!-- .cl3 -->



                <div class="cl3 column one-third">

                  <a class="column-img" href="http://www.subway.com/en-IN" target="_blank">
                    <div class="image"><img  src="images/sponsors/stall/subway.jpg" alt="Subway" /></div>
                  </a>


                </div> <!-- .cl3 -->



                <div class="cl3 column one-third">

                  <a class="column-img" href="" target="_blank">
                    <div class="image"><img  src="images/sponsors/stall/bombay.jpg" alt="Bombay" /></div>
                  </a>


                </div> <!-- .cl3 -->



              </div> <!-- .row -->

              <div class="row">



                <div class="cl3 column one-third">

                  <a class="column-img" href="https://www.facebook.com/SaanyaSanjayGumber/" target="_blank">
                    <div class="image"><img  src="images/sponsors/stall/gold fab.jpg" alt="Gold Fab" /></div>
                  </a>


                </div> <!-- .cl3 -->

                <div class="cl3 column one-third">

                  <a class="column-img" href="https://www.tripadvisor.in/Hotel_Review-g304555-d1211614-Reviews-Karma_Haveli-Jaipur_Jaipur_District_Rajasthan.html" target="_blank">
                    <div class="image"><img  src="images/sponsors/stall/karma.jpg" alt="Karma" /></div>
                  </a>


                </div> <!-- .cl3 -->

                <div class="cl3 column one-third">

                  <a class="column-img" href="http://www.urbaneye.in/" target="_blank">
                    <div class="image"><img  src="images/sponsors/stall/think story.jpg" alt="Gold Fab" /></div>
                  </a>


                </div> <!-- .cl3 -->

              </div> <!-- .row -->

              <div class="row">



                <div class="cl3 column one-third">

                  <a class="column-img" href="http://comicsense.xyz/" target="_blank">
                    <div class="image"><img  src="images/sponsors/stall/comic sense.jpg" alt="Comic Sense" /></div>
                  </a>


                </div> <!-- .cl3 -->

              </div> <!-- .row -->


            </div><!-- .module-columns-container -->
          </div> <!-- .module-columns-wrapper -->

        </div> <!-- #page-builder -->
            </main>

             <main class="main">
                <div id="page-builder">
                     <div class="at-section__title" style="color:white; margin-top:100px;">General - Sponsors</div>
          <div id="module-columns-1" class="module-columns-wrapper module-wrapper wrapper transparent">
            <div class="module-columns-container container">


              <div class="row">



                <div class="cl3 column one-third">

                  <a class="column-img" href="http://www.kayaetiquetters.com/" target="_blank">
                    <div class="image"><img  src="images/sponsors/worth/kaya.jpg" alt="Kaya Ettiquetters" /></div>
                  </a>


                </div> <!-- .cl3 -->



                <div class="cl3 column one-third">

                   <a class="column-img" href="http://www.ramaskurti.com/" target="_blank">
                    <div class="image"><img  src="images/sponsors/worth/rama.jpg" alt="Rama's" /></div>
                  </a>



                </div> <!-- .cl3 -->



                <div class="cl3 column one-third">

                  <a class="column-img" href="http://www.moustachehostel.com/" target="_blank">
                    <div class="image"><img  src="images/sponsors/worth/moustache.jpg" alt="Moustache" /></div>
                  </a>


                </div> <!-- .cl3 -->



              </div> <!-- .row -->
              <div class="row">



                <div class="cl3 column one-third">

                  <a class="column-img" href="https://www.zomato.com/jaipur/the-antique-lounge-caf%C3%A9-raja-park" target="_blank">
                    <div class="image"><img  src="images/sponsors/worth/the antique.jpg" alt="The Antique" /></div>
                  </a>


                </div> <!-- .cl3 -->



                <div class="cl3 column one-third">

                  <a class="column-img" href="https://www.zomato.com/jaipur/sadak-malviya-nagar" target="_blank">
                    <div class="image"><img  src="images/sponsors/worth/sadak.jpg" alt="Sadak" /></div>
                  </a>


                </div> <!-- .cl3 -->



                <div class="cl3 column one-third">

                  <a class="column-img" href="http://jaipur.organicshop.in/" target="_blank">
                    <div class="image"><img  src="images/sponsors/worth/the organic shop.jpg" alt="The Organic Shop" /></div>
                  </a>


                </div> <!-- .cl3 -->



              </div> <!-- .row -->
              <div class="row">



                <div class="cl3 column one-third">

                  <a class="column-img" href="https://www.zomato.com/jaipur/romeos-treat-the-theme-lounge-raja-park" target="_blank">
                    <div class="image"><img  src="images/sponsors/worth/romeos treat.jpg" alt="Romeos Treat" /></div>
                  </a>


                </div> <!-- .cl3 -->



                <div class="cl3 column one-third">

                  <a class="column-img" href="https://www.fromsmash.com/" target="_blank">
                    <div class="image"><img  src="images/sponsors/worth/smash.jpg" alt="Smash" /></div>
                  </a>


                </div> <!-- .cl3 -->



                <div class="cl3 column one-third">

                  <a class="column-img" href="https://www.zomato.com/jaipur/thirstea-the-teateria-malviya-nagar" target="_blank">
                    <div class="image"><img  src="images/sponsors/worth/thirst tea.jpg" alt="Thirst Tea" /></div>
                  </a>


                </div> <!-- .cl3 -->



              </div> <!-- .row -->

            </div><!-- .module-columns-container -->
          </div> <!-- .module-columns-wrapper -->

        </div> <!-- #page-builder -->
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
    <?php include('scripts_index.php') ?>
</body>
</html>