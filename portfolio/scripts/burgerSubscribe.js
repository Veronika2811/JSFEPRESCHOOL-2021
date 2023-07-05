const body = document.querySelector('.body');
const overlay = document.querySelector('.overlay');
const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('.header__navigation');
const navigationLinks = [...document.querySelectorAll('.navigation__link')];

const toggleMenu = () => {
  body.classList.toggle('open');
  overlay.classList.toggle('open');
  hamburger.classList.toggle('open');
  navigation.classList.toggle('open');
};

const closeOverlay = () => {
  body.classList.remove('open');
  overlay.classList.remove('open');
  hamburger.classList.remove('open');
  navigation.classList.remove('open');
};

const burgerSubscribe = () => {
  hamburger.addEventListener('click', toggleMenu);
  overlay.addEventListener('click', closeOverlay);

  navigationLinks.forEach((link) => {
    link.addEventListener('click', closeOverlay);
  });
};

export default burgerSubscribe;
