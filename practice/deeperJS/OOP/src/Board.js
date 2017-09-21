/**
 * Board Constructor Function
 */
function Board() {
  this.grid = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
  ]
}

Board.prototype.updateState = function (position, mark) {
  this.grid[position.x][position.y] = mark
}

Board.prototype.render = function () {
  this.grid.forEach((row, i) => {
    console.log(`${row[0]} | ${row[1]} | ${row[2]}`)
  })
}

Board.prototype.checkWin = function (mark) {
  let hasWon = false
  this.getBoardLines().forEach(line => {
    hasWon = hasWon || line.every(boardMark => boardMark === mark)
  })
  return hasWon
}

Board.prototype.checkDraw = function () {
  return this.getBoardLines().every(boardMark => boardMark !== ' ')
}


/** 
 * Return an array of 8 board lines
 * -- 3 Rows, 3 Columns and 2 Diagonals
 */
Board.prototype.getBoardLines = function () {

  let boardLines = []
  let grid = this.grid
  let row, column

  //Add 3 Rows and 3 Columns 
  grid.forEach((_, i) => {
    row = []
    column = []
    grid.forEach((_, j) => {
      row.push(grid[i][j])
      column.push(grid[j][i])
    })
    boardLines.push(row)
    boardLines.push(column)
  })

  //Add Diagonal 1
  boardLines.push([
    grid[0][0],
    grid[1][1],
    grid[2][2]
  ])
  //Add Diagonal 2 
  boardLines.push([
    grid[0][2],
    grid[1][1],
    grid[2][0]
  ])
  return boardLines;
}

module.exports = Board