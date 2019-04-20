<?php

require_once('chamberheader.php');


$sql = "update `memberslistupdate` set `member` = '".$_POST['member']
."', `website` = '".$_POST['website']."', `contact` = '".$_POST['contact']
."', `phone` = '".$_POST['phone']."', `active` = '".$_POST['active']."' where `member_id` = ".$_SESSION['member_id'];
?><div class="content"><h2>
<?php
if ($doit=mysql_query($sql)) { 

	echo "<h2>Update Succeeded</h2>";
	echo "<p><a href=\"logout.php\">Click Here to Log Out</a></p>";
	echo "<p><a href=\"display.php\">Click Here to Edit Another Member</a></p>";


} else {
	echo "<h2>update failed with this error: - " . mysql_error(). "</h2>";
}


?>
</div><!--content-->

</body>
</html>
