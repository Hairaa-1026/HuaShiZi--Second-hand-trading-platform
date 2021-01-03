<?php

include "header.php";

viewHomepage();

function viewHomepage(){
    $conn = ConnectDatabase();
    $data = array();
    $sql = "select * from productinfo where (sellState = 0) order by lastModifyTime desc limit 4 ";
    $result = mysqli_query($conn,$sql);
    if (!$result) {
        $data = array('code' => '2');   //数据库错误
        die(json_encode($data) . mysqli_error($conn));//.mysqli_error($conn));
    }
    while($row = mysqli_fetch_array($result)){
        array_push($data,array(
            'productId'=>$row['id'],
            'transactionType'=>$row['type'],
            'thumbnail'=>$row['thumbnail'],
            'title'=>$row['title'],
            'campus'=>$row['campus'],
            'pickupWay'=>$row['pickupWay'],
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
