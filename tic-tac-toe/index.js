const isBoardFull = (grid) => {
  return grid.every((row) => {
    return row.every((field) => {
      return field !== '';
    });
  })
}

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
    for(let i = 0; i < grid.length; i++){
      const row = grid[i];
      let isFirstPlayer = row.every((field) => {
        return field === this.players[0]
      });
  
      let isSecondPlayer = row.every((field) => {
        return field === this.players[1]
      });
  
      if (isFirstPlayer || isSecondPlayer)
        return true;
    }
    return false;
  }

}
