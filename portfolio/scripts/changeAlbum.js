const portfolioButtonsContainer = document.querySelector('.portfolio__buttons');
const portfolioButtons = [...portfolioButtons.querySelectorAll('.button')];
const portfolioImages = [...document.querySelectorAll('.photo')];

const changePhoto = (event) => {
  portfolioButtons.forEach(() => {
    if (event.target.classList.contains('button')) {
      const season = event.target.dataset.season;
      portfolioImages.forEach(
        (photo, index) =>
          (photo.src = `./images/img/${season}/${index + 1}.jpg`)
      );

      buttons.forEach((el) => el.classList.remove('active'));
    }
    event.target.classList.add('active');
  });
};

const changeAlbum = () => {
  portfolioButtonsContainer.addEventListener('click', (event) =>
    changePhoto(event)
  );
};

export default changeAlbum;
