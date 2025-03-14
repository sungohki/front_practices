const mainContentsBoxImgList = document.querySelectorAll(
  '#main > .main_contents_box .preview'
);

const backgroundDir = './images/pic';

mainContentsBoxImgList.forEach((item, index) => {
  item.style.background = `url(${backgroundDir}${
    index + 2
  }.jpg) center/cover no-repeat `;
});
