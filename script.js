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

<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
<script>
  (function(){
    emailjs.init("I89hD3FDaDdUe_sep"); // Replace with your EmailJS public key
  })();

  document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm("service_5i6tapa", "template_pvy0q99", this)
      .then(() => {
        alert("Message sent successfully!");
      }, (error) => {
        alert("Failed to send message. Please try again later.");
        console.error(error);
      });
  });
</script>
