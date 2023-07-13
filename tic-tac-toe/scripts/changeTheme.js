const switchTheme = document.querySelector('.switch-theme');
const pinkTheme = document.querySelectorAll(
  '.body, .title, .result__title, .modal__content, .footer__link, .button_modal'
);
let theme = localStorage.getItem('theme') || 'blue';

const toogleTheme = () => {
  pinkTheme.forEach((elem) => elem.classList.toggle('pink'));
};

const changeTheme = () => {
  let currentTheme = localStorage.getItem('theme') || 'blue';

  if (currentTheme === 'pink') toogleTheme();

  switchTheme.addEventListener('click', () => {
    theme === 'blue' ? (theme = 'pink') : (theme = 'blue');
    localStorage.setItem('theme', theme);
    toogleTheme();
  });
};

export default changeTheme;
