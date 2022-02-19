
function postJob(){
    let companyLogo = document.getElementById("companyLogo").value;
    let companyName = document.getElementById("companyName").value;
    let location = document.getElementById("location").value;
    let jobRole = document.getElementById("jobRole").value;
    let jobType = document.getElementById("jobType").value;
    let description = document.getElementById("description").value;
    let submitJobBtn = document.getElementById("submitJobBtn");
    let undoSubmissionBtn = document.getElementById("undoSubmissionBtn");
    

    let newJobObj = {
        "logo": companyLogo,
        "company": companyName,
        "location": location,
        "jobRole": jobRole,
        "jobType": jobType,
        "description": description,
    }

    // Add New Job to local storage
    let oldJobsList = JSON.parse(localStorage.getItem("jobs"));
    oldJobsList.push(newJobObj);
    localStorage.clear();
    localStorage.setItem("jobs", JSON.stringify(oldJobsList));

    // Show notification and undo button
    submitJobBtn.style.backgroundColor = "Green";
    submitJobBtn.innerText = "Posted!";
    submitJobBtn.onclick = () => {};
    undoSubmissionBtn.style.display = "block";    
}

function undoPostJob(){
    let oldJobsList = JSON.parse(localStorage.getItem("jobs"));
    oldJobsList.pop();
    localStorage.clear();
    localStorage.setItem("jobs", JSON.stringify(oldJobsList));
    // Show notification and undo button
    submitJobBtn.style.backgroundColor = "#cf566a";
    submitJobBtn.innerText = "Submit New Job!";
    submitJobBtn.onclick = postJob;
    undoSubmissionBtn.style.display = "none";    
}



