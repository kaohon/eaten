<?php
session_start();
require_once 'vendor/autoload.php';

$id_token = filter_input(INPUT_POST, 'id_token');
define('CLIENT_ID', '175285522596-ti5jcfpffgeremtrtpl3s4q9ocphru7n.apps.googleusercontent.com');

$client = new Google_Client(['client_id' => CLIENT_ID]);
$payload = $client->verifyIdToken($id_token);
if ($payload) {
    $userid = $payload['sub'];
}

//DBなどとのやりとりする

$_SESSION['login'] = true;
exit;
?>