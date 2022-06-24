
function postJob(e){

    let companyLogo = document.getElementById("companyLogo").value;
    let companyName = document.getElementById("companyName").value;
    let location = document.getElementById("location").value;
    let jobRole = document.getElementById("jobRole").value;
    let jobType = document.getElementById("jobType").value;
    let description = document.getElementById("description").value;
    let submitJobBtn = document.getElementById("submitJobBtn");
    let undoSubmissionBtn = document.getElementById("undoSubmissionBtn");
    
    var companyData = /[a-zA-Z0-9]/;
    var link = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
    var checkName = companyData.test(companyName);
    var checkLocation = companyData.test(location);
    var checkJobRole = companyData.test(jobRole);
    var checkJobType = companyData.test(jobType);
    var checkLogo = link.test(companyLogo);
    var checkDes = companyData.test(description);

    if(!checkLogo){
        document.getElementById("logoErr").innerHTML = "Please Enter valid link!";
        return false;
    }
    else
        document.getElementById("logoErr").innerHTML = "";
    if(!checkName){
        document.getElementById("nameErr").innerHTML = "Please Enter Name!";
        return false;
    }
    else
        document.getElementById("nameErr").innerHTML = "";
    if(!checkLocation){
        document.getElementById("locationErr").innerHTML = "Please Enter Location!";
        return false;
    }
    else
        document.getElementById("locationErr").innerHTML = "";
    if(!checkJobRole){
        document.getElementById("roleErr").innerHTML = "Please Enter Job!";
        return false;
    }
    else
        document.getElementById("roleErr").innerHTML = "";
    if(!checkJobType){
        document.getElementById("typeErr").innerHTML = "Invalid Job Type!";
        return false;
    }
    else
        document.getElementById("typeErr").innerHTML = "";
    if(!checkDes){
        document.getElementById("descriptionErr").innerHTML = "Please enter description about the job!";
        return false; 
    }
    else
        document.getElementById("descriptionErr").innerHTML = "";
    let newJobObj = [{
        "logo": companyLogo,
        "company": companyName,
        "location": location,
        "jobRole": jobRole,
        "jobType": jobType,
        "description": description,
        "user": localStorage.getItem('loggedUser'),
    },];
    const form = new FormData();
    form.append('jobs',JSON.stringify(newJobObj))

    fetch('/ketari/src/php/jobIn.php',{
        method: 'POST',
        body: form
        })
        .then(res=>res.json())
        .then(data=> data)

    // Show notification and undo button
    submitJobBtn.style.backgroundColor = "Green";
    submitJobBtn.value = "Posted!";
    undoSubmissionBtn.style.display = "block";

    e.preventDefault();
    
    return true;
}

function undoPostJob(e){
    e.preventDefault();

    let submitJobBtn = document.getElementById("submitJobBtn"); 
    let undoSubmissionBtn = document.getElementById("undoSubmissionBtn");
    
    // Show notification and undo button
    submitJobBtn.style.backgroundColor = "#cf566a";
    submitJobBtn.value = "Submit New Job!";
    submitJobBtn.onclick = postJob;
    undoSubmissionBtn.style.display = "none";    

    const form = new FormData();
    form.append('delete',JSON.stringify([]));
    fetch('/ketari/src/php/jobIn.php',{
        method: 'POST',
        body: form
    }).then(res=>res.text()).then(data=> console.log(data));

    e.preventDefault();
}

