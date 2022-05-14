<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>contact us</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="src/styles/contact.css">
    </head>
    <header>
        <div>
            <img id="logoImage" src="assets\logo\ቀጣሪ-logos_white.png">
        </div>
        <nav>
            <ul>
                <li> <a href="postJob.php"> Post a Job </a> </li>
                <li> <a href="signup.php"> Sign Up </a> </li>
                <li> <a href="signup.php"> Sign In </a> </li>
            </ul>
        </nav>
    </header>
    <body>
        <div class="container">
            <form onsubmit="sendEmail(); reset(); return false;">
                <h3>Contact Us</h3>
                <input type="text" id="name" placeholder="Your Name" required>
                <input type="email" id="email" placeholder="Email" required>
                <input type="text" id="phone" placeholder="Phone Number" required>
                <textarea id="message" rows="4" placeholder="How can we help you?"></textarea>
                <button type="submit">Send</button>
            </form>
        </div>
        <script src=" https://smtpjs.com/v3/smtp.js"></script>
        <script>
            function sendEmail(){
                Email.send({
                    Host : "smtp.gmail.com",
                    Username : "ketariketari710@gmail.com",
                    Password : "ketari123",
                    To : 'ketariketari710@gmail.com',
                    From : document.getElementById("email").value,
                    Subject : "New Contact Form Enquiry",
                    Body : "Name: " + document.getElementById("name").value + 
                    "<br> Email: " + document.getElementById("email").value +
                    "<br> Phone no: " + document.getElementById("phone").value +
                    "<br> Message: " + document.getElementById("message").value
                }).then(
                  message => alert("Message Sent Successfully!")
                );
            }
        </script>
    </body>
       
    <footer>
        <p> Ketari &copy; 2022 All Rights Reserved! </p>
    </footer>
</html>