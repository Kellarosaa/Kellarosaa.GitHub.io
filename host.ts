class Game2048 {
  private board: number[][];
  private score: number;

  constructor() {
    this.board = [];
    this.score = 0;
    this.initializeBoard();
  }

  private initializeBoard(): void {
    for (let i = 0; i < 4; i++) {
      this.board[i] = [];
      for (let j = 0; j < 4; j++) {
        this.board[i][j] = 0;
      }
    }
    this.addRandomTile();
    this.addRandomTile();
  }

  private addRandomTile(): void {
    const emptyCells: number[][] = [];
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (this.board[i][j] === 0) {
          emptyCells.push([i, j]);
        }
      }
    }
    if (emptyCells.length > 0) {
      const randomIndex = Math.floor(Math.random() * emptyCells.length);
      const [row, col] = emptyCells[randomIndex];
      this.board[row][col] = Math.random() < 0.9 ? 2 : 4;
    }
  }

  private moveTilesLeft(): void {
    for (let i = 0; i < 4; i++) {
      let mergeIndex = 0;
      for (let j = 1; j < 4; j++) {
        if (this.board[i][j] !== 0) {
          if (this.board[i][j] === this.board[i][mergeIndex]) {
            this.board[i][mergeIndex] *= 2;
            this.score += this.board[i][mergeIndex];
            mergeIndex++;
          } else {
            if (mergeIndex + 1 !== j) {
              this.board[i][mergeIndex + 1] = this.board[i][j];
              this.board[i][j] = 0;
            }
            mergeIndex++;
          }
        }
      }
    }
  }

  private rotateBoardClockwise(): void {
    const newBoard: number[][] = [];
    for (let i = 0; i < 4; i++) {
      newBoard[i] = [];
      for (let j = 0; j < 4; j++) {
        newBoard[i][j] = this.board[3 - j][i];
      }
    }
    this.board = newBoard;
  }

  public moveLeft(): void {
    this.moveTilesLeft();
    this.addRandomTile();
  }

  public moveRight(): void {
    this.rotateBoardClockwise();
    this.rotateBoardClockwise();
    this.moveTilesLeft();
    this.rotateBoardClockwise();
    this.rotateBoardClockwise();
    this.addRandomTile();
  }

  public moveUp(): void {
    this.rotateBoardClockwise();
    this.rotateBoardClockwise();
    this.rotateBoardClockwise();
    this.moveTilesLeft();
    this.rotateBoardClockwise();
    this.addRandomTile();
  }

  public moveDown(): void {
    this.rotateBoardClockwise();
    this.moveTilesLeft();
    this.rotateBoardClockwise();
    this.rotateBoardClockwise();
    this.rotateBoardClockwise();
    this.addRandomTile();
  }

  public getBoard(): number[][] {
    return this.board;
  }

  public getScore(): number {
    return this.score;
  }
}

const game = new Game2048();
game.moveLeft();
console.log(game.getBoard());
console.log(game.getScore());
