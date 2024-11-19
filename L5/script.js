// create array
const fruits = ["apple1", "apple3", "apple4", "apple10", 1, 5, true]; //most common
let color = new Array("yellow", "black", "white");

console.log(fruits);
console.log(color);

// manupulate array
// push = add to end
color.push("pink");
console.log(color);

// pop = remove from end
color.pop();

// unshift = add to first
fruits.unshift("orange");
console.log(fruits);

// shift = remove from first
fruits.shift();

// length = menghitung data
document.write(`Total of fruits : ${fruits.length} <br>`);

// sort = berurutan
document.write(`before sort : ${fruits} <br> 
   after sort : ${fruits.sort()}`);

// looping array
// for
for (let start = 0; start < fruits.length; start++) {
  document.write(`<br> ${fruits[start]} <br>`);
}

// while
let start_while = 0;
while (start_while < color.length) {
  document.write(`<br> ${color[start_while]}`);
  start_while++;
}

// do while
