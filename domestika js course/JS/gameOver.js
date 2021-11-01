function gameOver() {
  clearInterval(stopwatch);
  document.querySelector("#gameOver").classList.add("visible");
}
function timeEnd(){
  document.querySelector(".timeCounter").classList.add("visible");

}