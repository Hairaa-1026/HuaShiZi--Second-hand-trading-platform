<?php
include "header.php";

viewMyCollection();

function viewMyCollection(){
    $conn = ConnectDatabase();
    $userId=$_POST['userId'];
    $data = array();
    if(empty($userId)){
        $data = array('code' => '3');   //参数为空
        die(json_encode($data) . mysqli_error($conn));//.mysqli_error($conn))
    }
    $sql = "SELECT source_Id FROM productcollection WHERE (owner='{$userId}')";
    $result = mysqli_query($conn,$sql);
    if (!$result) {
        $data = array('code' => '2');   //数据库错误
        die(json_encode($data) . mysqli_error($conn));//.mysqli_error($conn));
    }
    while($row = mysqli_fetch_array($result)){
        $sql2 = "SELECT id, title, description, thumbnail FROM buyinginfo WHERE (id = '{$row[0]}') ";
        $result2 =mysqli_query($conn,$sql2);
        $row2  = mysqli_fetch_array($result2);
        array_push($data,array('productId'=>$row2[0],
            'title'=>$row2[1],
            'description'=>$row2[2],
            'thumbnail'=>$row2[3]
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
