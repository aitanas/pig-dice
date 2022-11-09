import { GameBoard, Player, addToTurnScore } from './../src/pigdice.js';

describe('GameBoard', () => {
  let gameBoard;
  beforeEach(() => {
    gameBoard = new GameBoard();
  });

  test('should create GameBoard Object with correct properties', () => {
    expect(gameBoard.players).toEqual({});
    expect(gameBoard.id).toEqual(0);
    expect(gameBoard.turnId).toEqual(0);
    expect(gameBoard.diceRoll).toEqual(0);
  });

  test('should return a random number 1-6', () => {
    let randomNum = gameBoard.roll();
    expect(randomNum).toBeLessThanOrEqual(6);
    expect(randomNum).toBeGreaterThanOrEqual(1);
  });

  test('add Player object to the gameBoard.players property', () => {
    let name = "Jeff";
    let player1 = new Player(name);
    gameBoard.addPlayer(player1);
    expect(gameBoard.players).toEqual({
      name: "Jeff",
      id: 1,
      gameScore: 0,
      turnScore: 0
    });
  });

  test('assign player1 id to assignId()', () => {
    let player1 = new Player("jeff");
    gameBoard.addPlayer(player1);
    expect(player1.id).toEqual(1);
  });

  test('should increment gameBoard id by 1', () => {
    gameBoard.assignId(); 
    expect(gameBoard.id).toEqual(1);
  });
});

describe ('Player', () => {
  let player1;
  beforeEach(() => {
    player1 = new Player("Jeff");
  });
  test('should create a player object with correct properties', () => {
    expect(player1.name).toEqual("Jeff");
    expect(player1.gameScore).toEqual(0);
    expect(player1.turnScore).toEqual(0);
  });

  test('should add 5 to turnScore', () => {
    player1.addToTurnScore();
    expect(player1.turnScore).toEqual(5);
  });
});