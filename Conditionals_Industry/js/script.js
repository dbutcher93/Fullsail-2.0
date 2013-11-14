var printerInk = true;
var printerPaper = true;

if (printerPaper && printerPaper){

	console.log("Go ahead and print the order.")
} else if (printerPaper || printerInk){

	console.log("You need to replace the ink or add paper.")
} else {

	console.log("You need ink and paper to print the order.")
}