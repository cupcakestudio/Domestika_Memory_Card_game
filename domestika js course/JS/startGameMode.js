//load and describes all levels 
describeLevels();
//all event assigned buttons on start event
document.querySelectorAll(".replay").forEach(function(element) {element.addEventListener("click", replay)});

document.querySelector("#upload").addEventListener("click", loadNewLevel);

document.querySelector("#relaxMode").addEventListener("click", relaxModeStart);
document.querySelector("#normalGameMode").addEventListener("click", normalGameModeStart);
//change level 
document.querySelector("#control-levels").addEventListener("click", showLevelMenu);

document.querySelector("#close-level-menu").addEventListener("click", hideLevelMenu);

document.querySelector("#.levels").forEach(function(element){
  element.addEventListener("click", changeLevel);
}
);

document.querySelector("body").addEventListener("click",closeLevelMenu);

document.addEventListener("keydown", escapeKeyCloseMenu);

//open welcome screen
document.querySelector("#welcome").classList.add("visible");