
// DOM Indepdent variables
let $cells = [];
let $wordHolder = [];
let lives = 3;
let $livesHolder = [];
let $scoreHolder = [];
let $scoreAnimated = [];
let $livesAnimated = [];
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

const allLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let wordsArray = [{
  answer: 'SANDWICH',
  hint: 'TWO PIECES OF BREAD WITH A FILLING BETWEEN THEM.'
},{
  answer: 'CAKE',
  hint: 'VICTORIA SPONGE, CARROT, COFFEE, CHOCOLATE.'
},{
  answer: 'ANT',
  hint: '6 LEGS, LIVE IN COLONIES, WORSHIP THEIR QUEEN.'
},{
  answer: 'PARK',
  hint: 'GRASSY AREA, USUALLY POPULATED WITH DOGS, BENCHES, AND PLAYGROUNDS.'
},{
  answer: 'BLANKET',
  hint: 'KEEPS YOU WARM, GOOD FOR SITTING ON GRASS.'
},{
  answer: 'BASKET',
  hint: 'CAN BE MADE OF WICKER, GOOD FOR CARRYING THINGS.'
},{
  answer: 'WASP',
  hint: 'THE EVIL VERSION OF A BEE.'
},{
  answer: 'WATER',
  hint: 'H2O.'
},{
  answer: 'JUICE',
  hint: 'DRINK MADE FROM THE LIQUID IN FRUIT.'
},{
  answer: 'FLOWERS',
  hint: 'PRETTY PLANTS WITH COLOURFUL PETALS.'
},{
  answer: 'CHAIR',
  hint: 'SIT ON THIS AT THE TABLE, OR ON THE GRASS.'
},{
  answer: 'GAME',
  hint: 'A FUN ACTIVITY WITH RULES AND A WINNER.'
},{
  answer: 'JAM',
  hint: 'A SWEET SPREAD MADE FROM FRUIT AND SUGAR.'
},{
  answer: 'LAKE',
  hint: 'BODY OF WATER, YOU MIGHT ROW BOATS ON IT IN THE PARK.'
},{
  answer: 'CUTLERY',
  hint: 'USE THIS SILVERWARE TO EAT FOOD. KNIVES, FORKS, SPOONS.'
},{
  answer: 'HAMPER',
  hint: 'ANOTHER WORD FOR BASKET, YOU MIGHT FIND TREATS IN THEM AT CHRISTMAS.'
},{
  answer: 'PLATE',
  hint: 'EAT FOOD OFF OF THIS, SOMETIMES PAPER, SOMETIMES CHINA.'
},{
  answer: 'RUG',
  hint: 'SIT ON IT ON THE GRASS, ANOTHER WORD FOR BLANKET.'
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
  $scoreHolder.text(score);
  $('.endScoreSpan').text(score);
  $('.endScoreHolder').css({ color: 'white', position: 'absolute', top: '50%', left: '43%', fontSize: '40px', textShadow: '-2px 0 black, 0 2px black, 2px 0 black, 0 -2px black' });

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
    $scoreAnimated.css({ color: 'white' });
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
    $livesAnimated.css({ color: 'white' });

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
  $playAgainBtn = $('.playAgainBtn');

  $container.addClass('hidden');

  $startGameButton.on('click', () => {
    score = 0;
    lives = 3;
    startGame();
  });

  $().on('keydown', function(e) {
    // space and arrow keys
    if((e.keyName === e.key.toLowerCase().replace('arrow', '')) > -1) {
      e.preventDefault();
    }
  }, false);

  $playAgainBtn.on('click', () => {
    clearInterval(snakeTimer);
    $cells.html('');
    direction = 'right';
    snake = [0,1,2];
    lives = 3;
    score = 0;
    $scoreHolder.text(score);
    $('.endScoreSpan').text(score);
    $('.endScoreHolder').css({ color: 'white', position: 'absolute', top: '50%', left: '44%', fontSize: '40px' });
    $livesHolder.text(lives);
    $cells.removeClass('snake head letter');
    $container.removeClass('hidden');
    $endGameScreen.addClass('hidden');
    startGame();
    if (wordsArray.length === 0) {
      wordsArray = [{
        answer: 'SANDWICH',
        hint: 'TWO PIECES OF BREAD WITH A FILLING BETWEEN THEM.'
      },{
        answer: 'LAKE',
        hint: 'BODY OF WATER, YOU MIGHT ROW BOATS ON IT IN THE PARK.'
      },{
        answer: 'CAKE',
        hint: 'VICTORIA SPONGE, CARROT, COFFEE, CHOCOLATE.'
      },{
        answer: 'ANT',
        hint: '6 LEGS, LIVE IN COLONIES, WORSHIP THEIR QUEEN.'
      },{
        answer: 'PARK',
        hint: 'GRASSY AREA, USUALLY POPULATED WITH DOGS, BENCHES, AND PLAYGROUNDS.'
      },{
        answer: 'BLANKET',
        hint: 'KEEPS YOU WARM, GOOD FOR SITTING ON GRASS.'
      },{
        answer: 'BASKET',
        hint: 'CAN BE MADE OF WICKER, GOOD FOR CARRYING THINGS.'
      },{
        answer: 'WASP',
        hint: 'THE EVIL VERSION OF A BEE.'
      },{
        answer: 'WATER',
        hint: 'H2O.'
      },{
        answer: 'JUICE',
        hint: 'DRINK MADE FROM THE LIQUID IN FRUIT.'
      },{
        answer: 'FLOWERS',
        hint: 'PRETTY PLANTS WITH COLOURFUL PETALS.'
      },{
        answer: 'CHAIR',
        hint: 'SIT ON THIS AT THE TABLE, OR ON THE GRASS.'
      },{
        answer: 'GAME',
        hint: 'A FUN ACTIVITY WITH RULES AND A WINNER.'
      },{
        answer: 'JAM',
        hint: 'A SWEET SPREAD MADE FROM FRUIT AND SUGAR.'
      },{
        answer: 'CUTLERY',
        hint: 'USE THIS SILVERWARE TO EAT FOOD. KNIVES, FORKS, SPOONS.'
      }];
    }
  });

  $(document).on('keydown', setDirection);
});
