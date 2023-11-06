const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

const imgs = document.querySelectorAll(".slides-container img");
const next = document.querySelector(".arrow_right");
const previous = document.querySelector(".arrow_left");
const dots = document.querySelectorAll(".dot");
let index = 0;

//Les Boutons de Navigation

next.addEventListener("click", nextSlide);

function nextSlide() {
  if (index < 3) {
    imgs[index].classList.remove("active");
    index++;
    imgs[index].classList.add("active");
  } else if (index === 3) {
    imgs[index].classList.remove("active");
    index = 0;
    imgs[index].classList.add("active");
  }
}

previous.addEventListener("click", previousSlide);

function previousSlide() {
  if (index > 0) {
    imgs[index].classList.remove("active");
    index--;
    imgs[index].classList.add("active");
  } else if (index === 0) {
    imgs[index].classList.remove("active");
    index = 2;
    imgs[index].classList.add("active");
  }
}

document.addEventListener("keydown", keypressed);
function keypressed(e) {
  if (e.keyCode === 37) {
    previousSlide();
  } else if (e.keyCode === 39) {
    nextSlide();
  }
}

// Les Dots
