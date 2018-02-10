$(() => {
  console.log('JS Loaded');

  const $cells = $('li');
  const cells = [].slice.call($cells);
  const width = 10;
  const height = 10;

  const snake = [0,1,2];

  let n = snake.slice(-1)[0];
  // console.log(n);

  function whiteClass() {
    cells.forEach((cell, i) => {
      if (snake.includes(i)) {
        $(cell).addClass('white');
      } else {
        $(cell).removeClass('white');
      }
    });
  }

  let snakeTimer = null;

  function moveRight() {
    if (!(n % width === width -1)) {
      console.log('this is the head of the snake' + n);
      snake.push(n ++);
      // n++;
      // console.log('this is the snake after push' + snake);
      snake.shift();
      // console.log('this is the snake after shift' + snake);
      whiteClass();
    } else {
      setTimeout(moveRight, 1000);
      console.log('finished');
    }
  }

  function moveLeft() {
    if (!(n % width === 0)) {
      console.log('this is the head of the snake: ' + n);
      snake.push(n - 1);
      n--;
      console.log('this is the snake after push: ' + snake);
      snake.shift();
      console.log('this is the snake after shift: ' + snake);
      whiteClass();
    } else {
      console.log('finished');
      setTimeout(moveLeft);
    }
  }

  function moveDown() {
    if (!(n + width > (width * height) - 1)) {
      console.log('this is the head of the snake: ' + n);
      snake.push(n + 10);
      n += 10;
      console.log('this is the snake after push: ' + snake);
      snake.shift();
      console.log('this is the snake after shift: ' + snake);
      whiteClass();
    } else {
      console.log('finished');
      setTimeout(moveDown);
    }
  }

  function moveUp() {
    if (!(n - width < 0)) {
      console.log('this is the head of the snake: ' + n);
      snake.push(n - 10);
      n -= 10;
      console.log('this is the snake after push: ' + snake);
      snake.shift();
      console.log('this is the snake after shift: ' + snake);
      whiteClass();
    } else {
      console.log('finished');
      setTimeout(moveUp);
    }
  }

  snakeTimer = setInterval(moveRight, 500);


  function placeRandomFood() {
    const randomFood = Math.ceil(Math.random() * 99);
    // console.log(randomFood);
    cells.forEach((cell, i) => {
      if (randomFood === i) cell.classList.add('purple');
    });
  }

  // function randomFoodTimeout() {
  //   if (cell.classList.contains('purple')) cell.classList.remove('purple');
  // }

  // let foodTimer = null;

  placeRandomFood();
  whiteClass();
  cells.forEach((cell) => {
    if (cell.classList.contains('purple')) {
      placeRandomFood();
      console.log('hello');
    }
  });

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

  //moveRight();

  // function randomFoodTimeout() {
  //   cells.forEach((cell) => {
  //     cell.classList.remove('purple');
  //   });
  // }

  // setTimeout(placeRandomFood, 500);

  // cells.forEach((cell) => {
  //   if ((cell.classList.contains('purple')) && (cell.classList.contains('white'))) {
  //     console.log('contains purple and white');
  //   }
  // });

});
