headerMenuToggleBtn.addEventListener('mouseenter', () => {
  console.log('enter');
  headerMenuList.classList.add('on');
});
headerMenuToggleBtn.addEventListener('mouseout', () => {
  console.log('out');
  headerMenuList.classList.remove('on');
});
headerMenuToggleBtn.addEventListener('click', () => {
  //   console.log('click');
  //   headerMenuList.classList.toggle('on');
});
headerMenuToggleBtn.addEventListener('touch', () => {
  console.log('touch');
  headerMenuList.classList.toggle('on');
});
