
// DOM Indepdent variables
const width = 10;
const height = 10;
let score = 0;
const snake = [0,1,2];
let direction = 'right';
let snakeTimer = null;

$(() => {
  console.log('JS Loaded');

  // DOM Depdendent Variables
  const $cells = $('li');
  const cells = [].slice.call($cells);
  const $score = $('#score');
  let n = snake.slice(-1)[0];

  // Snake creating function
  function whiteClass() {
    cells.forEach((cell, i) => {
      if (snake.includes(i)) {
        $(cell).addClass('white');
      } else {
        $(cell).removeClass('white');
      }
    });
  }

  // Moving functions
  function moveRight() {
    if (!(n % width === width -1)) {
      snake.push(n += 1);
      snake.shift();
      whiteClass();
    } else {
      window.alert('YOU LOSE!');
      clearInterval(snakeTimer);
    }
  }

  function moveLeft() {
    if (!(n % width === 0)) {
      snake.push(n -= 1);
      snake.shift();
      whiteClass();
    } else {
      window.alert('YOU LOSE!');
      clearInterval(snakeTimer);
    }
  }

  function moveDown() {
    if (!(n + width > (width * height) - 1)) {
      snake.push(n + 10);
      n += 10;
      snake.shift();
      whiteClass();
    } else {
      window.alert('YOU LOSE!');
      clearInterval(snakeTimer);
    }
  }

  function moveUp() {
    if (!(n - width < 0)) {
      snake.push(n - 10);
      n -= 10;
      snake.shift();
      whiteClass();
    } else {
      window.alert('YOU LOSE!');
      clearInterval(snakeTimer);
    }
  }

  // Placing random food function
  function placeRandomFood() {
    const randomFood = Math.ceil(Math.random() * 99);
    cells.forEach((cell, i) => {
      if (randomFood === i) cell.classList.add('pink');
    });
  }

  // Eating food function
  function eatFood() {
    score += 1;
    $score.text(score);
    const foodIndex = $('.pink.white').index();
    $('.pink.white').removeClass('pink');
    placeRandomFood();
    snake.unshift(foodIndex);
    whiteClass();
  }

  // Direction change function
  function setIntervalCallback() {
    if (direction === 'right') {
      moveRight();
    } else if (direction === 'left') {
      moveLeft();
    } else if (direction === 'up') {
      moveUp();
    } else if (direction === 'down') {
      moveDown();
    }
    if($('.pink.white').length) {
      eatFood();
    }
  }

  // Keypress changing directions function
  document.addEventListener('keydown', (e) => {
    const keyName = e.key;
    if (keyName === 'ArrowUp') {
      direction = 'up';
    } else if (keyName === 'ArrowDown') {
      direction = 'down';
    } else if (keyName === 'ArrowLeft') {
      direction = 'left';
    } else if (keyName === 'ArrowRight') {
      direction = 'right';
    }
  });

  // Setting timer for snake to move
  snakeTimer = setInterval(setIntervalCallback, 500);

  // Calling functions
  placeRandomFood();
  whiteClass();

});
