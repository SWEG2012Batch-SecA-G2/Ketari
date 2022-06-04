<?php
    $servername="localhost";
    $username="root";
    $password="";
    $dbname="ketari";

    //columns
    $user="username";
    $email="email";
    $pass="password";

    $conn=new mysqli($servername,$username,$password,$dbname);

    $job=[];
    $sql="SELECT * FROM job";


    $rows=mysqli_num_rows(mysqli_query($conn,$sql));

    for($i=1;$i<=$rows;$i++){
        $sql="SELECT * FROM job WHERE id='$i'";
        $result=mysqli_query($conn,$sql);
        $row=mysqli_fetch_object($result);
        array_push($job,$row);
    }
    echo json_encode($job);

    mysqli_close($conn);
?>