//javascript for navigation bar effects on scroll
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle('sticky', window.scrollY > 0);
});

//javascript for responsive navigation sidebar menu
const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");
const navigationItems = document.querySelectorAll(".navigation a")

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  navigation.classList.toggle("active");
});

navigationItems.forEach((navigationItem) => {
  navigationItem.addEventListener("click", () => {
    menuBtn.classList.remove("active");
    navigation.classList.remove("active");
  });
});

//javascript for scroll to top button
const scrollBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function () {
  scrollBtn.classList.toggle("active", window.scrollY > 500);
});

//javascript for scroll back to top on click scroll-to-top button
scrollBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

//javascript for reveal website elements on scroll
window.addEventListener("scroll", reveal);

function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  // console.log(reveals)

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var revealTop = reveals[i].getBoundingClientRect().top;

    // console.log(windowHeight,"  ",reveals[i],"  ",revealTop)
    var revealPoint = 50;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("active");
    }
  }
}

let currentIndexOfExperience = 0;

function moveSlideExperience(direction) {
  const carousel = document.querySelector('.experiences .carousel');
  const items = document.querySelectorAll('.experiences .carousel-item');
  const totalItems = items.length;
  
  // Update the current index based on direction
  currentIndexOfExperience = (currentIndexOfExperience + direction + totalItems) % totalItems;
  
  // Move the carousel by adjusting the transform property
  carousel.style.transform = `translateX(-${currentIndexOfExperience * 100}%)`;
}

let currentIndexOfCertification= 0;

function moveSlideCertification(direction) {
  const carousel = document.querySelector('.certifications .carousel');
  const items = document.querySelectorAll('.certifications .carousel-item');
  const totalItems = items.length;
  
  // Update the current index based on direction
  currentIndexOfCertification = (currentIndexOfCertification + direction + totalItems) % totalItems;
  
  // Move the carousel by adjusting the transform property
  carousel.style.transform = `translateX(-${currentIndexOfCertification * 100}%)`;
}

let currentIndexOfProject= 0;

function moveSlideProject(direction) {
  const carousel = document.querySelector('.projects .carousel');
  const items = document.querySelectorAll('.projects .carousel-item');
  const totalItems = items.length;
  
  // Update the current index based on direction
  currentIndexOfProject = (currentIndexOfProject + direction + totalItems) % totalItems;
  
  // Move the carousel by adjusting the transform property
  carousel.style.transform = `translateX(-${currentIndexOfProject * 100}%)`;
}