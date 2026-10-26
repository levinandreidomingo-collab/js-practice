const jeep = {
    route: "Cubao - Divisoria",
     fare: 13,
     seats: 16,
     passenger: 10
};
console.log("Route: " + jeep.route);
console.log("Passenger: " + jeep.passenger + "/" + jeep.seats);

jeep.passenger += 4

console.log("Seats left: " + (jeep.passenger - jeep.seats));
