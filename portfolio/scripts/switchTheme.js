const buttonSwitchTheme = document.querySelector('.header__switch-theme');
const classesWhiteTheme = [...document.querySelectorAll(
  'body, .hero, .title__line, .title__text, .contacts, .logo, .navigation__link, .languages, .header__switch-theme, .button_bordered, input, textarea, .footer__link, .ico__social, .button_colored, .price__button, .contacts__title'
)];

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
