const isBoardFull = (grid) =>
  grid.every((row) => row.every((field) => field !== ''))

export default class TicTacToeGame {
  constructor() {
    this.players = ['X', 'O'];
    this.grid = [
      ['','',''],
      ['','',''],
      ['','','']
    ];
  }

  getGrid() {
    return this.grid;
  }

  isFinished(grid = this.grid) {
    return isBoardFull(grid) || this.isRowTakenByAPlayer(grid);
  }

  getPlayer(playerOrder) {
    return this.players[playerOrder];
  }

  isRowTakenByAPlayer(grid) {
    for(let row of grid) {
      if (this.isRowTakenByPlayer(row, 0) || this.isRowTakenByPlayer(row, 1))
        return true;
    }
    return false;
  }

  isRowTakenByPlayer(row, playerOrder) {
    return row.every((field) => field === this.players[playerOrder]);
  }

}
