const infoListItems = document.querySelectorAll(
  '#main > .contents > .notice> .info > .list > li'
);
const modal = document.querySelector('#modal');
const modalQuitBtn = modal.querySelector('.quit');

infoListItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    modal.classList.add('on');
  });
});

modalQuitBtn.addEventListener('click', () => {
  modal.classList.remove('on');
});
