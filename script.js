// pseudocode;

const hamburger = document.querySelector('.hamburger');
const topLine = document.querySelector('.hamburger-top-line');
const middleLine = document.querySelector('.hamburger-middle-line');
const bottomLine = document.querySelector('.hamburger-bottom-line');
const nav = document.querySelector('header nav');
const imgContainer = document.querySelector('.image-container ');
let isHamburger = true;

// for changing hamburger to x and vice versa when clicked
hamburger.addEventListener('click', () => {
	if (isHamburger) {
		topLine.classList.add('x-top-line');
		middleLine.classList.add('x-middle-line');
		bottomLine.classList.add('x-bottom-line');
		topLine.classList.remove('hamburger-top-line');
		middleLine.classList.remove('hamburger-middle-line');
		bottomLine.classList.remove('hamburger-bottom-line');
		nav.classList.add('nav-open');
		imgContainer.classList.add('image-container-hamburger-nav-open');
		isHamburger = false;
	} else {
		topLine.classList.add('hamburger-top-line');
		middleLine.classList.add('hamburger-middle-line');
		bottomLine.classList.add('hamburger-bottom-line');
		topLine.classList.remove('x-top-line');
		middleLine.classList.remove('x-middle-line');
		bottomLine.classList.remove('x-bottom-line');
		nav.classList.remove('nav-open');
		imgContainer.classList.remove('image-container-hamburger-nav-open');
		isHamburger = true;
	}
});
