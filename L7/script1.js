let my_number = 0;

do {
  my_number++;
  document.getElementById("number").innerHTML = `optional text ${my_number}`;
} while (my_number <= 1000);
