const button = document.querySelector('.button');
const background = document.querySelector('.body');

const getRandomArbitrary = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const imageUpload = () => {
  background.style.backgroundImage = `url('./images/jpg/${getRandomArbitrary(
    1,
    21
  )}.jpg')`;
};

const changeBackground = () => {
  button.addEventListener('click', imageUpload);
};

export default changeBackground;
