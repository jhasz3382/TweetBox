<?php

  if ($_SERVER['REQUEST_METHOD'] === 'POST')
  {
    $content = strip_tags($_POST["content"]);

    require("DB.php");

    mysql_query("START TRANSACTION");
    mysql_query("INSERT INTO messages (content) VALUES ('$content')");
    mysql_query("COMMIT");

    mysql_close($db);

  }

?>