function uploadLevel(){
  actualLevel++; //upscale levels
}
function updateLevel(){ //change the levelnumber accordingly in the header
   var levelText = actualLevel +1;
    if (levelText < 10){
        levelText =  "0" + levelText;
    }
    document.querySelector("#level").innerHTML = levelText;
}

function loadNewLevel(){ //update accordingly with level and deck
uploadLevel();
updateLevel();
startGame();
}