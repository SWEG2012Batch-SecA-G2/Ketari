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

    $sql="INSERT INTO USER(username,email,password) VALUES('admin','admin@admin.com','admin')";
    if(!mysqli_query($conn,"SELECT * FROM USER WHERE username='admin'")){
        if(mysqli_query($conn,$sql));
    }


    if($_SERVER["REQUEST_METHOD"]=="POST"){
        $newUser=htmlspecialchars($_POST['SignupUsername']);
        $newEmail=htmlspecialchars($_POST['SignupEmail']);
        $newPass=md5(htmlspecialchars($_POST['SignupPassword']));
        $sql="INSERT INTO USER(username,email,password) VALUES('$newUser','$newEmail','$newPass')";
        if(mysqli_query($conn,$sql)){
            echo "Success";
        }
        else{
            echo "Failed";
        }
    }
    mysqli_close($conn);
?>