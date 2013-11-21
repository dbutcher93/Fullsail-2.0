Miles(20, 50, 10) // This show the number of miles driven each day

function Miles(day1Miles, day2Miles, day3Miles) { // this shows the parameters for the function
	var Days = 3; // this shows the number of days, this should be the number of arguments
	var totalMiles = day1Miles + day2Miles + day3Miles; // this is where the miles are added up
	var Average = totalMiles / Days // this is where the average is calculated
	console.log("The average number of miles is " + Average + " miles") // this displays the average to the log
}

Miles(); // this calls the function to action