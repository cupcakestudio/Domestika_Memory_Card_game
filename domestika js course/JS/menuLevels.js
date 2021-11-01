// menu Levels
function describeLevels() {
  var menuLevels = document.querySelector("#select-levels ul");
  level.forEach(function(element, index) {
    var levelControl = document.createElement("li");
      levelControl.innerHTML = 
      "<button class='level' data-level=" + 
      index + 
      ">Level-"
      + (index + 1) +
      "</button>";
      menuLevels.appendChild(levelControl);
  });
}

function changeLevel(){
  var level = parseInt(this.dataset.level)//collects dataset, parseInt to get the numerical value
  actualLevel = level;
  updateLevel();
  startGame();
}

//show and hide level menuLevels
function showLevelMenu(event) {
  event.stopPropagation();
  document.querySelector(".select-levels").classList.toggle("visible");
}
function hideLevelMenu(event) {
  document.querySelector(".select-levels").classList.remove("visible");
}
function closeLevelMenu(event) {
  if (event.target.closest(".select-levels")){
    return
  } 
  document.querySelector(".select-levels").classList.remove("visible"); 
}
function escapeKeyCloseMenu(event) {
  if (event.key === "Escape"){
    hideLevelMenu();
  }
}