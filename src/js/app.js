$(() => {
  console.log('JS Loaded');

  const $cells = $('li');
  const cells = [].slice.call($cells);
  const width = 10;
  const height = 10;
  const $score = $('#score');
  let score = 0;

  const snake = [95,85,75];

  let n = snake.slice(-1)[0];
  // console.log(n);
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
      console.log('this is the head of the snake' + n);
      snake.push(n += 1);
      // console.log('this is the snake after push' + snake);
      snake.shift();
      // console.log('this is the snake after shift' + snake);
      whiteClass();
    } else {
      clearInterval(snakeTimer);
      console.log('finished');
    }
  }

  function moveLeft() {
    if (!(n % width === 0)) {
      console.log('this is the head of the snake: ' + n);
      snake.push(n -= 1);
      // n--;
      // console.log('this is the snake after push: ' + snake);
      snake.shift();
      // console.log('this is the snake after shift: ' + snake);
      whiteClass();
    } else {
      console.log('finished');
      clearInterval(snakeTimer);
    }
  }

  function moveDown() {
    if (!(n + width > (width * height) - 1)) {
      console.log('this is the head of the snake: ' + n);
      snake.push(n + 10);
      n += 10;
      // console.log('this is the snake after push: ' + snake);
      snake.shift();
      // console.log('this is the snake after shift: ' + snake);
      whiteClass();
    } else {
      console.log('finished');
      clearInterval(snakeTimer);
    }
  }

  function moveUp() {

    if (!(n - width < 0)) {
      console.log('this is the head of the snake: ' + n);
      snake.push(n - 10);
      n -= 10;
      // console.log('this is the snake after push: ' + snake);
      snake.shift();
      // console.log('this is the snake after shift: ' + snake);
      whiteClass();
    } else {
      console.log('finished');
      clearInterval(snakeTimer);
    }
  }

  function placeRandomFood() {
    const randomFood = Math.ceil(Math.random() * 99);
    // console.log(randomFood);
    cells.forEach((cell, i) => {
      if (55 === i) cell.classList.add('purple');
    });
  }

  function eatFood() {
    score += 1;
    $score.text(score);
    const foodIndex = $('.purple.white').index();
    console.log(foodIndex);
    $('.purple.white').removeClass('purple');
    // placeRandomFood();
    snake.unshift(85);
    whiteClass();
    console.log(snake);
  }

  function setIntervalCallback() {
    if($('.purple.white').length) {
      console.log('is on food');
      eatFood();
    }
    moveUp();
  }

  snakeTimer = setInterval(setIntervalCallback, 500);

  placeRandomFood();
  whiteClass();

  // document.addEventListener('keydown', (e) => {
  //   const keyName = e.key;
  //   if (keyName === 'ArrowUp') {
  //     moveUp();
  //   } else if (keyName === 'ArrowDown') {
  //     moveDown();
  //   } else if (keyName === 'ArrowLeft') {
  //     moveLeft();
  //   } else if (keyName === 'ArrowRight') {
  //     moveRight();
  //   }
  // });


  // cells.forEach((cell) => {
  //   if ((cell.classList.contains('purple')) && (cell.classList.contains('white'))) {
  //     console.log('contains purple and white');
  //   }
  // });

  // console.log((randomFood.classList.contains('purple')) && (randomFood.classList.contains('white')));


});
