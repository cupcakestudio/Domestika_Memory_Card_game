function updateMoveCounter() {

  var movesText;
  moves++;
  movesText = moves;

  if (moves < 10){
    movesText = '0' + moves;
  }
  document.querySelector("#moves").innerHTML = movesText;
}