// Guss the number and result.

const number = Math.floor(Math.random() * 100) + 1;
const result = number % 2 === 0 ? "even" : "odd";
console.log(`The number ${number} is ${result}. Can you guess the next number?`);