<?php

    $servername="localhost";
    $username="root";
    $password="";
    $dbname="ketari";

    $conn=new mysqli($servername,$username,$password,$dbname);
    if($_SERVER["REQUEST_METHOD"]=="POST"){
        $user=$_POST['LoginUsername'];
        $pass=$_POST['LoginPassword'];
        $sql="SELECT * FROM USER WHERE username='$user' AND password='$pass'";
        $result=mysqli_query($conn,$sql);
        if(mysqli_num_rows($result)==1){
            echo "Successful";
        }
        else{
            echo "failed";
        }
    }
?>