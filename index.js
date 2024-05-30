const slides = [...document.querySelectorAll('.center')];
const activeIndex = 0;

console.log(slides);

slides.forEach((slide, i) => {
  slide.style.transform = `translateX(${i * 110}%)`;
})
