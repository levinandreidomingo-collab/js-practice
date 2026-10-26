const jeep = {
    route: "Cubao - Divisoria",
    fare: 13,
    seats: 16,
    passengers: 10
}

console.log("Route: " + jeep.route);

jeep.passengers += 4

console.log("Passengers: " + jeep.passengers + "/" + jeep.seats)
console.log("Seats left: " + (jeep.seats - jeep.passengers))