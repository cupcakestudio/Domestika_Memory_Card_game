function discoverCard(){
  var CardDiscovered;
  var ofCards; //to execute the finish function
  //func to see if card selected is over 2
  //modify card func to count if card selected is not sucessfully discovererd
  var totalCardDiscovered = document.querySelectorAll(".Card_discover:not(.success)");
  if (totalCardDiscovered.length > 1 )
  {
    return;
  }
  this.classList.add("Card_discover");
  document.querySelector("#sound-cardFlip").cloneNode().play();

  //check the Cards value
  CardDiscovered = document.querySelectorAll(".Card_discover:not(.success)");
  if (CardDiscovered.length < 2 ) //length of cards less than 2
  {
    return;
  }

  //access the value of cards and commpare
  
  compareCard(CardDiscovered);
  updateMoveCounter();
  ofCards = document.querySelectorAll(".Card:not(.success)"); //if not success, do nothing yet
  // if pending cards = 0 (no cards left) -> finish game message pops up
  if ( ofCards.length === 0){
    setTimeout(finishGame, 1000);
  }
}

//card pair - if correct -> disappear from table, if incorrect -> hide cards again

function compareCard(cardAcompany){ //compare the card value
  if (cardAcompany[0].dataset.value === cardAcompany[1].dataset.value)
    {
      success(cardAcompany);
    } 
    else 
    {
      error(cardAcompany);
    }
  }