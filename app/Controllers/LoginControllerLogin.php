<?php


include_once('../Controllers/Config.php');
if (!empty($_POST) && isset($_POST)) {

  $userUser = $_POST['User_user'];

  $UserPassword = $_POST['User_password'];

  $query = "CALL loginUser('" . $userUser . "')";
  $result = $mysqli->query($query);
  $hash = $result->fetch_array();

  $result->free_result();
  $mysqli->close();
  $resultPage="";

  if (password_verify($UserPassword, $hash[0])) {

    $resultPage='Location: http://localhost:8080/SENA6/Proyect1/app/Views/home/home.php';
      session_start();
    $_SESSION["Id_User"] = $userUser;
  } else {
    $resultPage='Location: http://localhost:8080/SENA6/Proyect1/app/Views/login/login.php';
  }
  
  header($resultPage);

  
}
