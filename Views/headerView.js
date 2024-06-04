class Header {
  #list = document.querySelector('.list');
  constructor() {
    this.#setListBtnListener();
    this.#setScrollListener();
  }

  #setListBtnListener() {
    document.querySelector('.btn-list').addEventListener('click', (e) => {
      const list = e.target.closest('.btn-list');

      if(!list) return;

      this.#list.classList.toggle('hidden');
    })
  }

  #setScrollListener() {
    window.addEventListener('load', () => {
      window.location.hash = '';
    })

    this.#list.addEventListener('click', (e) => {
      setTimeout(() => {
        const btn = e.target.closest('a');
        if(!btn) return;
  
        const hash = window.location.hash.slice(1);
        const section = document.querySelector(`.${hash}`)
        if(!section) return
  
        section.scrollIntoView({
          behavior: 'smooth'
        })  
      }, 0);
        
    })
  }
}

export default new Header();