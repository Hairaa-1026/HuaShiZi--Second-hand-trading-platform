<?php
include 'header.php';
changeMyPost();
function changeMyPost(){
    $conn=ConnectDatabase();
    $productId = $_POST['productId'];
    $state = $_POST['state'];
    if($state == 'sold'){
        $sql = "UPDATE productinfo SET sellState = 1 WHERE id='{$productId}'";
        $result = mysqli_query($conn,$sql);
    } else if ($state == 'delete'){
        $sql = "DELETE FROM productinfo WHERE id = '{$productId}'";
        $result = mysqli_query($conn,$sql);
    }
    else{
        $data = array('code' => '2');   //数据库错误
        die(json_encode($data) . mysqli_error($conn));
    }
    if (!$result) {
        $data = array('code' => '2');   //数据库错误
        die(json_encode($data) . mysqli_error($conn));
    } else {
        $data = array('code' => '0');
        echo json_encode($data);
    }
    mysqli_close($conn);
};