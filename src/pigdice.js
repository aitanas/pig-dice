export default function GameBoard() {
  this.players = 0;
  this.id = 0;
  this.turnId = 0;
  this.diceRoll = 0;
}
GameBoard.prototype.roll = function() {
  return Math.round(Math.random() * (6-1) + 1);
};

// player 
function Player(name) {
  
}
