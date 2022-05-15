const toggleForm = () => {
    const container = document.querySelector('.container');
    container.classList.toggle('active');
};
var f = window.location.href.split("?")[1]
if(f=="tog"){
  toggleForm();
}
var regEx = /[^@ \t\r\n0-9]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;

function User(username,email,password){
  this.username = username;
  this.email = email;
  this.password = password;
}

// var admin = new User("admin","admin@admin.com","admin");
// if(localStorage.getItem("user") == null)
//   createSession(admin);

let logArr = [];
    logArr=getCookie("user");
    logArr=JSON.parse(logArr);

function validateLogin(){
  let username = document.forms["Login"]["LoginUsername"].value;
  let password = document.forms["Login"]["LoginPassword"].value;
  if(username == ""){
    document.getElementById("usernameError").innerHTML = "Enter username!";
    return false;
  }
  else
    document.getElementById("usernameError").innerHTML = "";
  if(password == ""){
    document.getElementById("passError").innerHTML = "Enter password!";
    return false;
  }
  else
    document.getElementById("passError").innerHTML = "";

  for(var i = 0; i < logArr.length; i++){
    if(logArr[i].username == username && logArr[i].password == password){
      createLoggedSession(logArr[i]);
      return true;
    }
  }

  alert("No Account Found. please try again!");
  return false;
}


function validateSignup(){
  let username = document.forms["Signup"]["SignupUsername"].value;
  let email = document.forms["Signup"]["SignupEmail"].value;
  let password = document.forms["Signup"]["SignupPassword"].value;
  let cPassword = document.forms["Signup"]["SignupCPassword"].value;

  var checkEmail = regEx.test(email);

  if(username == ""){
    document.getElementById("nameError").innerHTML = "Please Enter name!";
    return false;
  }
  else
    document.getElementById("nameError").innerHTML = "";

  if(!checkEmail){
    document.getElementById("emailError").innerHTML = "Please Enter a valid email!";
    return false;
  }
  else
    document.getElementById("emailError").innerHTML = "";
  
  if(password == ""){
    document.getElementById("passwordError").innerHTML = "Please Enter password!";
    return false;
  }
  else
  document.getElementById("passwordError").innerHTML = "";
  if(cPassword == ""){
    document.getElementById("cPasswordError").innerHTML = "Please Confirm password!";
    return false;
  }
  else if(cPassword != password){
    document.getElementById("cPasswordError").innerHTML = "Password doesn't match!";
    return false;
  }
  else
    document.getElementById("cPasswordError").innerHTML = "";

  // alert(logArr[0].username);

  for(var i = 0; i < logArr.length; i++){
    if(logArr[i].username == username){
      alert("Username already exists!");
      return false;
    }
  }
  // var obj = new User(username,email,password);

  // createSession(obj);
  
  return true;
}

// function createSession(obj){
//   let arr = [];
//   if(localStorage.getItem("user") != null)
//     arr = JSON.parse(localStorage.getItem("user"));
  
//   arr.push(obj);
//   localStorage.setItem("user",JSON.stringify(arr));
// }
function createLoggedSession(logArr){
  delete logArr.password;
  LogArr=JSON.parse(localStorage.getItem("loggedUser"));
  if(LogArr==null){
    LogArr=[];
  }
  LogArr.push(logArr);
  localStorage.setItem("loggedUser",JSON.stringify(LogArr));
}

//cookie data
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  let user = getCookie("username");
  if (user != "") {
    alert("Welcome again " + user);
  } else {
    user = prompt("Please enter your name:", "");
    if (user != "" && user != null) {
      setCookie("username", user, 365);
    }
  }
}