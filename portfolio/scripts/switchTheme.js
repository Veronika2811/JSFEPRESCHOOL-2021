const buttonSwitchTheme = document.querySelector('.header__switch-theme');
const classesWhiteTheme = [
  ...document.querySelectorAll(
    'body, .header__navigation, .hamburger__line, .hamburger, .hero, .title__line, .title__text, .contacts, .logo, .navigation__link, .languages, .header__switch-theme, .button_bordered, .footer__link, .ico__social, .button_colored, .price__button, .contacts__title, .contacts__input, .contacts__textarea'
  ),
];

const changeTheme = () => {
  classesWhiteTheme.forEach((elem) => elem.classList.toggle('white'));
};

const switchTheme = () => {
  let currentTheme = localStorage.getItem('theme') || 'dark';

  if (currentTheme === 'white') changeTheme();

  buttonSwitchTheme.addEventListener('click', () => {
    currentTheme === 'dark'
      ? localStorage.setItem('theme', 'white')
      : localStorage.setItem('theme', 'dark');
    changeTheme();
  });
};

export default switchTheme;
