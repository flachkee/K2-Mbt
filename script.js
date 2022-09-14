/*
Making sure that when clicking an anchor link,
the content a link refers to, isn't hidden
behind navbar by being on the top of the page
*/
window.addEventListener("hashchange", () => {
  window.scrollTo(window.scrollX, window.scrollY - 80);
});

const navbar = document.querySelector(".navbar");
const mainSection = document.querySelector(".main-section");
const heroButton = document.querySelector(".hero-button");
const showVideoButton = document.getElementById("showVideo");
const hero = document.querySelector(".hero");
const backVideo = document.querySelector(".back-video");

// Show video button functionality
function showVid(mainSection, navbar) {
  mainSection.style.visibility = "hidden";
  mainSection.style.opacity = 0;
  navbar.style.visibility = "hidden";
  navbar.style.opacity = 0;
  backVideo.style.filter = "brightness(100%)";
}
function hideVid(mainSection, navbar) {
  mainSection.style.visibility = "visible";
  mainSection.style.opacity = 1;
  navbar.style.visibility = "visible";
  navbar.style.opacity = 1;
  backVideo.style.filter = "brightness(60%)";
}
// Hero page
function showMainSection() {
  if (mainSection.style.display == "flex") {
    mainSection.style.display = "none";
  } else mainSection.style.display = "flex";
  navbar.style.display = "block";
  hero.style.display = "none";
  showVideoButton.style.display = "flex";
  mainSection.style.opacity = "1";
  heroButton.style.display = "none";
  backVideo.style.filter = "brightness(60%)";
}
