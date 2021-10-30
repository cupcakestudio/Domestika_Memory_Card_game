var moves = 0;
var deck = [["e" , "w"], ["r", "e"], ["q","i"]];

var actualLevel = 0;
var level = [
  {
    decklevel: deck[0]
    
  }, 
  
  {
    decklevel: deck[0].concat(deck[1])
  },
  {
    decklevel: deck[0].concat(deck[1],deck[2])
  }

];
