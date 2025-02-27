const slideView = document.querySelector('#main > .slide > .slideView > menu');
const slideViewLists = document.querySelectorAll(
  '#main > .slide > .slideView > menu> li'
);

let slideShow = setInterval(sliding, 3000);
let slideIndex = 0;

function sliding() {
  slideIndex = (slideIndex + 1) % slideViewLists.length;
  slideView.style.left = -100 * slideIndex + '%';
}
