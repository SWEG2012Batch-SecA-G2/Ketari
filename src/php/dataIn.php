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
    if(mysqli_query($conn,$sql)){
        echo "New record created successfully";
    }
    else{
        // echo "Error: ".$sql."<br>".mysqli_error($conn);
    }
    
    if($_SERVER["REQUEST_METHOD"]=="POST"){
        $newUser=$_POST['SignupUsername'];
        $newEmail=$_POST['SignupEmail'];
        $newPass=$_POST['SignupPassword'];
        $sql="INSERT INTO USER(username,email,password) VALUES('$newUser','$newEmail','$newPass')";
        if(mysqli_query($conn,$sql)){
            echo "Successful";
        }
        else{
            echo "Failed";
        }
    }

    
    

    // $log="SELECT * FROM USER";
    // $result=mysqli_query($conn,$log);
    // $users=array();
    // if(mysqli_num_rows($result)>0){
    //     while($row=mysqli_fetch_assoc($result)){
    //         array_push($users,$row);
    //     }
    // }
    // else{
    //     echo "0 results";
    // }
    // $jsonObj=json_encode($users);
    // setcookie("user",$jsonObj,time()+3600,"/");

    
    // mysqli_close($conn);
    // // foreach($result as $row) {
    // //     echo '<strong>Per room amount:  </strong>'.$row['username'];
    // // }
    // header("Location: /ketari/signup.html")
?>