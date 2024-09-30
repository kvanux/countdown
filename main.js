var countDownDate = new Date("Oct 18, 2024 17:00:00").getTime();

var x = setInterval(function() {

//   Computation 
  var now = new Date().getTime();
  var distance = countDownDate - now;

  
//   Convert
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//   One liner  
//   document.getElementById("demo").innerHTML = days + "d " + hours + "h "
//   + minutes + "m " + seconds + "s ";

//   Render
  document.getElementById("day").innerHTML = days;  
  document.getElementById("hr").innerHTML = hours;
  document.getElementById("min").innerHTML = minutes;
  document.getElementById("sec").innerHTML = seconds;

//   Error message
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("demo").innerHTML = "NGHI GOI";
//   }
}, 1000);
