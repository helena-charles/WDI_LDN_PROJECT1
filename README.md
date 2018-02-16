![image](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

# GA WDI-32 Project 1 - Spelling Ant

For our first project, we were given a week to design and build an in-browser game using HTML, CSS and JavaScript (jQuery library used). Spelling Ant is a combination between Hangman and the classic Snake game.

#### [Visit website](https://spelling-ant.herokuapp.com/) for best playing experience (the game was not designed for mobile).

---

##### Spelling Ant is a game that requires the player to think on the move. The game board is made up of the picnic blanket, the player cannot travel onto the grass. If the player hits another part of the ant line, or goes out of the game board area, the game is over.

<p align="center"><img src="https://i.imgur.com/nwGWshx.png" width="700"></p>

##### The player must check the hint at the top of the game screen, work out the word, and lead the ants to the correct letters to fill in that word using the arrow keys. The player must avoid the letters that aren't in the word, each incorrect letter means one life lost. The player has 3 lives, if all 3 lives are lost, it's game over.

<p align="center"><img src="https://i.imgur.com/QMzy3n3.png" width="700"></p>

##### As the player eats the crumbs with letters on, more crumbs will appear - some correct, some incorrect. The game gets harder as time goes on, as there are more and more incorrect letters to dodge.

<p align="center"><img src="https://i.imgur.com/a3rqDFx.png" width="700"></p>

##### If the player loses all 3 lives, goes out of the game board area, or hits another ant in the ant line, the game over screen is shown with their final score. The play again button will restart the game.

---

Overall I am pleased with the final product of the game. The game logic for the words section of the game took longer than I expected, which left me with less time than I had hoped for styling and any extras. The game could be developed by adding timers, more levels, more words, more themes, and speeding up the line of ants (snake) on a further level to make the game harder.


## Setup instructions

- Clone or download the repo
- Install dependencies with `yarn install`
- Launch the app with `gulp`

>**NB**: You will need to have installed `gulp-cli` globally
