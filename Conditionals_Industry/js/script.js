var printerInk = true; // Variable showing if there is or isn't ink in the printer
var printerPaper = true; // Variable showing if the printer has paper

if (printerPaper && printerPaper){ // Start of the if equation

	console.log("Go ahead and print the order.") // If true dispay this in the log
} else if (printerPaper || printerInk){ // Start of the else if

	console.log("You need to replace the ink or add paper.") // If the else if is true display this to the log
} else { // Start of the else

	console.log("You need ink and paper to print the order.") // If the else if is true display this to the log
}