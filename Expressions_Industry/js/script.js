var orderPrints = [300, 500, 400]; // Number of pages per order
var Orders = 3; // Number of orders, based on number of different order prints

var Total = orderPrints[0] + orderPrints[1] + orderPrints[2]; // Total pages printed
var Average = Total / Orders // Average of printed pages

console.log("The average number of pages printed is " + Average + "") // Displays the average