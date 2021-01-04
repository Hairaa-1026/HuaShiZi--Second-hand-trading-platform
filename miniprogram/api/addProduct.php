<?php
include 'header.php';
addProduct();
function addProduct(){
    $conn=ConnectDatabase();
    $title=$_POST['title'];
    $price=$_POST['price'];
    $pickupWay=$_POST['pickupWay'];
    $description=$_POST['description'];
    $quality=$_POST['quality'];
    $campus=$_POST['campus'];
    $thumbnail=$_POST['thumbnail'];
    $category=$_POST['category'];
    $type=$_POST['type'];
    $userId = $_POST['userId'];
    $sql="INSERT INTO productinfo(title, price, pickupWay, description, quality, campus, thumbnail, category, type, creatorId, modifierId, sellState) VALUES (
                '{$title}', '{$price}', '{$pickupWay}', '{$description}', '{$quality}', '{$campus}', '{$thumbnail}', '{$category}', '{$type}', '{$userId}', '{$userId}', 0)";
    $result=mysqli_query($conn,$sql);
    $productId =mysqli_insert_id($conn);     //商品id
    if (!$result) {
        $data = array('code' => '2');   //数据库错误
        die(json_encode($data) . mysqli_error($conn));
    } else {
        $return = array("productId" => $productId);
        $data = array("data" => $return, 'code' => '0');
        echo json_encode($data);
    }
    mysqli_close($conn);
};