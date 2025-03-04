// elements
const header = document.querySelector('#header');
const headerTop = document.querySelector('#header > .cover > .top');
const mainSection = document.querySelector('#main');
const mouseSvg = document.querySelector('#header > .cover > .icon_mouse > svg');

// Events
window.addEventListener('scroll', () => {
  // console.log(headerTop.getBoundingClientRect());
  if (mainSection.getBoundingClientRect().y - 43 <= 0)
    headerTop.classList.add('unmount');
  else headerTop.classList.remove('unmount');
});

mouseSvg.addEventListener('click', () => {
  window.scrollTo(0, header.getBoundingClientRect().height);
});
