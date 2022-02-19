
function postJob(){
    let companyName = document.getElementById("companyName").value;
    let location = document.getElementById("location").value;
    let jobRole = document.getElementById("jobRole").value;
    let jobType = document.getElementById("jobType").value;
    let description = document.getElementById("description").value;

    let newJobObj = {
        "company": companyName,
        "location": location,
        "jobRole": jobRole,
        "jobType": jobType,
        "description": description,
    }

    let oldJobsList = JSON.parse(localStorage.getItem("jobs"));
    oldJobsList.push(newJobObj);
    localStorage.clear();
    localStorage.setItem("jobs", JSON.stringify(oldJobsList));
    
}





