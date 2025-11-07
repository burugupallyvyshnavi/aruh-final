<?php
$servername = "localhost";
$username = "root"; // default for XAMPP
$password = "root"; // leave empty unless you set one
$database = "grow1"; // your database name

$conn = mysqli_connect($servername, $username, $password, $database);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
// echo "Connected successfully"; // (optional test)
?>
