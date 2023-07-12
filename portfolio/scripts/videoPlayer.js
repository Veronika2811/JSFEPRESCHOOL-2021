const buttonPlay = document.querySelector('.button__play'),
  videoPoster = document.querySelector('.video__poster'),
  video = document.querySelector('.viewer'),
  controlsPlayBtn = document.querySelector('.ico_play'),
  controlsVolume = document.querySelector('.volume'),
  controlsVolumeBtn = document.querySelector('.ico_volume-on'),
  progressBar = document.querySelector('.progress-bar'),
  progress = document.querySelector('.progress');

let timerId;

const togglePlay = () => {
  if (video.paused) {
    videoPoster.style.display = 'none';
    video.play();
    window.setInterval(changeVideoProgress, 700);
  } else {
    video.pause();
  }
  buttonPlay.classList.toggle('video__play');
  controlsPlayBtn.classList.toggle('ico_pause');
};

const toggleProgress = (event) => {
  const progressVideo = event.target.dataset.progress
    ? event.target.dataset.progress
    : event.target.value;
  video.currentTime = progressVideo;
  progressBar.value = progressVideo;
  progress.value = progressVideo;
};

const updateProgress = (event) => {
  const progressVideo = Math.round(
    (event.offsetX / event.target.clientWidth) *
      parseInt(event.target.getAttribute('max'), 10)
  );
  progress.setAttribute('data-progress', progressVideo);
};

const changeVideoProgress = () => {
  progress.value = Math.floor(video.currentTime);
  progressBar.value = Math.floor(video.currentTime);

  if (video.ended) {
    videoPoster.style.display = 'block';
    buttonPlay.classList.add('video__play');
    window.clearInterval(timerId);
  }
};

const toggleVolume = () => {
  video.muted = !video.muted;

  if (video.muted) {
    controlsVolume.setAttribute('data-volume', controlsVolume.value);
    controlsVolume.value = 0;
  } else {
    controlsVolume.value = controlsVolume.dataset.controlsVolume;
  }
};

const updateVolume = () => {
  if (video.muted) {
    video.muted = false;
  }

  video.volume = controlsVolume.value;
};

const changeVolumeBtn = () => {
  if (video.muted || video.volume === 0 || controlsVolume.value === 0) {
    controlsVolumeBtn.classList.add('ico_volume-off');
  } else {
    controlsVolumeBtn.classList.remove('ico_volume-off');
  }
};

const videoSubscribe = () => {
  buttonPlay.addEventListener('click', togglePlay);
  controlsPlayBtn.addEventListener('click', togglePlay);
  video.addEventListener('click', togglePlay);

  progress.addEventListener('input', toggleProgress);
  progress.addEventListener('mousemove', updateProgress);

  video.addEventListener('timeupdate', changeVideoProgress);

  controlsVolumeBtn.addEventListener('click', toggleVolume);
  controlsVolume.addEventListener('mousemove', updateVolume);
  controlsVolume.addEventListener('touchmove', updateVolume);
  controlsVolume.addEventListener('touchend', updateVolume);

  video.addEventListener('volumechange', changeVolumeBtn);
};

export default videoSubscribe;
