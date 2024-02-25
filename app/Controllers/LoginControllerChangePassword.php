<?php


include_once('../Controllers/Config.php');
if (!empty($_POST) && isset($_POST)) {

  $userId = $_POST['User_id'];
  $userPassword = password_hash($_POST['User_password'], PASSWORD_DEFAULT);

  $query = "CALL changePassword(".  $userId .",'" . $userPassword . "')";
  $result = $mysqli->query($query);
  if( $result ){
    header('Location: http://localhost:8080/SENA6/Proyect1/app/Views/login/login.php');
  }






}
