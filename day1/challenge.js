const total3 = 67;
const payment = 100;
let sukli = payment - total3;

console.log("Sukli: P" + sukli);

const twenties = Math.floor(sukli / 20);
sukli %= 20;

const tens = Math.floor(sukli / 10);
sukli %= 10;

const fives = Math.floor(sukli / 5);
sukli %= 5;

const ones = sukli;

console.log("P20 x " + twenties);
console.log("P10 x " + tens);
console.log("P5 x " + fives);
console.log("P1 x " + ones);