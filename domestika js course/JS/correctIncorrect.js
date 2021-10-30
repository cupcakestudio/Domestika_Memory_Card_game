//actual script for card game.
//MEMORY CARD GAME

//flip card func


function success(theseCards) {
  theseCards.forEach(function(element)
  {
    element.classList.add("success");
  });
}

function error(theseCards) {
  theseCards.forEach(function(element)
  {
    element.classList.add("error");
  });

  setTimeout(function() {
    theseCards.forEach(function(element)
  {
    element.classList.remove("Card_discover");
    element.classList.remove("error");
  }); 
  }, 1000)
   
  
};