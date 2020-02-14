<?php
session_start();

$obj = new stdClass();
$obj->success = false;
$obj->message = "Mauvais identifiant ou mot de passe";

/*
 * Normalement code qui verifie si :
 * - $_POST['username']
 * - $_POST['password']
 * sont ok
 */

$found = true;
if($found == true){
    $obj->success =true;
    $_SESSION['user'] = 123;
}


header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
header('Content-type: application/json');
echo json_encode($obj);
