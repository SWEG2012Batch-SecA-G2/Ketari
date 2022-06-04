const toggleForm = () => {
    const container = document.querySelector('.container');
    container.classList.toggle('active');
};
var f = window.location.href.split("?")[1]
if(f=="tog"){
  toggleForm();
}
var regEx = /[^@ \t\r\n0-9]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;

function loginUser(e){
 
    e.preventDefault(); 
    getInfo();
    async function getInfo(){
      var response;
      await fetch('/ketari/src/php/userOut.php',{
        method: 'POST',
        body: new FormData(document.getElementById('login'))
      })
      .then(res => res.text())
      .then(data => response = data )
      if(response !==""){
        localStorage.setItem("loggedUser",response);
        window.location.href = "/ketari/jobs.html";
        return;
      }
        alert("No Account Found. please try again!");
    }
}


function validateLogin(e){
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

  loginUser(e);
}

function signupUser(e){
    e.preventDefault();
    getInfo();
    async function getInfo(){
      var response;
      await fetch('/ketari/src/php/userIn.php',{
        method: 'POST',
        body: new FormData(document.getElementById('signup'))
      })
      .then(res => res.text())
      .then(data => response = data)
      if(response =="Success"){
        toggleForm();
        alert("Account Created Successfully!");
      }
      else{
        toggleForm();
        alert("Account already exists! Please Login");
      }
    }
}

function validateSignup(e){
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


  signupUser(e);
  
  // toggleForm();
  return true;
}