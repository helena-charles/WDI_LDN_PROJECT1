
// DOM Indepdent variables
const width = 10;
const height = 10;
let score = 0;
const snake = [0,1,2];
let direction = 'right';
let snakeTimer = null;
const currentLetters = [];
const wordsArray = [{
  letters: ['c','a','t'],
  answer: 'cat',
  incorrectLetters: ['b', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 'u', 'v', 'w', 'x', 'y', 'z'],
  alreadyFoundCorrectLetters: [],
  hint: 'Likes milk.'
},{
  letters: ['f','i','s','h'],
  answer: 'fish',
  incorrectLetters: ['a', 'b', 'c', 'd', 'e', 'g', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
  alreadyFoundCorrectLetters: [],
  hint: 'Lives in a bowl, short memory span.'
},{
  letters: ['r','a','t'],
  answer: 'rat',
  incorrectLetters: ['b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'u', 'v', 'w', 'x', 'y', 'z'],
  alreadyFoundCorrectLetters: [],
  hint: 'Lives in sewers.'
},{
  letters: ['h','a','m','s','t','e','r'],
  answer: 'hamster',
  incorrectLetters: ['b', 'c', 'd', 'f', 'g', 'i', 'j', 'k', 'l', 'n', 'o', 'p', 'q', 'u', 'v', 'w', 'x', 'y', 'z'],
  alreadyFoundCorrectLetters: [],
  hint: 'Runs in a wheel, sleeps in hay.'
},{
  letters: ['d','o','g'],
  incorrectLetters: ['a', 'b', 'c', 'e', 'f', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
  alreadyFoundCorrectLetters: [],
  hint: 'Man\'s best friend.'
}];

$(() => {
  console.log('JS Loaded');

  // DOM Depdendent Variables
  const $cells = $('li');
  const cells = [].slice.call($cells);
  const $score = $('#score');
  // let n = 0;
  let n = snake.slice(-1)[0];
  $(cells[n]).addClass('snakeHead').removeClass('green');
  const $hint = $('#hint');
  const wordHolder = document.getElementsByClassName('wordHolder')[0];
  const $livesHolder = $('#lives');
  let lives = 3;
  const $playAgainBtn = $('.playAgainBtn');
  const hold = document.createElement('ul');
  wordHolder.appendChild(hold);


  console.log(snake[n]);



  // Variables that rely on wordsArray
  const randomWordFinder = Math.floor(Math.random() * wordsArray.length);
  const randomWordCorrect = wordsArray[randomWordFinder].letters;
  const randomWordAlreadyFoundCorrect = wordsArray[randomWordFinder].alreadyFoundCorrectLetters;
  const randomWordIncorrect = wordsArray[randomWordFinder].incorrectLetters;
  const wordHint = wordsArray[randomWordFinder].hint;
  const incorrectLetters = randomWordIncorrect;
  $hint.text(wordHint);

  // Creating empty guess spaces from length of word
  randomWordCorrect.forEach(() => {
    const guess = document.createElement('li');
    hold.appendChild(guess);
    $(guess).addClass('guess');
    $(guess).html('-');
  });

  // Creating guesses array from all li with the class guess
  const guesses = document.querySelectorAll('.guess');

  // Snake creating function
  function whiteClass() {
    cells.forEach((cell, i) => {
      if (snake.includes(i)) {
        $(cell).addClass('green');
      } else {
        $(cell).removeClass('green');
      }
    });
  }

  // Moving functions
  function move() {
    let nextSquare;
    if(direction === 'right') nextSquare = n+1;
    if(direction === 'left') nextSquare = n-1;
    if(direction === 'up') nextSquare = n-width;
    if(direction === 'down') nextSquare = n+width;

    if(nextSquare < 0 ||
      nextSquare > width * height -1 ||
      n % width === 0 && direction === 'left' ||
      n % width === width-1 && direction === 'right' ||
      $(cells[nextSquare]).hasClass('green') ||
      lives === 0
    ) {
      console.log('YOU LOSE!');
      return clearInterval(snakeTimer);
    }
    snake.push(nextSquare);
    snake.shift();
    whiteClass();
  }

  // Placing random letter function
  function placeRandomLetter() {
    const letters = randomWordCorrect.filter(l => randomWordAlreadyFoundCorrect.indexOf(l) === -1);
    const randomCell = Math.floor(Math.random() * 100);
    const letterIndex = Math.floor(Math.random() * letters.length);
    const randomCell2 = Math.floor(Math.random() * 100);
    const incorrectLetterIndex = Math.floor(Math.random() * incorrectLetters.length);
    cells[randomCell].innerHTML = letters[letterIndex];
    cells[randomCell].classList.add('yellow');

    cells[randomCell2].innerHTML = incorrectLetters[incorrectLetterIndex];
    cells[randomCell2].classList.add('yellow', 'incorrectMF');
  }

  // Calling function initially
  placeRandomLetter();

  // Eating food function
  function eatFood() {
    score += 1;
    $score.text(score);
    const foodIndex = $('.yellow.snakeHead').index();
    const $foodCell = $('.yellow.green');
    $foodCell.removeClass('yellow');
    const letter = $foodCell.html();
    console.log(letter);
    currentLetters.push(letter);
    console.log('the word array is: ' + currentLetters);
    const indexInWord = randomWordCorrect.indexOf(letter);
    if (indexInWord !== -1) {
      randomWordAlreadyFoundCorrect.push(letter);
      guesses[indexInWord].textContent = letter;
    }
    if ($('.wordHolder ul li').text() === wordsArray[randomWordFinder].answer) {
      console.log('WIN WIN WIN!');
      $foodCell.html('');
      // game has been won.
      // stop snake moving
      clearInterval(snakeTimer);
      // select a new random word
      // clear the board
      $cells.html('');
      $(guesses).html('-');
      // $foodCell.removeClass('yellow');
      // add the snake again
      // whiteClass();
      // move();
      // start the game
      return;
    }

    $cells.text('');
    $cells.removeClass('yellow');
    placeRandomLetter();
    // placeRandomFood();
    snake.unshift(foodIndex);
    whiteClass();
  }

  function removeLife() {
    lives -= 1;
    $livesHolder.text(lives);
  }

  // Direction change function
  function setIntervalCallback() {
    move();
    if($cells.eq(n).hasClass('yellow')) eatFood();
    else if($cells.eq(n).hasClass('incorrectMF')) removeLife();
    n = snake.slice(-1)[0];
    $cells.removeClass('snakeHead');
    $cells.eq(n).removeClass('green').addClass('snakeHead');
  }

  // Keypress changing directions function
  document.addEventListener('keydown', (e) => {
    direction = e.key.toLowerCase().replace('arrow', '');
  });

  // Setting timer for snake to move
  snakeTimer = setInterval(setIntervalCallback, 500);

  // Calling functions
  // placeRandomFood();
  whiteClass();

  // Play again function click event
  $playAgainBtn.on('click', () => {
    $cells.html('');
    $(guesses).html('-');
    console.log('play again');
    placeRandomLetter();
  });

});
