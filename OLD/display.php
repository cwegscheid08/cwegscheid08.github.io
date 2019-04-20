<?php // display.php 
session_start();
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
<?php
error_reporting(E_ALL);
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
   
  $sql="select * from `auth` where `un` = '".$_POST['un']."' AND `pw` = '".$_POST['pw']."'";
  $result=mysql_query($sql);
  $rowcount=mysql_num_rows($result);
  if ($rowcount != 1) {
  	  echo "<h2>Auth Failed</h2>";
  	  echo "<p><a href=\"login.php\">Click here to try again</a> or <a href=\"index.html\">here to return to the home page</a></p>";
  	  }
  	  else {
  	  	  foreach($_POST as $key=>$value){
  	  	  	  $_SESSION[$key]=$value;
  	  	  }
  	  echo "<h2>Membership List Administration</h2>";
  	  $_SESSION['auth']=1; // success - this is required for all protected pages
	  
  	$sql="select `member_id`,`member` from `memberslistupdate` order by `member` ASC";
	$result=mysql_query($sql); ?>
	<form id="editmember" action="editmember.php" method="post">
	<select name="member_id" onchange='this.form.submit()'>
		<option value="Select Member" selected="selected">Select Member to Edit</option>
<?php
while ($data=mysql_fetch_assoc($result)) {
echo '<option value="'.$data['member_id'].'">'.$data['member'].'</option>'.PHP_EOL;
	
} //while
?>
</select>

<?php
	
  	  } // else (valid login)   
  ?>
  </form>
  
  </body>
  </html>
