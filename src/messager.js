function showMessage(messageText) {
  const messageEl = document.createElement('h1');
  messageEl.textContent = messageText;
  document.body.appendChild(messageEl);
}

export default showMessage;
