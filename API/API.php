<?php
include 'Cache.php';
/**
 * Created by PhpStorm.
 * User: Ratan
 * Date: 5.5.14
 * Time: 23:05
 */
header('Content-Type: application/json');
$cache = new Cache("Projects");
$typ = array_keys($_GET)[0];
$pole["data"] = $_POST;
$cache->save((($_POST['id'] != null) ? $_POST['id'] : 1), $_POST);
echo json_encode($pole, JSON_FORCE_OBJECT | JSON_UNESCAPED_SLASHES);