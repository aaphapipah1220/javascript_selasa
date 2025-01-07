// function declaration
function Hello_Jojo(name) {
  return `Hello My name is ${name}`;
}
console.log(Hello_Jojo("Joshuaaaa"));

// function expression
const Hai_Jojo = function (hobby) {
  return `My hobby is ${hobby}`;
};
console.log(Hai_Jojo("Coding"));

// arrow function
const My_Dream = (dream) => `My dream is ${dream}`;
console.log(My_Dream("Programmer")); //call function

// function immediately invoked expression
(function (age) {
  console.log(`${age}`);
})(15);

// generator function
function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}
const generator = numberGenerator();
console.log(generator.next().value);
