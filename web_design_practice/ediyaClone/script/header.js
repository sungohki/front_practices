// Element(s)
const navigation = document.querySelector('#header .nav');
const menuList = navigation.querySelectorAll('.title div');
const subMenuList = navigation.querySelectorAll('.sub_menu ul');

// EventLister
navigation.addEventListener('mouseover', function (e) {
  document.querySelector('#header .nav .sub_menu').classList.add('show');
});
navigation.addEventListener('mouseout', function (e) {
  document.querySelector('#header .nav .sub_menu').classList.remove('show');
});
menuList.forEach(function (element) {
  element.addEventListener('mouseover', function () {
    this.querySelector('span > span').classList.add('on');
  });
  element.addEventListener('mouseout', function () {
    this.querySelector('span > span').classList.remove('on');
  });
});
subMenuList.forEach((item, index) => {
  item.addEventListener('mouseover', () => {
    menuList[index].querySelector(`span > span`).classList.add('on');
  });
  item.addEventListener('mouseout', () => {
    menuList[index].querySelector(`span > span`).classList.remove('on');
  });
});

// Function
