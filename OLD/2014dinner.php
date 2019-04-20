<?php

session_start();

function connect()
{

    global $link, $connect, $_POST, $clean;
    $link = mysql_connect('labellemembers.db.11959223.hostedresource.com', 'labellemembers', 'CPRb3nk11!@#')
    // $link = mysql_connect('97.74.218.14', 'labellemembers', 'Chamber#1')
    or die('Could not connect: ' . mysql_error());
    $connect = mysql_select_db('labellemembers')
    or die('Could not select database. <br>&nbsp;&nbsp;Reason: ' . mysql_error());
} // end function connect()

connect(); 
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js"></script>
<script src="http://malsup.github.com/jquery.tcycle.js"></script>
<script type="text/javascript" src="jquery.cycle.all.js"></script>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<title>LaBelle Chamber of Commerce - LaBelle Florida</title>
<style type="text/css">
/* slideshow stuff */
.tcycle {
    margin: 3em auto;
    width: 670px;
}
 
.tcycle img {
margin: auto;
}
/*end slideshow stuff */

body {
	background-color: #4F6DE5;
}
.style1 {font-family: Verdana, Arial, Helvetica, sans-serif}
a:link {
	color: #FFFFFF;
}
a:visited {
	color: #FFFFFF;
}
a:hover {
	color: #4F6DE5;
}
a:active {
	color: #FFFFFF;
}
.style11 {color: #FFFFFF}
.style14 {font-size: 16px; font-family: Verdana, Arial, Helvetica, sans-serif; color: #FFFFFF; }
.style8 {	font-size: 10px;
	font-family: Verdana, Arial, Helvetica, sans-serif;
	color: #FFFFFF;
}
.style13 {font-size: 10px}
.style17 {
	font-family: Verdana, Arial, Helvetica, sans-serif;
	font-size: 20px;
	font-weight: bold;
}
.style18 {font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 12px; }
td, tr, th { border: 1px black solid;}
td, th {padding-left: 1em; }
th {text-align: center; font-weight: bold;}
.content {width:960px; margin: auto; padding-top: 2em;}
</style>
<script type="text/javascript">
function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
</script>
</head>
<body>
<table width="960" border="0" align="center" cellpadding="0" cellspacing="0" bgcolor="#000000">
  <tr>
    <td><div align="center">a</div></td>
  </tr>
</table>
<table width="960" border="0" align="center" cellpadding="0" cellspacing="0">
  <tr>
    <td><img src="images/header.jpg" width="960" height="218" /></td>
  </tr>
</table>
<table width="960" border="0" align="center" cellpadding="0" cellspacing="0" bgcolor="#000000">
  <tr>
    <td><div align="center">&nbsp;</div></td>
  </tr>
</table>
  <table width="960" border="0" align="center" cellpadding="0" cellspacing="0" bgcolor="#000000">
    <tr>
      <td><div align="center">&nbsp;</div></td>
    </tr>
  </table>
  <table width="960" border="0" align="center" cellpadding="0" cellspacing="0" bgcolor="#8499E8">
    <tr>
      <td><div align="center" class="style1"><a href="index.html">Home</a>&nbsp; | &nbsp;<a href="about us.html">About Us</a> &nbsp;| &nbsp;<a href="memberdirectory.php">Member Directory</a>&nbsp; | &nbsp;<a href="ChamberMembership.pdf" target="_blank">Membership Application</a> &nbsp;| &nbsp;<a href="newsletters/Newsletter052014.pdf" target="_blank">Newsletter</a> &nbsp;| &nbsp;Chamber Dinner</div></td>
      
    </tr>
</table>


<?php
 
$directory = 'images/2014dinner/';
try {    
	
	echo "<div width=\"660px; margin: auto;\" class=\"tcycle\">";
	
	foreach ( new DirectoryIterator($directory) as $item ) {	
		if ($item->isFile()) {
			$path = "/" . $directory . "/" . $item;
			echo "<img src=\"" . $path . "\" />".PHP_EOL;
		}
	}
	echo "</div>";
}
catch(Exception $e) {
	echo 'No images found for this player.<br />';
}
?>

</body>
</html>
