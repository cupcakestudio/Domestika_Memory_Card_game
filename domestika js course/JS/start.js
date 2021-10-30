//after gameplay finishes
function startGame() {
  moves = 0;
  dealsCard(); 

  document.querySelector("#moves").innerHTML = "00"
  //hide the feedback finishGame layer
  document.querySelector("#feedback").classList.remove("visible");
  //flip the cards
 
  document.querySelectorAll(".Card").forEach(
    function(element) {
      element.addEventListener("click", discoverCard);

  });
  //stopwatchStart();
  
}
startGame();

document.querySelector("#replay").addEventListener("click", startGame);