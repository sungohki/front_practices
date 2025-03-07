window.addEventListener('scroll', () => {
  if (aboutBox.getBoundingClientRect().y < 400) {
    aboutCard.classList.add('on');
  }

  if (featuresBox.getBoundingClientRect().y < 800) {
    featureCards.forEach((item, index) => {
      item.style.animation = `.4s swing .${index}s forwards, .4s appear .${index}s forwards`;
    });
  }
});
