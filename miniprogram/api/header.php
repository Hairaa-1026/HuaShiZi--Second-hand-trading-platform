<?php
header('Access-Control-Allow-Origin:*');//允许所有来源访问
header('Access-Control-Allow-Method:POST,GET');//允许访问的方式
header("Content-type:application/json; charset=utf-8");
ConnectDatabase();
function ConnectDatabase(){     //连接数据库
    $conn = mysqli_connect('localhost', 'root', '123456', 'huashizi');
    if (!$conn) {
        $data = array('code' => '2');   //数据库连接错误
        die(json_encode($data) . mysqli_error($conn));//.mysqli_error($conn));
    }
    return $conn;
};
function ResultIsTrue($result,$conn){
    if(!$result){
        $data = array('code' => '2');   //数据库错误
        die(json_encode($data) . mysqli_error($conn));//.mysqli_error($conn));
    }
};