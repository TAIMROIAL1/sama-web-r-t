class Intersector {
  #observer;

  constructor() {
    this.#setIntersector();

    [...document.getElementsByTagName('section')].forEach(section => {
    this.#observer.observe(section)  
    })
    
  }

  #setIntersector() {
    function handler([entry], observer) {
      if(entry.target.isIntersecting) {
        section.classList.remove('hidden');
        observer.unobserve(entry.target);
      }
    }
    const options = {
      root: null,
      threshold: 0.1
    }

    this.#observer = new IntersectionObserver(handler, options);
  }

}

export default new Intersector();