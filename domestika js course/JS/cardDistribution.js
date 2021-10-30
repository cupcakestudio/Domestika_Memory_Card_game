function shuffleCard(){
  var result;
   //randomize number so generated a number 0-10 rounded down
  //randomize the deck by sort array
  result = totalCards.sort(function() { //returns a random number 
    return 0.5 - Math.random() // 0.5 -> front and back position of array gets moved
  });
  
  return result;
}

function dealsCard(){

  var table = document.querySelector("#GameTable");
  table.innerHTML = "";
  //paint the table with diff values from array
  var shuffledCardsBase = shuffleCard(); //each shuffled carddeck replaces old deck

  shuffledCardsBase.forEach(
  //anonym function
  function(element){
    var card = document.createElement("div");
    card.innerHTML ="<div class='Card' data-value=" + element + ">" +
                    "<div class='Card_contents'>" + 
                    element +
                   "</div>" +
                    "</div>" ;
  
    table.appendChild(card);
  });
}