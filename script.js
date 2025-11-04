// =========================
// Chat Box Functionality
// =========================
const chatBubble = document.getElementById('chat-bubble');
const chatBox = document.getElementById('chat-box');
const closeChat = document.getElementById('close-chat');
const sendBtn = document.getElementById('send-btn');
const chatInput = document.getElementById('chat-input');
const chatBody = document.querySelector('.chat-body');

// Open chat box when bubble clicked
chatBubble.addEventListener('click', () => {
  chatBox.style.display = 'flex';
  chatBubble.style.display = 'none';
});

// Close chat box
closeChat.addEventListener('click', () => {
  chatBox.style.display = 'none';
  chatBubble.style.display = 'flex';
});

// Send message inside chat
sendBtn.addEventListener('click', () => {
  const message = chatInput.value.trim();
  if (message) {
    const userMsg = document.createElement('p');
    userMsg.textContent = "You: " + message;
    chatBody.appendChild(userMsg);
    chatInput.value = '';
    chatBody.scrollTop = chatBody.scrollHeight;
  }
});
