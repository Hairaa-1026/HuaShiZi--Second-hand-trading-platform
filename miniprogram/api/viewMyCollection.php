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
    $sql = "SELECT sourceId FROM productcollection WHERE (creatorId='{$userId}')";
    $result = mysqli_query($conn,$sql);
    if (!$result) {
        $data = array('code' => '2');   //数据库错误
        die(json_encode($data) . mysqli_error($conn));//.mysqli_error($conn));
    }
    while($row = mysqli_fetch_array($result)){
        $sql2 = "SELECT id, title, description, thumbnail,type FROM productinfo WHERE (id = '{$row['sourceId']}') ";
        $result2 =mysqli_query($conn,$sql2);
        $row2  = mysqli_fetch_array($result2);
        array_push($data,array(
            'productId'=>$row2['id'],
            'title'=>$row2['title'],
            'description'=>$row2['description'],
            'thumbnail'=>$row2['thumbnail'],
            'type'=>$row2['type']
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
