let jobs = JSON.parse(localStorage.getItem("jobs"));

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
    for(var i = 0;  i < jobs.length; i++){
        createHTML(jobs[i]["logo"], jobs[i]["company"], jobs[i]["location"], jobs[i]["jobRole"], jobs[i]["jobType"], jobs[i]["description"]);        
    }               
}

// Display Details
function displayDetailsOfJob(logo, company, location, jobRole, jobType, jobDescription){
    jobListings.innerHTML = "";
    const eachJobDiv = document.createElement("div");
    eachJobDiv.id = "eachJobExpanded";

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

    const jobDescriptionP = document.createElement("p");
    jobDescriptionP.id = "jobDescription";
    const jobDescriptionPT = document.createTextNode(jobDescription);
    jobDescriptionP.appendChild(jobDescriptionPT);

    eachJobDiv.appendChild(companyLogo);
    eachJobDiv.appendChild(companyNameAndAddressDiv);
    eachJobDiv.appendChild(jobTitleAndTypeDiv);
    eachJobDiv.appendChild(jobDescriptionP);
    
    document.getElementById("jobListings").appendChild(eachJobDiv);


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
function searchJob(){
    jobListings.innerHTML = "";
    let searchedTerm = document.getElementById("searchedJob").value; 
    let searchedLocation = document.getElementById("searchedLocation").value; 
    if(searchedTerm != "" && searchedLocation != ""){
        searchHistory.push((searchedTerm + ", " + searchedLocation));
        insertRecentSearches();
    }
    amountOfFoundJobs = 0;
    for(var i = 0; i < jobs.length; i++){
        if(jobs[i]["jobRole"].toLowerCase().includes(searchedTerm.toLowerCase()) && jobs[i]["location"].toLowerCase().includes(searchedLocation.toLowerCase()) ){
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





