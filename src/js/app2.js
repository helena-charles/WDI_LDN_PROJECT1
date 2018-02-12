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

  const letters = ['L', 'E', 'T', 'T', 'E', 'R', 'S'];
  function placeRandomLetter() {
    const randomCell = Math.floor(Math.random() * 100);
    const letterIndex = Math.floor(Math.random() * letters.length);
    letters.forEach((letter, i) => {
      if (letterIndex === i) {
        cells[randomCell].innerHTML = letter;
        cells[randomCell].classList.add('purple');
        //
        // cells.forEach((cell, i) => {
        //   if (randomCell === i) {
        //     cell.classList.add('purple');
        //     cell.innerHTML = letter;
      }
    });
    console.log('the letter index is: ' + letterIndex);
    console.log('the random cell is: ' + randomCell);
    clickEvent();
  }

  //   });
  // }

  // snakeTimer = setInterval(setIntervalCallback, 500);

  placeRandomLetter();

  function clickEvent() {
    cells.forEach((cell) => {
      if ($(cell).hasClass('purple')) {
        $(cell).on('click', (e) => {
          wordArray.push(e.target.innerHTML);
          $(e.target).removeClass('purple');
          e.target.innerHTML = '';
          placeRandomLetter();
          $(cell).off('click');
          console.log(wordArray);
        });
      }
    });
  }
});
