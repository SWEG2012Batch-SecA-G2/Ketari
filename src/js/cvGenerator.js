
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
    var schoolName = document.forms["myForm"]["schoolName"].value;
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
    if (schoolName == "") {
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
function storeForm() {
    var form = document.forms["myForm"];
    var person = JSON.parse(localStorage.getItem("loggedUser"))
    var username="";
    if (person == null) {
      return alert("login first");
    }else{
      username = person.username;
    }
    var fname = form["fname"].value;
    var lname = form["lname"].value;
    console.log(fname);
    var pnumber = form["pnumber"].value;
    var age = form["age"].value;
    var profession = form["profession"].value;
    var city = form["city"].value;
    var region = form["region"].value;
    var country = form["country"].value;
    var zcode = form["zcode"].value;
    var smedia = form["smedia"].value;
    var jtitle = form["jtitle"].value;
    var employer = form["employer"].value;
    var jobStartDate = form["jobStartDate"].value;
    var jobEndDate = form["jobEndDate"].value;
    var schoolName = form["schoolName"].value;
    var slocation = form["slocation"].value;
    var schoolStartDate = form["schoolStartDate"].value;
    var schoolEndDate = form["schoolEndDate"].value;
    var degree = form["degree"].value;
    var skill1 = form["skill1"].value;
    var skillLevel1 = form["skillLevel1"].value;
    var skill2 = form["skill2"].value;
    var skillLevel2 = form["skillLevel2"].value;
    var skill3 = form["skill3"].value;
    var skillLevel3 = form["skillLevel3"].value;
    var flanguage = form["flanguage"].value;
    var fLangLevel = form["fLangLevel"].value;
    var slanguage = form["slanguage"].value;
    var sLangLevel = form["sLangLevel"].value;
    var fRefName = form["fRefName"].value;
    var fRefPhone = form["fRefPhone"].value;
    var sRefName = form["sRefName"].value;
    var sRefPhone = form["sRefPhone"].value;
    var tRefName = form["tRefName"].value;
    var tRefPhone = form["tRefPhone"].value;
    var data = {
      username:username,
      fname: "",
      lname: "",
      pnumber: "",
      age: "",
      profession: "",
      city: "",
      schoolName:""
    };
    data.fname = fname;
    data.lname = lname;
    data.pnumber = pnumber;
    data.age = age;
    data.profession = profession;
    data.city = city;
    data.region = region;
    data.country = country;
    data.zcode = zcode;
    data.smedia = smedia;
    data.jtitle = jtitle;
    data.employer = employer;
    data.jobStartDate = jobStartDate;
    data.jobEndDate = jobEndDate;
    data.schoolName = schoolName;
    data.slocation = slocation;
    data.schoolStartDate = schoolStartDate;
    data.schoolEndDate = schoolEndDate;
    data.degree = degree;
    data.skill1 = skill1;
    data.skillLevel1 = skillLevel1;
    data.skill2 = skill2;
    data.skillLevel2 = skillLevel2;
    data.skill3 = skill3;
    data.skillLevel3 = skillLevel3;
    data.flanguage = flanguage;
    data.fLangLevel = fLangLevel;
    data.slanguage = slanguage;
    data.sLangLevel = sLangLevel;
    data.fRefName = fRefName;
    data.fRefPhone = fRefPhone;
    data.sRefName = sRefName;
    data.sRefPhone = sRefPhone;
    data.tRefName = tRefName;
    data.tRefPhone = tRefPhone;
    let profiles=[];
    if(localStorage.getItem("profiles")===null){
      profiles=[];
    }
    else{
      profiles=JSON.parse(localStorage.getItem("profiles"));
    }
    profiles.push(data);
    localStorage.setItem("profiles",JSON.stringify(profiles));
  }
function showprofilesData(){
  var loggedUser = JSON.parse(localStorage.getItem("loggedUser"))
  var profile = JSON.parse(localStorage.getItem("profiles"));
  if (loggedUser == null) {
    return alert("login first");
  }else{
    for(var i = 0; i < profile.length; i++){
      if(profile[i].username == loggedUser.username){
        return profile[i].age;
      }
    }
}
}
document.getElementById("hello").innerHTML = showprofilesData();
