var Dogs = 1; // number of dogs
var Cats = 4; // number of cats

var Pets = Dogs + Cats; // finds out how many animals total
var petsAllowed = 4; // number of pets allowed
	
var Permission = (Pets > petsAllowed) ? "You have to many pets" : "You do not have to many pets and can keep them all"; // tenary to see if you have to many pets or not
console.log(Permission)// displays result to log
