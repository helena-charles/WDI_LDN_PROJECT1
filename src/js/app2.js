$(() => {
  console.log('JS Loaded');

  const $cells = $('li');
  const cells = [].slice.call($cells);
  // const $score = $('#score');
  // let score = 0;
  const wordArray = [];

  // choose a random number between 1 and 3
  // choose the letter from the array that corresponds with the index of the random number





  // let snakeTimer = null;


  function placeRandomLetter() {
    const letters = ['L', 'E', 'T', 'T', 'E', 'R', 'S'];
    const letterIndex = Math.floor(Math.random() * letters.length);
    const randomCell = Math.ceil(Math.random() * 99);
    letters.forEach((letter, i) => {
      if (letterIndex === i) {
        cells.forEach((cell, i) => {
          if (randomCell === i) {
            cell.classList.add('purple');
            cell.innerHTML = letter;
          }
        });
        console.log(letterIndex);
        console.log(randomCell);
      }
    });
  }

  // snakeTimer = setInterval(setIntervalCallback, 500);

  placeRandomLetter();


  $cells.on('click', (e) => {
    wordArray.push(e.target.innerHTML);
    placeRandomLetter();
    console.log(e.target.className);
    $(e.target).removeClass('.purple');
    console.log(wordArray);
  });


});
