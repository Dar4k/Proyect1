<?php

include_once('../Controllers/Config.php');
$query = "SELECT * FROM `role` WHERE 1; ";


$result = $mysqli->query($query);

while ($row = $result->fetch_assoc()) {
  $data[] = $row;
}
$result->free_result();
$mysqli->close();

echo json_encode($data);
