document.querySelector('#notice').addEventListener('click', function () {
  document.querySelector('#notice').classList.add('ov');
  document.querySelector('#gallery').classList.remove('ov');
  document.querySelector('#pic').classList.add('dis');
  document.querySelector('#subject').classList.remove('dis');
});

document.querySelector('#gallery').addEventListener('click', function () {
  document.querySelector('#notice').classList.remove('ov');
  document.querySelector('#gallery').classList.add('ov');
  document.querySelector('#subject').classList.add('dis');
  document.querySelector('#pic').classList.remove('dis');
});

document.querySelectorAll('#header .category dl').forEach((item, index) => {
  item.addEventListener('mouseover', function () {
    document.querySelector(
      `#header .nav ul li:nth-child(${index + 1})`
    ).style.backgroundColor = '#84205C';
  });
  item.addEventListener('mouseout', function () {
    document.querySelector(
      `#header .nav ul li:nth-child(${index + 1})`
    ).style.backgroundColor = '#5E1742';
  });
});
