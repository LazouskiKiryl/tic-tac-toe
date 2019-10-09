class TicTacToe {
    constructor() {
        this.currentPlayer = 'x';
        this.winner = null;
        this.matrix = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.matrix[rowIndex][columnIndex] === null) {
            this.matrix[rowIndex][columnIndex] = this.currentPlayer;
            this.currentPlayer = this.currentPlayer === 'x' ? 'o' : 'x';
        }
    }

    isFinished() {
        return this.getWinner() !== null || this.noMoreTurns();
    }

    getWinner() {
        if ( this.matrix[0][0] == this.matrix[1][1]
            & this.matrix[0][0] == this.matrix[2][2]
            & this.matrix[1][1] == this.matrix[2][2] ) {
            this.winner = this.matrix[0][0];
        }

        if ( this.matrix[0][2] == this.matrix[1][1]
            & this.matrix[0][2] == this.matrix[2][0]
            & this.matrix[1][1] == this.matrix[2][0] ) {
            this.winner = this.matrix[0][2];
        }
        
        for (let i = 0; i < 3; i++) {
            if ( this.matrix[i][0] == this.matrix[i][1]
                & this.matrix[i][0] == this.matrix[i][2]
                & this.matrix[i][1] == this.matrix[i][2] ) {
                this.winner = this.matrix[i][0];
            }
            if ( this.matrix[0][i] == this.matrix[1][i]
                & this.matrix[0][i] == this.matrix[2][i]
                & this.matrix[1][i] == this.matrix[2][i] ) {
                this.winner = this.matrix[0][i];
            }
        }

        return this.winner;
    }

    noMoreTurns() {
        return this.matrix.every( row => {
            return row.every(cell => {
              return cell !== null;
            });
        });
    }

    isDraw() {
        return this.noMoreTurns() && this.getWinner() === null;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.matrix[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
