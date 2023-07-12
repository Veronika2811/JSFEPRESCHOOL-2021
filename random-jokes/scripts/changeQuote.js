const button = document.querySelector('.button');
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const languages = document.querySelector('.languages');
const languagesAll = [...document.querySelectorAll('.languages__item')];

const getQuotes = async () => {
  const currentLanguages = localStorage.getItem('languages') || 'en';

  toogleActiveLang(currentLanguages);

  const api =
    currentLanguages === 'en'
      ? await fetch('https://type.fit/api/quotes')
      : await fetch('./scripts/json/quotes.json');

  const data = await api.json();

  const randomNum = Math.floor(Math.random() * data.length);
  const currentQuote = data[randomNum];

  quote.textContent = currentQuote.text;
  author.textContent = currentQuote.author;
};

const toogleActiveLang = (lang) => {
  languagesAll.forEach((el) => {
    el.classList.remove('active');

    if (el.classList.contains(`languages__${lang}`)) el.classList.add('active');
  });
};

const changeQuote = () => {
  const currentLanguage = localStorage.getItem('languages') || 'en';

  getQuotes(currentLanguage);

  button.addEventListener('click', getQuotes);

  languages.addEventListener('click', (event) => {
    if (event.target.classList.contains('active')) return;

    const language = event.target.textContent;
    localStorage.setItem('languages', language);

    getQuotes(language);
  });
};

export default changeQuote;
