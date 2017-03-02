<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta property="og:locale" content="en_US" />
	<meta property="og:type" content="website" />
	<meta property="og:description" content="As we close our eyes and go in the realm of the mind, a spell takes over and our thoughts dance to the music of our imagination. We enter a world where earth rotates on the finger of clown with a long nose, where water has the color of the rainbow, where trees cry and the elephant's fly, a world, with no constraints.
Come and celebrate with us the outlandishness of our surroundings, the nonsensical sense of the rhythm and be endeared with this festival.

Vivacity'17 - A Surreal Symphony" />
	<meta property="og:site_name" content="Vivacity 2017" />
	<meta property="og:image" content="http://vivacity.lnmiit.ac.in/finalcover.jpg" />
	<?php 
	$urlstring = (strtok($_SERVER["REQUEST_URI"],'?') == '/index.php' ? '/' : strtok($_SERVER["REQUEST_URI"],'?'));
	$servername = str_replace("www.", "", $_SERVER['HTTP_HOST']);
	$url = parse_url("http://".$servername.$urlstring);
	if(!isset($url['path'])) $url['path'] = '/';
	$surl = $url['scheme']."://".$url['host'].$url['path'];
	if(isset($_GET['category'])){
		$surl = $surl.'?category='.$_GET['category'];
	}
	if(isset($_GET['event'])){
		$surl = $surl.'&event='.$_GET['event'];
	}
	?>	
	<link rel="shortcut icon" href="images/vivacity-logo-color-01.png">
	<meta property="og:url" content="<?php echo $surl; ?>">
	<meta name="author" content="Indresh Khandelwal">
	<meta property="fb:admins" content="100000493061397" />
	<meta property="fb:app_id" content="1389241191370840" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@VivacityLNMIIT" />
	<meta name="twitter:domain" content="Vivacity" />
	<meta name="twitter:creator" content="@VivacityLNMIIT" />
	<meta name="twitter:image:src" content="http://vivacity.lnmiit.ac.in/finalcover.jpg" />
	<link rel="canonical" href="<?php echo $surl; ?>" />
	<link rel="publisher" href="https://plus.google.com/113534955956819396086/" />
	<link rel="shortcut icon" href="fav/favicon.ico" type="image/x-icon" />

	<!-- Apple Touch Icons -->
	<link rel="apple-touch-icon" sizes="60x60" href="fav/apple-touch-icon-60x60.png" />
	<link rel="apple-touch-icon" sizes="120x120" href="fav/apple-touch-icon-120x120.png" />
	<link rel="apple-touch-icon" sizes="76x76" href="fav/apple-touch-icon-76x76.png" />
	<link rel="apple-touch-icon" sizes="152x152" href="fav/apple-touch-icon-152x152.png" />
	<!-- Windows Tile Icons -->
	<meta name="msapplication-square70x70logo" content="fav/smalltile.png" />
	<meta name="msapplication-square150x150logo" content="fav/mediumtile.png" />
	<meta name="msapplication-wide310x150logo" content="fav/widetile.png" />
	<meta name="msapplication-square310x310logo" content="fav/largetile.png" />  
	<link rel="stylesheet" href="assets/style_index.css">
	
<style type="text/css">
        #preloader { position: fixed; left: 0; top: 0; z-index: 999; width: 100%; height: 100%; overflow: visible; background:url('loaa.gif') no-repeat center center;}
    </style>

    