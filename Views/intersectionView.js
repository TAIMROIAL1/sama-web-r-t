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
      if(entry.isIntersecting) {
        entry.target.classList.remove('hidden-sec');
        observer.unobserve(entry.target);
      }
    }
    const options = {
      root: null,
      threshold: 0.1,
    }

    this.#observer = new IntersectionObserver(handler, options);
  }

}

export default new Intersector();