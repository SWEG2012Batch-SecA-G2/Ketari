const navbar = document.querySelector(".nav-bar");
const sectionOne = document.querySelector(".header-container");
const links = document.querySelector(".links")
const sectionOneOptions = {
    roorMargin: "200px 0px 0px 0px"
};

// Intersection observer function to change color of the navigtion bar up on scroll
const sectionOneObserver = new IntersectionObserver(function(
  entries,
  sectionOneObserver
) {
    entries.forEach(entry => {
       if(!entry.isIntersecting){
           navbar.classList.add("nav-bar-on-white")
           links.classList.add("links-on-white");
       } else {
            navbar.classList.remove("nav-bar-on-white");
           links.classList.remove("links-on-white");

       }
    });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);