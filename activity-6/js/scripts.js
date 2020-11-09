//arry for messages
var messages = [];

//message type lookup object... sim to enum...
var messageType = {
    out: 'out-message',
    in: 'in-message',
    unknown: 'unknown-message'
};

//seed data (optional)
var data = [
    {
        type: messageType.out,
        user: 'Mike',
        message: 'Hey, you have lunch plans?'
    },
    {
        type: messageType.in,
        user: 'Joe',
        message: 'Hi Mike! No, how about QDoba?'
    },
    {
        type: messageType.out,
        user: 'Mike',
        message: "Yuck! Let's go to Chipotle please." //Why double quotes?
    }
];

//msg constructor
function Message(type, user, message) {
    this.type = type;
    this.user = user;
    this.message = message;
};

//function to create and return an element for the supplied message...
function createMessageElement(message) {
    //create text element for the message
    var messageText = document.createTextNode(
        message.user + ': ' + message.message);

    // create the element and add the message text...
    var messageEl = document.createElement('div');
    messageEl.appendChild(messageText);

    //add a class using the message type...
    messageEl.className = message.type;

    return messageEl;
};

//button click event handler to add a new message...
function addMessageHandler(event) {
    var user, type;
    var messageInput = document.getElementById('message-input');
    var messageContainerEl = document.getElementById('message-container');

    //determine message type and set message variables accordingly.
    switch (event.target.id) {
        case 'send-button':
            user = 'Mike';
            type = messageType.out;
            break;
        case 'reply-button':
            user = 'Joe';
            type = messageType.in;
            break;
        default:
            user = 'unknown';
            type = messageType.unknown;
            break;
    };

    //create new msg
    if (messageInput.value) {
        //construct a message and add it to array
        var message = new Message(type, user, messageInput.value);
        messages.push(message);

        //create a message element
        var el = createMessageElement(message);

        //add the message element to the DOM
        messageContainerEl.appendChild(el);

        // reset input
        messageInput.value = '';
    };
};

//load seed data from data array above
function loadSeedData() {
    for (var i = 0; i < data.length; i++) {
        var item = data[i];
        var message = new Message(item.type, item.user, item.message);
        messages.push(message);
    }

    var messagesContainerEl = document.getElementById('message-container');

    for (var i = 0; i < messages.length; i++) { 
        var message = messages[i];
        var el = createMessageElement(messages[i])

        messagesContainerEl.appendChild(el);
    };
};

var init = function() {
    //wire event handlers
    document.getElementById('send-button').onclick = addMessageHandler;
    document.getElementById('reply-button').onclick = addMessageHandler;

    //load see data from data array above
    loadSeedData();
};

init();