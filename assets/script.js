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

const sliderContent = document.querySelector("banner-img");
const next = document.querySelector(".arrow_right");
const prev = document.querySelector(".arrow_left");

const tagLineImport = document.querySelector("#banner p");

let index = 0;

const lastElement = slides.length - 1;

const dots = document.querySelector(".dots");
const addImg = document.querySelector(".banner-img");

for (let i = 0; i < slides.length; i++) {
  const addDot = document.createElement("div");
  addDot.classList.add("dot");
  if (i == index) {
    addDot.classList.add("active-dot");
  }
  dots.appendChild(addDot);
}

const addDot = document.querySelectorAll(".dots .dot");
console.log(addDot);

next.addEventListener("click", () => {
  addDot[index].classList.remove("active-dot");
  index++;

  if (index > lastElement) {
    index = 0;
  }
  console.log(slides);
  addDot[index].classList.add("active-dot");

  addImg.src = "./assets/images/slideshow/" + slides[index].image;
  tagLineImport.innerHTML = slides[index].tagLine;
});

prev.addEventListener("click", () => {
  addDot[index].classList.remove("active-dot");
  index--;

  if (index < 0) {
    index = lastElement;
  }
  addDot[index].classList.add("active-dot");
  addImg.src = "./assets/images/slideshow/" + slides[index].image;
  tagLineImport.innerHTML = slides[index].tagLine;
});

// sliderContent.src = "./assets/images/slideshow/" + slides[index].image;
// tagLineImport.innerHTML = slides[index].tagLine;

document.addEventListener("keydown", (keypressed) => {
  if (e.keyCode === 37) {
    index++;
    addImg.src = "./assets/images/slideshow/" + slides[index].image;
    tagLineImport.innerHTML = slides[index].tagLine;
  } else if (e.keyCode === 39) {
    index--;
    addImg.src = "./assets/images/slideshow/" + slides[index].image;
    tagLineImport.innerHTML = slides[index].tagLine;
  }
});
