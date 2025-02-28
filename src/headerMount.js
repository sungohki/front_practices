// elements
const headerTop = document.querySelector('#header > .cover > .top');

// Events
window.addEventListener('scroll', () => {
  if (window.scrollY > 600 - 43) headerTop.classList.add('unmount');
  else headerTop.classList.remove('unmount');
});
