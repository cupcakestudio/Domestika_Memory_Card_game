function stopwatchStart(){
  var seconds = 10;
  var minutes = 0;
  var secondsText;
  var minutesText;
 
  function updateStopwatch()
  {
     
     seconds--;
      if (seconds < 0) {  
        seconds = 59;
        minutes--;
       
    }
    if (minutes < 0) {
      
      seconds = 0;
      minutes = 0;
      clearInterval(stopwatch);
      timeEnd();
  }
    secondsText = seconds;
    minutesText = minutes;
      if (seconds < 10) {
        secondsText = '0' + secondsText;
        }

    if (minutes < 10) {
      minutesText = '0' + minutesText;
    }
    document.querySelector("#minutes").innerHTML= minutesText;
    document.querySelector("#seconds").innerHTML= secondsText;
  }

  //interval to set counter to count one second at a time

  stopwatch = setInterval(updateStopwatch, 1000) //second arg is interval when to update
};