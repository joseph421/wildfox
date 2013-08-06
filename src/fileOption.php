<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of getProblem
 *
 * @author CyberWH
 */
class fileOption {
    //put your code here
    public static  function getFileList($path){
        $fileList = array(
           
        );
        
        $dir = opendir($path);
        while(($file = readdir($dir))!=false){
            if ($file!="." && $file!="..") { 
                $ns = explode('.', $file);
                array_push($fileList, $ns[0]);  
            } 
        }
        
        $response = array(
            'body'=>array(
                'fileList'=>$fileList
            ),
            'status'=>'0000'
        );
        closedir($dir);        
        return $response;
    }    
}
?>
