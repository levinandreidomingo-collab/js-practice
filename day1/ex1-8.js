const MinimumFare1 = 13;
const MinimumKm1 = 4;
const FarePerKm1 = 1.80;
const distance1 = 3;

if (distance1 <= MinimumKm1) {
    console.log("Fare for " + distance1 + " km: P" + MinimumFare1.toFixed(2));
} else {
    console.log("Fare for " + distance1 + " km: P" + (MinimumFare1 + (distance1 - MinimumKm1) * 1.8).toFixed(2));
}