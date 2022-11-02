# Pig Dice
### A JavaScript Dice Rolling Game

##### By Aitana Shough, Yodel Guanzon, and Jennifer Holcomb

## Technologies Used

* JavaScript
* HTML / CSS
* Bootstrap
* Git

## Setup/Installation Requirements

This application may be played online in your browser via the corresponding [**GitHub pages site**](https://github.io/aitanas/pig-dice).

Alternatively, you may clone this project to your local machine by using the following command:
```
git clone https://github.com/aitanas/pig-dice.git
```
Directions after cloning are as follows:
1. Open the **pig-dice** directory.
2. Open the file named **index.html** with an internet browser (i.e. Google Chrome) of your choice.
3. Enjoy!

## How To Play

Pig Dice is a game for 2-10 players in which each player takes turns rolling dice. 
* If a player rolls a number between 2 and 6, that number gets added to their turn's score. The player may then choose to hold, which adds the turn score to their overall score, or roll again.
* If a player rolls a 1, the turn automatically ends and no points are given to the player's score.
* The first player to reach a score of 100 wins.

## Tests
```
Gameplay: each player rolls a dice
- if the player rolls anything other than a 1, the roll value gets added to their score that turn. player can choose to "hold" and keep score or keep rolling
- if player rolls a 1, they score 0 and their turn ends
- first player to score 100 wins

Describe Gameboard()

Test: It will create a gameBoard object with two keys: player and score.
Code: let gameBoard = new Gameboard();
Expected Output: 
gameBoard = {
  player:
  id:
  turn:
}

Describe: Dice()
Test: It will create a dice object for the game.
Code: let dice = new Dice()
Expected Output:
dice = {
  previous roll:
  current roll:
}

Describe: Player()
Test: It will create a player object for the game.
Code: let player = new Player()
Expected Output:
player = {
  name:
  score:
}

Describe: Dice.prototype.roll()
Test: It will roll a dice, returning a number 1-6.
Code: dice.roll()

Describe: newTurn()
Test: It should stop the turn (return 0) if the user chose to hold
Code: newTurn(hold)  where hold === true
Expected output: 0;

Test: It should roll the dice the turn (return 0) if the user chose to roll
Code: newTurn(hold) where hold === false
Expected output: 3;

Test: It should add the diceroll to the player's score if it's not 1
Code: newTurn(hold) where hold === false
      score = 0;
Expected output: 
      diceroll = 3;
      score = 3;

Test: It should end the turn if the player rolls a 1
Code: newTurn(hold) where hold === false
Expected Output:
      diceroll = 1;
      return 0;

Test: If the player rolls a 1, then their score for the turn will be set to 0. Their game score will not change.
Code: newTurn(hold) where hold === false
      turnScore = 2;
      gameScore = 14;
Expected Output: 
      diceroll = 1
      turnScore = 0;
      gameScore = 14;

Test: If the player chooses to hold, the turnScore will be added to the player's gameScore.
Code: newTurn(hold) where hold === true
      turnScore = 5;
      gameScore = 14;
Expected Output: 
      turnScore = 0; (turn ends)
      gameScore = 19;
```

## Known Bugs

* None at this time

## License

**MIT License**

Copyright (c) 2022 Aitana Shough, Yodel Guanzon, and Jennifer Holcomb

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.