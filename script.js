{\rtf1\ansi\ansicpg1252\cocoartf2907
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // Function to handle typing a message and clicking Send\
function sendMessage() \{\
    let inputField = document.getElementById("user-input");\
    let messageText = inputField.value;\
\
    if (messageText.trim() !== "") \{\
        displayMessage(messageText, "user-msg");\
        inputField.value = ""; // Clear the box\
        \
        // Simulate AIM thinking for 1 second before replying\
        setTimeout(() => \{\
            displayMessage("\uc0\u1571 \u1607 \u1604 \u1575 \u1611  \u1576 \u1610 \u1603  \u1610 \u1575  \u1583 \u1603 \u1578 \u1608 \u1585 \u1548  \u1571 \u1606 \u1575  \u1604 \u1587 \u1607  \u1601 \u1610  \u1605 \u1585 \u1581 \u1604 \u1577  \u1575 \u1604 \u1578 \u1583 \u1585 \u1610 \u1576  \u1575 \u1604 \u1571 \u1608 \u1604 \u1610 \u1577 . \u1602 \u1585 \u1610 \u1576 \u1575 \u1611  \u1607 \u1603 \u1608 \u1606  \u1605 \u1578 \u1589 \u1604 \u1577  \u1576 \u1575 \u1604 \u1584 \u1603 \u1575 \u1569  \u1575 \u1604 \u1575 \u1589 \u1591 \u1606 \u1575 \u1593 \u1610  \u1593 \u1588 \u1575 \u1606  \u1571 \u1580 \u1575 \u1608 \u1576 \u1603  \u1576 \u1575 \u1604 \u1578 \u1601 \u1589 \u1610 \u1604  \u1605 \u1606  \u1605 \u1604 \u1601 \u1575 \u1578  \u1585 \u1575 \u1605 \u1610 \u1583 \u1575 .", "aim-msg");\
        \}, 1000);\
    \}\
\}\
\
// Function to handle the Quick Action Buttons\
function sendQuickMessage(text) \{\
    document.getElementById("user-input").value = text;\
    sendMessage();\
\}\
\
// Function to print the message on the screen\
function displayMessage(text, senderClass) \{\
    let chatBox = document.getElementById("chat-box");\
    let newMessage = document.createElement("div");\
    \
    newMessage.classList.add("message", senderClass);\
    newMessage.innerText = text;\
    \
    chatBox.appendChild(newMessage);\
    chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to bottom\
\}}