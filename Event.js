var countDownDate1 = new Date("Oct 10, 2023 00:00:00").getTime();

// Update the count down every 1 second
var x1 = setInterval(function() {
  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate1 - now;
    
  // Time calculations for days, hours, minutes, and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="timer"
  document.getElementById("timer").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the countdown is over, write some text 
  if (distance < 0) {
    clearInterval(x1);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}, 1000);

var countDownDate2 = new Date("Nov 1, 2023 00:00:00").getTime();

// Update the count down every 1 second
var x2 = setInterval(function() {
  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate2 - now;
    
  // Time calculations for days, hours, minutes, and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="timer1"
  document.getElementById("timer1").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the countdown is over, write some text 
  if (distance < 0) {
    clearInterval(x2);
    document.getElementById("timer1").innerHTML = "EXPIRED";
  }
}, 1000);
