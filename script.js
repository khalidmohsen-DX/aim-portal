// Listen for 'Enter' key press
function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

// Handle Quick Action Buttons
function sendQuickMessage(text) {
    document.getElementById("user-input").value = text;
    sendMessage();
}

// Main Send Function
function sendMessage() {
    let inputField = document.getElementById("user-input");
    let messageText = inputField.value;

    if (messageText.trim() !== "") {
        // 1. Display User Message
        displayMessage(messageText, "user-msg");
        inputField.value = ""; // Clear input
        
        // 2. Simulate AIM Thinking (Typing effect placeholder)
        setTimeout(() => {
            let tempMsg = "أهلاً بيك يا دكتور. أنا واجهة التصميم المبدئية لـ AIM. قريباً جداً هيتم ربطي بعقل الذكاء الاصطناعي عشان أجاوبك من ملفات X-Tension.";
            displayMessage(tempMsg, "aim-msg");
        }, 800);
    }
}

// Display Message on Screen
function displayMessage(text, senderClass) {
    let chatBox = document.getElementById("chat-box");
    let newMessage = document.createElement("div");
    
    newMessage.classList.add("message", senderClass);
    newMessage.innerText = text;
    
    chatBox.appendChild(newMessage);
    
    // Smooth scroll to bottom
    chatBox.scrollTo({
        top: chatBox.scrollHeight,
        behavior: 'smooth'
    });
}
