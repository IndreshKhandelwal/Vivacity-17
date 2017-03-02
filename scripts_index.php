<script>
        window.soundFile = 'assets/a/bg.mp3';
    </script>
    
    <script src="assets/jquery-1.11.js" defer></script>
    <script src="assets/mainJs.js" defer></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>

    <script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-79826096-1', 'auto');
  ga('send', 'pageview');

</script>

    
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
<script type="text/javascript">
    jQuery(document).ready(function($) {  

// site preloader -- also uncomment the div in the header and the css style for #preloader
$(window).load(function(){
    $('#preloader').fadeOut('slow',function(){$(this).remove();});
});

});
</script>
<script type="text/javascript">
      $("#papat").click(function() {
    $('html, body').animate({
        scrollTop: $("#crew").offset().top
    }, 2000);
});
    </script>
    <script type="text/javascript">
      $("#telu").click(function() {
    $('html, body').animate({
        scrollTop: $("#gallery").offset().top
    }, 2000);
});
    </script>
    <script type="text/javascript">
      $("#loro").click(function() {
    $('html, body').animate({
        scrollTop: $("#news").offset().top
    }, 2000);
});
    </script>