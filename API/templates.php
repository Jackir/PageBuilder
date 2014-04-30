<?php
/**
 * Created by PhpStorm.
 * User: Ratan
 * Date: 22.4.14
 * Time: 23:19
 */
header("Content-Type: application/json; charset=utf-8", true);

/**
 * returns json array of all hbs in project
 */

function listFolderFiles($dir, $updir = "", $array = array()){
    $ffs = scandir($dir);
    foreach($ffs as $ff){
        if($ff != '.' && $ff != '..' ){
            if(count(explode(".", $ff))!=1){
                $array[]=$updir.explode(".", $ff)[0];
            }
            else {
                $array = listFolderFiles($dir."/".$ff, $updir   .$ff."/", $array);
            }
        }
    }
    return $array;
}

echo json_encode(listFolderFiles('../resources/templates'), JSON_UNESCAPED_SLASHES);