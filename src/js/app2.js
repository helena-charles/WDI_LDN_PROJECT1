$(() => {
  console.log('JS Loaded');

  const $cells = $('.boardLi');
  const cells = [].slice.call($cells);
  const $score = $('#score');
  let score = 0;
  const wordArray = [];
  const $hint = $('#hint');
  const $wordInPlay = $('#wordInPlay');

  // choose a random number between 1 and 3
  // choose the letter from the array that corresponds with the index of the random number

  const wordsArray = [
    {
      letters: ['c','a','t'],
      // incorrectLetters: ['b', 'g', 'o'],
      hint: 'Furry animal with whiskers, likes milk'
    },
    {
      letters: ['f','i','s','h'],
      // incorrectLetters: ['b', 'g', 'o'],
      hint: 'Lives in a bowl, short memory span'
    },
    {
      letters: ['r','a','b','b','i','t'],
      // incorrectLetters: ['b', 'g', 'o'],
      hint: 'Likes carrots, twitchy nose'
    },
    {
      letters: ['h','a','m','s','t','e','r'],
      // incorrectLetters: ['b', 'g', 'o'],
      hint: 'Likes running in a wheel, sleeps in hay'
    },
    {
      letters: ['d','o','g'],
      // incorrectLetters: ['p', 'e', 'l'],
      hint: 'The goodest boy ever'
    }
  ];

  const randomWordFinder = Math.floor(Math.random() * wordsArray.length);
  const randomWord = wordsArray[randomWordFinder].letters;
  console.log('the random word is: ' + randomWord);

  const wordHint = wordsArray[randomWordFinder].hint;
  console.log(wordHint);
  $hint.text(wordHint);



  // let snakeTimer = null;

  const letters = randomWord;

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

  const wordHolder = document.getElementsByClassName('wordHolder')[0];
  const hold = document.createElement('ul');
  wordHolder.appendChild(hold);
  const guess = document.createElement('li');
  hold.appendChild(guess);

  const word = ['c', 'a', 't'];
  // const $alphabetLi = $('.alphabetLi');
  // const $guess = $('.guess');

  function clickEvent() {
    cells.forEach((cell) => {
      if ($(cell).hasClass('purple')) {
        $(cell).on('click', (e) => {
          const text = e.target.innerHTML;
          wordArray.push(text);
          $(e.target).removeClass('purple');
          e.target.innerHTML = '';
          placeRandomLetter();
          $(cell).off('click');
          console.log('the word array is: ' + wordArray);
          $wordInPlay.text(wordArray);
          // score += 1;
          // $score.text(score);

          console.log('testing' + text);
          const indexInWord = word.indexOf(text);
          if (indexInWord !== -1) {
            guess.eq(indexInWord).text(text);
          }
        });
      }
    });
  }


  //
  // $alphabetLi.on('click', (e) => {
  //   const text = e.target.innerHTML;
  //   const indexInWord = word.indexOf(text);
  //   if (indexInWord !== -1) {
  //     $guess.eq(indexInWord).text(text);
  //   }
  // });


  // if the wordInPlay contains the chosen letter, change the inner HTML of wordHolder to reflect that


});
