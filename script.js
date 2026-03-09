let index = 0;
const slides = document.querySelector(".slides");
const totalSlides = document.querySelectorAll(".slide").length;

function showSlide(){
  index++;

  if(index >= totalSlides){
    index = 0;
  }

  slides.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(showSlide, 1000);