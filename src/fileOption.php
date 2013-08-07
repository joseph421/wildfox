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
    public static  function getFileList($path,$pathName){
        $fileList = array(
           
        );
        
        $dir = opendir(($path.$pathName));
        while(($file = readdir($dir))!=false){
            $file = iconv("GB2312", "UTF-8", $file); 
            if ($file!="." && $file!="..") {                 
                if(!is_dir($file)){
                    $ns = explode('.', $file);
                    array_push($fileList, $ns[0]);  
                }else{
                    array_push($fileList, $file);  
                }
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
