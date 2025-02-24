// Element
const slideView = document.querySelector('#main .slide');
const slideList = slideView.querySelectorAll('img');

let slideIndex = 0;
let slideShowAuto = setInterval(slideShow, 4000);

// EventListener

// Function
function slideShow() {
  slideList[slideIndex].classList.remove('on');
  slideIndex = (slideIndex + 1) % slideList.length;
  slideList[slideIndex].classList.add('on');
}
