const birds = [...document.querySelectorAll('.navigation__item')];
const backgroundImage = document.querySelector('.main');
const playBtn = document.querySelector('.btn-play');
const audio = document.querySelector('.audio');
const progress = document.querySelector('.progress');
const progressLine = document.querySelector('.progress__line');

const playAudio = () => {
  audio.classList.add('play');
  playBtn.style.backgroundImage = "url('./images/svg/pause.svg')";
  audio.play();
}

const pauseAudio = () => {
  audio.classList.remove('play');
  playBtn.style.backgroundImage = "url('./images/svg/play.svg')";
  audio.pause();
}

const updateProgress = (event) => {
  const { duration, currentTime } = event.srcElement;
  const progressPerсent = (currentTime / duration) * 100;
  progressLine.style.width = `${progressPerсent}%`;
  if (progressPerсent === 100) {
    progressLine.style.width = 0;
    pauseAudio();
  }
}

const setProgress = (event) => {
  const width = this.clientWidth;
  const clickX = event.offsetX;
  const duration = audio.duration;
  audio.currentTime = (clickX / width) * duration;
}

const toggleBird = (event) => {
  const bird = event.target.dataset.item;
  backgroundImage.style.backgroundImage = `url('./images/img/${bird}.jpg')`;
  audio.src = `./audio/${bird}.mp3`;
  audio.currentTime = 0;
  playAudio();
};

const switchBird = () => {
  birds.forEach(el => {
      el.addEventListener('click', toggleBird)
  });

  playBtn.addEventListener('click', () => {
    const isPlaying = audio.classList.contains('play');
    isPlaying ? pauseAudio() : playAudio();
  });

  audio.addEventListener('timeupdate', updateProgress);
  progress.addEventListener('click', setProgress);
}

export default switchBird;