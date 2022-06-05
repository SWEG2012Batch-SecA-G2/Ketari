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

    if($_SERVER["REQUEST_METHOD"]=="POST"){
        if(isset($_POST['cv'])){
            $cv=json_decode($_POST['cv']);
            $sql="INSERT INTO cv VALUES('$cv->user','$cv->fname','$cv->lname','$cv->pnumber','$cv->age','$cv->profession','$cv->city','$cv->region','$cv->country','$cv->zcode','$cv->smedia','$cv->jtitle','$cv->employer','$cv->jobStartDate','$cv->jobEndDate','$cv->schoolName','$cv->slocation','$cv->schoolStartDate','$cv->schoolEndDate','$cv->degree','$cv->skill1','$cv->skillLevel1','$cv->skill2','$cv->skillLevel2','$cv->skill3','$cv->skillLevel3','$cv->flanguage','$cv->fLangLevel','$cv->slanguage','$cv->sLangLevel','$cv->fRefName','$cv->fRefPhone','$cv->sRefName','$cv->sRefPhone','$cv->tRefName','$cv->tRefPhone')";
            if($rows=mysqli_num_rows(mysqli_query($conn,"SELECT * FROM cv WHERE user='$cv->user'"))<1){ 
                if(mysqli_query($conn,$sql))
                    echo 'success';
                else
                    echo 'fail';
            }
            else
                echo 'duplicate';
        }
        if(isset($_POST['profile'])){
            $user=$_POST['profile'];
            $sql="SELECT * FROM cv WHERE user='$user'";
            $result=mysqli_query($conn,$sql);
            echo json_encode(mysqli_fetch_assoc($result));
        }
    }
?>