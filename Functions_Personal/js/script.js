console.log("---Personal---")

Miles(20, 50, 10)

function Miles(day1Miles, day2Miles, day3Miles) {
	var Days = 3;
	var totalMiles = day1Miles + day2Miles + day3Miles;
	var Average = totalMiles / Days
	console.log("The average number of miles is " + Average + " miles")
}

Miles();