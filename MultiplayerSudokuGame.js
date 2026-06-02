// design a multiplayer sudoku game

// Question: Design a Sudoku game where;
// Players task turns to play based on a 'rotating pin' mechanism;
//  the player who fills the last number empty cell wins



class MultiPlayerSudoku {
  constructor(board,players){
    this.board = board;
    this.players = players;
    this.currentPlayerIndex = 0;  
  }
  makeMove(row,col,value){
    if(this.board[row][col] !== 0)return 'cell is already filled'; 
     this.board[row][col] === value
     this.rotateTurn();
     return `Player ${this.players[this.currentPlayerIndex]} turn`
  }
  rotateTurn(){
    this.currentPlayerIndex = (this.currentPlayerIndex + 1) % this.players.length
  }
  checkWinner(){
    return this.board.every(row => row.every(cell => cell !== 0))
  }
}

// Test Case

let board = Array(9).fill().map(() => Array(9).fill(0))
let game = new MultiPlayerSudoku(board,["player1","player2"])
console.log(game.makeMove(0,0,1))
console.log(game.makeMove(0,1,2))

console.log(game.checkWinner())
