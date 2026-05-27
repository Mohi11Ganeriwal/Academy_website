<?php

$host = "localhost";
$user = "root";
$pass = "";
$db = "troubleshooters_db";

$conn = mysqli_connect($host,$user,$pass,$db);

if(!$conn){

die("Connection Failed");

}

?>