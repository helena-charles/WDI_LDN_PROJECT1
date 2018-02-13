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
      alreadyFoundCorrectLetters: [],
      hint: 'Likes milk.'
    },
    {
      letters: ['f','i','s','h'],
      incorrectLetters: ['b', 'g', 'o'],
      alreadyFoundCorrectLetters: [],
      hint: 'Lives in a bowl, short memory span.'
    },
    {
      letters: ['r','a','b','b','i','t'],
      incorrectLetters: ['b', 'g', 'o'],
      alreadyFoundCorrectLetters: [],
      hint: 'Likes carrots, twitchy nose.'
    },
    {
      letters: ['h','a','m','s','t','e','r'],
      incorrectLetters: ['b', 'g', 'o'],
      alreadyFoundCorrectLetters: [],
      hint: 'Runs in a wheel, sleeps in hay.'
    },
    {
      letters: ['d','o','g'],
      incorrectLetters: ['p', 'e', 'l'],
      alreadyFoundCorrectLetters: [],
      hint: 'Man\'s best friend.'
    }
  ];

  const randomWordFinder = Math.floor(Math.random() * wordsArray.length);
  const randomWordCorrect = wordsArray[randomWordFinder].letters;
  const randomWordAlreadyFoundCorrect = wordsArray[randomWordFinder].alreadyFoundCorrectLetters;
  const randomWordIncorrect = wordsArray[randomWordFinder].incorrectLetters;
  console.log('the random word is: ' + randomWordCorrect);

  const wordHint = wordsArray[randomWordFinder].hint;
  console.log(wordHint);
  $hint.text(wordHint);

  const incorrectLetters = randomWordIncorrect;
  // let lastLetter;

  function placeRandomLetter() {
    const letters = randomWordCorrect.filter(l => randomWordAlreadyFoundCorrect.indexOf(l) === -1);
    const randomCell = Math.floor(Math.random() * 100);
    const letterIndex = Math.floor(Math.random() * letters.length);
    const randomCell2 = Math.floor(Math.random() * 100);
    const incorrectLetterIndex = Math.floor(Math.random() * incorrectLetters.length);
    cells[randomCell].innerHTML = letters[letterIndex];
    cells[randomCell].classList.add('pink');

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

  const guesses = document.querySelectorAll('.guess');

  function clickEvent() {
    cells.forEach((cell) => {
      if ($(cell).hasClass('pink')) {
        $(cell).on('click', (e) => {

          const text = e.target.innerHTML;
          currentLetters.push(text);
          $(e.target).removeClass('pink');
          e.target.innerHTML = '';
          $(cell).off('click');
          console.log('the word array is: ' + currentLetters);
          const indexInWord = randomWordCorrect.indexOf(text);
          if (indexInWord !== -1) {
            randomWordAlreadyFoundCorrect.push(text);
            guesses[indexInWord].textContent = text;
          }
          if ( Array.from($('.wordHolder ul li')).map(node => node.innerText).join('') === randomWordCorrect.join('')) {
            return;
          }
          $cells.text('');
          placeRandomLetter();
        });
      }
    });
  }

  const $playAgainBtn = $('.playAgainBtn');

  $playAgainBtn.on('click', () => {
    $cells.html('');
    $(guesses).html('-');
    console.log('play again');
    placeRandomLetter();
    clickEvent();
  });

});
