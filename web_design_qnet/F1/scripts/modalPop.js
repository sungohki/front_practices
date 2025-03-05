const modalSection = document.querySelector('#modal');
const modalExitBtn = document.querySelector(
  '#modal > .window > .footer > .exit'
);
const infoList2 = document.querySelectorAll(
  '#main > .notice > .category > .center > .infoList > .item'
);

console.log(infoList2);

infoList2.forEach((item, _) => {
  item.addEventListener('click', () => {
    modalSection.classList.add('on');
  });
});

modalExitBtn.addEventListener('click', () => {
  modalSection.classList.remove('on');
});
