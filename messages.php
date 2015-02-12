<?php
  require("DB.php");


  $result = mysql_query('SELECT * FROM messages ORDER BY id DESC');

  if(!$result){
  	echo "The query did not work.";
  }

  $messages = array();

   while ($row = mysql_fetch_assoc($result)) 
   {

    $messages[] = $row;

   }

   echo json_encode($messages);
  mysql_close($db);

?>