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
  this.players = player1;
};

GameBoard.prototype.assignId = function() {
  
};
// player 
export function Player(name) {
  this.name = name;
  this.gameScore = 0;
  this.turnScore = 0;
}

