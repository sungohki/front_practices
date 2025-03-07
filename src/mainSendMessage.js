sendBtn.addEventListener('click', () => {
  if (
    senderName.value.length &&
    senderEmail.value.length &&
    senderMessage.value.length
  ) {
    window.alert('💡 info: 이메일이 전송되었습니다.');
  }
});
