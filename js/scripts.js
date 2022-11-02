
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
  return Math.round(Math.random() * (6-1) + 1);
};

// Business Logic for Player
function Player(name) {
  this.name = name;
  this.gameScore = 0;
}


function newTurn(hold, player) {
  let dice = new Dice();
  let turnScore = 0;

  if(!hold) {
    let roll = dice.roll();
    if(roll === 1)
    {
      console.log("dice roll === 1");
      return 0;
    }
    else {
      turnScore += roll;
      console.log("player scores! " + turnScore);
    }
  }
  else {
    player.gameScore += turnScore;
    console.log("turn end, player held");
    return 0;
  }

  if(player.gameScore >= 100) {
    console.log("score is 100");
    return 0;
  }
  console.log(player.gameScore);
}

