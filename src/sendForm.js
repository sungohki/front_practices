const sendForm = document.querySelector(
  '#contact > .card > .contact > .contact_form'
);
const senderName = sendForm.querySelector('.sender_name');
const senderEmail = sendForm.querySelector('.sender_email');
const senderMessage = sendForm.querySelector('.sender_message');
const sendBtn = sendForm.querySelector('.send_btn');

sendBtn.addEventListener('click', () => {
  if (
    senderName.value.length &&
    senderEmail.value.length &&
    senderMessage.value.length
  ) {
    window.alert('💡 info: 이메일이 전송되었습니다.');
  }
});
