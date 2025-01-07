let hours = 0;
let minutes = 0;
let seconds = 0;
let start = false;

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

// function start_stop() {
//   if (start) {
//     start = false;
//   } else {
//     start = true;
//   }
// }

// document.getElementById(
//   "button"
// ).innerHTML = ;

// document.write(
//   `<input type="button" value="start / stop" onclick="start_stop()">`
// );
