
// Business Logic

// Business Logic for Game Board
function GameBoard() {
  this.players = {};
  this.id = 0;
  this.turn = 0;
}

GameBoard.prototype.addPlayer = function(player) {
  players.id = this.assignId();
  this.players[player.id] = player;
}

GameBoard.prototype.assignId = function() {
  this.id += 1;
  return this.id;
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

