//reference: https://codepen.io/st_mercy/pen/abqveLJ

class Slider {
    constructor(pages) {
      this.sections = document.querySelectorAll(pages.section); //gets sections
      this.sidenav = document.querySelector(pages.dots); //gets lists of ul: #pages
  
      this.sidenav.addEventListener('click', this.clickToSection.bind(this));
      window.addEventListener('scroll', this.isActive.bind(this));
    }

    clickToSection(e) {
      const lists = Array.from(this.sidenav.children);
      const windowHeight = window.innerHeight;
  
      lists.forEach((list, index) => {
        if (list == e.target) {
  
          window.scrollTo({
            top: windowHeight * index,
            behavior: 'smooth',
          });
        }
      });
    }
  
    setToRegular() {
      const lists = this.sidenav;
      const isActive = lists.querySelector('.is-active'); //from style.css
      if (isActive != null) {
        isActive.classList.remove('is-active');
      }
    }
  
    isActive() {
      const position = window.scrollY;
      const lists = Array.from(this.sidenav.children);
  
      this.sections.forEach((section, index) => {
        const halfWindow = window.innerHeight / 2;
        const section_top = section.offsetTop;
  
        if (position > section_top - halfWindow && position < section_top + halfWindow) {
          this.setToRegular();
          lists[index].classList.add('is-active');
        }
      })
    }
  
    
  }
  
  new Slider({
    section: '.section',
    dots: '#pages',
  });