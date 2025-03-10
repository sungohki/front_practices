// Events
window.addEventListener('scroll', () => {
  // console.log(headerTop.getBoundingClientRect());
  if (mainSection.getBoundingClientRect().y - 40 <= 0) {
    headerTab.classList.add('unmount');
  } else {
    headerTab.classList.remove('unmount');
  }
});
