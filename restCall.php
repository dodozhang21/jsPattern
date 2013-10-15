<?php
$path = $_SERVER['PATH_INFO'];

header('Content-Type: application/json');
if('/birthdayplanner/themes/search/' == $path) {
	$arr = array('a' => 'Birthday', 'b' => 'Party');

	echo json_encode($arr);
} else if('/showerplanner/themes/search/' == $path) {
	$arr = array('a' => 'Baby', 'b' => 'Shower');

	echo json_encode($arr);
}
?>