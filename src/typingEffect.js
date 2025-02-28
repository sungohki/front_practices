// Elements
const myJob = document.querySelector(
  '#header > .cover > .banner > .card > p:nth-child(2) > span'
);

// Variables
const jobList = ['web publisher', 'front-end developer', 'Web Developer'];
let jobIndex = 0;
let cursorIndex = 0;

// Events
let typing = setInterval(typingEvent, 150);
let deleting = undefined;

// Functions
function typingEvent() {
  const text = jobList[jobIndex];

  if (text.at(cursorIndex) === undefined) {
    cursorIndex--;
    jobIndex = ++jobIndex % jobList.length;
    clearInterval(typing);
    setTimeout(() => {
      deleting = setInterval(deletingEvent, 100);
    }, 1500);
  } else myJob.innerHTML += text.at(cursorIndex++);
}

function deletingEvent() {
  const temp = myJob.innerHTML;

  if (cursorIndex < 0) {
    clearInterval(deleting);
    cursorIndex = 0;
    setTimeout(() => {
      typing = setInterval(typingEvent, 250);
    }, 1000);
  } else {
    myJob.innerHTML = temp.substring(0, temp.length - 1);
    cursorIndex--;
  }
}
