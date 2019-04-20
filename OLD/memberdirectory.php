<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<link rel="stylesheet" type="text/css" href="nav.css" />
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<title>LaBelle Chamber of Commerce - LaBelle Florida</title>
<script src="sorttable.js" type="text/javascript"></script>
<style type="text/css">

body {
	background-color: #4F6DE5;
}
.style1 {font-family: Verdana, Arial, Helvetica, sans-serif}
a:link {
	color: #FAEBD7;
}
a:visited {
	color: #FAEBD7;
}
a:hover {
	color: #4F6DE5;
	background-color: #FAEBD7;
}
a:active {
	color: #FAEBD7;
}
.style11 {color: #FAEBD7}
.style14 {font-size: 16px; font-family: Verdana, Arial, Helvetica, sans-serif; color: #FFFFFF; }
.style8 {	font-size: 10px;
	font-family: Verdana, Arial, Helvetica, sans-serif;
	color: #FAEBD7;
}
.style13 {font-size: 10px}
.style17 {
	font-family: Verdana, Arial, Helvetica, sans-serif;
	font-size: 20px;
	font-weight: bold;
}
.style18 {font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 12px; }
td, tr, th { border: 1px black solid; color: #FFFF00}
td, th {padding-left: 1em; }
th {text-align: center; font-weight: bold; color:#FFFFFF}
div.spacer {min-height: 1.5em;}
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
      <td><div class="spacer"></div></td>
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
  <table width="960" border="0" align="center" cellpadding="0" cellspacing="0" bgcolor="#8499E8">
    <tr>
      <td><?php include('nav.php'); ?></td>
    </tr>
  </table>
 
<div style="width: 60%; margin: auto;">

<h2>Member Directory</h2>


<table class="sortable" style="width: 85%; margin: auto; border-collapse: collapse; border: 1px black solid">
<caption>Proud Members of the Greater LaBelle Chamber of Commerce</caption>
<tr><th>Member</th><th>Contact Name</th><th>Phone</th></tr>


<?php
error_reporting(E_ALL);
function connect()
{

    global $link, $connect, $_POST, $clean;
    $link = mysql_connect('labellemembers.db.11959223.hostedresource.com', 'labellemembers', 'CPRb3nk11!@#')
    or die('Could not connect: ' . mysql_error());
    $connect = mysql_select_db('labellemembers')
    or die('Could not select database. <br>&nbsp;&nbsp;Reason: ' . mysql_error());
} // end function connect()



connect(); 
$sql = "select * from `memberslistupdate` where `active` = 1 order by `member` asc";
$result=mysql_query($sql);


while ($data=mysql_fetch_assoc($result)) {

	if (strlen($data['website'])>1) {
	$showmember = '<a target="_blank" href="http://'.$data['website'].'">'.$data['member'].'</a>';	
	} else {
	$showmember = $data['member'];	
	}
	
echo "<tr>";
echo "<td>".$showmember."</td>".PHP_EOL;
echo "<td>".$data['contact']."</td>".PHP_EOL;
echo "<td>".$data['phone']."</td>".PHP_EOL;
echo "</tr>";
}

?>


</table>

</div>
</body>
</html>
