<?php

include_once('../Controllers/Config.php');

if(!empty($_POST) && isset($_POST)){
  $userId=$_POST['User_id'];
  $userStatusId=$_POST['User_status_id'];
  $roleId=$_POST['Role_id'];

  $query = "UPDATE `user` SET User_status_id=". $userStatusId.",Role_id=". $roleId." WHERE User_id=". $userId."; ";


$result = $mysqli->query($query);
header('Location: http://localhost:8080/SENA6/Proyect1/app/Views/user/user.php');
  
}
