import burgerSubscribe from './burgerSubscribe.js';
import switchLanguage from './switchLanguage.js';
import changeAlbum from './changeAlbum.js';
import switchTheme from './switchTheme.js';
import videoSubscribe from './videoPlayer.js';

window.onload = () => {
  burgerSubscribe();
  switchLanguage();
  changeAlbum();
  switchTheme();
  videoSubscribe();
};
