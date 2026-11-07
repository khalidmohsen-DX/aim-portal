// --- 1. SECURE LOGIN ---
function verifyLogin() {
    let pin = document.getElementById("access-pin").value;
    let correctPassword = "2026"; 

    if (pin === correctPassword) {
        document.getElementById("login-screen").style.display = "none";
        document.getElementById("chat-screen").style.display = "flex";
    } else {
        document.getElementById("error-msg").style.display = "block";
    }
}

function handleLoginPress(event) {
    if (event.key === 'Enter') verifyLogin();
}

// --- 2. CHAT ENGINE ---
function handleKeyPress(event) {
    if (event.key === 'Enter') sendMessage();
}

function sendQuickMessage(text) {
    document.getElementById("user-input").value = text;
    sendMessage();
}

function sendMessage() {
    let inputField = document.getElementById("user-input");
    let text = inputField.value.trim();

    if (text !== "") {
        // Hide welcome screen on first message
        let welcome = document.getElementById("welcome-screen");
        if(welcome) welcome.style.display = "none";

        // Print User Message
        appendMessage("user", text);
        inputField.value = ""; 

        // Show Typing Indicator
        let typingId = showTypingIndicator();

        // Simulate AI Network Delay
        setTimeout(() => {
            removeTypingIndicator(typingId);
            appendMessage("ai", "أنا جاهزة ومستنية ربط مفتاح الذكاء الاصطناعي (API) عشان أحلل حالة المريض دي بناءً على ملفات X-Tension.");
        }, 1500);
    }
}

// --- 3. UI RENDERING ---
function appendMessage(sender, text) {
    let chatBox = document.getElementById("chat-box");
    let row = document.createElement("div");
    row.classList.add("msg-row", sender);

    if (sender === "ai") {
        row.innerHTML = `
            <div class="ai-avatar">AIM</div>
            <div class="bubble">${text}</div>
        `;
    } else {
        row.innerHTML = `<div class="bubble">${text}</div>`;
    }
    
    chatBox.appendChild(row);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function showTypingIndicator() {
    let chatBox = document.getElementById("chat-box");
    let id = "typing-" + Date.now();
    let row = document.createElement("div");
    row.classList.add("msg-row", "ai");
    row.id = id;
    row.innerHTML = `
        <div class="ai-avatar">AIM</div>
        <div class="bubble">
            <div class="typing-dots"><span></span><span></span><span></span></div>
        </div>
    `;
    chatBox.appendChild(row);
    chatBox.scrollTop = chatBox.scrollHeight;
    return id;
}

function removeTypingIndicator(id) {
    let element = document.getElementById(id);
    if (element) element.remove();
}
