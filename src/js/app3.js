
// DOM Indepdent variables
let $cells = [];
let $wordHolder = [];
let lives = 3;
let $livesHolder = [];
let $scoreHolder = [];
let $hintHolder = [];
let $playAgainBtn = [];
const width = 10;
let score = 0;
const snake = [0,1,2];
let direction = 'right';
let snakeTimer = null;
let foundLetters = [];
const allLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let correctLetters = [];
let incorrectLetters = [];
let randomWord = {};
const wordsArray = [{
  answer: 'cat',
  hint: 'Likes milk.'
},{
  answer: 'fish',
  hint: 'Lives in a bowl, short memory span.'
},{
  answer: 'rat',
  hint: 'Lives in sewers.'
},{
  answer: 'hamster',
  hint: 'Runs in a wheel, sleeps in hay.'
},{
  answer: 'dog',
  hint: 'Man\'s best friend.'
}];

function startGame() {
  // TODO: clear out foundLetters
  foundLetters = [];
  randomWord = getRandomWord();
  correctLetters = randomWord.answer.split('');
  incorrectLetters = allLetters.filter(letter => !randomWord.answer.includes(letter));

  snake.forEach(index => $cells.eq(index).addClass('snake'));
  $cells.eq(snake[snake.length-1]).addClass('head');

  snakeTimer = setInterval(move, 500);
  updateLetters();
  placeLetters();
}

function endGame() {
  clearInterval(snakeTimer);
  console.log('you lose');
  $cells.removeClass('letter');
  $cells.text('');
  // TODO: do other shit
}

function incrementScore() {
  score++;
  $scoreHolder.text(score);
}

function decrementLives() {
  lives--;
  $livesHolder.text(lives);
  if(lives < 1) endGame();
}

function checkForLetter(nextCellIndex) {
  const $nextCell = $cells.eq(nextCellIndex);
  let snakeShouldGrow = false;

  if($nextCell.hasClass('letter')) {
    const letter = $nextCell.text();
    const letterIndex = correctLetters.indexOf(letter);
    if(randomWord.answer.includes(letter)) {
      foundLetters.push(letter);
      correctLetters.splice(letterIndex, 1);
      snakeShouldGrow = true;
      updateLetters();
      incrementScore();

      // TODO: once all letters have been found (foundLetters.length === answer.length)
      if (foundLetters.length === randomWord.answer.length) {
        clearInterval(snakeTimer);
        startGame();
      }
    } else {
      decrementLives();
    }
    $nextCell.removeClass('letter').text('');
    placeLetters(correctLetters, incorrectLetters);
  }

  if(!snakeShouldGrow) snake.shift();
  snake.push(nextCellIndex);
}

function drawSnake(amount) {
  const currentCellIndex = snake[snake.length-1];
  const nextCellIndex = currentCellIndex+amount;
  const $nextCell = $cells.eq(nextCellIndex);

  // lose conditions
  if(
    $nextCell.hasClass('snake') ||
    currentCellIndex % width === 0 && direction === 'left' ||
    currentCellIndex % width === width-1 && direction === 'right' ||
    nextCellIndex < 0 ||
    nextCellIndex > width * width -1
  ) {
    endGame();
  }

  // if(nextSquare < 0 ||
  //   nextSquare > width * height -1 ||
  //   n % width === 0 && direction === 'left' ||
  //   n % width === width-1 && direction === 'right' ||
  //   $(cells[nextSquare]).hasClass('green') ||
  //   lives === 0

  // remove snake
  snake.forEach(index => $cells.eq(index).removeClass('snake head'));

  // does snake grow or not
  checkForLetter(nextCellIndex);

  // redraw snake
  snake.forEach(index => $cells.eq(index).addClass('snake'));
  $cells.eq(snake[snake.length-1]).addClass('head');
}

function getRandomWord() {
  const randomIndex = Math.floor(Math.random() * wordsArray.length);
  return wordsArray.splice(randomIndex, 1)[0];
}

function updateLetters() {
  $wordHolder.empty();
  $hintHolder.empty();
  randomWord.answer.split('').forEach(letter => {
    const content = foundLetters.includes(letter) ? letter : '-';
    $wordHolder.append(`<li>${content}</li>`);
    $hintHolder.html(randomWord.hint);
  });
}

function placeRandomLetter(letter) {
  let randomIndex = Math.floor(Math.random() * $cells.length);
  while($cells.eq(randomIndex).hasClass('snake letter')) {
    randomIndex = Math.floor(Math.random() * $cells.length);
  }
  $cells.eq(randomIndex).addClass('letter').html(letter);
}

function placeLetters(letter) {
  // TODO: make sure correctLetter is not in foundLetters
  // if (!foundLetters.includes(letter)) {
  console.log(letter);
  placeRandomLetter(correctLetters[Math.floor(Math.random() * correctLetters.length)]);
  // }
  placeRandomLetter(incorrectLetters[Math.floor(Math.random() * incorrectLetters.length)]);
}

function setDirection(e) {
  direction = e.key.toLowerCase().replace('arrow', '');
}

function move() {
  if(direction === 'right') drawSnake(1);
  if(direction === 'left') drawSnake(-1);
  if(direction === 'up') drawSnake(-width);
  if(direction === 'down') drawSnake(width);
}

$(() => {
  console.log('JS Loaded');

  // DOM Depdendent Variables
  $cells = $('li');
  $wordHolder = $('.wordHolder');
  $livesHolder = $('#lives');
  $hintHolder = $('#hint');

  $scoreHolder = $('#score');
  $playAgainBtn = $('.playAgainBtn');

  startGame();

  $playAgainBtn.on('click', () => {
    console.log('play again');
  });

  $(document).on('keydown', setDirection);
});
