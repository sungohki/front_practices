const jobList = [
  ' ui/ux designer',
  ' front-end developer',
  ' back-end developer',
];

// elements
const myJob = document.querySelector(
  '#header > .cover > .banner > .card > p:nth-child(2)'
);
const headerTop = document.querySelector('#header > .cover > .top');

// variables
let typing = setInterval(typingEvent, 150);
let deleting = undefined;
let jobIndex = 0;
let index = 0;

window.addEventListener('scroll', (e) => {
  // console.log(window.scrollY);
  if (window.scrollY > 600 - 43) headerTop.classList.add('unmount');
  else headerTop.classList.remove('unmount');
});

// functions
function typingEvent() {
  if (jobList[jobIndex].at(index) === undefined) {
    index--;
    jobIndex = ++jobIndex % jobList.length;
    clearInterval(typing);
    setTimeout(() => {
      deleting = setInterval(deletingEvent, 100);
    }, 1500);
  } else myJob.innerHTML += jobList[jobIndex].at(index++);
}

function deletingEvent() {
  const temp = myJob.innerHTML;
  if (index <= 0) {
    clearInterval(deleting);
    setTimeout(() => {
      typing = setInterval(typingEvent, 250);
    }, 1000);
  } else {
    myJob.innerHTML = temp.substring(0, temp.length - 1);
    index--;
  }
}
