function enterWord() {
	let enteredWord = document.getElementById("myText");
	words.enteredWords[0]=enteredWord.value;
	//words.enteredWords[0].push(enteredWord.value);
	console.log("Entered Word; ", words.enteredWords[0]);
	console.log("Words: ",words);
}