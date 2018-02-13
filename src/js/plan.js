// Needs to have a grid 10x10 that can be of flexible size
// Snake starts as a certain length
// Needs to move on arrow key press
// Food needs to appear randomly on the grid after a certain amount of time
// Food gets eaten, another one appears after time interval
// Snake gets longer by one piece every time it eats a piece
// Score increases every time you eat some food
// You die when you hit sides
// You die when you hit self ???



// Each piece of food is a letter
// There is a word with a clue at the top
// Catch the right letters to move on to the next level
// 3 chances with wrong letter?
// // Or start with some letters in the word, die on wrong letter
// Some correct letters randomly show
// Some incorrect letters show



// n = current square
// moveUp = n + 10
// moveDown = n - 10
// moveRight = n + 1
// moveLeft = n - 1
// if n % width === 0 --> can't move left
// if n % width === width - 1 --> can't move right
// if n - width < 0 --> can't move up
// if n + width > (width * height) - 1 --> can't move down


// To be able to move, toggle class "snake" on snake cells, as moving in a direction, toggle class off last cell and on next cell
// toggle class "correctLetter" on a correct letter
// toggle class "incorrectLetter" on an incorrect letter




// class Word {
//   constructor(word, correctLetters) {
//     this.word = word;
//     this.correctLetters = correctLetters;
//     // this.incorrectLetters = incorrectLetters;
//   }
//   randomiseWord() {
//   // randomise word from word list (array of objects?)
//   return randomWord;
//   }
// }
//
// const Cat = new Word('cat', ['c', 'a', 't']);
// const Cat = new Word('cat', ['c', 'a', 't'], ['b', 'g', 'o']);



// random index of the words Array
// letters = wordsArray['randomIndex'].letters


// const wordsArray = [
//   {
//     letters: ['c','a','t'],
//     incorrectLetters: ['b', 'g', 'o'],
//     hint: ['Furry animal with whiskers, likes milk']
//   },
//   {
//     letters: ['d','o','g'],
//     incorrectLetters: ['p', 'e', 'l'],
//     hint: ['Furry animal with 4 legs, ']
//   }
// ];

// determine direction snake is moving in and when the snake is 1 cell away (10 if vertical) then eat the food
// change snake to class for ease of using methods like "where is the snake"




// const randomFood = Math.ceil(Math.random() * 99);


// function placeRandomFood() {
//
//   cells.forEach((cell, i) => {
//
//   });
// }
//
// setInterval(randomFood, 1000);

// add extra number onto snake to stop it being too short



// if number of


// if cell has class snake --> do not spawn food there

// if snake eats food, spawn new food
// if (cells.classList.contains(!purple)) {
// placeRandomFood();
// }


// if

// function randomFoodTimeout() {
//   if (cell.classList.contains('purple')) cell.classList.remove('purple');
// }

// let foodTimer = null;

// function randomFoodTimeout() {
//   cells.forEach((cell) => {
//     cell.classList.remove('purple');
//   });
// }


// clearInterval(placeRandomFood, 500);

// cells.forEach((cell) => {
//   if (cell.classList.contains('purple')) {
//     placeRandomFood();
//     console.log('hello');
//   }
// });




// varibale in top of code
// modify, contain directions
// change that on keypress
// use that to determine up down left right on timer
// when eat food determine same variable to know when it's about to eat food

// if arrowDown is clicked, change function inside setIntervalCallback to moveRight etc

// change value of variable on keypress to say which direction
// check which direction
// set and get methods for direction on snake


// Stop snake from hitting itself
// stop snake from moving after losing
// change grid - no borders
// change food

// work on game logic for word game

// function hasDuplicates(snake) {
//   return (new Set(snake)).size !== snake.length;
// }

var categories;         // Array of topics
var chosenCategory;     // Selected catagory
var getHint ;          // Word getHint
var word ;              // Selected word
var guess ;             // Geuss
var geusses = [ ];      // Stored geusses
var lives ;             // Lives
var counter ;           // Count correct geusses
var space;              // Number of spaces in word '-'

// Get elements
var showLives = document.getElementById("mylives");
var showCatagory = document.getElementById("scatagory");
var getHint = document.getElementById("hint");
var showClue = document.getElementById("clue");

// NEW RESULT Function
function result() {
  const wordHolder = document.getElementById('wordHolder');
  const correct = document.createElement('ul');
  let space = null;
  const guesses = [];

  for (var i = 0; i < randomWord.length; i++) {
    correct.setAttribute('id', 'my-word'); //for CSS purposes
    const guess = document.createElement('li');
    guess.setAttribute('class', 'guess');
    if (randomWord[i] === '-') {
      guess.innerHTML = '-';
      space = 1;
    } else {
      guess.innerHTML = '_';
    }

    guesses.push(guess);
    wordHolder.appendChild(correct);
    correct.appendChild(guess);
  }
}

result();

});


// Create guesses ul
result = function () {
  wordHolder = document.getElementById('hold');
  correct = document.createElement('ul');

  for (var i = 0; i < word.length; i++) {
    correct.setAttribute('id', 'my-word');
    guess = document.createElement('li');
    guess.setAttribute('class', 'guess');
    if (word[i] === "-") {
      guess.innerHTML = "-";
      space = 1;
    } else {
      guess.innerHTML = "_";
    }

    guesses.push(guess);
    wordHolder.appendChild(correct);
    correct.appendChild(guess);
  }
}




// Show lives
comments = function () {
  showLives.innerHTML = "You have " + lives + " lives";
  if (lives < 1) {
    showLives.innerHTML = "Game Over";
  }
  for (var i = 0; i < guesses.length; i++) {
    if (counter + space === guesses.length) {
      showLives.innerHTML = "You Win!";
    }
  }
}





// OnClick Function
check = function () {
  list.onclick = function () {
    var guess = (this.innerHTML);
    this.setAttribute("class", "active");
    this.onclick = null;
    for (var i = 0; i < word.length; i++) {
      if (word[i] === guess) {
        guesses[i].innerHTML = guess;
        counter += 1;
      }
    }
    var j = (word.indexOf(guess));
    if (j === -1) {
      lives -= 1;
      comments();
      animate();
    } else {
      comments();
    }
  }
}



// Play
play = function () {
  categories = [
    ["everton", "liverpool", "swansea", "chelsea", "hull", "manchester-city", "newcastle-united"],
    ["alien", "dirty-harry", "gladiator", "finding-nemo", "jaws"],
    ["manchester", "milan", "madrid", "amsterdam", "prague"]
  ];

  chosenCategory = categories[Math.floor(Math.random() * categories.length)];
  word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
  word = word.replace(/\s/g, "-");
  console.log(word);
  buttons();

  guesses = [ ];
  lives = 10;
  counter = 0;
  space = 0;
  result();
  comments();
  selectCat();
  canvas();
}

play();




// Reset

document.getElementById('reset').onclick = function() {
  correct.parentNode.removeChild(correct);
  letters.parentNode.removeChild(letters);
  showClue.innerHTML = "";
  context.clearRect(0, 0, 400, 400);
  play();
}
}






// function for hangman

const word = ['c', 'a', 't'];
const $alphabetLi = $('.alphabetLi');
const $guess = $('.guess');


$alphabetLi.on('click', (e) => {
  const text = e.target.innerHTML;
  const indexInWord = word.indexOf(text);
  if (indexInWord !== -1) {
    $guess.eq(indexInWord).text(text);
  }
});


let lastHole;



lastHole = hole;
return hole;

if (hole === lastHole) {
  console.log('no');
  return randomHole(holes);
}




function remove(array, element) {
    const index = array.indexOf(element);

    if (index !== -1) {
        array.splice(index, 1);
    }
}
