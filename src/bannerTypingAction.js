// Variables
const myJobList = ['web publisher', 'front-end developer', 'Web Developer'];
let jobIndex = 0;
let cursorIndex = 0;

// Events
let typing = setInterval(typingEvent, 150);
let deleting = undefined;

// Functions
function typingEvent() {
  const text = myJobList[jobIndex];

  if (text.at(cursorIndex) === undefined) {
    cursorIndex--;
    jobIndex = ++jobIndex % myJobList.length;
    clearInterval(typing);
    setTimeout(() => {
      deleting = setInterval(deletingEvent, 100);
    }, 1500);
  } else bannerTypingSpace.innerHTML += text.at(cursorIndex++);
}

function deletingEvent() {
  const temp = bannerTypingSpace.innerHTML;

  if (cursorIndex < 0) {
    clearInterval(deleting);
    cursorIndex = 0;
    setTimeout(() => {
      typing = setInterval(typingEvent, 250);
    }, 1000);
  } else {
    bannerTypingSpace.innerHTML = temp.substring(0, temp.length - 1);
    cursorIndex--;
  }
}
