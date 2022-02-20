
// Profile Page form validation
function validate() {
    var fname = document.forms["myForm"]["fname"].value;
    var lname = document.forms["myForm"]["lname"].value;
    var phoneNumber = document.forms["myForm"]["pnumber"].value;
    var age = document.forms["myForm"]["age"].value;
    var country = document.forms["myForm"]["country"].value;
    var city = document.forms["myForm"]["city"].value;
    var zcode = document.forms["myForm"]["zcode"].value;
    var jtitle = document.forms["myForm"]["jtitle"].value;
    var employer = document.forms["myForm"]["employer"].value;
    var jobStartDate = document.forms["myForm"]["jobStartDate"].value;
    var jobEndDate = document.forms["myForm"]["jobEndDate"].value;
    var sname = document.forms["myForm"]["sname"].value;
    var slocation = document.forms["myForm"]["slocation"].value;
    var schoolStartDate = document.forms["myForm"]["schoolStartDate"].value;
    var schoolEndDate = document.forms["myForm"]["schoolEndDate"].value;
    var degree = document.forms["myForm"]["degree"].value;
    var skill1 = document.forms["myForm"]["skill1"].value;
    var skillLevel1 = document.forms["myForm"]["skillLevel1"].value;
    var flanguage = document.forms["myForm"]["flanguage"].value;
    var fLangLevel = document.forms["myForm"]["fLangLevel"].value;
    var fRefName = document.forms["myForm"]["fRefName"].value;
    var fRefPhone = document.forms["myForm"]["fRefPhone"].value;
    if (fname == "") {
        alert("Please enter your first name");
        return false;
    }
    if (lname == "") {
        alert("Please enter your last name");
        return false;
    }
    if (phoneNumber == "") {
        alert("Please enter your phone number");
        return false;
    }
    if (age == "") {
        alert("Please enter your age");
        return false;
    }

    if (country == "") {
        alert("Please enter your country");
        return false;
    }

    if (city == "") {
        alert("Please enter your city");
        return false;
    }
    if (zcode == "") {
        alert("Please enter your zip code");
        return false;
    }

    if (jtitle == "") {
        alert("Please enter your job title");
        return false;
    }
    if (employer == "") {
        alert("Please enter your employer");
        return false;
    }
    if (jobStartDate == "") {
        alert("Please enter your job start date");
        return false;
    }
    if (jobEndDate == "") {
        alert("Please enter your job end date");
        return false;
    }
    if (sname == "") {
        alert("Please enter your school name");
        return false;
    }
    if (slocation == "") {
        alert("Please enter your school location");
        return false;
    }
    if (schoolStartDate == "") {
        alert("Please enter your school start date");
        return false;
    }
    if (schoolEndDate == "") {
        alert("Please enter your school end date");
        return false;
    }
    if (degree == "") {
        alert("Please enter your degree");
        return false;
    }
    if (skill1 == "") {
        alert("Please enter your skill 1");
        return false;
    }
    if (skillLevel1 == "") {
        alert("Please enter your skill level 1");
        return false;
    }

    if (flanguage == "") {
        alert("Please enter your first language");
        return false;
    }
    if (fLangLevel == "") {
        alert("Please enter your first language level");
        return false;
    }
    if (fRefName == "") {
        alert("Please enter your first reference name");
        return false;
    }
    if (fRefPhone == "") {
        alert("Please enter your first reference phone number");
        return false;
    }
}
function store(){
    var region = document.forms["myForm"]["region"].value;
    var profession = document.forms["myForm"]["profession"].value;
    var smedia = document.forms["myForm"]["smedia"].value;
    var skill2 = document.forms["myForm"]["skill2"].value;
    var skill3 = document.forms["myForm"]["skill3"].value;
    var sRefName = document.forms["myForm"]["sRefName"].value;
    var sRefPhone = document.forms["myForm"]["sRefPhone"].value;
    var tRefName = document.forms["myForm"]["tRefName"].value;
    var tRefPhone = document.forms["myForm"]["tRefPhone"].value;
    var slanguage = document.forms["myForm"]["slanguage"].value;
    var sLangLevel = document.forms["myForm"]["slevel"].value;
    var skillLevel2 = document.forms["myForm"]["skillLevel2"].value;
    var skillLevel3 = document.forms["myForm"]["skillLevel3"].value;
    var fname = document.forms["myForm"]["fname"].value;
    var lname = document.forms["myForm"]["lname"].value;
    var phoneNumber = document.forms["myForm"]["pnumber"].value;
    var age = document.forms["myForm"]["age"].value;
    var country = document.forms["myForm"]["country"].value;
    var city = document.forms["myForm"]["city"].value;
    var zcode = document.forms["myForm"]["zcode"].value;
    var jtitle = document.forms["myForm"]["jtitle"].value;
    var employer = document.forms["myForm"]["employer"].value;
    var jobStartDate = document.forms["myForm"]["jobStartDate"].value;
    var jobEndDate = document.forms["myForm"]["jobEndDate"].value;
    var sname = document.forms["myForm"]["sname"].value;
    var slocation = document.forms["myForm"]["slocation"].value;
    var schoolStartDate = document.forms["myForm"]["schoolStartDate"].value;
    var schoolEndDate = document.forms["myForm"]["schoolEndDate"].value;
    var degree = document.forms["myForm"]["degree"].value;
    var skill1 = document.forms["myForm"]["skill1"].value;
    var skillLevel1 = document.forms["myForm"]["skillLevel1"].value;
    var flanguage = document.forms["myForm"]["flanguage"].value;
    var fLangLevel = document.forms["myForm"]["fLangLevel"].value;
    var fRefName = document.forms["myForm"]["fRefName"].value;
    var fRefPhone = document.forms["myForm"]["fRefPhone"].value;

    let profileObj = {
        "fname": fname,
        "lname": lname,
        "phoneNumber": phoneNumber,
        "age": age,
        "country": country,
        "city": city,
        "zcode": zcode,
        "jtitle": jtitle,
        "employer": employer,
        "jobStartDate": jobStartDate,
        "jobEndDate": jobEndDate,
        "sname": sname,
        "slocation": slocation,
        "schoolStartDate": schoolStartDate,
        "schoolEndDate": schoolEndDate,
        "degree": degree,
        "skill1": skill1,
        "skillLevel1": skillLevel1,
        "flanguage": flanguage,
        "fLangLevel": fLangLevel,
        "fRefName": fRefName,
        "fRefPhone": fRefPhone,
        "region": region,
        "profession": profession,
        "smedia": smedia,
        "skill2": skill2,
        "skill3": skill3,
        "sRefName": sRefName,
        "sRefPhone": sRefPhone,
        "tRefName": tRefName,
        "tRefPhone": tRefPhone,
        "slanguage": slanguage,
        "sLangLevel": sLangLevel,
        "skillLevel2": skillLevel2,
        "skillLevel3": skillLevel3
    }

    localStorage.setItem("profile", JSON.stringify(profileObj));
    let oldProfile = JSON.parse(localStorage.getItem("profile"));
    oldProfile.push(profileObj);
    localStorage.clear();
    localStorage.setItem("profile", JSON.stringify(oldProfile));
}

function loadData(){
    
}