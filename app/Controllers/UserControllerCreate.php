<?php

include_once('../Controllers/Config.php');

if(!empty($_POST) && isset($_POST)){
  $userUser=$_POST['User_user'];
  $userPassword=password_hash($_POST['User_password'],PASSWORD_DEFAULT);
  $userStatusId=$_POST['User_status_id'];
  $roleId=$_POST['Role_id'];

  $query = "INSERT INTO `user`(`User_id`, `User_user`, `User_password`, `User_status_id`, `Role_id`)VALUES
  (null,'".$userUser."','".$userPassword."',".$userStatusId.",".$roleId.")";


  $result = $mysqli->query($query);
  header('Location: http://localhost:8080/SENA6/Proyect1/app/Views/user/user.php');
  
}
