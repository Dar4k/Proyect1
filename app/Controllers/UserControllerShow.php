<?php

include_once('../Controllers/Config.php');

$query = "CALL sp_select_all_user()";

$result = $mysqli->query($query);

while ($row = $result->fetch_assoc()) {
  $data[] = $row;
}
$result->free_result();
$mysqli->close();

echo json_encode($data);
