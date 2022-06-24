document.getElementById('loggedUser').innerHTML=localStorage.getItem('loggedUser');
var jobs = [];

// console.log(jobs);

let searchHistory = [];

// Container for the list of jobs
let jobListings = document.getElementById("jobListings");

// Create Object and insert
function createHTML(logo, company, location, jobRole, jobType, jobDescription){
    const eachJobDiv = document.createElement("div");
    eachJobDiv.id = "eachJob";

    const companyLogo = document.createElement("img");
    companyLogo.src = logo;
    companyLogo.id = "companyLogos";

    const companyNameAndAddressDiv = document.createElement("div");
    companyNameAndAddressDiv.id = "companyNameAndAddress";

    const companyNameH1 = document.createElement("h1");
    const companyNameH1T = document.createTextNode(company);
    companyNameH1.id = "companyName";
    companyNameH1.appendChild(companyNameH1T);
    companyNameAndAddressDiv.appendChild(companyNameH1);

    const companyLocationH4 = document.createElement("h4");
    const companyLocationH4T = document.createTextNode(location);
    companyLocationH4.appendChild(companyLocationH4T);
    companyNameAndAddressDiv.appendChild(companyLocationH4);

    const jobTitleAndTypeDiv = document.createElement("div");
    jobTitleAndTypeDiv.id = "jobTitleAndType";

    const jobTitleH3 = document.createElement("h3");
    const jobTitleH3T = document.createTextNode(jobRole);
    jobTitleH3.id = "jobTitle";
    jobTitleH3.appendChild(jobTitleH3T);
    jobTitleAndTypeDiv.appendChild(jobTitleH3);

    const jobTypeH4 = document.createElement("h4");
    const jobTypeH4T = document.createTextNode(jobType);
    jobTypeH4.id = "jobType";
    jobTypeH4.appendChild(jobTypeH4T);
    jobTitleAndTypeDiv.appendChild(jobTypeH4);

    eachJobDiv.appendChild(companyLogo);
    eachJobDiv.appendChild(companyNameAndAddressDiv);
    eachJobDiv.appendChild(jobTitleAndTypeDiv);
    eachJobDiv.onclick = function showDetails(){
        displayDetailsOfJob(logo, company, location, jobRole, jobType, jobDescription);
    };
    document.getElementById("jobListings").appendChild(eachJobDiv);
}

// Function to insert jobs from the jobs list
function insertJobs(){ 
    
    fetch('/ketari/src/php/jobOut.php',{
        method: 'POST'
    }).then(res=>res.json()).then(data=>{
        // alert(jobs);
        // console.log("jobs--------");
        // console.log(jobs);
        for(var i = 0;  i < data.length; i++){
            createHTML(data[i]["logo"], data[i]["company"], data[i]["location"], data[i]["jobRole"], data[i]["jobType"], data[i]["description"]);     
            jobs.push(data[i]);
        }  
        
    })             
}

console.log("jobs--------");
        console.log(jobs);

// Display Details
function displayDetailsOfJob(logo, company, location, jobRole, jobType, jobDescription){
    jobListings.innerHTML = "";
    const eachJobDiv = document.createElement("div");
    eachJobDiv.id = "eachJobExpanded";

    const companyLogo = document.createElement("img");
    companyLogo.src = logo;
    companyLogo.id = "companyLogosExpanded";

    const companyNameAndAddressDiv = document.createElement("div");
    companyNameAndAddressDiv.id = "companyNameAndAddressExpanded";

    const companyNameH1 = document.createElement("h1");
    const companyNameH1T = document.createTextNode(company);
    companyNameH1.id = "companyName";
    companyNameH1.appendChild(companyNameH1T);
    companyNameAndAddressDiv.appendChild(companyNameH1);

    const companyLocationH4 = document.createElement("h4");
    const companyLocationH4T = document.createTextNode(location);
    companyLocationH4.appendChild(companyLocationH4T);
    companyNameAndAddressDiv.appendChild(companyLocationH4);

    const jobTitleAndTypeDiv = document.createElement("div");
    jobTitleAndTypeDiv.id = "jobTitleAndTypeExpanded";

    const jobTitleH3 = document.createElement("h3");
    const jobTitleH3T = document.createTextNode(jobRole);
    jobTitleH3.id = "jobTitle";
    jobTitleH3.appendChild(jobTitleH3T);
    jobTitleAndTypeDiv.appendChild(jobTitleH3);

    const jobTypeH4 = document.createElement("h4");
    const jobTypeH4T = document.createTextNode(jobType);
    jobTypeH4.id = "jobType";
    jobTypeH4.appendChild(jobTypeH4T);
    jobTitleAndTypeDiv.appendChild(jobTypeH4);

    const jobDescriptionP = document.createElement("p");
    jobDescriptionP.id = "jobDescription";
    const jobDescriptionPT = document.createTextNode(jobDescription);
    jobDescriptionP.appendChild(jobDescriptionPT);

    const descriptionP = document.createElement("p");
    descriptionP.id = "description";
    const descriptionPT = document.createTextNode("Description");
    descriptionP.appendChild(descriptionPT);

    const applyB = document.createElement("button");
    applyB.id = "applyBtn";
    const applyBT = document.createTextNode("Apply");
    applyB.onclick = () => {
        applyB.innerText = "Sent CV!";
        applyB.style.backgroundColor = "lightgreen";
        applyB.style.color = "black";
        
        eachJobDiv.style.height.value = eachJobDiv.style.height.value + 20;
        undoApplyB.style.display = "block";
        returnB.style.display = "block";

        applyB.onmouseover = () => {};
        applyB.onmouseleave = () => {};
    };
    applyB.appendChild(applyBT);

    const undoApplyB = document.createElement("button");
    undoApplyB.id = "undoApplyBtn";
    const undoApplyBT = document.createTextNode("Undo");
    undoApplyB.onclick = () => {
        applyB.id = "applyBtn";
        applyB.innerHTML = "Apply";
        applyB.style.backgroundColor = "#e45d74";
        applyB.onmouseover = () => {
            applyB.style.backgroundColor = "#cf566a";
        }
        applyB.onmouseleave = () => {
            applyB.style.backgroundColor = "#e45d74";
        }
        undoApplyB.style.display = "none";
        eachJobDiv.style.height.value = eachJobDiv.style.height.value + 20;
    };
    undoApplyB.appendChild(undoApplyBT);

    const returnB = document.createElement("button");
    returnB.id = "returnBtn";
    const returnBT = document.createTextNode("Return");
    returnB.onclick = () => {
        searchJob(0);
    };
    returnB.appendChild(returnBT);


    eachJobDiv.appendChild(companyLogo);
    eachJobDiv.appendChild(companyNameAndAddressDiv);
    eachJobDiv.appendChild(jobTitleAndTypeDiv);
    eachJobDiv.appendChild(descriptionP);
    eachJobDiv.appendChild(jobDescriptionP);
    eachJobDiv.appendChild(applyB);
    eachJobDiv.appendChild(undoApplyB);
    eachJobDiv.appendChild(returnB);
    
        
    document.getElementById("jobListings").appendChild(eachJobDiv);

}

function undoApplyToJob(){
    let applyB = document.getElementById("applyBtn");
    applyB.innerText = "Apply";
    applyB.style.backgroundColor = "#e45d74";    
}



// Display Recent Searches
function insertRecentSearchesHTML(searchedTerm){
    const recentSearchH4 = document.createElement("h4");
    const recentSearchH4T = document.createTextNode(searchedTerm);
    recentSearchH4.appendChild(recentSearchH4T);

    document.getElementById("recentSearches").appendChild(recentSearchH4);

}

function insertRecentSearches(){
    document.getElementById("recentSearches").innerHTML = "<h1> My Recent Searches </h1>";

    for(var i = 0; i < searchHistory.length; i++){
        insertRecentSearchesHTML(searchHistory[i]);
    }
}

// Search Job
let amountOfFoundJobs = jobs.length;
function searchJob(state){
    if(state == 1){
        location.reload();
    }
    jobListings.innerHTML = "";
    let searchedTerm = document.getElementById("searchedJob").value; 
    let searchedLocation = document.getElementById("searchedLocation").value; 
    if(searchedTerm != "" && searchedLocation != ""){
        searchHistory.push((searchedTerm + ", " + searchedLocation));
        insertRecentSearches();
    }
    amountOfFoundJobs = 0;
    for(var i = 0; i < jobs.length; i++){
        if(jobs[i]["company"].toLowerCase().includes(searchedTerm.toLowerCase())||jobs[i]["jobRole"].toLowerCase().includes(searchedTerm.toLowerCase()) && jobs[i]["location"].toLowerCase().includes(searchedLocation.toLowerCase()) ){
           /* if(fullTimeFilter == true){
                jobs[i]["jobType"] == "Full-Time";
                createHTML(jobs[i]["logo"], jobs[i]["company"], jobs[i]["location"], jobs[i]["jobRole"], jobs[i]["jobType"]);
            } else if (partTimeFilter == true){
                jobs[i]["jobType"] == "Part-Time";
                createHTML(jobs[i]["logo"], jobs[i]["company"], jobs[i]["location"], jobs[i]["jobRole"], jobs[i]["jobType"]);
            } else if (internshipFilter == true){
                jobs[i]["jobType"] == "Internship";
                createHTML(jobs[i]["logo"], jobs[i]["company"], jobs[i]["location"], jobs[i]["jobRole"], jobs[i]["jobType"]);
            } else if (freelanceFilter == true){
                jobs[i]["jobType"] == "Freelance";
                createHTML(jobs[i]["logo"], jobs[i]["company"], jobs[i]["location"], jobs[i]["jobRole"], jobs[i]["jobType"]);
            } else if (studentFilter == true){
                jobs[i]["jobType"] == "Student";
                createHTML(jobs[i]["logo"], jobs[i]["company"], jobs[i]["location"], jobs[i]["jobRole"], jobs[i]["jobType"]);
            } else {
                createHTML(jobs[i]["logo"], jobs[i]["company"], jobs[i]["location"], jobs[i]["jobRole"], jobs[i]["jobType"]);
            }*/
            amountOfFoundJobs++;
            createHTML(jobs[i]["logo"], jobs[i]["company"], jobs[i]["location"], jobs[i]["jobRole"], jobs[i]["jobType"]);
        }
    }
    if(amountOfFoundJobs == 0){
        const noJobsFoundH1 = document.createElement("h1");
        const noJobsFoundH1T = document.createTextNode("No Jobs Found!");
        noJobsFoundH1.id = "noJobsFound";
        noJobsFoundH1.appendChild(noJobsFoundH1T);
        document.getElementById("jobListings").appendChild(noJobsFoundH1);
    }
}


// Filter Jobs
let jobTypeFilter = "";
let fullTimeFilter = false;
let partTimeFilter = false;
let internshipFilter = false;
let freelanceFilter = false;
let studentFilter = false;
function filterJobs(index){
    switch (index) {
        case 1:
            fullTimeFilter = !fullTimeFilter;
            jobTypeFilter = "Full-Time";
            break;   
        case 2:
            partTimeFilter = !partTimeFilter;
            jobTypeFilter = "Part-Time";
            break;   
        case 3:
            internshipFilter = !internshipFilter;
            jobTypeFilter = "Internship";
            break;   
        case 4:
            freelanceFilter = !freelanceFilter;
            jobTypeFilter = "Freelance";
            break;   
        case 5:
            studentFilter = !studentFilter;
            jobTypeFilter = "Student";
            break;   
    }
}

// Email Subscribe
let emailSubscribers = [];
let emailSubscriptionBody = "You've successfully signed up for Ketari's email subscription!";
function subscribeEmail(){
    let userEmail = document.getElementById("userEmail").value;    
    if(userEmail != ""){
        emailSubscribers.push(userEmail);
        let emailSubscriptionBtn = document.getElementById("emailSubscriptionBtn");
        emailSubscriptionBtn.innerText = "Subscribed";
        emailSubscriptionBtn.style.backgroundColor = "Green"; 
        window.open("mailto:" + userEmail + "?subject=Ketari.com&body=" + emailSubscriptionBody);
    }
}


// Window.Onload
window.onload = insertJobs();





