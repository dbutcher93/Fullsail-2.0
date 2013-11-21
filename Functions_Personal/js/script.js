console.log("---Personal---")

Miles(20, 50)

function Miles(day1Miles, day2miles) {
	var Days = 2;
	var totalMiles = day1Miles + day2miles;
	var Average = totalMiles / Days
	console.log("The average number of miles is " + Average + " miles")
}

Miles();