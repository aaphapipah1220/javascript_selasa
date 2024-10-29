// Conditional Statement (int, str, boolean, float)
// IF = only one / main condition
// ELSE IF = a lot
// ELSE = another condition

// AND OR NOT (&& || !)
// compare (== <= >= < >)

const burger = "kfc";
let meGo = "please";

if (burger == meGo) {
  console.log("True bener bener bener");
  document.write("bener");
} else {
  console.log("mending pulang deh bobo");
}

// ===================================

if (burger == meGo) {
  console.log("True bener bener bener");
  document.write("bener");
} else if (burger == "kfc") {
  console.log("mending pulang deh bobo");
  document.write("nah kan ngga sama");
} else {
  document.write("gatau ya ini else kondisi yang diatas tidak terpenuhi");
}

// && = semua nilai harus betul
// || = salah satu aja nilainya betul maka akan dibetulkan
// === compare sampe type data

console.log(burger == "kfc" && burger != "kfc");
console.log(burger == "kfc" || burger != "kfc");
console.log(burger != meGo);

const num1 = 1;
const num2 = "1";

console.log(num1 === num2);
