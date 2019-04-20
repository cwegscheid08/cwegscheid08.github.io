<?php

//editmember.php

session_start(); ?>
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
      <td><div align="center"></div></td>
    </tr>
  </table>
<?php 

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
if ($_SESSION['auth'] != 1) { ?>
	<script type="text/javascript">document.location.href="unauth.php";</script>
<?php } 


$sql="select * from `memberslistupdate` where `member_id` = '".$_POST['member_id']."'";
$result=mysql_query($sql);
$data=mysql_fetch_assoc($result);

// set retrieved data to a global var for use on next page
global $memdata;
$memdata=array();
foreach ($data as $key=>$value) {
	
	$_SESSION[$key]=$value;
}
//add SESSION value for member_id 
$_SESSION['member_id'] = $_POST['member_id'];

?>
<form action="changeinfo.php" method="post">
<table><caption>Edit Member Data for <?php echo $data['member']; ?></caption>
<tr>
<td>&nbsp;</td>
<th>Current Value</th>
<th>Change To</th>
</tr>
<tr>
<th>Name</th>
<td><?php echo $data['member']; ?></td>
<td>
<input type="text" name="member" size="<?php echo strlen($data['member']); ?>" value="<?php echo $data['member']; ?>" />
</td>
</tr>
<tr>
<th>Website</th>
<td><?php echo $data['website']; ?></td>
<td>
<input type="text" name="website" size="<?php echo strlen($data['website']); ?>" value="<?php echo $data['website']; ?>" />
</td>
</tr>
<tr>
<th>Contact</th>
<td><?php echo $data['contact']; ?></td>
<td><input type="text" name="contact" size="<?php echo strlen($data['contact']); ?>" value="<?php echo $data['contact']; ?>" />
</td>
</tr>
<tr>
<th>Phone</th>
<td><?php echo $data['phone']; ?></td>
<td>
<input type="text" name="phone" size="<?php echo strlen($data['phone']); ?>" value="<?php echo $data['phone']; ?>" />
</td>
</tr>
<tr>
<th>Active</th>
<td><?php if($data['active']==1){echo "Active"; }else{echo "Inactive"; } ?> </td>
<td>
<?php $active=array(0=>'Inactive',1=>'Active'); ?>
<select name="active">
<?php
foreach ($active as $key=>$value) {
if ($data['active']==$key){
	echo '<option value="'.$key.'" selected="selected">'.$value.'</option>';
} else {
	echo '<option value="'.$key.'">'.$value.'</option>';

}

}	
	
?>


</td>
</tr>
</table>
<div class="btn">
<input type="submit" value="Submit Changes" />
</div><!--btn-->
</body>
</html>
