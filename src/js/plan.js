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




// class Words {
//   constructor(word, correctLetters, incorrectLetters) {
//     this.word = word;
//     this.correctLetters = correctLetters;
//     this.incorrectLetters = incorrectLetters;
//   }
//   randomiseWord() {
//     // randomise word from word list (array of objects?)
//     return randomWord;
//   }
// }
//
// const Cat = new Word('cat', ['c', 'a', 't'], ['b', 'g', 'o']);




const wordsArray = [
  {
    letters: ['c','a','t'],
    incorrectLetters: ['b', 'g', 'o'],
    hint: ['Furry animal with whiskers, likes milk']
  },
  {
    letters: ['d','o','g'],
    incorrectLetters: ['p', 'e', 'l'],
    hint: ['Furry animal with 4 legs, ']
  }
];

// determine direction snake is moving in and when the snake is 1 cell away (10 if vertical) then eat the food
// change snake to class for ease of using methods like "where is the snake"




// const randomFood = Math.ceil(Math.random() * 99);


function placeRandomFood() {

  cells.forEach((cell, i) => {

  });
}

setInterval(randomFood, 1000);

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

// next to snake variable
// new varibale called direction
// assign string calue to it
// value = 'right'

// event listener - value direction = up down left right

// set interval callback -- call based on value of directions
// if direction === left, moveLeft()







// Stop snake from hitting itself
// stop snake from moving after losing
// change grid - no borders
// change food

// work on game logic for word game
