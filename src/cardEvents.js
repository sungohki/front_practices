const aboutSection = document.querySelector('#about');
const aboutCard = aboutSection.querySelector(
  '.card > .info > .profile_img >.guide'
);
const featureSection = document.querySelector('#features');
const featureCards = document.querySelectorAll('.stack > .item');

window.addEventListener('scroll', () => {
  if (aboutSection.getBoundingClientRect().y < 400) {
    aboutCard.classList.add('on');
  }
  if (featureSection.getBoundingClientRect().y < 800) {
    featureCards.forEach((item, index) => {
      item.style.animation = `.4s swing .${index}s forwards, .4s appear .${index}s forwards`;
    });
  }
});
