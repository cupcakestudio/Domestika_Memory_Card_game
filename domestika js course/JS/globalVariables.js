var relaxMode = false;
var moves = 0;
var stopwatch;
var deck = [["e" , "w"], ["r", "e"], ["q","i"]];

var actualLevel = 0;
var level = [
  {
    decklevel: deck[0],
    maxMoves: 3
  }, 
  
  {
    decklevel: deck[0].concat(deck[1]),
    maxMoves: 8
  },
  {
    decklevel: deck[0].concat(deck[1],deck[2]),
    maxMoves: 12
  }

];
