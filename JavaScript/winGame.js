// Win Game Function
function winGame() {

	// Create Popup Div
	let div = document.createElement("div");

	// Create Text
	let divText = document.createTextNode(`!!!You have Won, Congratulations!!!`);

	// Append Text To Div
	div.appendChild(divText);

	// Add Class On Div
	div.className = 'popup_win';

	// Append To The Body
	document.body.appendChild(div);

	document.getElementById("You_win").play();

}
