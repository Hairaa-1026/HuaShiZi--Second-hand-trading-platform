<?php
include 'header.php';
personalAuthentication();
function personalAuthentication(){
    $conn=ConnectDatabase();
    $userName=$_POST['userName'];
    $phone=$_POST['phone'];
    $campus=$_POST['campus'];
    $stuCardPhoto=$_POST['stuCardPhoto'];
    $stuNumber=$_POST['stuNumber'];
    if (empty($userName)|empty($phone)|empty($campus)|empty($stuCardPhoto)|empty($stuNumber)) {
        $data = array('code' => '3');   //参数为空
        die(json_encode($data) . mysqli_error($conn));//.mysqli_error($conn))
    }
    $sql="INSERT INTO user(userName, phone, stuNumber, campus, authenState, stuCardPhoto) VALUES 
                          ('{$userName}','{$phone}','{$stuNumber}','{$campus}', 0,'{$stuCardPhoto}')";
    $result=mysqli_query($conn,$sql);
    $userId =mysqli_insert_id($conn);     //用户id
    if (!$result) {
        $data = array('code' => '2');   //数据库错误
        die(json_encode($data) . mysqli_error($conn));
    } else {
        $sql = "UPDATE user SET creatorId = '{$userId}', modifierId = '{$userId}' WHERE id='{$userId}'";
        $result = mysqli_query($conn,$sql);
        if (!$result) {
            $data = array('code' => '2');   //数据库错误
            die(json_encode($data) . mysqli_error($conn));
        }else {
            $return = array("userId" => $userId);
            $data = array("data" => $return, 'code' => '0');
            echo json_encode($data);
        }
    }
    mysqli_close($conn);
};