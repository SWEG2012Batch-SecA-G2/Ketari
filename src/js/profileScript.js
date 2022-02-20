var loggedUser=JSON.parse(localStorage.getItem("loggedUser"))
    var p = JSON.parse(localStorage.getItem("profiles"))
	var found=false;
	if(loggedUser!=null){
		for(var i =0 ; i< p.length;i++){
			if(loggedUser.username == p[i].username	){
				document.getElementById("pnumber").innerHTML=p[i].pnumber + " " + loggedUser.email + " " +
				 p[i].city + ", " + p[i].country;
				document.getElementById("fRefName").innerHTML="Name:- "+ p[i].fRefName;
				document.getElementById("fRefPhone").innerHTML="Phone:- "+p[i].fRefPhone;
				document.getElementById("sRefName").innerHTML="Name:- "+p[i].sRefName;
				document.getElementById("sRefPhone").innerHTML="Phone:- "+p[i].sRefPhone;
				document.getElementById("schoolName").innerHTML="School Name:- "+p[i].sname;
				document.getElementById("schoolLocation").innerHTML="City :- "+p[i].slocation;
				document.getElementById("degreeDate").innerHTML="Degree Date :- "+p[i].schoolStartDate + " - " + p[i].schoolEndDate;
				document.getElementById("degree").innerHTML="Degree :- "+p[i].degree;
				document.getElementById("flanguage").innerHTML="First Language :- "+p[i].flanguage;
				document.getElementById("slanguage").innerHTML="Second Language :- "+p[i].slanguage;
				document.getElementById("fname").innerHTML=p[i].fname;
				document.getElementById("lname").innerHTML=p[i].lname;
				document.getElementById("profession").innerHTML=p[i].profession;
				document.getElementById("jobTitle").innerHTML="Profession:- "+p[i].jtitle;
				document.getElementById("employer").innerHTML="Employeer:- "+ p[i].employer;
				document.getElementById("date").innerHTML=p[i].jobStartDate + " - " + p[i].jobEndDate;
				document.getElementById("skill1").innerHTML=p[i].skill1;
				document.getElementById("skill2").innerHTML=p[i].skill2;
				document.getElementById("skill3").innerHTML=p[i].skill3;
				found =true;
				break;
			}
		}
	}else{
		if(!found){
			alert("Login First!!!")
			window.location.href = "signup.html";
		}
}
