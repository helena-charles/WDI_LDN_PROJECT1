
// DOM Independent Variables
// const currentLetters = [];

$(() => {
  console.log('JS Loaded');

  // DOM Dependent Variables
  // const $cells = $('.boardLi');
  // const cells = [].slice.call($cells);
  // const $hint = $('#hint');
  // const wordHolder = document.getElementsByClassName('wordHolder')[0];
  // const $playAgainBtn = $('.playAgainBtn');
  // const hold = document.createElement('ul');
  // wordHolder.appendChild(hold);

  // const wordsArray = [
  //   {
  //     letters: ['c','a','t'],
  //     incorrectLetters: ['b', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 'u', 'v', 'w', 'x', 'y', 'z'],
  //     alreadyFoundCorrectLetters: [],
  //     hint: 'Likes milk.'
  //   },
  //   {
  //     letters: ['f','i','s','h'],
  //     incorrectLetters: ['a', 'b', 'c', 'd', 'e', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
  //     alreadyFoundCorrectLetters: [],
  //     hint: 'Lives in a bowl, short memory span.'
  //   },
  //   {
  //     letters: ['r','a','t'],
  //     incorrectLetters: ['b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'u', 'v', 'w', 'x', 'y', 'z'],
  //     alreadyFoundCorrectLetters: [],
  //     hint: 'Lives in sewers.'
  //   },
  //   {
  //     letters: ['h','a','m','s','t','e','r'],
  //     incorrectLetters: ['b', 'c', 'd', 'f', 'g', 'i', 'j', 'k', 'l', 'n', 'o', 'p', 'q', 'u', 'v', 'w', 'x', 'y', 'z'],
  //     alreadyFoundCorrectLetters: [],
  //     hint: 'Runs in a wheel, sleeps in hay.'
  //   },
  //   {
  //     letters: ['d','o','g'],
  //     incorrectLetters: ['a', 'b', 'c', 'e', 'f', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
  //     alreadyFoundCorrectLetters: [],
  //     hint: 'Man\'s best friend.'
  //   }
  // ];
  //
  // // Variables that rely on wordsArray
  // const randomWordFinder = Math.floor(Math.random() * wordsArray.length);
  // const randomWordCorrect = wordsArray[randomWordFinder].letters;
  // const randomWordAlreadyFoundCorrect = wordsArray[randomWordFinder].alreadyFoundCorrectLetters;
  // const randomWordIncorrect = wordsArray[randomWordFinder].incorrectLetters;
  // const wordHint = wordsArray[randomWordFinder].hint;
  // const incorrectLetters = randomWordIncorrect;
  // $hint.text(wordHint);



  // // Creating empty guess spaces from length of word
  // randomWordCorrect.forEach(() => {
  //   const guess = document.createElement('li');
  //   hold.appendChild(guess);
  //   guess.classList.add('guess');
  //   guess.innerHTML = '-';
  // });
  //
  // // Creating guesses array from all li with the class guess
  // const guesses = document.querySelectorAll('.guess');

  // Function for placing random letter including clickEvent
  // function placeRandomLetter() {
  //   const letters = randomWordCorrect.filter(l => randomWordAlreadyFoundCorrect.indexOf(l) === -1);
  //   const randomCell = Math.floor(Math.random() * 100);
  //   const letterIndex = Math.floor(Math.random() * letters.length);
  //   const randomCell2 = Math.floor(Math.random() * 100);
  //   const incorrectLetterIndex = Math.floor(Math.random() * incorrectLetters.length);
  //   cells[randomCell].innerHTML = letters[letterIndex];
  //   cells[randomCell].classList.add('pink');
  //
  //   letters.forEach((letter, i) => {
  //     if (letterIndex === i) {
  //       cells[randomCell].innerHTML = letter;
  //       cells[randomCell].classList.add('pink');
  //     }
  //   });
  //   incorrectLetters.forEach((incorrectLetter, i) => {
  //     if (incorrectLetterIndex === i) {
  //       cells[randomCell2].innerHTML = incorrectLetter;
  //       cells[randomCell2].classList.add('pink');
  //     }
  //   });
  //   clickEvent();
  // }

  // // Calling function initially
  // placeRandomLetter();
  //
  // // Click function
  // function clickEvent() {
  //   cells.forEach((cell) => {
  //     if ($(cell).hasClass('pink')) {
  //       $(cell).on('click', (e) => {
  //         const text = e.target.innerHTML;
  //         currentLetters.push(text);
  //         $(e.target).removeClass('pink');
  //         e.target.innerHTML = '';
  //         $(cell).off('click');
  //         console.log('the word array is: ' + currentLetters);
  //         const indexInWord = randomWordCorrect.indexOf(text);
  //         if (indexInWord !== -1) {
  //           randomWordAlreadyFoundCorrect.push(text);
  //           guesses[indexInWord].textContent = text;
  //         }
  //         if ( Array.from($('.wordHolder ul li')).map(node => node.innerText).join('') === randomWordCorrect.join('')) {
  //           return;
  //         }
  //         $cells.text('');
  //         placeRandomLetter();
  //       });
  //     }
  //   });
  // }

  // // Play again function click event
  // $playAgainBtn.on('click', () => {
  //   $cells.html('');
  //   $(guesses).html('-');
  //   console.log('play again');
  //   placeRandomLetter();
  //   clickEvent();
  // });

});
