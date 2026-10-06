const messageList = document.getElementById("message-list");

const createMessage = (author, colour, message) => {
  const messageElem = document.createElement("div");
  messageElem.classList.add("msg");

  const colourElem = document.createElement("div");
  colourElem.classList.add("avatar");
  colourElem.style.background = colour;

  const messageContents = document.createElement("div");

  const authorElem = document.createElement("h3");
  authorElem.append(author);

  const messageContent = document.createElement("p");
  messageContent.append(message);

  messageElem.appendChild(colourElem);
  messageElem.appendChild(messageContents);
  messageContents.appendChild(authorElem);
  messageContents.appendChild(messageContent);

  messageList.appendChild(messageElem);
};

const renderMessages = () => {
  fetch("http://localhost:3000/messages")
    .then(resp => resp.json())
    .then(messages => {
      while (messageList.firstChild) {
        messageList.removeChild(messageList.firstChild);
      }

      for (const { username, colour, message } of messages) {
        createMessage(username, colour, message);
      }
    });
};
renderMessages();

const sendMessage = message => {
  const username = document.getElementById("username").value;
  const colour = document.getElementById("colour").value;
  fetch("http://localhost:3000/message", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      colour,
      message,
    }),
  }).then(() => {
    renderMessages();
  });
};

const inputForm = document.getElementById("input-form");
const inputElement = document.getElementById("message-input");
inputForm.addEventListener("submit", e => {
  e.preventDefault();

  const message = inputElement.value;
  sendMessage(message);
});
