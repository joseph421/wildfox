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
    $userInfo =  array(
        'userId'=>'',
        'right'=>'',
        'score'=>''
    );
    $userInfo['userId'] = $user;
    $userInfo['score'] = 100;
    
    $response = array(
        'body'=>array(
            'userInfo'=>$userInfo
        ),
        'status'=>''
    );
    $response['status'] = '0000';
    echo json_encode($response);
}    
?>
