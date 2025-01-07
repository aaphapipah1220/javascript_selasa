let hours = 0;
let minutes = 0;
let seconds = 0;

setInterval(function () {
  seconds++;

  if (seconds > 59) {
    seconds = 0;
    minutes++;
  }
  if (minutes > 59) {
    minutes = 0;
    hours++;
  }

  document.getElementById(
    "timer"
  ).innerHTML = `${hours} : ${minutes} : ${seconds}`;
}, 1000);
