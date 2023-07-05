import dictionary from './dictionary.js';

const languagesContainer = document.querySelector('.header__languages');
const languages = [...document.querySelectorAll('.languages')];

const getTranslate = (lang) => {
  languages.forEach((el) => {
    el.classList.remove('active');

    if (el.classList.contains(`languages__${lang}`)) el.classList.add('active');
  });

  localStorage.setItem('lang', lang);

  const words = [...document.querySelectorAll('[data-i18]')];
  words.forEach((el) => {
    const translation = dictionary[lang][el.dataset.i18];

    el.placeholder
      ? (el.placeholder = translation)
      : (el.textContent = translation);
  });
};

const switchLanguage = () => {
  const currentLanguage = localStorage.getItem('lang') || 'en';

  getTranslate(currentLanguage);

  languagesContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('languages')) {
      const selectedLang = event.target.textContent;
      getTranslate(selectedLang);
    }
  });
};

export default switchLanguage;
