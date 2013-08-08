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
    public static  function getFileList($pathName){
        $fileList = array(
           
        );
        $pathName = iconv("UTF-8", "GB2312", $pathName);         
        $dir = opendir($pathName);
        if (!$dir){
            $fileName = $pathName.".sgf";
             $handle = fopen($fileName,"r");
             $fileContent = fread($handle,filesize ($fileName));
             $fileContent = iconv("GB2312", "UTF-8", $fileContent); 
             array_push($fileList, $fileContent);
             fclose($handle);
        }else{            
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
             
        }
        closedir($dir);
        $response = array(
            'body'=>array(
                'fileList'=>$fileList
            ),
            'status'=>'0000'
        );
               
        return $response;
    }    
}
?>
