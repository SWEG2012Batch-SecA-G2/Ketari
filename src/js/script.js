const toggleForm = () => {
  const container = document.querySelector(".container");
  container.classList.toggle("active");
};

var f = window.location.href.split("?")[1];
if (f == "tog") {
  toggleForm();
}

var regEx = /[^@ \t\r\n0-9]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;

function loginUser(e) {
  e.preventDefault();
  getInfo();
  async function getInfo() {
    var response;
    await fetch("/ketari/src/php/userOut.php", {
      method: "POST",
      body: new FormData(document.getElementById("login")),
    })
      .then((res) => res.text())
      .then((data) => (response = data));
    if (response !== "") {
      localStorage.setItem("loggedUser", response);
      window.location.href = "/ketari/jobs.html";
      return;
    }
    alert("No Account Found. Please try again!");
  }
}

function validateLogin(e) {
  let username = document.forms["Login"]["LoginUsername"].value;
  let password = document.forms["Login"]["LoginPassword"].value;
  if (username == "") {
    document.getElementById("usernameError").innerHTML = "Enter username!";
    return false;
  } else document.getElementById("usernameError").innerHTML = "";
  if (password == "") {
    document.getElementById("passError").innerHTML = "Enter password!";
    return false;
  } else document.getElementById("passError").innerHTML = "";

  loginUser(e);
}

// Function to send OTP using the new service provider
function sendOTPRequest(phoneNumber, otp) {
  const apiKey = "eyJhbGciOiJIUzI1NiJ9.eyJpZGVudGlmaWVyIjoibUtFMlJZcG5ZUDZzQmd6QXVNbDdDZkdrNU5PMnRETDAiLCJleHAiOjE4NjI3NTU3MzgsImlhdCI6MTcwNDkwMjkzOCwianRpIjoiOGNiMDAyOTUtOGEzYS00NWU5LWIxYWUtYzM3NzFlZWQwNDE5In0._qeTT8tUKYsQwYtuWKqr23PZwsLgPkFIwjJTj3bMh00"; // Replace with your actual API key
  const apiEndpoint = "https://api.afromessage.com/api/send";

  const requestData = {
    from: "e80ad9d8-adf3-463f-80f4-7c4b39f7f164",
    sender: "WHALE",
    to: phoneNumber,
    message: `Your OTP is: ${otp}`,
    callback: "http://localhost/",
  };


  // Make an AJAX request to the new OTP service provider
  fetch(apiEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify(requestData),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.status === "success") {
        alert("OTP sent successfully!");
        // Store the sent OTP locally (for demonstration purposes)
        localStorage.setItem("sentOTP", otp);
      } else if (data.acknowledge === "error"){
        alert(data.response.errors[0])
      }else {
        alert("Failed to send OTP. Please try again.", data.response.errors[0]);
      }
    })
    .catch((error) => {
      console.error("Error sending OTP:", error.response.errors[0]);
      alert("Failed to send OTP. Please try again.");
    });
}

// Function to request and send OTP
function requestAndSendOTP(phoneNumber) {
  // Generate a random 6-digit OTP
  const otp = Math.floor(1000 + Math.random() * 9000);
  localStorage.setItem("sentOTP", otp);
  console.log("OTP: ",otp);
  // Update the OTP request function to use the new service provider
  sendOTPRequest(phoneNumber, otp);
}

// Call this function when requesting OTP
function requestOTP() {
  let phoneNumber = document.forms["Signup"]["SignupPhone"].value;

  if (phoneNumber == "") {
    document.getElementById("PhoneError").innerHTML =
      "Please Enter phone number!";
    return;
  } else if (phoneNumber.length != 10) {
    document.getElementById("PhoneError").innerHTML =
      "Please Enter a valid phone number!";
    return;
  } else {
    document.getElementById("PhoneError").innerHTML = "";
  }

  // Request and send OTP using the new service provider
  requestAndSendOTP(phoneNumber);
}

function signupUser(e) {
  e.preventDefault();
  getInfo();
  async function getInfo() {
    var response;
    await fetch("/ketari/src/php/userIn.php", {
      method: "POST",
      body: new FormData(document.getElementById("signup")),
    })
      .then((res) => res.text())
      .then((data) => (response = data));
    if (response === "Success") {
      toggleForm();
      alert("Account Created Successfully!");
    } else {
      toggleForm();
      alert("Account already exists! Please Login");
    }
  }
}

function validateSignup(e) {
  let username = document.forms["Signup"]["SignupUsername"].value;
  let email = document.forms["Signup"]["SignupEmail"].value;
  let password = document.forms["Signup"]["SignupPassword"].value;
  let cPassword = document.forms["Signup"]["SignupCPassword"].value;
  let phone = document.forms["Signup"]["SignupPhone"].value;
  let enteredOTP = document.forms["Signup"]["SignupOTP"].value;
  var checkEmail = regEx.test(email);

  if (username == "") {
    document.getElementById("nameError").innerHTML = "Please Enter name!";
    return false;
  } else document.getElementById("nameError").innerHTML = "";
  if (phone == "") {
    document.getElementById("PhoneError").innerHTML =
      "Please Enter phone number!";
    return false;
  } else if (phone.length != 10) {
    document.getElementById("PhoneError").innerHTML =
      "Please Enter a valid phone number!";
    return false;
  }
  if (enteredOTP == "") {
    document.getElementById("OTPError").innerHTML = "Please Enter OTP!";
    return false;
  } else if (enteredOTP.length != 4) {
    document.getElementById("OTPError").innerHTML = "Please Enter a valid OTP!";
    return false;
  } else if (enteredOTP != localStorage.getItem("sentOTP")) {
    document.getElementById("OTPError").innerHTML =
      "Incorrect OTP. Please try again!";
    return false;
  } else document.getElementById("OTPError").innerHTML = "";

  if (!checkEmail) {
    document.getElementById("emailError").innerHTML =
      "Please Enter a valid email!";
    return false;
  } else document.getElementById("emailError").innerHTML = "";

  if (password == "") {
    document.getElementById("passwordError").innerHTML =
      "Please Enter password!";
    return false;
  } else document.getElementById("passwordError").innerHTML = "";
  if (cPassword == "") {
    document.getElementById("cPasswordError").innerHTML =
      "Please Confirm password!";
    return false;
  } else if (cPassword != password) {
    document.getElementById("cPasswordError").innerHTML =
      "Password doesn't match!";
    return false;
  } else document.getElementById("cPasswordError").innerHTML = "";

  // Validate OTP locally
  let sentOTP = localStorage.getItem("sentOTP");
  if (enteredOTP !== sentOTP) {
    document.getElementById("OTPError").innerHTML =
      "Incorrect OTP. Please try again!";
    return false;
  } else {
    document.getElementById("OTPError").innerHTML = "";
  }

  signupUser(e);

  // toggleForm();
  return true;
}
