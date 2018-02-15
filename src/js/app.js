
// DOM Indepdent variables
let $cells = [];
let $wordHolder = [];
let lives = 3;
let $livesHolder = [];
let $scoreHolder = [];
let $scoreAnimated = [];
let $livesAnimated = [];
let $wrapperAnimated = [];
let $hintHolder = [];
let $playAgainBtn = [];
const width = 10;
let score = 0;
let snake = [0,1,2];
let direction = 'right';
let snakeTimer = null;
let foundLetters = [];
let $container = [];
let $endGameScreen = [];
let $startGameScreen = [];
let correctLetters = [];
let incorrectLetters = [];
let randomWord = {};
let $startGameButton = [];

const allLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let wordsArray = [{
  answer: 'sandwich',
  hint: 'TWO PIECES OF BREAD WITH A FILLING BETWEEN THEM.'
},{
  answer: 'cake',
  hint: 'VICTORIA SPONGE, CARROT, COFFEE, CHOCOLATE.'
},{
  answer: 'ant',
  hint: '6 LEGS, LIVE IN COLONIES, WORSHIP THEIR QUEEN.'
},{
  answer: 'picnic',
  hint: 'BRING A BLANKET TO THE PARK, BRING YOUR FOOD IN A BASKET.'
},{
  answer: 'grass',
  hint: 'LAWNS ARE MADE OF THIS GREEN PLANT.'
},{
  answer: 'blanket',
  hint: 'KEEPS YOU WARM, GOOD FOR SITTING ON GRASS.'
},{
  answer: 'basket',
  hint: 'CAN BE MADE OF WICKER, GOOD FOR CARRYING THINGS.'
},{
  answer: 'jam',
  hint: 'A SWEET SPREAD MADE FROM FRUIT AND SUGAR.'
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
  $container.removeClass('hidden');
  $startGameScreen.addClass('hidden');
}

function endGame() {
  clearInterval(snakeTimer);
  console.log('you lose');
  $cells.removeClass('letter');
  $cells.text('');
  $livesHolder.text('0');
  $container.addClass('hidden');
  $endGameScreen.removeClass('hidden');
  const gameOverSound = new Audio('/sounds/game-over.wav');
  gameOverSound.play();
  direction = 'right';
  // TODO: do other shit
}

function incrementScore() {
  score++;
  $scoreHolder.text(score);
  $scoreAnimated.addClass('animated pulse');
  $scoreAnimated.css({ color: 'gold' });
  setTimeout(() => {
    $scoreAnimated.removeClass('animated pulse');
    $scoreAnimated.css({ color: 'black' });
  }, 1000);
}

function decrementLives() {
  lives--;
  $livesHolder.text(lives);
  if(lives < 1) endGame();
  $livesAnimated.addClass('animated pulse');
  $livesAnimated.css({ color: 'red' });
  setTimeout(() => {
    $livesAnimated.removeClass('animated pulse');
    $livesAnimated.css({ color: 'black' });

  }, 1000);
}

function playMunch() {
  const munchSound = new Audio('/sounds/spuk1.wav');
  munchSound.play();
}

function checkForLetter(nextCellIndex) {
  const $nextCell = $cells.eq(nextCellIndex);
  let snakeShouldGrow = false;

  if($nextCell.hasClass('letter')) {
    const letter = $nextCell.text();
    const letterIndex = correctLetters.indexOf(letter);
    if(randomWord.answer.includes(letter)) {
      playMunch();
      foundLetters.push(letter);
      correctLetters.splice(letterIndex, 1);
      snakeShouldGrow = true;
      updateLetters();
      incrementScore();
      if (foundLetters.length === randomWord.answer.length) {
        clearInterval(snakeTimer);
        startGame();
      }
    } else {
      decrementLives();
      playMunch();
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
    return endGame();
  }

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

function placeLetters() {
  placeRandomLetter(correctLetters[Math.floor(Math.random() * correctLetters.length)]);
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
  $container = $('.container');
  $endGameScreen = $('.endGameScreen');
  $startGameScreen = $('.startGameScreen');
  $startGameButton = $('.startGameButton');

  $scoreHolder = $('#score');
  $scoreAnimated = $('.scoreAnimated');
  $livesAnimated = $('.livesAnimated');
  $wrapperAnimated = $('.wrapperAnimated');
  $playAgainBtn = $('.playAgainBtn');

  $container.addClass('hidden');

  $startGameButton.on('click', () => {
    startGame();
  });
  //startGame();

  // $().on('scroll', (e) => {
  //   e.preventDefault();
  // });

  $().on('keydown', function(e) {
    // space and arrow keys
    if((e.keyName === e.key.toLowerCase().replace('arrow', '')) > -1) {
      e.preventDefault();
    }
  }, false);

  $playAgainBtn.on('click', () => {
    // $wrapperAnimated.addClass('animated pulse');
    // setTimeout(() => {
    //   $wrapperAnimated.removeClass('animated pulse');
    // }, 500);
    clearInterval(snakeTimer);
    $cells.html('');
    snake = [0,1,2];
    score = 0;
    lives = 3;
    $cells.removeClass('snake head letter');
    $container.removeClass('hidden');
    $endGameScreen.addClass('hidden');
    startGame();
    if (wordsArray.length === 0) {
      wordsArray = [{
        answer: 'sandwich',
        hint: 'Two pieces of bread with a filling between them.'
      },{
        answer: 'cake',
        hint: 'Victoria sponge, carrot, coffee, chocolate.'
      },{
        answer: 'ant',
        hint: '6 legs, black body, live in colonies, worship their queen.'
      },{
        answer: 'picnic',
        hint: 'Bring a blanket to the park, bring your food in a basket.'
      },{
        answer: 'grass',
        hint: 'Lawns are made of this green plant.'
      },{
        answer: 'blanket',
        hint: 'Keeps you warm, good for sitting on grass.'
      },{
        answer: 'basket',
        hint: 'Can be made of wicker, good for carrying things.'
      },{
        answer: 'jam',
        hint: 'A sweet spread made from fruit and sugar.'
      }];
    }
  });

  $(document).on('keydown', setDirection);
});
