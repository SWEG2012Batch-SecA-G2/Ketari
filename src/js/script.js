const toggleForm = () => {
    const container = document.querySelector('.container');
    container.classList.toggle('active');
};
var f = window.location.href.split("?")[1]
if(f=="tog"){
  toggleForm();
}
var regEx = /^([a-zA-Z_\.]+)@([a-zA-Z_\.]+)\.([a-zA-z]{2,5})$/;

function User(username,email,password){
  this.username = username;
  this.email = email;
  this.password = password;
}
let logArr = [];
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

  logArr = JSON.parse(localStorage.getItem("user"));
  for(var i = 0; i < logArr.length; i++){
    if(logArr[i].username == username && logArr[i].password == password){
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
    document.getElementById("emailError").innerHTML = "Please Enter email!";
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

  var obj = new User(username,email,password);

  let arr = [];
  if(localStorage.key("user") != null)
    arr = JSON.parse(localStorage.getItem("user"));
  
  arr.push(obj);
  localStorage.setItem("user",JSON.stringify(arr));
  
  return true;
}
// if(localStorage.getItem("user") == null){
  //   localStorage.setItem("user",JSON.stringify(username+","));
  //   localStorage.setItem("emails",JSON.stringify(email+","));
  //   localStorage.setItem("passwords",JSON.stringify(password+","));
  // }

  // else{
  //   let user = "",psw = "", eml = "";

  //   user = JSON.parse(localStorage.getItem("user")).split(",");
  //   eml  = JSON.parse(localStorage.getItem("emails")).split(",");
  //   psw = JSON.parse(localStorage.getItem("passwords")).split(",");

  //   user += username+",";
  //   eml += email+",";
  //   psw += password+",";

  //   localStorage.setItem("user",JSON.stringify(user));
  //   localStorage.setItem("emails",JSON.stringify(eml));
  //   localStorage.setItem("passwords",JSON.stringify(psw));
  // }