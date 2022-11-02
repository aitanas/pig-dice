
// Business Logic

// Business Logic for Game Board
function GameBoard() {
  this.players = {};
  this.id = 0;
  this.turn = 0;
}

GameBoard.prototype.addPlayer = function(players) {
  players.id = this.assignId();
  this.players[players.id] = players;
};

GameBoard.prototype.assignId = function() {
  this.id += 1;
  return this.id;
};

// Business Logic for Dice
function Dice(previousRoll, currentRoll) {
  this.previousRoll = previousRoll;
  this.currentRoll = currentRoll;
}

Dice.prototype.roll = function() {
  return Math.floor(Math.random() * (7-1) + 1);
};

// Business Logic for Player
function Player(name, score) {
  this.name = name;
  this.score = score;
}


function newTurn(hold, player) {
  let dice = new Dice();
  if(!hold) {
    if(dice.roll() === 1)
    {
      console.log("dice roll === 1");
      return 0;
    }
    else {
      player.score += dice.roll();
      console.log("player scores!" + player.score);
    }
  }
  else {
    console.log("turn end, player held");
    return 0;
  }

  if(player.score >= 100) {
    console.log("score is 100");
    return 0;
  }
  console.log(player.score);
}

