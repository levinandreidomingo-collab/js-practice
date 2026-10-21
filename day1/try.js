console.log("Hello, JavaScript! 👋");


console.log("Good morning, everyone!");
console.log(2026);
console.log("Score:", 50);
console.log(10 + 10);


const name = "Andrei";
let baon = 150;
console.log(name);
console.log(baon);
baon = baon - 30; // bought lunch
console.log(baon);


const city = "Cebu"; // string
const age1 = 18; // number
const isStudent = true; // boolean
let nickname; // undefined
const middleName = null; // null
console.log(typeof city);
console.log(typeof age1);
console.log(typeof isStudent);
console.log(typeof nickname);
console.log(typeof middleName); 


const firstName = "Andrei";
const lastName = "Kishi";
const fullName = firstName + " " + lastName;
console.log(fullName);
console.log(`Hi, ${firstName}! Welcome to the team.`);
console.log(fullName.length);
console.log(fullName.toUpperCase());
console.log(fullName.includes("Kishi"));
console.log(" Andrei ".trim());


const price = 10;
const qty1 = 100;
console.log(price * qty1);
console.log(100 - price * qty1);
console.log(17 / 5);
console.log(17 % 5);
console.log(2 ** 3);
let stock = 1000;
stock = stock - 250;
stock += 100; // same as: stock = stock + 5
stock++; // add 1
console.log(stock);
console.log((250 / 100).toFixed(2));
console.log(Math.floor(7.9));
console.log(Math.round(7.5));
console.log("250" + 100);
console.log(Number("250") + 100);


const grade = 90;
console.log(grade >= 75);
console.log(grade === 75);
console.log(grade !== 75-100);
console.log(5 === "5");
console.log(5 == "5");


const hour = 14;
if (hour < 12) {
console.log("Magandang umaga!");
} else if (hour < 18) {
console.log("Magandang hapon!");
} else {
console.log("Magandang gabi!");
}
const age = 17;
const hasId = true;
if (age >= 18 && hasId) {
console.log("You can vote.");
} else {
console.log("Not yet. Wait a bit!");}