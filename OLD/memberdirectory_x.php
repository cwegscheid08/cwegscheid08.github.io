<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<?php session_start(); 
require_once('library.php');
?>
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
td, th {padding-left: 1em; }
th {text-align: center; font-weight: bold;}
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
      <td><div align="center">a</div></td>
    </tr>
  </table>
  <table width="960" border="0" align="center" cellpadding="0" cellspacing="0" bgcolor="#8499E8">
    <tr>
      <td><div align="center" class="style1"><a href="index.html">Home</a>&nbsp; | &nbsp;<a href="about us.html">About Us</a> &nbsp;| &nbsp;Member Directory&nbsp; | &nbsp;<a href="ChamberMembership.pdf" target="_blank">Membership Application</a> &nbsp;| &nbsp;<a href="newsletter.pdf" target="_blank">Newsletter</a></div></td>
    </tr>
  </table>
 
<div style="width: 60%; margin: auto;">

<h2>Member Directory</h2>


<table style="width: 85%; margin: auto; border-collapse: collapse; border: 1px black solid"><caption>Proud Members of the Greater LaBelle Chamber of Commerce</caption>
<tr><th>Member</th><th>Contact Name</th><th>Phone</th></tr>

<?php

connect();
$sql = "select * from `members` order by `member_id` asc";
$result=$conn->prepare($sql);
$result->execute();
$data=fetchALL(PDO::FETCH_ASSOC);
echo "<pre>";
print_r($data);
echo "</pre>";
//$result=mysql_query($sql);
//$data=mysql_fetch_assoc($result);
//echo "<pre>";print_r($data);echo "</pre>";

//while ($data=mysql_fetch_assoc($result)) {
//echo "<tr>";
//echo "<td>".$data['member']."</td>".PHP_EOL;
//echo "<td>".$data['contact']."</td>".PHP_EOL;
//echo "<td>".$data['phone']."</td>".PHP_EOL;
//echo "</tr>";
//}

?>


</table>

</div>
</body>
</html>
