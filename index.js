/*jshint esversion: 6 */

var btns = document.querySelectorAll('.transitionalBtns');

// Create a "global-level" event listener in which will initiate upon a "keydown".
// Function will run upon the correct key being pressed.
// Function will add the "playing" class to the corresponding button/key pressed.

window.addEventListener('keydown', (e) => {
	var key = e.which;

	btns.forEach((btn) => {
		if (key === parseInt(btn.dataset.key)) {
			btn.classList.add('playing');
		}
	});
});

// Create "Click" Event Listeners on all buttons and run function to add class of "playing" to ClassList,
// Therefore attaching the transition animation to the element.

btns.forEach((btn) =>
	btn.addEventListener('click', (e) => {
		btn.classList.add('playing');
	})
);

// Create a function that will remove the "playing" class from the current elemrnt.

function removePlayingClass (e) {
	this.classList.remove('playing');
}

// Iterate through every button and add an event listener for the "TransitionEnd"
// Once the transitioned has ended its animation, we will run the "removePlatingClass" function.
// This will undo the transition effects that were put in place by the "playing" class.

btns.forEach((btn) => btn.addEventListener('transitionend', removePlayingClass));
