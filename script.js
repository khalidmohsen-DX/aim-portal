// --- LOGIN LOGIC ---
function verifyLogin() {
    let pin = document.getElementById("access-pin").value;
    let correctPassword = "2026"; // Boss, change this to whatever you want

    if (pin === correctPassword) {
        // Hide Login, Show Chat
        document.getElementById("login-screen").style.display = "none";
        document.getElementById("chat-screen").style.display = "flex";
        
        // Trigger the automatic welcome pop-up after 1 second
        setTimeout(() => {
            displayMessage("I'm here to help, as it do right now.", "aim-msg");
        }, 800);
    } else {
        // Show Error
        document.getElementById("error-msg").style.display = "block";
    }
}

function handleLoginPress(event) {
    if (event.key === 'Enter') {
        verifyLogin();
    }
}

// --- CHAT LOGIC ---
function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

function sendQuickMessage(text) {
    document.getElementById("user-input").value = text;
    sendMessage();
}

function sendMessage() {
    let inputField = document.getElementById("user-input");
    let messageText = inputField.value;

    if (messageText.trim() !== "") {
        displayMessage(messageText, "user-msg");
        inputField.value = ""; 
        
        // Holding response until we connect the API
        setTimeout(() => {
            displayMessage("أنا جاهزة ومستنية ربط مفتاح الذكاء الاصطناعي عشان أجاوبك من ملفات X-Tension.", "aim-msg");
        }, 800);
    }
}

function displayMessage(text, senderClass) {
    let chatBox = document.getElementById("chat-box");
    let newMessage = document.createElement("div");
    
    newMessage.classList.add("message", senderClass);
    newMessage.innerText = text;
    
    chatBox.appendChild(newMessage);
    chatBox.scrollTo({
        top: chatBox.scrollHeight,
        behavior: 'smooth'
    });
}
