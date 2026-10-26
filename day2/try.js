const fruits = ["mangga", "saging", "buko"];
console.log(fruits[0]);
console.log(fruits[2]);
console.log(fruits.length);
fruits.push("lansones");
console.log(fruits.length);
console.log(fruits.join(", "));


const student = {
name: "Andrei",
grade: 12,
strand: "ICT",
skills: ["HTML", "CSS"]
};
console.log(student.name);
console.log(`${student.name} is in Grade ${student.grade} ${student.strand}`);
student.skills.push("JavaScript"); // change a value inside
student.school = "Eclaro Academy"; // add a new key
console.log(student.skills.join(", "));
console.log(student.school);


for (let i = 1; i <= 3; i++) {
console.log(`Round ${i}`);
}
console.log("Done!");


const snacks = ["Piattos", "Nova", "Chippy"];
for (const snack of snacks) {
console.log(`I like ${snack}`);
}
const prices1 = [20, 15, 12];
let total = 0;
for (const price of prices1) {
total += price;
}
console.log(`Total: ₱${total}`);


function greet(name) {
return `Hello, ${name}!`;
}
console.log(greet("Ana"));
console.log(greet("Ben"));
function add(a, b) {
return a + b; }
const sum = add(5, 7);
console.log(sum);


const double = (n) => n * 2;
const sayHi = (name) => `Hi, ${name}!`;
const area = (width, height) => {
const result = width * height;
return result;
};
console.log(double(21));
console.log(sayHi("Liza"));
console.log(area(3, 4));


const prices = [8, 15, 25, 12, 40];
const plusOne = prices.map((p) => p + 1);
console.log(plusOne.join(", "));
const cheap = prices.filter((p) => p <= 15);
console.log(cheap.join(", "));
const firstBig = prices.find((p) => p > 20);
console.log(firstBig);


const items = [
{ name: "Kopiko", price: 8 },
{ name: "Coke Mismo", price: 20 },
{ name: "Piattos", price: 25 }
];
const names = items.map((item) => item.name);
console.log(names.join(" | "));
const coke = items.find((item) => item.name === "Coke Mismo");
console.log(coke.price);