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


const city = "Quezon" + "City"; // string
const age = 18; // number
const isStudent = true; // boolean
let nickname; // undefined
const middleName = null; // null
console.log(typeof city);
console.log(typeof age);
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
const qty = 100;
console.log(price * qty);
console.log(100 - price * qty);
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


const grade = 85;
console.log(grade >= 75);
console.log(grade === 100);
console.log(grade !== 100);
console.log(5 === "5");
console.log(5 == "5");
