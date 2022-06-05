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

    $jobs = [];
    if($_SERVER["REQUEST_METHOD"]=="POST"){
        if(isset($_POST["jobs"])){
            $jobs = json_decode($_POST['jobs']);
            $id = mysqli_num_rows(mysqli_query($conn,"SELECT * FROM JOB"))+1;

            foreach($jobs as $job){
                $sql="INSERT INTO JOB VALUES ('$id','$job->logo','$job->company','$job->location','$job->jobRole','$job->jobType','$job->description','$job->user')";
                $checkSql="SELECT * FROM JOB WHERE company='$job->company' AND location='$job->location' AND jobRole='$job->jobRole' AND jobType='$job->jobType' AND description='$job->description'";
                
                if(mysqli_num_rows(mysqli_query($conn,$checkSql)) == 0){
                    if(mysqli_query($conn,$sql)){
                        echo "Success";
                    }
                    else{
                        echo "Failed";
                    }
                }
                $id++;
            }
        }
        if(isset($_POST["delete"])){
            $id = 1;
            $sql="DELETE FROM job ORDER BY id DESC LIMIT 1";
            if(mysqli_query($conn,$sql)){
                echo "Success";
            }
            else{
                echo "Failed";
            }
        }
    }

    mysqli_close($conn);
?>