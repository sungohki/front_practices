// elements
const floatingBtn = document.querySelector('#floating');
const headerElement = document.querySelector('#header');
const mainElement = document.querySelector('#main');

floatingBtn.addEventListener('mouseover', () => {
  headerElement.classList.add('flip');
  mainElement.classList.add('flip');
});
floatingBtn.addEventListener('mouseout', () => {
  headerElement.classList.remove('flip');
  mainElement.classList.remove('flip');
});
floatingBtn.addEventListener('click', () => {
  floatingBtn.classList.toggle('on');
  mainElement.classList.remove('flip');
  headerElement.classList.add('toggle');
});
