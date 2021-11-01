function updateMoveCounter() {
  var movesText;
  moves++;
  movesText = moves;
//check if moves are not exceeded otherwise, gameover.
if (moves > level[actualLevel].maxMoves && !relaxMode)
{
  gameOver();
  return 
}
  if (moves < 10){
    movesText = '0' + moves;
  }
  document.querySelector("#moves").innerHTML = movesText;
}

//max moves counter
function maxMoveCounter(){
  var maxMovesText = level[actualLevel].maxMoves;

  if (maxMovesText < 10){
  
      maxMovesText = '0' + maxMovesText;
     }
    document.querySelector("#moves-total").innerHTML = maxMovesText;
 
}