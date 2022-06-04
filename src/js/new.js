let jobs = [
    {
        "logo": "assets/icons/nyala.png",
        "company": "Nyala Motors",
        "location": "Addis Ababa, Ethiopia",
        "jobRole": "Fullstack Developer",
        "jobType": "Full-Time",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum impedit voluptatum unde, sint molestiae recusandae voluptatibus culpa sequi. Obcaecati mollitia delectus non. Ut a quis et repellendus sit quasi?",
    },
    {
        "logo": "assets/icons/lifan.png",
        "company": "Lifan Motors",
        "location": "Adigrat, Ethiopia",
        "jobRole": "Graphic Designer",
        "jobType": "Internship",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum impedit voluptatum unde, sint molestiae recusandae voluptatibus culpa sequi. Obcaecati mollitia delectus non. Ut a quis et repellendus sit quasi?",
    },
    {
        "logo": "assets/icons/century.png",
        "company": "Century Mall",
        "location": "Addis Ababa, Ethiopia",
        "jobRole": "IOS Developer",
        "jobType": "Student",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum impedit voluptatum unde, sint molestiae recusandae voluptatibus culpa sequi. Obcaecati mollitia delectus non. Ut a quis et repellendus sit quasi?",
    },
    {
        "logo": "assets/icons/cropped-Dashen-Bank-sc-Logo-Square.jpg",
        "company": "Dashen Bank",
        "location": "Hawassa, Ethiopia",
        "jobRole": "Android Developer",
        "jobType": "Part-Time",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum impedit voluptatum unde, sint molestiae recusandae voluptatibus culpa sequi. Obcaecati mollitia delectus non. Ut a quis et repellendus sit quasi?",
    },
    {
        "logo": "assets/icons/ride.png",
        "company": "Ride",
        "location": "Addis Ababa, Ethiopia",
        "jobRole": "IOS Developer",
        "jobType": "Full-Time",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum impedit voluptatum unde, sint molestiae recusandae voluptatibus culpa sequi. Obcaecati mollitia delectus non. Ut a quis et repellendus sit quasi?",
    },
    {
        "logo": "assets/icons/ethioTelecom.png",
        "company": "EthioTelecom",
        "location": "Hawassa, Ethiopia",
        "jobRole": "Graphic Designer",
        "jobType": "Part-Time",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum impedit voluptatum unde, sint molestiae recusandae voluptatibus culpa sequi. Obcaecati mollitia delectus non. Ut a quis et repellendus sit quasi?",
    },
    {
        "logo": "assets/icons/ethiopianAirport.png",
        "company": "Ethiopian Airlines",
        "location": "Addis Ababa, Ethiopia",
        "jobRole": "Android Developer",
        "jobType": "Freelance",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum impedit voluptatum unde, sint molestiae recusandae voluptatibus culpa sequi. Obcaecati mollitia delectus non. Ut a quis et repellendus sit quasi?",
    },
    {
        "logo": "assets/icons/cbe.png",
        "company": "Commercial Bank Of Ethiopia",
        "location": "Addis Ababa, Ethiopia",
        "jobRole": "Fullstack Developer",
        "jobType": "Full-Time",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum impedit voluptatum unde, sint molestiae recusandae voluptatibus culpa sequi. Obcaecati mollitia delectus non. Ut a quis et repellendus sit quasi?",
    },
    {
        "logo": "assets/icons/ebc.png",
        "company": "Ethiopian Broadcasting Corporation",
        "location": "Bahir Dar, Ethiopia",
        "jobRole": "IOS Developer",
        "jobType": "Part-Time",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum impedit voluptatum unde, sint molestiae recusandae voluptatibus culpa sequi. Obcaecati mollitia delectus non. Ut a quis et repellendus sit quasi?",
    },

];

const form = new FormData();
form.append('jobs',JSON.stringify(jobs))

fetch('/ketari/src/php/jobs.php',{
    method: 'POST',
    Headers: {
        'Content-Type': 'application/json'
    },
    body: form
    })
    .then(res=>res.text())
    .then(data=> console.log(data))