const audio = document.querySelector('.audio');
const prev = document.querySelector('.ico_prev');
const play = document.querySelector('.ico_play');
const next = document.querySelector('.ico_next');
let isPlay = false;
let songIndex = 0;

const songs = [
  'Skylar Grey - I Know You',
  'Jessie Ware - Meet Me In The Middle',
  'Vaults - One Last Night',
];

const loadingSong = (song) => {
  audio.src = `./audio/${song}.mp3`;
};

const playSong = () => {
  isPlay = true;
  play.classList.add('ico_pause');
  audio.play();
};

const pauseSong = () => {
  isPlay = false;
  play.classList.remove('ico_pause');
  audio.pause();
};

const nextSong = () => {
  songIndex++;
  if (songIndex > songs.length - 1) songIndex = 0;
  loadingSong(songs[songIndex]);
  playSong();
};

const prevSong = () => {
  songIndex--;
  if (songIndex < 0) songIndex = songs.length - 1;
  loadingSong(songs[songIndex]);
  playSong();
};

const musicSubscribe = () => {
  play.addEventListener('click', () => {
    isPlay ? pauseSong() : playSong();
  });

  next.addEventListener('click', nextSong);
  prev.addEventListener('click', prevSong);
};

export default musicSubscribe;
