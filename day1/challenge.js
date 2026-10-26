const total3 = 67;
const payment = 100;
let sukli = payment - total3;
const change = sukli

const twenties = Math.floor(sukli / 20);
sukli %= 20;

const tens = Math.floor(sukli / 10);
sukli %= 10;

const fives = Math.floor(sukli / 5);
sukli %= 5;

const ones = sukli;

console.log("Sukli: ₱" + change);
console.log("₱20 x " + twenties);
console.log("₱10 x " + tens);
console.log("₱5 x " + fives);
console.log("₱1 x " + ones);