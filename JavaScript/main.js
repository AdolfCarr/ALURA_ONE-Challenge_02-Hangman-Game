// Letters
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let wrongAttempts=0;
// Get Array From Letters
let lettersArray = Array.from(letters);

// Select Letters Container
let lettersContainer = document.querySelector(".letters");

// Generate Letters
lettersArray.forEach(letter => {

	// Create Span
	let span = document.createElement("span");

	// Create Letter Text Node
	let theLetter = document.createTextNode(letter);

	// Append The Letter To Span
	span.appendChild(theLetter);

	// Add Class On Span
	span.className = 'letter-box';

	// Append Span To The Letters Container
	lettersContainer.appendChild(span);
});

// Object Of Words + Categories
const words = {
	programming: ["Php", "Javascript", "Go", "Scala", "Fortran", "R", "Mysql", "Python"],
	movies: ["Prestige", "Inception", "Parasite", "Interstellar", "Whiplash", "Memento", "Coco", "Up"],
	people: ["Einstein", "Hitchcock", "Alexander", "Cleopatra", "Ghandi"],
	countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"]
}

// Get Random Property
let allKeys = Object.keys(words);

// Random Number Depend On Keys Length
let randomPropNumber = Math.floor(Math.random() * allKeys.length);

// Category
let randomPropName = allKeys[randomPropNumber];

// Category Words
let randomPropValue = words[randomPropName];

// Random Number Depend On Words
let randomValueNumber = Math.floor(Math.random() * randomPropValue.length);

// The Chosen Word
let randomValueValue = randomPropValue[randomValueNumber];

// Set Category Info
document.querySelector(".game-info .category span").innerHTML = randomPropName;

// Select Letters Guess Element
let lettersGuessContainer = document.querySelector(".letters-guess");

// Convert Chosen Word To Array
let lettersAndSpace = Array.from(randomValueValue);

console.log("Cantidad de letras en la palabra: ", lettersAndSpace.length);

// Create Spans Depened On Word
lettersAndSpace.forEach(letter => {

	// Create Empty Span
	let emptySpan = document.createElement("span");

	// If Letter Is Space
	if (letter === ' ') {

		// Add Class To The Span
		emptySpan.className = 'with-space';
	}

	// Append Span To The Letters Guess Container
	lettersGuessContainer.appendChild(emptySpan);
});

// Select Guess Spans
let guessSpans = document.querySelectorAll(".letters-guess span");

// Select The Draw Element
let theDraw = document.querySelector(".hangman-draw");
const arrayClickedLetters = [];
let chancesLeft = 8;



