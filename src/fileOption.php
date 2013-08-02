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
    function getFileList($path){        
        $dir = opendir($path);
        while(($file = readdir($dir))!=false){
            if ($file!="." && $file!="..") { 
                $ns = explode('.', $file);
                $ns[0];
            } 
        }
        closedir($dir);        
    }
    
    
}
?>
