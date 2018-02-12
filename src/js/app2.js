$(() => {
  console.log('JS Loaded');

  const $cells = $('li');
  const cells = [].slice.call($cells);
  // const $score = $('#score');
  // let score = 0;
  const wordArray = [];

  const letterIndex = Math.ceil(Math.random() * 3);
  const letters = ['L', 'E', 'T'];

// choose a random number between 1 and 3
// choose the letter from the array that corresponds with the index of the random number

  letters.forEach((letter, i) => {
    if (letterIndex === i) {
      console.log(letter);
    }
  });

  // let snakeTimer = null;


  function placeRandomFood() {
    const randomFood = Math.ceil(Math.random() * 99);
    cells.forEach((cell, i) => {
      if (randomFood === i) {
        cell.classList.add('purple');
        cell.innerHTML = letter;
      }
    });
  }


  // snakeTimer = setInterval(setIntervalCallback, 500);

  placeRandomFood();


  $cells.on('click', (e) => {
    wordArray.push(e.target.innerHTML);
    console.log(wordArray);
  });


});
