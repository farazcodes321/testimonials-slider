// const slides = document.getElementsByClassName("carousel-none");
const slides = document.getElementsByClassName("carousel-item");

const nextSlideBtn = document.getElementById("nextSlide");
const prevSlideBtn = document.getElementById("prevSlide");

//global varaibles
let slidePosition = 0;
const totalSlides = slides.length;

function hideAllSlides() {
  for (let slide of slides) {
    slide.classList.remove("carousel-visible");
    slide.classList.add("carousel-hidden");
  }
}

// hideAllSlides()

nextSlideBtn.addEventListener("click", moveToNextSlide);
prevSlideBtn.addEventListener("click", moveToPrevSlide);

function moveToNextSlide() {
  hideAllSlides();

  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }

  slides[slidePosition].classList.add("carousel-visible")
  slides[slidePosition].classList.remove('carousel-hidden')
}

function moveToPrevSlide() {
  hideAllSlides();

  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }

  slides[slidePosition].classList.add("carousel-visible")
  slides[slidePosition].classList.remove('carousel-hidden')
}
