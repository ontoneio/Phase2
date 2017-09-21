/**
 * Game Constructor Function
 */

const Player = require('./Player.js')
const Board = require('./Board.js')

let player1 = new Player("Kasparov", 'O')
let player2 = new Player("Carlsen", 'X')
let board = new Board()

function Game() {

}

Game.prototype.start = function() {
  board.render()
  
  let currentPlayer = player1
  let move

  while(!board.checkWin()) {
    move = currentPlayer.makeMove()
    board.updateState({x: move[0], y: move[2]}, currentPlayer.mark)
    board.render()
    currentPlayer = currentPlayer === player1 
      ? player2 
      : player1
  }

}

module.exports = Game