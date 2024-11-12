document.getElementById("title").innerHTML = "Lesson 4 about Looping";

// LOOPING
// while = kondisi dari loop harus true
// do-while = ketika ingin menjalankan looping minimal 1 kali
// for = memiliki kondisi/batasan yang jelas

// bukan looping
document.write("<p>Lesson 4</p>");
document.write("<p>Lesson 4</p>");
document.write("<p>Lesson 4</p>");
document.write("<p>Lesson 4</p>");
document.write("<p>Lesson 4</p>");

// while
let text = "This is example of looping";

let start_while_loop = 0;
while (start_while_loop <= 10) {
  let show_while = `${start_while_loop} sing a song bro about ${text} </br>`;
  start_while_loop++;

  document.write(`${show_while}`);
}

// do-while
do {
  let show_do = `sing a song do while ${text} </br>`;
  start_while_loop++;

  document.write(`${show_do}`);
} while (start_while_loop < 20);

// for
for (start_while_loop = 5; start_while_loop < 20; start_while_loop++) {
  let show_for = `${start_while_loop} test for </br>`;
  document.write(show_for);
}

// RANDOM
let random_test = console.log(Math.random()); //get angka random
console.log(Math.floor(6.6)); //membulatkan angka
