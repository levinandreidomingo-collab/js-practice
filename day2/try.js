const fruits = ["mangga", "saging", "buko"];
console.log(fruits[0]);
console.log(fruits[2]);
console.log(fruits.length);
fruits.push("lansones");
console.log(fruits.length);
console.log(fruits.join(", "));


const student = {
name: "Carlo",
grade: 12,
strand: "ICT",
skills: ["HTML", "CSS"]
};
console.log(student.name);
console.log(`${student.name} is in Grade ${student.grade} ${student.strand}`);
student.skills.push("JavaScript"); // change a value inside
student.school = "Sample National High School"; // add a new key
console.log(student.skills.join(", "));
console.log(student.school);


for (let i = 1; i <= 3; i++) {
console.log(`Round ${i}`);
}
console.log("Done!");



const snacks = ["Piattos", "Nova", "Chippy"];
for (const snack1 of snacks) {
console.log(`I like ${snack1}`);
}
const prices = [20, 15, 12];
let total = 0;
for (const price of prices) {
total += price;
}
console.log(`Total: ₱${total}`);