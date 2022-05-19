<?php

    $servername="localhost";
    $username="root";
    $password="";
    $dbname="ketari";

    $user="username";
    $email="email";
    $pass="password";

    $conn=new mysqli($servername,$username,$password,$dbname);

    $sql="INSERT INTO USER(username,email,password) VALUES('admin','admin@admin.com','admin')";
    if(mysqli_query($conn,$sql)){
        echo "New record created successfully";
    }
    else{
        // echo "Error: ".$sql."<br>".mysqli_error($conn);
    }

    if($_SERVER["REQUEST_METHOD"]=="POST"){
        $user=$_POST['LoginUsername'];
        $pass=$_POST['LoginPassword'];
        $sql="SELECT * FROM USER WHERE username='$user' AND password='$pass'";
        $result=mysqli_query($conn,$sql);
        if(mysqli_num_rows($result)==1){
            echo $user;
        }
        else{
            echo "";
        }
    }
?>