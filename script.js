window.onload = function() {
    if (localStorage.getItem("chat")) {
        document.getElementById("messages").innerHTML = localStorage.getItem("chat");
    }
    if (localStorage.getItem("username")) {
        document.getElementById("username").value = localStorage.getItem("username");
    }
};

function sendMessage() {
    var username = document.getElementById("username");
    var input = document.getElementById("input");
    var messages = document.getElementById("messages");

    var message = document.createElement("div");
    message.className = "message";
    message.textContent = username.value + ": " + input.value;
    messages.appendChild(message);

    localStorage.setItem("chat", messages.innerHTML);
    localStorage.setItem("username", username.value);
    input.value = "";
}

var socket = io();

function sendMessage() {
    var username = document.getElementById("username");
    var input = document.getElementById("input");
    var messages = document.getElementById("messages");

    var message = username.value + ": " + input.value;
    socket.emit('chat message', message);
    input.value = '';
}

socket.on('chat message', function(msg){
    var messages = document.getElementById("messages");
    var messageElement = document.createElement("div");
    messageElement.textContent = msg;
    messages.appendChild(messageElement);
});
