// Below is what we'll log to the console.

let tabs = await messenger.tabs.query({ active: true, currentWindow: true });

let message = await messenger.messageDisplay.getDisplayedMessage(tabs[0].id);

// Update the HTML fields with the message subject and sender.
document.getElementById("subject").textContent = message.subject;
document.getElementById("from").textContent = message.author;

// Request the full message to access its full set of headers.
let full = await messenger.messages.getFull(message.id);
document.getElementById("received").textContent = full.headers.received[0];

console.log('Hello, World!', message);