// Elements
const homeBtn = document.querySelector('#footer .category:nth-child(1)');
const switchBtn = document.querySelector('#footer .category:nth-child(2)');
const housingBtn = document.querySelector('#footer .category:nth-child(3)');
const estimateBtn = document.querySelector('#footer .category:nth-child(4)');
const profileBtn = document.querySelector('#footer .category:nth-child(5)');
const host = window.location.host;

// Events
homeBtn.addEventListener('click', function () {
  if (!checkCurrentPage(this)) window.open('../index.html', '_self');
});
switchBtn.addEventListener('click', function () {
  if (!checkCurrentPage(this)) window.open('../pages/switchList.html', '_self');
});
housingBtn.addEventListener('click', function () {
  if (!checkCurrentPage(this))
    window.open('../pages/housingList.html', '_self');
});
estimateBtn.addEventListener('click', function () {
  if (!checkCurrentPage(this))
    window.open('../pages/estimatePage.html', '_self');
});
profileBtn.addEventListener('click', function () {
  if (!checkCurrentPage(this))
    window.open('../pages/profilePage.html', '_self');
});

// Functions
function checkCurrentPage(element) {
  return element.classList.contains('on');
}
