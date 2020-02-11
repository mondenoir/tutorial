const body = document.body;
const mq = matchMedia('(max-width: 600px)');

const bgChange = (media, el) => {
  const bg = color => el.style.background = color;
  (media.matches) ? bg('white') : bg('#333'); 
};

this.addEventListener('resize', () => bgChange(mq, body), false);
