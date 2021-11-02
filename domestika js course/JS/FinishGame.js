function finishGame() {
  if (actualLevel < level.length -1 ) {
  document.querySelector("#levels").classList.add("visible");
  }
  else {
  document.querySelector("#gameEnd").classList.add("visible");
  }
}