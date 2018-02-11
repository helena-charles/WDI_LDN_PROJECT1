$(() => {
  console.log('JS Loaded');

  const $cells = $('li');
  const cells = [].slice.call($cells);
  const width = 10;
  const height = 10;
  const $score = $('#score');
  let score = 0;
  let direction = 'right';

  const snake = [0,1,2];

  let n = snake.slice(-1)[0];
  let snakeTimer = null;

  function whiteClass() {
    cells.forEach((cell, i) => {
      if (snake.includes(i)) {
        $(cell).addClass('white');
      } else {
        $(cell).removeClass('white');
      }
    });
  }

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

  function placeRandomFood() {
    const randomFood = Math.ceil(Math.random() * 99);
    cells.forEach((cell, i) => {
      if (randomFood === i) cell.classList.add('purple');
    });
  }

  function eatFood() {
    score += 1;
    $score.text(score);
    const foodIndex = $('.purple.white').index();
    $('.purple.white').removeClass('purple');
    placeRandomFood();
    snake.unshift(foodIndex);
    whiteClass();
  }

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
    if($('.purple.white').length) {
      eatFood();
    }
  }

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

  snakeTimer = setInterval(setIntervalCallback, 500);

  placeRandomFood();
  whiteClass();






});
