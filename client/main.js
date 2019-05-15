let socket = io();

let form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    let input = document.querySelector('#message');
    let text = input.nodeValue;
    socket.emit('message', text);
    input.value = '';
});
socket.on('message', function(text) {
    if(!text) {
        return;
    }
    let container = document.querySelector('section');
    let newMessage = document.createElement('p');
    newMessage.innerText = text;
    container.appendChild(newMessage);
    
    let seperator = document.createElement('br');
    container.appendChild(seperator);

    container.scrollTop = container.scrollHeight;

});