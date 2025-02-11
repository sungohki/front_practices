// Elements
const homeBtn = document.querySelector('#footer .category:nth-child(1)');
const switchBtn = document.querySelector('#footer .category:nth-child(2)');
const housingBtn = document.querySelector('#footer .category:nth-child(3)');
const estimateBtn = document.querySelector('#footer .category:nth-child(4)');
const profileBtn = document.querySelector('#footer .category:nth-child(5)');

// Events

homeBtn.addEventListener('click', () => {
  window.open('../index.html', '_self');
});
switchBtn.addEventListener('click', () => {
  window.open('../pages/switchList.html', '_self');
});
housingBtn.addEventListener('click', () => {
  window.open('../pages/housingList.html', '_self');
});
estimateBtn.addEventListener('click', () => {
  window.open('../pages/estimatePage.html', '_self');
});
profileBtn.addEventListener('click', () => {
  window.open('../pages/profilePage.html', '_self');
});
