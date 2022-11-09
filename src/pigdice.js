export function GameBoard() {
  this.players = {};
  this.id = 0;
  this.turnId = 0;
  this.diceRoll = 0;
}
GameBoard.prototype.roll = function() {
  return Math.round(Math.random() * (6-1) + 1);
};

GameBoard.prototype.addPlayer = function(player1) {
  player1.id = this.assignId();
  this.players = player1;
};

GameBoard.prototype.assignId = function() {
  this.id += 1;
  return this.id;
};
// player 
export function Player(name) {
  this.name = name;
  this.gameScore = 0;
  this.turnScore = 0;
}

//
Player.prototype.addToTurnScore = function() {
  return this.turnScore += 5;
}
