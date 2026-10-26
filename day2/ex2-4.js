const carts = [8, 15, 12, 25];
let InTotal = 0;
for (const cart of carts) {
    InTotal += cart
}

console.log("Items: " + carts.length)
console.log(`Total: ₱${InTotal}`)