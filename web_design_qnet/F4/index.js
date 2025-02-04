// Element(s)
const menu = document.querySelector('#header menu');
const sub = document.querySelector(`#header nav`);
const slideList = document.querySelector('#slide .cardList');
const firstInfo = document.querySelector('section.info menu li a:first-child');
const modal = document.querySelector('#modal');
const modalExitBtn = modal.querySelector('div.exit');

// listener
sub.addEventListener('mouseover', function () {
  sub.classList.add('on');
});
sub.addEventListener('mouseout', function () {
  sub.classList.remove('on');
});

menu.addEventListener('mouseover', function () {
  console.log('mouseenter');
  sub.classList.add('on');
});
menu.addEventListener('mouseout', function () {
  console.log('mouseenter');
  sub.classList.remove('on');
});
firstInfo.addEventListener('click', function (e) {
  e.preventDefault();
  modal.classList.toggle('active');
});
modalExitBtn.addEventListener('click', function (e) {
  e.preventDefault();
  modal.classList.toggle('active');
});

// console.log(slideList);
let slideEvent = setInterval(slideshow, 2000);
let slideNum = 1;
function slideshow() {
  if (slideNum == 3) slideNum = 0;
  slideList.style.top = -350 * slideNum++ + 'px';
}

slideList.addEventListener('mouseover', function () {
  clearInterval(slideEvent);
  //   console.log('slide stop');
});
slideList.addEventListener('mouseout', function () {
  slideEvent = setInterval(slideshow, 2000);
  //   console.log('slide restart');
});
