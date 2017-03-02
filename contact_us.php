<!DOCTYPE html>
<html>

<head>
    <title>Vivaicty</title>

<?php include('tmeta_index.php') ?>
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
                                        <a>Schedule</a>
                                          </div>
                                        <div class="opsi spon">
                                        <a href="sponsors.php">Sponsors</a>
                                          </div>
                                          </div>

            </div>
           
<div class="container1">
  <div class="at-section">
    <div class="at-section__title" style="color:white;">Finance And Administration Team</div>
  </div>
  <div class="at-grid" data-column="3">
    <div class="at-column">
      <div class="at-user">
        <div class="at-user__avatar"><img src="contact images/modi.jpg"/></div>
        <div class="at-user__name">Akshay Modi</div>
        <div class="at-user__title">General Secretory</div>
        <div class="at-user__title">Akshaymodi.lnmiit@gmail.com</div>
        <div class="at-user__title">+91-7597814370</div>
        <ul class="at-social">
          <li class="at-social__item"><a href="https://www.facebook.com/akshay.modi.587">
              <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 9h3l-.375 3H14v9h-3.89v-9H8V9h2.11V6.984c0-1.312.327-2.304.984-2.976C11.75 3.336 12.844 3 14.375 3H17v3h-1.594c-.594 0-.976.094-1.148.281-.172.188-.258.5-.258.938V9z" fill-rule="evenodd"></path>
              </svg></a></li>
          <li class="at-social__item"><a href="">
              <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.875 7.5v.563c0 3.28-1.18 6.257-3.54 8.93C14.978 19.663 11.845 21 7.938 21c-2.5 0-4.812-.687-6.937-2.063.5.063.86.094 1.078.094 2.094 0 3.969-.656 5.625-1.968a4.563 4.563 0 0 1-2.625-.915 4.294 4.294 0 0 1-1.594-2.226c.375.062.657.094.844.094.313 0 .719-.063 1.219-.188-1.031-.219-1.899-.742-2.602-1.57a4.32 4.32 0 0 1-1.054-2.883c.687.328 1.375.516 2.062.516C2.61 9.016 1.938 7.75 1.938 6.094c0-.782.203-1.531.609-2.25 2.406 2.969 5.515 4.547 9.328 4.734-.063-.219-.094-.562-.094-1.031 0-1.281.438-2.36 1.313-3.234C13.969 3.437 15.047 3 16.328 3s2.375.484 3.281 1.453c.938-.156 1.907-.531 2.907-1.125-.313 1.094-.985 1.938-2.016 2.531.969-.093 1.844-.328 2.625-.703-.563.875-1.312 1.656-2.25 2.344z" fill-rule="evenodd"></path>
              </svg></a></li>
          
        </ul>
      </div>
    </div>
    <div class="at-column">
      <div class="at-user">
        <div class="at-user__avatar"><img src="contact images/anusha.jpg"/></div>
        <div class="at-user__name">Anusha Agarwal</div>
        <div class="at-user__title">Associate Gen. Secretory</div>
        <div class="at-user__title">anusha.lnmiit@gmail.com</div>
        <div class="at-user__title">+91-9413453186</div>
        <ul class="at-social">
          <li class="at-social__item"><a href="https://www.facebook.com/anusha.agarwal.12">
              <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 9h3l-.375 3H14v9h-3.89v-9H8V9h2.11V6.984c0-1.312.327-2.304.984-2.976C11.75 3.336 12.844 3 14.375 3H17v3h-1.594c-.594 0-.976.094-1.148.281-.172.188-.258.5-.258.938V9z" fill-rule="evenodd"></path>
              </svg></a></li>
          <li class="at-social__item"><a href="">
              <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.875 7.5v.563c0 3.28-1.18 6.257-3.54 8.93C14.978 19.663 11.845 21 7.938 21c-2.5 0-4.812-.687-6.937-2.063.5.063.86.094 1.078.094 2.094 0 3.969-.656 5.625-1.968a4.563 4.563 0 0 1-2.625-.915 4.294 4.294 0 0 1-1.594-2.226c.375.062.657.094.844.094.313 0 .719-.063 1.219-.188-1.031-.219-1.899-.742-2.602-1.57a4.32 4.32 0 0 1-1.054-2.883c.687.328 1.375.516 2.062.516C2.61 9.016 1.938 7.75 1.938 6.094c0-.782.203-1.531.609-2.25 2.406 2.969 5.515 4.547 9.328 4.734-.063-.219-.094-.562-.094-1.031 0-1.281.438-2.36 1.313-3.234C13.969 3.437 15.047 3 16.328 3s2.375.484 3.281 1.453c.938-.156 1.907-.531 2.907-1.125-.313 1.094-.985 1.938-2.016 2.531.969-.093 1.844-.328 2.625-.703-.563.875-1.312 1.656-2.25 2.344z" fill-rule="evenodd"></path>
              </svg></a></li>
          
        </ul>
      </div>
    </div>
    <div class="at-column">
      <div class="at-user">
        <div class="at-user__avatar"><img src="contact images/kabra.jpg"/></div>
        <div class="at-user__name">Bhavuk Kabra</div>
        <div class="at-user__title">Finance Convener</div>
        <div class="at-user__title">bhavukkabra@gmail.com</div>
        <div class="at-user__title">+91-8107471402</div>

        <ul class="at-social">
          <li class="at-social__item"><a href="https://www.facebook.com/profile.php?id=100008367075619">
              <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 9h3l-.375 3H14v9h-3.89v-9H8V9h2.11V6.984c0-1.312.327-2.304.984-2.976C11.75 3.336 12.844 3 14.375 3H17v3h-1.594c-.594 0-.976.094-1.148.281-.172.188-.258.5-.258.938V9z" fill-rule="evenodd"></path>
              </svg></a></li>
          <li class="at-social__item"><a href="">
              <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.875 7.5v.563c0 3.28-1.18 6.257-3.54 8.93C14.978 19.663 11.845 21 7.938 21c-2.5 0-4.812-.687-6.937-2.063.5.063.86.094 1.078.094 2.094 0 3.969-.656 5.625-1.968a4.563 4.563 0 0 1-2.625-.915 4.294 4.294 0 0 1-1.594-2.226c.375.062.657.094.844.094.313 0 .719-.063 1.219-.188-1.031-.219-1.899-.742-2.602-1.57a4.32 4.32 0 0 1-1.054-2.883c.687.328 1.375.516 2.062.516C2.61 9.016 1.938 7.75 1.938 6.094c0-.782.203-1.531.609-2.25 2.406 2.969 5.515 4.547 9.328 4.734-.063-.219-.094-.562-.094-1.031 0-1.281.438-2.36 1.313-3.234C13.969 3.437 15.047 3 16.328 3s2.375.484 3.281 1.453c.938-.156 1.907-.531 2.907-1.125-.313 1.094-.985 1.938-2.016 2.531.969-.093 1.844-.328 2.625-.703-.563.875-1.312 1.656-2.25 2.344z" fill-rule="evenodd"></path>
              </svg></a></li>
         
        </ul>
      </div>
    </div>
    </div>
</div>

    
<div class="container1">
  <div class="at-section">
    <div class="at-section__title" style="color:white;">Sponsorship Team</div>
  </div>
  <div class="at-grid" data-column="3">
    <div class="at-column">
      <div class="at-user">
        <div class="at-user__avatar"><img src="contact images/akul.jpg"/></div>
        <div class="at-user__name">Akul Garg</div>
        <div class="at-user__title">Sponsorship Team Member</div>
        <div class="at-user__title">akulsohangarg@gmail.com</div>
        <div class="at-user__title">+91-9467422212</div>
        <ul class="at-social">
          <li class="at-social__item"><a href="https://www.facebook.com/akul.garg1">
              <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 9h3l-.375 3H14v9h-3.89v-9H8V9h2.11V6.984c0-1.312.327-2.304.984-2.976C11.75 3.336 12.844 3 14.375 3H17v3h-1.594c-.594 0-.976.094-1.148.281-.172.188-.258.5-.258.938V9z" fill-rule="evenodd"></path>
              </svg></a></li>
          <li class="at-social__item"><a href="">
              <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.875 7.5v.563c0 3.28-1.18 6.257-3.54 8.93C14.978 19.663 11.845 21 7.938 21c-2.5 0-4.812-.687-6.937-2.063.5.063.86.094 1.078.094 2.094 0 3.969-.656 5.625-1.968a4.563 4.563 0 0 1-2.625-.915 4.294 4.294 0 0 1-1.594-2.226c.375.062.657.094.844.094.313 0 .719-.063 1.219-.188-1.031-.219-1.899-.742-2.602-1.57a4.32 4.32 0 0 1-1.054-2.883c.687.328 1.375.516 2.062.516C2.61 9.016 1.938 7.75 1.938 6.094c0-.782.203-1.531.609-2.25 2.406 2.969 5.515 4.547 9.328 4.734-.063-.219-.094-.562-.094-1.031 0-1.281.438-2.36 1.313-3.234C13.969 3.437 15.047 3 16.328 3s2.375.484 3.281 1.453c.938-.156 1.907-.531 2.907-1.125-.313 1.094-.985 1.938-2.016 2.531.969-.093 1.844-.328 2.625-.703-.563.875-1.312 1.656-2.25 2.344z" fill-rule="evenodd"></path>
              </svg></a></li>
        </ul>
      </div>
    </div>
    <div class="at-column">
      <div class="at-user">
        <div class="at-user__avatar"><img src="https://s3.amazonaws.com/uifaces/faces/twitter/rem/128.jpg"/></div>
        <div class="at-user__name">Parth Patsaria</div>
        <div class="at-user__title">Sponsorship Team Member</div>
        <div class="at-user__title">parth.patsaria2@gmail.com</div>
        <div class="at-user__title">+91-9460015670</div>

        <ul class="at-social">
          <li class="at-social__item"><a href="https://www.facebook.com/parth.patsaria">
              <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 9h3l-.375 3H14v9h-3.89v-9H8V9h2.11V6.984c0-1.312.327-2.304.984-2.976C11.75 3.336 12.844 3 14.375 3H17v3h-1.594c-.594 0-.976.094-1.148.281-.172.188-.258.5-.258.938V9z" fill-rule="evenodd"></path>
              </svg></a></li>
          <li class="at-social__item"><a href="">
              <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.875 7.5v.563c0 3.28-1.18 6.257-3.54 8.93C14.978 19.663 11.845 21 7.938 21c-2.5 0-4.812-.687-6.937-2.063.5.063.86.094 1.078.094 2.094 0 3.969-.656 5.625-1.968a4.563 4.563 0 0 1-2.625-.915 4.294 4.294 0 0 1-1.594-2.226c.375.062.657.094.844.094.313 0 .719-.063 1.219-.188-1.031-.219-1.899-.742-2.602-1.57a4.32 4.32 0 0 1-1.054-2.883c.687.328 1.375.516 2.062.516C2.61 9.016 1.938 7.75 1.938 6.094c0-.782.203-1.531.609-2.25 2.406 2.969 5.515 4.547 9.328 4.734-.063-.219-.094-.562-.094-1.031 0-1.281.438-2.36 1.313-3.234C13.969 3.437 15.047 3 16.328 3s2.375.484 3.281 1.453c.938-.156 1.907-.531 2.907-1.125-.313 1.094-.985 1.938-2.016 2.531.969-.093 1.844-.328 2.625-.703-.563.875-1.312 1.656-2.25 2.344z" fill-rule="evenodd"></path>
              </svg></a></li>
        </ul>
      </div>
    </div>
    <div class="at-column">
      <div class="at-user">
        <div class="at-user__avatar"><img src="contact images/anuj.jpg"/></div>
        <div class="at-user__name">Anuj Gupta</div>
        <div class="at-user__title">Sponsorship Team Member</div>
        <div class="at-user__title">anujgupta1508@gmail.com</div>
        <div class="at-user__title">+91-9571603820</div>

        <ul class="at-social">
          <li class="at-social__item"><a href="https://www.facebook.com/profile.php?id=100001392157658&fref=ts">
              <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 9h3l-.375 3H14v9h-3.89v-9H8V9h2.11V6.984c0-1.312.327-2.304.984-2.976C11.75 3.336 12.844 3 14.375 3H17v3h-1.594c-.594 0-.976.094-1.148.281-.172.188-.258.5-.258.938V9z" fill-rule="evenodd"></path>
              </svg></a></li>
          <li class="at-social__item"><a href="">
              <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.875 7.5v.563c0 3.28-1.18 6.257-3.54 8.93C14.978 19.663 11.845 21 7.938 21c-2.5 0-4.812-.687-6.937-2.063.5.063.86.094 1.078.094 2.094 0 3.969-.656 5.625-1.968a4.563 4.563 0 0 1-2.625-.915 4.294 4.294 0 0 1-1.594-2.226c.375.062.657.094.844.094.313 0 .719-.063 1.219-.188-1.031-.219-1.899-.742-2.602-1.57a4.32 4.32 0 0 1-1.054-2.883c.687.328 1.375.516 2.062.516C2.61 9.016 1.938 7.75 1.938 6.094c0-.782.203-1.531.609-2.25 2.406 2.969 5.515 4.547 9.328 4.734-.063-.219-.094-.562-.094-1.031 0-1.281.438-2.36 1.313-3.234C13.969 3.437 15.047 3 16.328 3s2.375.484 3.281 1.453c.938-.156 1.907-.531 2.907-1.125-.313 1.094-.985 1.938-2.016 2.531.969-.093 1.844-.328 2.625-.703-.563.875-1.312 1.656-2.25 2.344z" fill-rule="evenodd"></path>
              </svg></a></li>
        </ul>
      </div>
    </div>
    <div class="at-column">
      <div class="at-user">
        <div class="at-user__avatar"><img src="contact images/ishita.jpg"/></div>
        <div class="at-user__name">Ishita Kalra</div>
        <div class="at-user__title">Sponsorship Team Member</div>
        <div class="at-user__title">kalraishita052@gmail.com</div>
        <div class="at-user__title">+91-9462402163</div>

        <ul class="at-social">
          <li class="at-social__item"><a href="https://www.facebook.com/profile.php?id=100005260635089&fref=ts">
              <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 9h3l-.375 3H14v9h-3.89v-9H8V9h2.11V6.984c0-1.312.327-2.304.984-2.976C11.75 3.336 12.844 3 14.375 3H17v3h-1.594c-.594 0-.976.094-1.148.281-.172.188-.258.5-.258.938V9z" fill-rule="evenodd"></path>
              </svg></a></li>
          <li class="at-social__item"><a href="">
              <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.875 7.5v.563c0 3.28-1.18 6.257-3.54 8.93C14.978 19.663 11.845 21 7.938 21c-2.5 0-4.812-.687-6.937-2.063.5.063.86.094 1.078.094 2.094 0 3.969-.656 5.625-1.968a4.563 4.563 0 0 1-2.625-.915 4.294 4.294 0 0 1-1.594-2.226c.375.062.657.094.844.094.313 0 .719-.063 1.219-.188-1.031-.219-1.899-.742-2.602-1.57a4.32 4.32 0 0 1-1.054-2.883c.687.328 1.375.516 2.062.516C2.61 9.016 1.938 7.75 1.938 6.094c0-.782.203-1.531.609-2.25 2.406 2.969 5.515 4.547 9.328 4.734-.063-.219-.094-.562-.094-1.031 0-1.281.438-2.36 1.313-3.234C13.969 3.437 15.047 3 16.328 3s2.375.484 3.281 1.453c.938-.156 1.907-.531 2.907-1.125-.313 1.094-.985 1.938-2.016 2.531.969-.093 1.844-.328 2.625-.703-.563.875-1.312 1.656-2.25 2.344z" fill-rule="evenodd"></path>
              </svg></a></li>
        </ul>
      </div>
    </div>
    
  </div>
</div>


<div class="container1">
  <div class="at-section">
    <div class="at-section__title" style="color:white;">Web Developers</div>
  </div>
  <div class="at-grid" data-column="3">
    <div class="at-column">
      <div class="at-user">
        <div class="at-user__avatar"><img src="contact images/indu.jpg"/></div>
        <div class="at-user__name">Indresh Khandelwal</div>
        <div class="at-user__title">Web Developer</div>
        <div class="at-user__title">indu1922@gmail.com</div>
        <div class="at-user__title">+91-8107245977</div>

        <ul class="at-social">
          <li class="at-social__item"><a href="https://www.facebook.com/indresh.khandelwal">
              <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 9h3l-.375 3H14v9h-3.89v-9H8V9h2.11V6.984c0-1.312.327-2.304.984-2.976C11.75 3.336 12.844 3 14.375 3H17v3h-1.594c-.594 0-.976.094-1.148.281-.172.188-.258.5-.258.938V9z" fill-rule="evenodd"></path>
              </svg></a></li>
          <li class="at-social__item"><a href="">
              <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.875 7.5v.563c0 3.28-1.18 6.257-3.54 8.93C14.978 19.663 11.845 21 7.938 21c-2.5 0-4.812-.687-6.937-2.063.5.063.86.094 1.078.094 2.094 0 3.969-.656 5.625-1.968a4.563 4.563 0 0 1-2.625-.915 4.294 4.294 0 0 1-1.594-2.226c.375.062.657.094.844.094.313 0 .719-.063 1.219-.188-1.031-.219-1.899-.742-2.602-1.57a4.32 4.32 0 0 1-1.054-2.883c.687.328 1.375.516 2.062.516C2.61 9.016 1.938 7.75 1.938 6.094c0-.782.203-1.531.609-2.25 2.406 2.969 5.515 4.547 9.328 4.734-.063-.219-.094-.562-.094-1.031 0-1.281.438-2.36 1.313-3.234C13.969 3.437 15.047 3 16.328 3s2.375.484 3.281 1.453c.938-.156 1.907-.531 2.907-1.125-.313 1.094-.985 1.938-2.016 2.531.969-.093 1.844-.328 2.625-.703-.563.875-1.312 1.656-2.25 2.344z" fill-rule="evenodd"></path>
              </svg></a></li>
        </ul>
      </div>
    </div>
    <div class="at-column">
      <div class="at-user">
        <div class="at-user__avatar"><img src="contact images/aarush.jpg"/></div>
        <div class="at-user__name">Aarush Verma</div>
        <div class="at-user__title">Web Developer</div>
        <div class="at-user__title">aarushverma96@gmail.com</div>
        <div class="at-user__title">+91-9782752748</div>

        <ul class="at-social">
          <li class="at-social__item"><a href="https://www.facebook.com/aarush.verma.3766">
              <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 9h3l-.375 3H14v9h-3.89v-9H8V9h2.11V6.984c0-1.312.327-2.304.984-2.976C11.75 3.336 12.844 3 14.375 3H17v3h-1.594c-.594 0-.976.094-1.148.281-.172.188-.258.5-.258.938V9z" fill-rule="evenodd"></path>
              </svg></a></li>
          <li class="at-social__item"><a href="">
              <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.875 7.5v.563c0 3.28-1.18 6.257-3.54 8.93C14.978 19.663 11.845 21 7.938 21c-2.5 0-4.812-.687-6.937-2.063.5.063.86.094 1.078.094 2.094 0 3.969-.656 5.625-1.968a4.563 4.563 0 0 1-2.625-.915 4.294 4.294 0 0 1-1.594-2.226c.375.062.657.094.844.094.313 0 .719-.063 1.219-.188-1.031-.219-1.899-.742-2.602-1.57a4.32 4.32 0 0 1-1.054-2.883c.687.328 1.375.516 2.062.516C2.61 9.016 1.938 7.75 1.938 6.094c0-.782.203-1.531.609-2.25 2.406 2.969 5.515 4.547 9.328 4.734-.063-.219-.094-.562-.094-1.031 0-1.281.438-2.36 1.313-3.234C13.969 3.437 15.047 3 16.328 3s2.375.484 3.281 1.453c.938-.156 1.907-.531 2.907-1.125-.313 1.094-.985 1.938-2.016 2.531.969-.093 1.844-.328 2.625-.703-.563.875-1.312 1.656-2.25 2.344z" fill-rule="evenodd"></path>
              </svg></a></li>
          
        </ul>
      </div>
    </div>
    <div class="at-column">
      <div class="at-user">
        <div class="at-user__avatar"><img src="contact images/yashasvi.jpg"/></div>
        <div class="at-user__name">Yashasvi Jain</div>
        <div class="at-user__title">Web Developer</div>
        <div class="at-user__title">yashirs96@gmail.com</div>
        <div class="at-user__title">+91-7742496667</div>

        <ul class="at-social">
          <li class="at-social__item"><a href="https://www.facebook.com/yashasvi.jain.73">
              <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 9h3l-.375 3H14v9h-3.89v-9H8V9h2.11V6.984c0-1.312.327-2.304.984-2.976C11.75 3.336 12.844 3 14.375 3H17v3h-1.594c-.594 0-.976.094-1.148.281-.172.188-.258.5-.258.938V9z" fill-rule="evenodd"></path>
              </svg></a></li>
          <li class="at-social__item"><a href="">
              <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.875 7.5v.563c0 3.28-1.18 6.257-3.54 8.93C14.978 19.663 11.845 21 7.938 21c-2.5 0-4.812-.687-6.937-2.063.5.063.86.094 1.078.094 2.094 0 3.969-.656 5.625-1.968a4.563 4.563 0 0 1-2.625-.915 4.294 4.294 0 0 1-1.594-2.226c.375.062.657.094.844.094.313 0 .719-.063 1.219-.188-1.031-.219-1.899-.742-2.602-1.57a4.32 4.32 0 0 1-1.054-2.883c.687.328 1.375.516 2.062.516C2.61 9.016 1.938 7.75 1.938 6.094c0-.782.203-1.531.609-2.25 2.406 2.969 5.515 4.547 9.328 4.734-.063-.219-.094-.562-.094-1.031 0-1.281.438-2.36 1.313-3.234C13.969 3.437 15.047 3 16.328 3s2.375.484 3.281 1.453c.938-.156 1.907-.531 2.907-1.125-.313 1.094-.985 1.938-2.016 2.531.969-.093 1.844-.328 2.625-.703-.563.875-1.312 1.656-2.25 2.344z" fill-rule="evenodd"></path>
              </svg></a></li>
          
        </ul>
      </div>
    </div>
    <div class="at-column">
      <div class="at-user">
        <div class="at-user__avatar"><img src="contact images/mudit.jpg"/></div>
        <div class="at-user__name">Mudit Sharma</div>
        <div class="at-user__title">Web Developer</div>
        <div class="at-user__title">mudithkr@gmail.com</div>
        <div class="at-user__title">+91-8239210295</div>

        <ul class="at-social">
          <li class="at-social__item"><a href="https://www.facebook.com/mudit.sharma.7393">
              <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 9h3l-.375 3H14v9h-3.89v-9H8V9h2.11V6.984c0-1.312.327-2.304.984-2.976C11.75 3.336 12.844 3 14.375 3H17v3h-1.594c-.594 0-.976.094-1.148.281-.172.188-.258.5-.258.938V9z" fill-rule="evenodd"></path>
              </svg></a></li>
          <li class="at-social__item"><a href="">
              <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.875 7.5v.563c0 3.28-1.18 6.257-3.54 8.93C14.978 19.663 11.845 21 7.938 21c-2.5 0-4.812-.687-6.937-2.063.5.063.86.094 1.078.094 2.094 0 3.969-.656 5.625-1.968a4.563 4.563 0 0 1-2.625-.915 4.294 4.294 0 0 1-1.594-2.226c.375.062.657.094.844.094.313 0 .719-.063 1.219-.188-1.031-.219-1.899-.742-2.602-1.57a4.32 4.32 0 0 1-1.054-2.883c.687.328 1.375.516 2.062.516C2.61 9.016 1.938 7.75 1.938 6.094c0-.782.203-1.531.609-2.25 2.406 2.969 5.515 4.547 9.328 4.734-.063-.219-.094-.562-.094-1.031 0-1.281.438-2.36 1.313-3.234C13.969 3.437 15.047 3 16.328 3s2.375.484 3.281 1.453c.938-.156 1.907-.531 2.907-1.125-.313 1.094-.985 1.938-2.016 2.531.969-.093 1.844-.328 2.625-.703-.563.875-1.312 1.656-2.25 2.344z" fill-rule="evenodd"></path>
              </svg></a></li>
          
        </ul>
      </div>
    </div>
    <div class="at-column">
      <div class="at-user">
        <div class="at-user__avatar"><img src="contact images/yasho.jpg"/></div>
        <div class="at-user__name">Yashovardhan Agrawal</div>
        <div class="at-user__title">Web Developer</div>
        <div class="at-user__title">yashovardhan.agrawal@gmail.com</div>
        <div class="at-user__title">+91-9455007747</div>

        <ul class="at-social">
          <li class="at-social__item"><a href="https://www.facebook.com/yashovardhanagrawal">
              <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 9h3l-.375 3H14v9h-3.89v-9H8V9h2.11V6.984c0-1.312.327-2.304.984-2.976C11.75 3.336 12.844 3 14.375 3H17v3h-1.594c-.594 0-.976.094-1.148.281-.172.188-.258.5-.258.938V9z" fill-rule="evenodd"></path>
              </svg></a></li>
          <li class="at-social__item"><a href="">
              <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.875 7.5v.563c0 3.28-1.18 6.257-3.54 8.93C14.978 19.663 11.845 21 7.938 21c-2.5 0-4.812-.687-6.937-2.063.5.063.86.094 1.078.094 2.094 0 3.969-.656 5.625-1.968a4.563 4.563 0 0 1-2.625-.915 4.294 4.294 0 0 1-1.594-2.226c.375.062.657.094.844.094.313 0 .719-.063 1.219-.188-1.031-.219-1.899-.742-2.602-1.57a4.32 4.32 0 0 1-1.054-2.883c.687.328 1.375.516 2.062.516C2.61 9.016 1.938 7.75 1.938 6.094c0-.782.203-1.531.609-2.25 2.406 2.969 5.515 4.547 9.328 4.734-.063-.219-.094-.562-.094-1.031 0-1.281.438-2.36 1.313-3.234C13.969 3.437 15.047 3 16.328 3s2.375.484 3.281 1.453c.938-.156 1.907-.531 2.907-1.125-.313 1.094-.985 1.938-2.016 2.531.969-.093 1.844-.328 2.625-.703-.563.875-1.312 1.656-2.25 2.344z" fill-rule="evenodd"></path>
              </svg></a></li>
        </ul>
      </div>
    </div>
    
  </div>
</div>

<div class="container1">
  <div class="at-section">
    <div class="at-section__title" style="color:white;">Event Managers</div>
  </div>
  <div class="at-grid" data-column="3">
    <div class="at-column">
      <div class="at-user">
        <div class="at-user__avatar"><img src="contact images/sarthak.jpg"/></div>
        <div class="at-user__name">Sarthak Agarwal</div>
        <div class="at-user__title">Event Manager</div>
        <div class="at-user__title">agrawal.sarthak6@gmail.com</div>
        <div class="at-user__title">+91-7073589665</div>

        <ul class="at-social">
          <li class="at-social__item"><a href="https://www.facebook.com/sarthak.agrawal.942">
              <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 9h3l-.375 3H14v9h-3.89v-9H8V9h2.11V6.984c0-1.312.327-2.304.984-2.976C11.75 3.336 12.844 3 14.375 3H17v3h-1.594c-.594 0-.976.094-1.148.281-.172.188-.258.5-.258.938V9z" fill-rule="evenodd"></path>
              </svg></a></li>
          <li class="at-social__item"><a href="">
              <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.875 7.5v.563c0 3.28-1.18 6.257-3.54 8.93C14.978 19.663 11.845 21 7.938 21c-2.5 0-4.812-.687-6.937-2.063.5.063.86.094 1.078.094 2.094 0 3.969-.656 5.625-1.968a4.563 4.563 0 0 1-2.625-.915 4.294 4.294 0 0 1-1.594-2.226c.375.062.657.094.844.094.313 0 .719-.063 1.219-.188-1.031-.219-1.899-.742-2.602-1.57a4.32 4.32 0 0 1-1.054-2.883c.687.328 1.375.516 2.062.516C2.61 9.016 1.938 7.75 1.938 6.094c0-.782.203-1.531.609-2.25 2.406 2.969 5.515 4.547 9.328 4.734-.063-.219-.094-.562-.094-1.031 0-1.281.438-2.36 1.313-3.234C13.969 3.437 15.047 3 16.328 3s2.375.484 3.281 1.453c.938-.156 1.907-.531 2.907-1.125-.313 1.094-.985 1.938-2.016 2.531.969-.093 1.844-.328 2.625-.703-.563.875-1.312 1.656-2.25 2.344z" fill-rule="evenodd"></path>
              </svg></a></li>
        </ul>
      </div>
    </div>
    <div class="at-column">
      <div class="at-user">
        <div class="at-user__avatar"><img src="contact images/sumit.jpg"/></div>
        <div class="at-user__name">Sumit Kumar Jiyani</div>
        <div class="at-user__title">Event Manager</div>
        <div class="at-user__title">kjsumit000@gmail.com</div>
        <div class="at-user__title">+91-7665917435</div>

        <ul class="at-social">
          <li class="at-social__item"><a href="https://www.facebook.com/sumit.jiyani">
              <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 9h3l-.375 3H14v9h-3.89v-9H8V9h2.11V6.984c0-1.312.327-2.304.984-2.976C11.75 3.336 12.844 3 14.375 3H17v3h-1.594c-.594 0-.976.094-1.148.281-.172.188-.258.5-.258.938V9z" fill-rule="evenodd"></path>
              </svg></a></li>
          <li class="at-social__item"><a href="">
              <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.875 7.5v.563c0 3.28-1.18 6.257-3.54 8.93C14.978 19.663 11.845 21 7.938 21c-2.5 0-4.812-.687-6.937-2.063.5.063.86.094 1.078.094 2.094 0 3.969-.656 5.625-1.968a4.563 4.563 0 0 1-2.625-.915 4.294 4.294 0 0 1-1.594-2.226c.375.062.657.094.844.094.313 0 .719-.063 1.219-.188-1.031-.219-1.899-.742-2.602-1.57a4.32 4.32 0 0 1-1.054-2.883c.687.328 1.375.516 2.062.516C2.61 9.016 1.938 7.75 1.938 6.094c0-.782.203-1.531.609-2.25 2.406 2.969 5.515 4.547 9.328 4.734-.063-.219-.094-.562-.094-1.031 0-1.281.438-2.36 1.313-3.234C13.969 3.437 15.047 3 16.328 3s2.375.484 3.281 1.453c.938-.156 1.907-.531 2.907-1.125-.313 1.094-.985 1.938-2.016 2.531.969-.093 1.844-.328 2.625-.703-.563.875-1.312 1.656-2.25 2.344z" fill-rule="evenodd"></path>
              </svg></a></li>
        </ul>
      </div>
    </div>
    
  </div>
</div>

<div class="container1">
  <div class="at-section">
    <div class="at-section__title" style="color:white;">Media And Marketing</div>
  </div>
  <div class="at-grid" data-column="3">
    <div class="at-column">
      <div class="at-user">
        <div class="at-user__avatar"><img src="contact images/jaswani.jpg"/></div>
        <div class="at-user__name">Mohit Jaswani</div>
        <div class="at-user__title">Social Media Marketing Head</div>
        <div class="at-user__title">aarman.mj@gmail.com</div>
        <div class="at-user__title">+91-7737045711</div>

        <ul class="at-social">
          <li class="at-social__item"><a href="https://www.facebook.com/mohit.jaswani">
              <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 9h3l-.375 3H14v9h-3.89v-9H8V9h2.11V6.984c0-1.312.327-2.304.984-2.976C11.75 3.336 12.844 3 14.375 3H17v3h-1.594c-.594 0-.976.094-1.148.281-.172.188-.258.5-.258.938V9z" fill-rule="evenodd"></path>
              </svg></a></li>
          <li class="at-social__item"><a href="">
              <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.875 7.5v.563c0 3.28-1.18 6.257-3.54 8.93C14.978 19.663 11.845 21 7.938 21c-2.5 0-4.812-.687-6.937-2.063.5.063.86.094 1.078.094 2.094 0 3.969-.656 5.625-1.968a4.563 4.563 0 0 1-2.625-.915 4.294 4.294 0 0 1-1.594-2.226c.375.062.657.094.844.094.313 0 .719-.063 1.219-.188-1.031-.219-1.899-.742-2.602-1.57a4.32 4.32 0 0 1-1.054-2.883c.687.328 1.375.516 2.062.516C2.61 9.016 1.938 7.75 1.938 6.094c0-.782.203-1.531.609-2.25 2.406 2.969 5.515 4.547 9.328 4.734-.063-.219-.094-.562-.094-1.031 0-1.281.438-2.36 1.313-3.234C13.969 3.437 15.047 3 16.328 3s2.375.484 3.281 1.453c.938-.156 1.907-.531 2.907-1.125-.313 1.094-.985 1.938-2.016 2.531.969-.093 1.844-.328 2.625-.703-.563.875-1.312 1.656-2.25 2.344z" fill-rule="evenodd"></path>
              </svg></a></li>
        </ul>
      </div>
    </div>
    <div class="at-column">
      <div class="at-user">
        <div class="at-user__avatar"><img src="contact images/soni.jpg"/></div>
        <div class="at-user__name">Sarthak Soni</div>
        <div class="at-user__title">Social Media Marketing Head</div>
        <div class="at-user__title">Sarthaksoni987@gmail.com</div>
        <div class="at-user__title">+91-7597461819</div>
        <ul class="at-social">
          <li class="at-social__item"><a href="https://www.facebook.com/sarthak.soni.731">
              <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 9h3l-.375 3H14v9h-3.89v-9H8V9h2.11V6.984c0-1.312.327-2.304.984-2.976C11.75 3.336 12.844 3 14.375 3H17v3h-1.594c-.594 0-.976.094-1.148.281-.172.188-.258.5-.258.938V9z" fill-rule="evenodd"></path>
              </svg></a></li>
          <li class="at-social__item"><a href="">
              <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.875 7.5v.563c0 3.28-1.18 6.257-3.54 8.93C14.978 19.663 11.845 21 7.938 21c-2.5 0-4.812-.687-6.937-2.063.5.063.86.094 1.078.094 2.094 0 3.969-.656 5.625-1.968a4.563 4.563 0 0 1-2.625-.915 4.294 4.294 0 0 1-1.594-2.226c.375.062.657.094.844.094.313 0 .719-.063 1.219-.188-1.031-.219-1.899-.742-2.602-1.57a4.32 4.32 0 0 1-1.054-2.883c.687.328 1.375.516 2.062.516C2.61 9.016 1.938 7.75 1.938 6.094c0-.782.203-1.531.609-2.25 2.406 2.969 5.515 4.547 9.328 4.734-.063-.219-.094-.562-.094-1.031 0-1.281.438-2.36 1.313-3.234C13.969 3.437 15.047 3 16.328 3s2.375.484 3.281 1.453c.938-.156 1.907-.531 2.907-1.125-.313 1.094-.985 1.938-2.016 2.531.969-.093 1.844-.328 2.625-.703-.563.875-1.312 1.656-2.25 2.344z" fill-rule="evenodd"></path>
              </svg></a></li>
        </ul>
      </div>
    </div>
     <div class="at-column">
      <div class="at-user">
        <div class="at-user__avatar"><img src="contact images/ishant.jpg"/></div>
        <div class="at-user__name">Ishant Rajprohit</div>
        <div class="at-user__title">Social Media Marketing Head</div>
        <div class="at-user__title">ishantrajpurohit@gamil.com</div>
        <div class="at-user__title">+91-8875332433</div>
        <ul class="at-social">
          <li class="at-social__item"><a href="https://www.facebook.com/mohit.jaswani">
              <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 9h3l-.375 3H14v9h-3.89v-9H8V9h2.11V6.984c0-1.312.327-2.304.984-2.976C11.75 3.336 12.844 3 14.375 3H17v3h-1.594c-.594 0-.976.094-1.148.281-.172.188-.258.5-.258.938V9z" fill-rule="evenodd"></path>
              </svg></a></li>
          <li class="at-social__item"><a href="">
              <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.875 7.5v.563c0 3.28-1.18 6.257-3.54 8.93C14.978 19.663 11.845 21 7.938 21c-2.5 0-4.812-.687-6.937-2.063.5.063.86.094 1.078.094 2.094 0 3.969-.656 5.625-1.968a4.563 4.563 0 0 1-2.625-.915 4.294 4.294 0 0 1-1.594-2.226c.375.062.657.094.844.094.313 0 .719-.063 1.219-.188-1.031-.219-1.899-.742-2.602-1.57a4.32 4.32 0 0 1-1.054-2.883c.687.328 1.375.516 2.062.516C2.61 9.016 1.938 7.75 1.938 6.094c0-.782.203-1.531.609-2.25 2.406 2.969 5.515 4.547 9.328 4.734-.063-.219-.094-.562-.094-1.031 0-1.281.438-2.36 1.313-3.234C13.969 3.437 15.047 3 16.328 3s2.375.484 3.281 1.453c.938-.156 1.907-.531 2.907-1.125-.313 1.094-.985 1.938-2.016 2.531.969-.093 1.844-.328 2.625-.703-.563.875-1.312 1.656-2.25 2.344z" fill-rule="evenodd"></path>
              </svg></a></li>
        </ul>
      </div>
    </div>
  </div>
</div>
  
                            
<div class="container1">
  <div class="at-section">
    <div class="at-section__title" style="color:white;">Designing Team</div>
  </div>
  <div class="at-grid" data-column="3">
    <div class="at-column">
      <div class="at-user">
        <div class="at-user__avatar"><img src="contact images/aseem.jpg"/></div>
        <div class="at-user__name">Aseem</div>
        <div class="at-user__title">Designer</div>
        <div class="at-user__title">aseemsaini313@gmail.com</div>
        <div class="at-user__title">+91-7726973890</div>
        <ul class="at-social">
          <li class="at-social__item"><a href="https://www.facebook.com/aseem.saini0">
              <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 9h3l-.375 3H14v9h-3.89v-9H8V9h2.11V6.984c0-1.312.327-2.304.984-2.976C11.75 3.336 12.844 3 14.375 3H17v3h-1.594c-.594 0-.976.094-1.148.281-.172.188-.258.5-.258.938V9z" fill-rule="evenodd"></path>
              </svg></a></li>
          <li class="at-social__item"><a href="">
              <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.875 7.5v.563c0 3.28-1.18 6.257-3.54 8.93C14.978 19.663 11.845 21 7.938 21c-2.5 0-4.812-.687-6.937-2.063.5.063.86.094 1.078.094 2.094 0 3.969-.656 5.625-1.968a4.563 4.563 0 0 1-2.625-.915 4.294 4.294 0 0 1-1.594-2.226c.375.062.657.094.844.094.313 0 .719-.063 1.219-.188-1.031-.219-1.899-.742-2.602-1.57a4.32 4.32 0 0 1-1.054-2.883c.687.328 1.375.516 2.062.516C2.61 9.016 1.938 7.75 1.938 6.094c0-.782.203-1.531.609-2.25 2.406 2.969 5.515 4.547 9.328 4.734-.063-.219-.094-.562-.094-1.031 0-1.281.438-2.36 1.313-3.234C13.969 3.437 15.047 3 16.328 3s2.375.484 3.281 1.453c.938-.156 1.907-.531 2.907-1.125-.313 1.094-.985 1.938-2.016 2.531.969-.093 1.844-.328 2.625-.703-.563.875-1.312 1.656-2.25 2.344z" fill-rule="evenodd"></path>
              </svg></a></li>
        </ul>
      </div>
    </div>
    <div class="at-column">
      <div class="at-user">
        <div class="at-user__avatar"><img src="contact images/khatri.jpg"/></div>
        <div class="at-user__name">Mohit Kumar Khatri</div>
        <div class="at-user__title">Designer</div>
        <div class="at-user__title">mohit.khatri1995815@gmail.com</div>
        <div class="at-user__title">+91-7597487542</div>
        <ul class="at-social">
          <li class="at-social__item"><a href="https://www.facebook.com/mohit.khatri3">
              <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 9h3l-.375 3H14v9h-3.89v-9H8V9h2.11V6.984c0-1.312.327-2.304.984-2.976C11.75 3.336 12.844 3 14.375 3H17v3h-1.594c-.594 0-.976.094-1.148.281-.172.188-.258.5-.258.938V9z" fill-rule="evenodd"></path>
              </svg></a></li>
          <li class="at-social__item"><a href="">
              <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.875 7.5v.563c0 3.28-1.18 6.257-3.54 8.93C14.978 19.663 11.845 21 7.938 21c-2.5 0-4.812-.687-6.937-2.063.5.063.86.094 1.078.094 2.094 0 3.969-.656 5.625-1.968a4.563 4.563 0 0 1-2.625-.915 4.294 4.294 0 0 1-1.594-2.226c.375.062.657.094.844.094.313 0 .719-.063 1.219-.188-1.031-.219-1.899-.742-2.602-1.57a4.32 4.32 0 0 1-1.054-2.883c.687.328 1.375.516 2.062.516C2.61 9.016 1.938 7.75 1.938 6.094c0-.782.203-1.531.609-2.25 2.406 2.969 5.515 4.547 9.328 4.734-.063-.219-.094-.562-.094-1.031 0-1.281.438-2.36 1.313-3.234C13.969 3.437 15.047 3 16.328 3s2.375.484 3.281 1.453c.938-.156 1.907-.531 2.907-1.125-.313 1.094-.985 1.938-2.016 2.531.969-.093 1.844-.328 2.625-.703-.563.875-1.312 1.656-2.25 2.344z" fill-rule="evenodd"></path>
              </svg></a></li>
        </ul>
      </div>
    </div>
    <div class="at-column">
      <div class="at-user">
        <div class="at-user__avatar"><img src="contact images/tatte.jpg"/></div>
        <div class="at-user__name">Vismay Luhadiya</div>
        <div class="at-user__title">Designer</div>
        <div class="at-user__title">vismay.luhadiya@gmail.com</div>
        <div class="at-user__title">+91-9929536000</div>
        <ul class="at-social">
          <li class="at-social__item"><a href="https://www.facebook.com/dude.vis">
              <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 9h3l-.375 3H14v9h-3.89v-9H8V9h2.11V6.984c0-1.312.327-2.304.984-2.976C11.75 3.336 12.844 3 14.375 3H17v3h-1.594c-.594 0-.976.094-1.148.281-.172.188-.258.5-.258.938V9z" fill-rule="evenodd"></path>
              </svg></a></li>
          <li class="at-social__item"><a href="">
              <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.875 7.5v.563c0 3.28-1.18 6.257-3.54 8.93C14.978 19.663 11.845 21 7.938 21c-2.5 0-4.812-.687-6.937-2.063.5.063.86.094 1.078.094 2.094 0 3.969-.656 5.625-1.968a4.563 4.563 0 0 1-2.625-.915 4.294 4.294 0 0 1-1.594-2.226c.375.062.657.094.844.094.313 0 .719-.063 1.219-.188-1.031-.219-1.899-.742-2.602-1.57a4.32 4.32 0 0 1-1.054-2.883c.687.328 1.375.516 2.062.516C2.61 9.016 1.938 7.75 1.938 6.094c0-.782.203-1.531.609-2.25 2.406 2.969 5.515 4.547 9.328 4.734-.063-.219-.094-.562-.094-1.031 0-1.281.438-2.36 1.313-3.234C13.969 3.437 15.047 3 16.328 3s2.375.484 3.281 1.453c.938-.156 1.907-.531 2.907-1.125-.313 1.094-.985 1.938-2.016 2.531.969-.093 1.844-.328 2.625-.703-.563.875-1.312 1.656-2.25 2.344z" fill-rule="evenodd"></path>
              </svg></a></li>
        </ul>
      </div>
    </div>
    <div class="at-column">
      <div class="at-user">
        <div class="at-user__avatar"><img src="contact images/ayush.jpg"/></div>
        <div class="at-user__name">Ayush Singh</div>
        <div class="at-user__title">Designer</div>
        <div class="at-user__title">ayushsingh02@gmail.com</div>
        <div class="at-user__title">+91-7073205022</div>
        <ul class="at-social">
          <li class="at-social__item"><a href="https://www.facebook.com/ayush.frost">
              <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 9h3l-.375 3H14v9h-3.89v-9H8V9h2.11V6.984c0-1.312.327-2.304.984-2.976C11.75 3.336 12.844 3 14.375 3H17v3h-1.594c-.594 0-.976.094-1.148.281-.172.188-.258.5-.258.938V9z" fill-rule="evenodd"></path>
              </svg></a></li>
          <li class="at-social__item"><a href="">
              <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.875 7.5v.563c0 3.28-1.18 6.257-3.54 8.93C14.978 19.663 11.845 21 7.938 21c-2.5 0-4.812-.687-6.937-2.063.5.063.86.094 1.078.094 2.094 0 3.969-.656 5.625-1.968a4.563 4.563 0 0 1-2.625-.915 4.294 4.294 0 0 1-1.594-2.226c.375.062.657.094.844.094.313 0 .719-.063 1.219-.188-1.031-.219-1.899-.742-2.602-1.57a4.32 4.32 0 0 1-1.054-2.883c.687.328 1.375.516 2.062.516C2.61 9.016 1.938 7.75 1.938 6.094c0-.782.203-1.531.609-2.25 2.406 2.969 5.515 4.547 9.328 4.734-.063-.219-.094-.562-.094-1.031 0-1.281.438-2.36 1.313-3.234C13.969 3.437 15.047 3 16.328 3s2.375.484 3.281 1.453c.938-.156 1.907-.531 2.907-1.125-.313 1.094-.985 1.938-2.016 2.531.969-.093 1.844-.328 2.625-.703-.563.875-1.312 1.656-2.25 2.344z" fill-rule="evenodd"></path>
              </svg></a></li>
        </ul>
      </div>
    </div>
    
  </div>
</div>


             
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