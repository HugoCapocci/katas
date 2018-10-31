import TicTacToeGame from './index';

describe('ticTacToc', () => {

  const ticTacToeGame = new TicTacToeGame();

  it('Should has nine fields in a 3x3 grid', () => {
    expect(ticTacToeGame.getGrid().length).toEqual(3);
    expect(ticTacToeGame.getGrid()[0].length).toEqual(3);
    expect(ticTacToeGame.getGrid()[1].length).toEqual(3);
    expect(ticTacToeGame.getGrid()[2].length).toEqual(3);
  });

  it('Should be over when all fields are taken', () => {
    const fullGrid = [
      ['b','b','b'],
      ['b','b','b'],
      ['b','b','b']
    ];
    expect(ticTacToeGame.isFinished(fullGrid)).toEqual(true);
  });

  it('Should not be over when all fields are not taken', () => {
    expect(ticTacToeGame.isFinished()).toEqual(false);
  });

  it('Should have two players in the game (X and O)', () => {
    expect(ticTacToeGame.getPlayer(0)).toEqual('X');
    expect(ticTacToeGame.getPlayer(1)).toEqual('O');
  });

  it('Should be over when all fields in a row are taken by a player', () => {
    const fullGrid = [
      ['X','X','X'],
      ['','',''],
      ['','','']
    ];
    expect(ticTacToeGame.isFinished(fullGrid)).toEqual(true);
  });

  it('Should not be over when all fields in a row are not taken by a player', () => {
    const fullGrid = [
      ['X','O','X'],
      ['','',''],
      ['','','']
    ];
    expect(ticTacToeGame.isFinished(fullGrid)).toEqual(false);
  });

});
