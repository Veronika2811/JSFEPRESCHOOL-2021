const hamburger = document.querySelector('.header__hamburger');
const burger = document.querySelector('.header__navigation');
const burgerLinks = [...document.querySelectorAll('.navigation__item')];

const toggleMenu = () => {
  hamburger.classList.toggle('open');
  burger.classList.toggle('open');
};

const burgerSubscribe = () => {
  hamburger.addEventListener('click', toggleMenu);
  burgerLinks.forEach(el => {
      el.addEventListener('click', toggleMenu)
  });
}

export default burgerSubscribe;