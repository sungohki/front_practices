document.querySelector('#header .nav').addEventListener('mouseover', (e) => {
  document.querySelector('#header .nav .sub_menu').classList.add('show');
});
document.querySelector('#header .nav').addEventListener('mouseout', () => {
  document.querySelector('#header .nav .sub_menu').classList.remove('show');
});

document
  .querySelectorAll('#header .nav .sub_menu ul')
  .forEach((item, index) => {
    item.addEventListener('mouseover', () => {
      document.querySelector(
        `#header .nav .title div:nth-child(${index + 1}) span > span`
      ).style.transform = 'scaleX(1)';
    });

    item.addEventListener('mouseout', () => {
      document.querySelector(
        `#header .nav .title div:nth-child(${index + 1}) span > span`
      ).style.transform = 'scaleX(0)';
    });
  });
