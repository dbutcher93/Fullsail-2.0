var drywall = function(){ // start of anonymous function

	var Sheets = 4; // number of drywall sheets
	var panelsLeft = 6; / number of panels left that need drywall

	if (Sheets >= panelsLeft){ // start of if
		console.log("You have enough sheets of drywall left to finish the job") // if true display this to log
	} else { // start of else

		console.log("You do not even enough sheets to finish the job") // if false display this to log
	}
}

drywall(); // calls function to action