var form=new FormData();
form.append('profile',localStorage.getItem('loggedUser'));

fetch('/ketari/src/php/cv.php',{
	method: 'POST',
	body: form,
}).then(res=>res.json()).then(data=>{if(data!=null){
	document.getElementById("pnumber").innerHTML=data.num + " " +
				 data.city + ", " + data.country;
	document.getElementById("fRefName").innerHTML="Name:- "+ data.fRefName;
	document.getElementById("fRefPhone").innerHTML="Phone:- "+data.fRefPhone;
	document.getElementById("sRefName").innerHTML="Name:- "+data.sRefName;
	document.getElementById("sRefPhone").innerHTML="Phone:- "+data.sRefPhone;
	document.getElementById("schoolName").innerHTML="School Name:- "+data.sname;
	document.getElementById("schoolLocation").innerHTML="City :- "+data.slocation;
	document.getElementById("degreeDate").innerHTML="Degree Date :- "+data.schoolStartDate + " - " + data.schoolEndDate;
	document.getElementById("degree").innerHTML="Degree :- "+data.degree;
	document.getElementById("flanguage").innerHTML="First Language :- "+data.flanguage;
	document.getElementById("slanguage").innerHTML="Second Language :- "+data.slanguage;
	document.getElementById("fname").innerHTML=data.fname;
	document.getElementById("lname").innerHTML=data.lname;
	document.getElementById("profession").innerHTML=data.profession;
	document.getElementById("jobTitle").innerHTML="Profession:- "+data.jtitle;
	document.getElementById("employer").innerHTML="Employeer:- "+ data.employer;
	document.getElementById("date").innerHTML=data.jobStartDate + " - " + data.jobEndDate;
	document.getElementById("skill1").innerHTML=data.skill1;
	document.getElementById("skill2").innerHTML=data.skill2;
	document.getElementById("skill3").innerHTML=data.skill3;
}});

