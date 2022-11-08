import { GameBoard, Player } from './../src/pigdice.js';

describe('GameBoard', () => {
  let gameBoard;
  beforeEach(() => {
    gameBoard = new GameBoard();
  });

  test('should create GameBoard Object with correct properties', () => {
    expect(gameBoard.players).toEqual(0);
    expect(gameBoard.id).toEqual(0);
    expect(gameBoard.turnId).toEqual(0);
    expect(gameBoard.diceRoll).toEqual(0);
  });

  test('should return a random number 1-6', () => {
    let randomNum = gameBoard.roll();
    expect(randomNum).toBeLessThanOrEqual(6);
    expect(randomNum).toBeGreaterThanOrEqual(1);
  });
});

describe ('Player', () => {
  
  test('should create a player object with correct properties', () => {
    let player = new Player("jeff");
    expect(player.name).toEqual("jeff");
    expect(player.gameScore).toEqual(0);
    expect(player.turnScore).toEqual(0);
  });
});

