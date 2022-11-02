
// Business Logic -----------------------------------

// Business Logic for Game Board
function GameBoard() {
  this.players = {};
  this.id = 0;
  this.turnId = 0;
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
  this.turnScore = 0;
}

// Game Turn Function
function newTurn(hold, player) {
  let dice = new Dice();

  if (!hold) {
    let roll = dice.roll();
    if (roll === 1) {
      console.log("dice roll === 1");
      player.turnScore = 0;
      if(gameBoard.turnId <= Object.keys(gameBoard.players).length) {
        gameBoard.turnId += 1;
      }
      else {
        gameBoard.turnId = 1;
      }      
      return 0;
    } else {
      player.turnScore += roll;
      console.log("player scores! " + player.turnScore);
    }
  } else {
    console.log("Turn Score: " + player.turnScore);
    player.gameScore += player.turnScore;
    console.log("turn end, player held: " + player.gameScore);
    player.turnScore = 0;
    gameBoard.turnId += 1;
    return 0;
  }

  if (player.gameScore >= 100) {
    console.log("score is 100," + player +" wins!");
    return 0;
  }
  console.log("Game Score:" + player.gameScore + "Turn Score: " + player.turnScore);
}

// UI Logic -----------------------------------
let gameBoard = new GameBoard();

function handleGameStart() {
  e.preventDefault;
// const addPlayer = document.querySelector("input#player-add")  
  const player1Input = document.querySelector("input#player1").value;
  const player2Input = document.querySelector("input#player2").value;
  let player1 = new Player(player1Input);
  let player2 = new Player(player2Input);
  gameBoard.addPlayer(player1);
  gameBoard.addPlayer(player2);
  gameBoard.turnId = 1;
  const holdButton = document.querySelector("button.hold");
  const rollButton = document.querySelector("button.roll");
  newTurn(false, player1); // run first turn: player 1 rolls die
  // then we branch depending on which option player1 picks

  holdButton.removeAttribute("disabled");
  rollButton.removeAttribute("disabled");
 

//  p>Player: <span id="player-name"> </p>
//  <p>Turn Score: <span id="turn-score"> </p>
//  <p>Current Score: <span id="current-score"> </p>
//  <p>Roll: <span id="dice-roll"> </p>

}

function handleHold() {
  e.preventDefault;
  let player = gameBoard.players[gameBoard.turnId];  
  newTurn(true, player);
}

function handleRoll() {
  e.preventDefault;
  let player = gameBoard.players[gameBoard.turnId];
  newTurn(false, player);
}

window.addEventListener("load", function () {
  document.querySelector("form#form").addEventListener("submit", handleGameStart);
  document.querySelector("button.hold").addEventListener("click", handleHold);
  document.querySelector("button.roll").addEventListener("click", handleRoll);
});