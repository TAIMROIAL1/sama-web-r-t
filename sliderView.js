class Slider {
  #activeIndex = 0;
  #slides = [...document.querySelectorAll('.center')];
  #containerSlides = document.querySelector('.cont');

  constructor() {
    this.#renderSlides();
    this.#setEventListener();
  }
  #renderSlides () {
    let counter = -this.#activeIndex;
    this.#slides.forEach((slide) => {
      slide.style.transform = `translateX(${counter * 110}%)`;
      counter++;
    })
  }

  #setEventListener() {
    this.#containerSlides.addEventListener('click', (e) => {
      const clicked = e.target.closest('.btn');
    
      if(!clicked) return;
    
      if(clicked.classList.contains('button2'))
        this.#activeIndex = this.#activeIndex === this.#slides.length - 1? 0 : this.#activeIndex + 1;  
        
    
      if(clicked.classList.contains('button1'))
      this.#activeIndex = this.#activeIndex === 0? this.#slides.length - 1 : this.#activeIndex - 1;  

            this.#renderSlides()
    })
  }
}

export default new Slider();