const slideshow = (function () {
  const scrollTo = (el) => {
    const slide = document.querySelector('.slide');
    slide.scroll({
      behavior: 'smooth',
      top: 0,
      left: el.offsetLeft
    });
  };

  const btns = document.querySelectorAll('nav > a');
  btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const getId = e.target.href.split('#')[1];
      const getEl = document.getElementById(getId);
      scrollTo(getEl);
    });
  });
})();
