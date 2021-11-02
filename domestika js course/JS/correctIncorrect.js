//actual script for card game.
//MEMORY CARD GAME

//flip card func


function success(theseCards) {
  theseCards.forEach(function(element)
  {
    element.classList.add("success");
  });
  document.querySelector("#sound-success").cloneNode().play();
}

function error(theseCards) {
  theseCards.forEach(function(element)
  {
    element.classList.add("error");
  });
 document.querySelector("#sound-error").cloneNode().play();

  setTimeout(function() {
    theseCards.forEach(function(element)
  {
    element.classList.remove("Card_discover");
    element.classList.remove("error");
  }); 
  }, 1000)
   
  
};