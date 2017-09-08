function NBAPlayer(name, team, pos) {
  this.name = name
  this.team = team
  this.pos = pos
}

NBAPlayer.prototype.dunk = function() {
  console.log(`${this.name} dunked!`)
}

const curry = new NBAPlayer('Steph Curry', 'Warriors', 'PointGuard')
curry.dunk()
let output = curry.__proto__ === NBAPlayer.prototype

console.log(output)