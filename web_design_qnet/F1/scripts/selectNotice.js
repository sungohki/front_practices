const [infoCategory, galleryCategory] = document.querySelectorAll(
  '#main > .notice > .category > .center > .title > p'
);
const [infoList, galleryList] = document.querySelectorAll(
  '#main > .notice > .category > .center > menu'
);

infoCategory.addEventListener('click', () => {
  if (!infoCategory.classList.contains('on')) {
    galleryCategory.classList.remove('on');
    galleryList.classList.remove('on');
    infoCategory.classList.add('on');
    infoList.classList.add('on');
  }
});

galleryCategory.addEventListener('click', () => {
  if (!galleryCategory.classList.contains('on')) {
    infoCategory.classList.remove('on');
    infoList.classList.remove('on');
    galleryCategory.classList.add('on');
    galleryList.classList.add('on');
  }
});
