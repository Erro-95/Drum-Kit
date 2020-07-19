/*jshint esversion: 6 */

var btns = document.querySelectorAll('.transitionalBtns');
var sound = document.querySelectorAll('audio');

// Create a "global-level" event listener in which will initiate upon a "keydown".
// Function will run upon the correct key being pressed.
// Function will add the "playing" class to the corresponding button/key pressed
// as well as play the corressponding sound with the key press.

window.addEventListener('keydown', (e) => {
	var keyPress = e.which;

	for (let i = 0; i < sound.length; i++) {
		if (keyPress === parseInt(btns[i].dataset.key)) {
			// Adding the "playing" class to the current btn within the node iteration.
			btns[i].classList.add('playing');
			// By setting the currentTime to 0, we are  resetting the audio.
			//This lets us stop and reset the audio if the key is pressed multiple times.
			sound[i].currentTime = 0;
			// After ressetting the audio to the start, it is being set to play again.
			sound[i].play();
		}
	}
});

// Create "Click" Event Listeners on all buttons and run function to add class of "playing" to ClassList,
// Along with the corressponding audio elemeent.

btns.forEach((btn) => {
	btn.addEventListener('click', addPlayingClass);
});

function addPlayingClass () {
	this.classList.add('playing');
	sound[parseInt(this.dataset.audio)].currentTime = 0;
	sound[parseInt(this.dataset.audio)].play();
}

// Create a function that will remove the "playing" class from the current elemrnt.

function removePlayingClass () {
	this.classList.remove('playing');
}

// Iterate through every button and add an event listener for the "TransitionEnd"
// Once the transitioned has ended its animation, we will run the "removePlatingClass" function.
// This will undo the transition effects that were put in place by the "playing" class.

btns.forEach((btn) => btn.addEventListener('transitionend', removePlayingClass));
