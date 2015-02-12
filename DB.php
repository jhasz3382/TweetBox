<?php

$db = mysql_connect("localhost","root","password");

if (!$db) {
    die('Could not connect: ' . mysql_error());
}
else{
	mysql_select_db('tweetbox', $db);
}

?>