import {ITEMS_NAMES, CASE_OF_VICTORY} from './constants.js';

const currentPlayer = document.querySelector('.subtitle');
const game = document.querySelector('.game');
const gameItem = [...document.querySelectorAll('.game__item')];
let tableResult = JSON.parse(localStorage.getItem('leaderBoard')) || [];

const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal__content');
const modalOverlay = document.querySelector('.modal .overlay');
const modalButton = document.querySelector('.modal__close');

const resultTable = document.querySelector('.result');
let resultGame = document.querySelector('.result__saved');
const resultButton = document.querySelector('.button__result');
const resultClose = document.querySelector('.result__close');
const resultOverlay = document.querySelector('.result .overlay');

const resetButton = document.querySelector('.button__reset');

let activePlayer = ITEMS_NAMES.x;
let move = 0;
let gameResult = '';

const audio = new Audio();

const showResult = () => {
  modal.style.display = 'block';
  modalContent.textContent = `${gameResult}!`;
};

const closeResult = () => {
  modal.style.display = 'none';
  location.reload();
};

const changeLeaderBoard = () => {
  if (tableResult.length >= 10) tableResult.pop();
  tableResult.unshift(gameResult);
  localStorage.setItem('leaderBoard', JSON.stringify(tableResult));
};

const showResultTable = () => {
  if (!tableResult.length) {
    gameResult = 'Leaderboard is empty';
    showResult();
  } else {
    resultTable.style.display = 'block';
    resultGame.innerHTML = '';
    tableResult.forEach((element) => {
      resultGame.innerHTML = resultGame.innerHTML + `<li>${element}</li>`;
    });
  }
};

const closeResultTable = () => (resultTable.style.display = 'none');

const checkVictory = () => {
  for (let i = 0; i < CASE_OF_VICTORY.length; i++) {
    if (
      gameItem[CASE_OF_VICTORY[i][0]].textContent == ITEMS_NAMES.x &&
      gameItem[CASE_OF_VICTORY[i][1]].textContent == ITEMS_NAMES.x &&
      gameItem[CASE_OF_VICTORY[i][2]].textContent == ITEMS_NAMES.x
    ) {
      gameResult = `Won by X in ${move} steps`;
      showResult();
      changeLeaderBoard();
    } else if (
      gameItem[CASE_OF_VICTORY[i][0]].textContent == ITEMS_NAMES.o &&
      gameItem[CASE_OF_VICTORY[i][1]].textContent == ITEMS_NAMES.o &&
      gameItem[CASE_OF_VICTORY[i][2]].textContent == ITEMS_NAMES.o
    ) {
      gameResult = `Won by O in ${move} steps`;
      showResult();
      changeLeaderBoard();
    }
  }
  if (move === 9) {
    gameResult = `Draw in ${move} steps`;
    showResult(gameResult);
    changeLeaderBoard();
  }
};

const toogleCurrentPlayer = () => {
  activePlayer = activePlayer === ITEMS_NAMES.x ? ITEMS_NAMES.o : ITEMS_NAMES.x;
  currentPlayer.textContent = `Current player is ${activePlayer}`;
};

const makeStep = (event) => {
  const target = event.target;

  if (target.classList.contains('game__item') && target.textContent === '') {
    move % 2 === 0
      ? (target.textContent = ITEMS_NAMES.x)
      : (target.textContent = ITEMS_NAMES.o);
    move++;

    target.style.opacity = '0.6';

    audio.src = `./audio/click.mp3`;
    audio.play();

    toogleCurrentPlayer();
    checkVictory();
  }
};

const resetGame = () => {
  localStorage.clear();
  location.reload();
};

const gameLogic = () => {
  game.addEventListener('click', makeStep);

  modalButton.addEventListener('click', closeResult);
  modalOverlay.addEventListener('click', closeResult);

  resultButton.addEventListener('click', showResultTable);
  resultOverlay.addEventListener('click', closeResultTable);
  resultClose.addEventListener('click', closeResultTable);

  resetButton.addEventListener('click', resetGame);
};

export default gameLogic;
