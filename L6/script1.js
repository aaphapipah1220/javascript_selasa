// declaration
function Hello_Vanya(name) {
  return `Hai ${name}`;
}

console.log(Hello_Vanya("Vanya"));
document.write(Hello_Vanya("Vanyaaa"));

// expression
const Say = function (hello) {
  return `${hello} Vanya!`;
};

console.log(Say("Good afternoon"));
document.write(Say("Good night"));

// arrow function
const dream = (my_dream) => `Hi, this is my dream ${my_dream}`;

console.log(dream("to be a programmer"));

// expression - function immediately invoked
(function (hobby) {
  console.log(`I have the most hobby that is ${hobby}`);
})("Coding");

(function (age) {
  console.log(`my age is ${age}`);
})(28);

// generator function
function* number() {
  yield 1;
  yield 2;
  yield 3;
}
const generator = number();
console.log(generator.next().value);
