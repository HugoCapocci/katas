const players = ['X', 'O'];

export const getGrid= () => {
    return [
        ['','',''],
        ['','',''],
        ['','',''],
    ];
}

const isBoardFull = (grid) => {
    return grid.every((row) => {
        return row.every((field) => {
            return field !== '';
        });
    })
}

const isRowTakenByAPlayer = (grid) => {
    for(let i = 0; i < grid.length; i++){
        let row = grid[i];
        let isFirstPlayer = row.every((field) => {
            return field === players[0]
        });

        let isSecondPlayer = row.every((field) => {
            return field === players[1]
        });

        if (isFirstPlayer || isSecondPlayer)
            return true;
    }
    return false;
}

export const isFinished= (grid) => {
    return isBoardFull(grid) || isRowTakenByAPlayer(grid);
}

export const getPlayer= (playerOrder) => {
    return players[playerOrder];
}
