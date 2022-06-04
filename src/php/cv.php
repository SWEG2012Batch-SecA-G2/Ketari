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
        $fName=$_POST['fname'];
        $lName=$_POST['lname'];
        $num=$_POST['pnumber'];
        $age=$_POST['age'];
        $profession=$_POST['profession'];
        $city=$_POST['city'];
        $region=$_POST['region'];
        $country=$_POST['country'];
        $zcode=$_POST['zcode'];
        $smedia=$_POST['smedia'];
        $jTitle=$_POST['jtitle'];
        $employer=$_POST['employer'];
        // $jobStart=$_POST['jobStartDate'];
        // $jobEnd=$_POST['jobEndDate'];
        $schoolName=$_POST['schoolName'];
        $schoolLocation=$_POST['slocation'];
        // $schoolStart=$_POST['schoolStartDate'];
        // $schoolEnd=$_POST['schoolEndDate'];
        $degree=$_POST['degree'];
        $skill=array();
        array_push($skill,$_POST['skill1']);
        array_push($skill,$_POST['skill2']);
        array_push($skill,$_POST['skill3']);
        $skillLevel=array();
        array_push($skillLevel,$_POST['skillLevel1']);
        array_push($skillLevel,$_POST['skillLevel2']);
        array_push($skillLevel,$_POST['skillLevel3']);
        $flanguage=$_POST['flanguage'];
        $flanglevel=$_POST['flanglevel'];
        $slanguage=$_POST['slanguage'];
        $slanglevel=$_POST['slanglevel'];
        $RefName=array();
        array_push($RefName,$_POST['fRefName']);
        array_push($RefName,$_POST['sRefName']);
        array_push($RefName,$_POST['tRefName']);
        $RefPhone=array();
        array_push($RefPhone,$_POST['fRefPhone']);
        array_push($RefPhone,$_POST['sRefPhone']);
        array_push($RefPhone,$_POST['tRefPhone']);

        $sql="INSERT INTO cv VALUES('$fName','$lName','$num','$age','$profession','$city','$region','$country','$zcode','$smedia','$jTitle','$employer','$jobStart','$jobEnd','$schoolName','$schoolLocation','$schoolStart','$schoolEnd','$degree','$skill[0]','$skillLevel[0]','$skill[1]','$skillLevel[1]','$skill[2]','$skillLevel[2]','$flanguage','$flanglevel','$slanguage','$slanglevel','$RefName','$RefPhone')";
    }
?>