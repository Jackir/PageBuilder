<?php
header("Content-Type: application/json; charset=utf-8", true);
$ret = array();
$ret["0"]['name']="Prvni projekt";
$ret["1"]['name']="Druhy projekt";
$ret["0"]['id']=0;
$ret["1"]['id']=1;
$ret["0"]["author"]="Ratan";
$ret["1"]["author"]="Ratan";
echo json_encode($ret);
