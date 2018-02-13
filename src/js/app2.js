$(() => {
  console.log('JS Loaded');

  const $cells = $('.boardLi');
  const cells = [].slice.call($cells);
  // const $score = $('#score');
  // let score = 0;
  const currentLetters = [];
  const $hint = $('#hint');

  const wordsArray = [
    {
      letters: ['c','a','t'],
      incorrectLetters: ['b', 'g', 'o'],
      hint: 'Likes milk.'
    },
    {
      letters: ['f','i','s','h'],
      incorrectLetters: ['b', 'g', 'o'],
      hint: 'Lives in a bowl, short memory span.'
    },
    {
      letters: ['r','a','b','b','i','t'],
      incorrectLetters: ['b', 'g', 'o'],
      hint: 'Likes carrots, twitchy nose.'
    },
    {
      letters: ['h','a','m','s','t','e','r'],
      incorrectLetters: ['b', 'g', 'o'],
      hint: 'Runs in a wheel, sleeps in hay.'
    },
    {
      letters: ['d','o','g'],
      incorrectLetters: ['p', 'e', 'l'],
      hint: 'The goodest boy ever.'
    }
  ];

  const randomWordFinder = Math.floor(Math.random() * wordsArray.length);
  const randomWordCorrect = wordsArray[randomWordFinder].letters;
  const randomWordIncorrect = wordsArray[randomWordFinder].incorrectLetters;
  console.log('the random word is: ' + randomWordCorrect);

  const wordHint = wordsArray[randomWordFinder].hint;
  console.log(wordHint);
  $hint.text(wordHint);

  const letters = randomWordCorrect;
  const incorrectLetters = randomWordIncorrect;
  // let lastLetter;

  function placeRandomLetter() {
    const randomCell = Math.floor(Math.random() * 100);
    const letterIndex = Math.floor(Math.random() * letters.length);
    const randomCell2 = Math.floor(Math.random() * 100);
    const incorrectLetterIndex = Math.floor(Math.random() * incorrectLetters.length);
    letters.forEach((letter, i) => {
      if (letterIndex === i) {
        cells[randomCell].innerHTML = letter;
        cells[randomCell].classList.add('pink');
      }
    });
    incorrectLetters.forEach((incorrectLetter, i) => {
      if (incorrectLetterIndex === i) {
        cells[randomCell2].innerHTML = incorrectLetter;
        cells[randomCell2].classList.add('pink');
      }
    });
    console.log('the letter index is: ' + letterIndex);
    console.log('the random cell is: ' + randomCell);
    clickEvent();
  }

  placeRandomLetter();

  const wordHolder = document.getElementsByClassName('wordHolder')[0];

  const hold = document.createElement('ul');
  wordHolder.appendChild(hold);

  randomWordCorrect.forEach(() => {
    const guess = document.createElement('li');
    hold.appendChild(guess);
    guess.classList.add('guess');
    guess.innerHTML = '-';
  });


  function clickEvent() {
    cells.forEach((cell) => {
      if ($(cell).hasClass('pink')) {
        $(cell).on('click', (e) => {
          const text = e.target.innerHTML;
          currentLetters.push(text);
          $(e.target).removeClass('pink');
          e.target.innerHTML = '';
          placeRandomLetter();
          $(cell).off('click');
          console.log('the word array is: ' + currentLetters);
          const indexInWord = randomWordCorrect.indexOf(text);
          const guesses = document.querySelectorAll('.guess');
          if (indexInWord !== -1) {
            guesses[indexInWord].textContent = text;
          }
        });
      }
    });
  }


});
