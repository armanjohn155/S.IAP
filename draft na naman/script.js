const sendBtn = document.getElementById('sendBtn');
const userInput = document.getElementById('userInput');
const chatBox = document.getElementById('chatBox');

sendBtn.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') sendMessage();
});

function sendMessage() {
  const message = userInput.value.trim();
  if (!message) return;

  appendMessage('user', message);
  userInput.value = '';

  setTimeout(() => {
    const reply = getAutoReply(message);
    appendMessage('bot', reply);
  }, 600);
}

function appendMessage(sender, text) {
  const msgDiv = document.createElement('div');
  msgDiv.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
  msgDiv.textContent = text;
  chatBox.appendChild(msgDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getAutoReply(input) {
  input = input.toLowerCase();

  if (input.includes('price') || input.includes('cost')) {
    return 'Our cakes start at $25. Custom designs vary depending on size and decoration.';
  } else if (input.includes('order')) {
    return 'You can place an order by visiting our website or messaging us your desired cake flavor and size. 🍰';
  } else if (input.includes('flavor') || input.includes('flavours')) {
    return 'We offer chocolate, vanilla, red velvet, strawberry, and more!';
  } else if (input.includes('hours') || input.includes('open')) {
    return 'We’re open from 9 AM to 6 PM, Monday through Saturday. 🎂';
  } else if (input.includes('thanks') || input.includes('thank you')) {
    return 'You’re very welcome! 💕';
  } else {
    return 'Thank you for your message! Our team will get back to you soon. 😊';
  }
}
