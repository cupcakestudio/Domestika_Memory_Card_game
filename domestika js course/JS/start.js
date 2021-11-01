//after gameplay finishes
function startGame() {
  moves = 0; 
  dealsCard(level[actualLevel].decklevel); //deck levels

  document.querySelector("#moves").innerHTML = "00";
  maxMoveCounter();
  //hide the diff screen layers when (re)start
  document.querySelector(".select-levels").classList.remove("visible");
  document.querySelector("#levels").classList.remove("visible");
  document.querySelector("#gameOver").classList.remove("visible");
  document.querySelector(".timecounter").classList.remove("visible");
  document.querySelector("#gameEnd").classList.remove("visible");
  //flip the cards
 
  document.querySelectorAll(".Card").forEach(
    function(element) {
      element.addEventListener("click", discoverCard);

  });
  if (!relaxMode) {stopwatchStart();}
  else {document.querySelector(".timecounter").classList.add("stopwatch-hidden");}
  
}
//restart from beginning level - when finished a level
function replay() {
  actualLevel = 0; //updates / resets to level 0
  updateLevel();
  startGame();
}

startGame();

//full game / hardcore start
function normalGameModeStart(){
  relaxMode = false;
  document.querySelector("#welcome").classList.remove("visible");
  startGame();
  document.querySelector("#control-levels").classList.add("control-hidden");
}
//relax mode start
function relaxModeStart(){
  relaxMode = true;
  document.querySelector("#welcome").classList.remove("visible");
  startGame();
}