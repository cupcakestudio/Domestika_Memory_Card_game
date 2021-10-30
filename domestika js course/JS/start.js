//after gameplay finishes
function startGame() {
  moves = 0; 
  dealsCard(level[actualLevel].decklevel); //level of decks

  document.querySelector("#moves").innerHTML = "00"
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
startGame();

document.querySelectorAll(".replay").forEach(function(element) {element.addEventListener("click", startGame)});