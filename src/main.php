<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
define('HOST', "localhost");    
$action = $_GET['action'];
if ($action == 'getUserInfo') { 
    $user = stripslashes(trim($_GET['userId'])); 
    $pass = stripslashes(trim($_GET['pwd'])); 
    $response['userInfo'] = $user;
    $response['score'] = 100;
    $response['status'] = '0000';
    echo json_decode($response);
}    
?>
