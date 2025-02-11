// Elements
const mainSlide = document.querySelector('section.slide');
const mainSlideScreen = document.querySelector('section.slide > .screen');
const mainSlideDots = document.querySelectorAll('section.slide > .dots > div');

// Events
let index = 0;
let slideShow = setInterval(slideEvent, 4000);

mainSlideDots.forEach((item, i) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    clearInterval(slideShow);
    mainSlideDots[index].classList.remove('on');
    index = i;
    mainSlideScreen.style.left = -(100 * index) + '%';
    mainSlideDots[index].classList.add('on');
    slideShow = setInterval(slideEvent, 4000);
  });
});

// Function
function slideEvent() {
  mainSlideDots[index].classList.remove('on');
  index = ++index % 3;
  mainSlideScreen.style.left = -(100 * index) + '%';
  mainSlideDots[index].classList.add('on');
}
