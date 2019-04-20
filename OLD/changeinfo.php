<?php

session_start();

$match="<span style=\"color: white; font-weight: bold;\">No Change</span>";
$nomatch="<span style=\"color: red; background-color: white; font-weight: bold;\">Data Updated</span>";

?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<title>LaBelle Chamber of Commerce - LaBelle Florida</title>
<style type="text/css">

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
td, th {padding-left: 1em; color: white;}
th {text-align: center; font-weight: bold;}
.btn, #loginform {width: 20%; margin: auto;}
div.spacer {min-height: 1.5em;}

form br{line-height:150%;clear:both}
legend{font-size:1.1em;font-weight:bold;border:3px solid #d9d9d9;margin-bottom:5px;padding:3px}
label,.pseudolabel{clear:left;display:block;float:left;width:10em;text-align:right;padding:5px;color:#FFF;margin-bottom:.5em}
</style>
<script type="text/javascript">
function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
</script>
</head>
<body>
<div align="center">
  <table width="960" border="0" align="center" cellpadding="0" cellspacing="0" bgcolor="#000000">
    <tr>
      <td><div class="spacer">a</div></td>
    </tr>
  </table>
  <table width="960" border="0" align="center" cellpadding="0" cellspacing="0">
    <tr>
      <td><img src="images/header.jpg" width="960" height="218" /></td>
    </tr>
  </table>
  <table width="960" border="0" align="center" cellpadding="0" cellspacing="0" bgcolor="#000000">
    <tr>
      <td><div align="center"></div></td>
    </tr>
  </table>
  <?php

if ($_SESSION['auth'] != 1) { ?>
	<script type="text/javascript">document.location.href="unauth.php";</script>
<?php }
global $memdata;
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
//echo "<pre>";print_r($_POST);echo"</pre>";
$clean=array();
foreach($_POST as $key=>$value) {
	$clean[$key]=mysql_real_escape_string($value);
}
//echo "<br />";
//echo "<pre>";print_r($clean);echo"</pre>";
//echo "<pre>";print_r($_SESSION);echo"</pre>";
?>
<!--display a before and after changes table for confirmation-->
<table id="confirmation"><caption>Confirm Changes</caption>
<tr>
<th>Original Information</th>
<th>Changes Made</th>
<th>Value Changed?</th>
</tr>
<tr><td><?php echo $_SESSION['member']; ?></td>
<td style="background-color: #D9D9D9; color: black;"><?php echo $clean['member']; ?></td>
<td><?php

if ($clean['member']==$_SESSION['member']) {
	echo $match;
}else {
		echo $nomatch;
		
	}
?></td>
</tr>
<tr>
<td><?php echo $_SESSION['website']; ?></td>
<td style="background-color: #D9D9D9; color: black;"><?php echo $clean['website']; ?></td>
<td>
<?php
if ($clean['website']==$_SESSION['website']) {
	echo $match;
}else {
		echo $nomatch;
		
	}
?>
</td>
</tr>
<tr>
<td><?php echo $_SESSION['contact']; ?><br ></td>
<td style="background-color: #D9D9D9; color: black;"><?php echo $clean['contact']; ?></td>
<td>
<?php
	if ($clean['contact']==$_SESSION['contact']) {
	echo $match;
}else {
		echo $nomatch;
		
	}
?>
</td>
</tr>
<tr>
<td><?php echo $_SESSION['phone']; ?></td>
<td style="background-color: #D9D9D9; color: black;"><?php echo $clean['phone']; ?></td>
<td>
<?php
	if ($clean['phone']==$_SESSION['phone']) {
	echo $match;
}else {
		echo $nomatch;
		
	}
?>
</td>
</tr>
<tr>
<td><?php 

if ($_SESSION['active']==1) {
	echo "Active Member";
} else {
	echo "Inactive Member";
}
?>
</td>
<td>
<?php
if ($clean['active']==1) {
	echo "Active Member";
} else {
	echo "Inactive Member";
}
?>
</td>
<td>
<?php
	if ($clean['active']==$_SESSION['active']) {
		echo $match;
}else {
		echo $nomatch;
		
	}
?>
</td>




</tr>


</tr>


</table>

<div class="btn">
<form action="makechanges.php" method="post">
<input type="hidden" name="member" value="<?php echo $clean['member']; ?>" />
<input type="hidden" name="website" value="<?php echo $clean['website']; ?>" />
<input type="hidden" name="contact" value="<?php echo $clean['contact']; ?>" />
<input type="hidden" name="phone" value="<?php echo $clean['phone']; ?>" />
<input type="hidden" name="active" value="<?php echo $clean['active']; ?>" />
<input type="submit" value="Submit Changes" />
</form>
<form action="login.php" method="post" />
<input type="submit" value="Return to Edit Member" />
</form>
</div><!--btn-->
