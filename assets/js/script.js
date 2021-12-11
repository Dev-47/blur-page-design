
const bottomSection = document.querySelector(".bottom-section");
const upBtn = document.querySelector(".icon-up-btn");
const downBtn = document.querySelector(".icon-down-btn");
const navbarMobile = document.querySelector(".menu-icon");
const navLinks = document.querySelector(".nav-links");

upBtn.addEventListener("click", showBottomSection);
navbarMobile.addEventListener("click", showNavbar);

function showBottomSection() {
  bottomSection.style.height = "13.5rem";
  upBtn.style.display = "none";
  downBtn.style.display = "block";
}

if (showBottomSection) {
  downBtn.addEventListener("click", hideBottomSection);
}

function hideBottomSection() {
  bottomSection.style.height = "2rem";
  upBtn.style.display = "block";
  downBtn.style.display = "none";
}

function showNavbar() {
    navbarMobile.classList.toggle("active");
    navLinks.classList.toggle("active");
}

