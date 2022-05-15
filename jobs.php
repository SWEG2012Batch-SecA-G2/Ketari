<!DOCTYPE html>
<html>
    <head>
        <title> Ketari </title>
        <link rel="stylesheet" href="src/styles/jobs.css">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>
        <!-- Header and Nav Bar -->
        <header>
            <div>
               <a href="jobs.php">
                  <img id="logoImage" src="assets\logo\ቀጣሪ-logos_white.png">
               </a> 
            </div>
            <nav>
                <ul>
                    <li> <a href="Profiles.php" id="loggedUser"> Profile </a> </li>
                    <li> <a href="postJob.php"> Post a Job </a> </li>
                    <li> <a href="cvGenerator.php"> Cv Generator </a> </li>
                    <li> <a href="landing.php"> Sign Out </a> </li>
                </ul>
            </nav>
            <div id="intro">
                <h1> Find Your Dream Job </h1>
                <h5> Search for a suitable job </h5>
                <p> Ketari is a free job application platform that will help you find your dream job. Find Jobs that match your interests with us. 
                    Helps us get you, to where you want to be and start earning!</p>
            </div>
            <div>
                <img id="bannerImage" src="assets\illustrations\undraw_Lost_online_re_upmy.png">
            </div>
            <div id="searchBox">
                <div id="searchJobKeyword">
                    <img id="searchIcon" src="assets/icons/searchIcon.png" >
                    <input id="searchedJob" type="text" placeholder="Job title or keyword">
                </div>
                <div id="searchJobLocation">
                    <img>
                    <input id="searchedLocation" type="text" placeholder="Select Location">
                </div>
                <div id="searchBotton">
                    <button onclick=searchJob()> Search </button>
                </div>
            </div>
        </header>

        <!-- Job type and roles -->
        <div id="jobTypeAndRole">
            <!-- Job Types -->
            <div id="jobTypes">
                <h2 id="jobTypeTitle"> Job Types </h2>
                <div id="eachJobType">
                    <input type="checkbox" onclick=filterJobs(1)>
                    <h6> Full-Time </h6>
                </div>
                <div id="eachJobType">
                    <input type="checkbox" onclick=filterJobs(2)>
                    <h6> Part-Time </h6>
                </div>
                <div id="eachJobType">
                    <input type="checkbox" onclick=filterJobs(3)>
                    <h6> Internship </h6>
                </div>
                <div id="eachJobType">
                    <input type="checkbox" onclick=filterJobs(4)>
                    <h6> Freelance </h6>
                </div>
                <div id="eachJobType">
                    <input type="checkbox" onclick=filterJobs(5)>
                    <h6> Student </h6>
                </div>
            </div>

            <!-- Job Roles -->
            <div id="jobRoles">
                <h2 id="jobRoleTitle"> Job Roles </h2>
                <div id="eachJobType">
                    <input type="checkbox">
                    <h6> IOS Developer </h6>
                </div>
                <div id="eachJobType">
                    <input type="checkbox">
                    <h6> UI/UX Designer </h6>
                </div>
                <div id="eachJobType">
                    <input type="checkbox">
                    <h6> Graphic Designer </h6>
                </div>
                <div id="eachJobType">
                    <input type="checkbox">
                    <h6> Android Developer </h6>
                </div>
                <div id="eachJobType">
                    <input type="checkbox">
                    <h6> Fullstack Developer </h6>
                </div>
            </div>
        </div>

        <!-- Jobs -->
        <section id="jobListings">
            <h3 id="jobsTitle"> Jobs </h3> 
            <!-- Each Job -->
        <!--
            
        -->
        </section>

        <!-- Email Subscriptions -->
        <div id="emailSubsAndRecentSearches">
            <div id="emailSubscription">
                <h1> Sign up to our newsletter </h1>
                <div id="emailSubscriptionInput">
                    <input id="userEmail" type="text" placeholder="Email">
                </div>
                <button id="emailSubscriptionBtn" onclick=subscribeEmail()> Subscribe </button>
            </div>
            <div id="recentSearches">
                <h1> My Recent Searches </h1>
                <h4> Android, Addis Ababa </h4>
            </div>
        </div>

        <!-- Footer -->
        <footer>
            <p> Ketari &copy; 2022 All Rights Reserved! </p>
        </footer>

        <!-- Script -->
        <script src="src/js/jobs.js"></script>
    </body>
</html>
