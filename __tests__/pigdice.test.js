import GameBoard from './../src/pigdice.js';

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
    expect(gameBoard.roll()).toEqual(/1-6/);
  })
});
