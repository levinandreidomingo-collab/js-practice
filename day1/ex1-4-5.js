const MinimumFare = 13;
const MinimumKm = 4;
const FarePerKm = 1.80;
const distance = 10;
const extraKm = distance - 4 // extra km is 6
const total = extraKm * FarePerKm
const total1 = total + MinimumFare
const total2 = .80 * total1

console.log("Fare for " + distance + " km: ₱" + total1.toFixed(2))
console.log("Student fare: ₱" + total2.toFixed(2))