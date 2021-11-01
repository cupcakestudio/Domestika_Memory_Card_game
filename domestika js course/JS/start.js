//after gameplay finishes
function startGame() {
  moves = 0; 
  dealsCard(level[actualLevel].decklevel); //deck levels

  document.querySelector("#moves").innerHTML = "00";
  maxMoveCounter();
  //hide the diff screen layers when (re)start
  document.querySelector("#levels").classList.remove("visible");
  document.querySelector("#gameOver").classList.remove("visible");
  document.querySelector("#gameEnd").classList.remove("visible");
  //flip the cards
 
  document.querySelectorAll(".Card").forEach(
    function(element) {
      element.addEventListener("click", discoverCard);

  });
  //stopwatchStart();
  
}
//restart from beginning level - when finished a level
function replay() {
  actualLevel = 0; //updates / resets to level 0
  updateLevel();
  startGame();
}

startGame();

document.querySelectorAll(".replay").forEach(function(element) {element.addEventListener("click", replay)});
document.querySelector("#upload").addEventListener("click", loadNewLevel);