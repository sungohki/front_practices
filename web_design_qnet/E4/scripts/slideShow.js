const slideView = document.querySelector('#main > .slide > .list');

let slideIndex = 0;
let slideShow = setInterval(slide, 3000);

function slide() {
  slideIndex = (slideIndex + 1) % 3;
  console.log(slideIndex);
  slideView.style.left = -slideIndex * 100 + '%';
}
