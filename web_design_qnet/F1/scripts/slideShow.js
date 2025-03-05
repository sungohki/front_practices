const slideView = document.querySelector('#slide > .view');
const slideViewList = document.querySelectorAll('#slide > .view > .item');

let slideIndex = 0;
let slideShow = setInterval(() => {
  slideIndex = (slideIndex + 1) % slideViewList.length;
  slideView.style.left = -(slideIndex * 100) + '%';
}, 3000);
