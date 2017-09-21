/**
 * Player Constructor Function
 * 
 * Player has a name
 * Player has a mark
 * Player can make a move
 * Player can win/lose 
 */

const readline = require('readline-sync');

function Player(name, mark) {
  this.name = name
  this.mark = mark
}

Player.prototype.makeMove = function() {
  return readline.question(`Enter Position, ${this.name}...`)
}

module.exports = Player
// let player1 = new Player('Baibhav', 'X')
// let move = player1.getMove()

// console.log(`${player1.name} made the move ${move}`)