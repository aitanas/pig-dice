
// Business Logic

// Business Logic for Game Board
function GameBoard() {
  this.players = {};
  this.id = 0;
  this.turn = 0;
}

// Business Logic for Player
function Player(name, score) {
  this.name = name;
  this.score = score;
}

// Business Logic for Dice
function Dice(previousRoll, currentRoll) {
  this.previousRoll = previousRoll;
  this.currentRoll = currentRoll;
}

Dice.prototype.roll() {
  return Math.floor(Math.random() * (7-1) + 1);
}

