const slides = [...document.querySelectorAll('.center')];
const containerSlides = document.querySelector('.cont');

const activeIndex = 0;

console.log(slides);

const renderSlides = function(index = 0) {
  const counter = -index;
  slides.forEach((slide) => {
    slide.style.transform = `translateX(${counter * 110}%)`;
    counter++;
  })
}


containerSlides.addEventListener('click', function(e) {
  const clicked = e.closest('.btn');

  if(!clicked) return;

  if(clicked.classList.contains('button1'))
      activeIndex = activeIndex === 0? slides.length - 1 : activeIndex--;
    

  if(clicked.classList.contains('button2'))
      activeIndex = activeIndex === slides.length - 1? 0 : activeIndex++;    
  
    renderSlides(activeIndex)
})