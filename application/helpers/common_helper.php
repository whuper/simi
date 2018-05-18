<?php

defined('BASEPATH') OR exit('No direct script access allowed');

function print_i($data = NULL)
{
	if(!$data){
		echo '0';
	}
	header("content-type:application/json");// 尽量不要用text/json 某些浏览器会不兼容
	echo json_encode($data,JSON_UNESCAPED_UNICODE);
	exit;
}

?>
