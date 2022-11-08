import GameBoard from './../src/pigdice.js';

describe('', () => {
  beforeEach(() => {
    let gameBoard = GameBoard();
  });

  test('should create GameBoard Object with correct properties', () => {
    expect(this.player).toEqual({});
    expect(this.id).toEqual(0);
    expect(this.turnId).toEqual(0);
    expect(this.diceRoll).toEqual(0);
  });
});
