<?php
include 'header.php';
addCollection();
function addCollection(){
    $conn=ConnectDatabase();
    $userId = $_POST['userId'];
    $productId = $_POST['productId'];
    $sql="INSERT INTO productcollection(sourceId, creatorId, modifierId) VALUES (
                '{$productId}', '{$userId}', '{$userId}' )";
    $result=mysqli_query($conn,$sql);
    if (!$result) {
        $data = array('code' => '2');   //数据库错误
        die(json_encode($data) . mysqli_error($conn));
    } else {
        $data = array('code' => '0');
        echo json_encode($data);
    }
    mysqli_close($conn);
};