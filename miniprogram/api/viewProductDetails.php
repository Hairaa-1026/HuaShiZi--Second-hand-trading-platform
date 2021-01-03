<?php

include "header.php";

viewProductDetails();

function viewProductDetails()
{
    $conn = ConnectDatabase();
    $productId = $_POST['productId'];
    $data = array();
    if (empty($productId)) {
        $data = array('code' => '3');   //参数为空
        die(json_encode($data) . mysqli_error($conn));//.mysqli_error($conn))
    }
    $sql = "SELECT creatorId, title, price, pickupWay, description, quality, campus, thumbnail, type FROM productinfo WHERE (id='{$productId}')";
    $result = mysqli_query($conn, $sql);
    if (!$result) {
        $data = array('code' => '2');   //数据库错误
        die(json_encode($data) . mysqli_error($conn));//.mysqli_error($conn));
    }
    while ($row = mysqli_fetch_array($result)) {
        array_push($data, array(
            'creatorId' => $row['creatorId'],
            'title' => $row['title'],
            'price' => $row['price'],
            'pickupWay'=> $row['pickupWay'],
            'description'=> $row['description'],
            'quality'=> $row['quality'],
            'campus'=>$row['campus'],
            'thumbnail' => $row['thumbnail'],
            'type'=>$row['type']
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
