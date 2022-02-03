let jobs = [
    {
        "logo": "assets/icons/cbe.png",
        "company": "Commercial Bank Of Ethiopia",
        "location": "Addis Ababa, Ethiopia",
        "jobRole": "Senior Web Developer",
        "jobType": "Full-Time",
    },
    {
        "logo": "assets/icons/cbe.png",
        "company": "Commercial Bank Of Ethiopia",
        "location": "Addis Ababa, Ethiopia",
        "jobRole": "Senior Web Developer",
        "jobType": "Full-Time",
    },
    {
        "logo": "assets/icons/cbe.png",
        "company": "Commercial Bank Of Ethiopia",
        "location": "Addis Ababa, Ethiopia",
        "jobRole": "Senior Web Developer",
        "jobType": "Full-Time",
    },
];

let jobListings = document.getElementById("jobListings");

document.get

function insertJobs() {

    for(let i = 0; i < jobs.length; i++){
        let newJobDiv = document.createElement("div");
        let newJobP = document.createElement("p");
        newJobP.innerText = jobs[i].company;
        newJobDiv.appendChild(newJobP);
        jobListings.appendChild()
    }
}