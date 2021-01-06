<?php

include "header.php";

searchByCategory();

function searchByCategory(){
    $conn = ConnectDatabase();
    $productCategory=$_POST['productCategory'];
    $data = array();
    if(empty($productCategory)){
        $data = array('code' => '3');   //参数为空
        die(json_encode($data) . mysqli_error($conn));//.mysqli_error($conn))
    }
    $sql = "SELECT id, title, thumbnail, type, campus, pickupWay, creatorId, price FROM productinfo WHERE (category='{$productCategory}' and sellState = 0)";
    $result = mysqli_query($conn,$sql);
    if (!$result) {
        $data = array('code' => '2');   //数据库错误
        die(json_encode($data) . mysqli_error($conn));//.mysqli_error($conn));
    }
    while($row = mysqli_fetch_array($result)){
        $sql = "SELECT userName from user WHERE id='{$row['creatorId']}'";
        $result2 = mysqli_query($conn,$sql);
        $row2 = mysqli_fetch_array($result2);
        array_push($data,array(
            'productId'=>$row['id'],
            'thumbnail'=>$row['thumbnail'],
            'title'=>$row['title'],
            'campus'=>$row['campus'],
            'pickupWay'=>$row['pickupWay'],
            'userName'=>$row2[0],
            'creatorId'=>$row['creatorId'],
            'type'=>$row['type'],
            'price'=>$row['price']
        ));
    }
    if (!$result) {
        $data = array('code' => '2');   //数据库错误
        die(json_encode($data) . mysqli_error($conn));//.mysqli_error($conn));
    } else {
        $return = array("data" => $data, 'code' => '0');//查询成功
        echo json_encode($return);
    }
    mysqli_close($conn);
}
