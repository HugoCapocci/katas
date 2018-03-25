import { getGrid, isFinished, getPlayer } from './index';

describe.only('ticTacToc', () => {
  it('Should has nine fields in a 3x3 grid', () => {
    expect(getGrid().length).toEqual(3);
    expect(getGrid()[0].length).toEqual(3);
    expect(getGrid()[1].length).toEqual(3);
    expect(getGrid()[2].length).toEqual(3);
  });

  it('Should be over when all fields are taken', () => {
    const fullGrid = [
      ['b','b','b'],
      ['b','b','b'],
      ['b','b','b'],
    ]
    expect(isFinished(fullGrid)).toEqual(true);
  });

  it('Should not be over when all fields are not taken', () => {
    const fullGrid = [
      ['','b','b'],
      ['b','b','b'],
      ['b','b','b'],
    ];
    expect(isFinished(fullGrid)).toEqual(false);
  });

  it('Should have two players in the game (X and O)', () => {
    expect(getPlayer(0)).toEqual('X');
    expect(getPlayer(1)).toEqual('O');
  });

  it('Should be over when all fields in a row are taken by a player', () => {
    const fullGrid = [
      ['X','X','X'],
      ['','',''],
      ['','',''],
    ];
    expect(isFinished(fullGrid)).toEqual(true);
  });

  it('Should not be over when all fields in a row are not taken by a player', () => {
    const fullGrid = [
      ['X','O','X'],
      ['','',''],
      ['','',''],
    ];
    expect(isFinished(fullGrid)).toEqual(false);
  });

});
