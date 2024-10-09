window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 130);
});

const nav = document.querySelector("nav");
const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-icon");
const logo = document.querySelector(".h-wrapper .logo");

menuIcon.addEventListener("click", () => {
  nav.classList.add("open");
  menuIcon.style.zIndex = "-4";
  logo.style.zIndex = "-4";
});

closeIcon.addEventListener("click", () => {
  menuIcon.style.zIndex = "1";
  logo.style.zIndex = "1";
  nav.classList.remove("open");
});

const texts = ["Web App", "Mobile App", "Website"];
const images = [
  "./img/bg-commponet-1.png",
  "./img/bg-commponet-2.png",
  "./img/bg-commponet-3.png",
];

let index = 0;

function updateContent() {
  const textElement = document.getElementById("animated-text");
  const imageElement = document.getElementById("background-image");

  textElement.classList.remove("animate");
  void textElement.offsetWidth;
  textElement.textContent = texts[index];
  textElement.classList.add("animate");

  imageElement.classList.remove("slideIn");
  void imageElement.offsetWidth;
  imageElement.src = images[index];
  imageElement.classList.add("slideIn");

  imageElement.src = images[index];

  index = (index + 1) % texts.length;
}

updateContent();

setInterval(updateContent, 3000);

updateAlpacaImage();
setInterval(updateAlpacaImage, 3000);
