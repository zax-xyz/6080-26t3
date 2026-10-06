# Week 4

## Info

**Link to this repo**: https://go.zax.sh/6080-26t3

**My email**: mica.vo1 \[at] unsw \[dot] edu \[dot] au (also on the course website)

This tut will be focused on DOM manipulation in JavaScript, and using the Fetch API. It's a lot to cover in one hour sorry, we need to combine topics in the tuts because of the new course structure with half of the classes being replaced with quizzes.

## Admin

Well done on finishing assignment 1! Marks for it should be released some time next week. I'd recommend taking a crack at assignment 2 now even though it's not assessed - it'll provide you with good practice with JavaScript, which will be essential for the upcoming quiz

Model answers have also been provided for quiz 0, so you can take a look at those to get an idea for how you should be answering the questions

## Prerequisites

### Content

```js
const div = document.createElement("div");
document.body.appendChild(div); // Need to actually add element to page somewhere
```

### Modifying classes

```js
div.classList.add("card");
div.classList.remove("card");
div.classList.toggle("card");
```

### Attributes

```js
div.setAttribute("class", "card");
div.getAttribute("class");
```

### Network Requests

```js
fetch("https://URL")
  .then(resp => console.log(resp.text))
  .catch(err => console.error(err));
```

## Exercise

We'll be building (built lol, this part was written after the tut) a simple messaging app using a provided backend.

<img width="1763" height="1716" alt="messaging app screenshot" src="https://github.com/user-attachments/assets/b8f40827-093d-482d-bc11-28e5fc3b2d7e" />

Some starter code is provided in [starter](starter) with the HTML and CSS already written, our job is to write the JavaScript code to fetch and render the messages from the backend, and to send messages to the backend to be stored.

The backend, while it has types specified for the structure of a message, actually accepts any object to be inserted into the database, and will return them as-is, so you can use whatever structure you want.

An example solution is provided in [solution](solution).

### Running Backend

For this exercise, we need to run the backend locally. To do so, you'll first need [NodeJS](https://nodejs.org) installed on your system (and optionally [pnpm](https://pnpm.io/) which is what I used to make the backend), and a terminal.

To set up the backend, run the following commands in the terminal (you only need to do this once)

```sh
cd backend # if not already inside the backend directory
pnpm i # or `npm i` if you don't have pnpm
```

Now to run the backend, use this command:

```sh
node server.js
```

This runs the backend on port 3000, and should be accessible at `http://localhost:3000`. If there's a port conflict then you'll need to manually change the port in `backend/server.js`

#### Interactive Docs

You can view the interactive "Swagger" (the library used to generate this) docs in your browser at `http://localhost:3000/docs`. This will tell you what routes the backend has and what they do, and will be very similar to what you'll see for the assignment 3 and 4 backends.

You can test these routes directly in the Swagger UI to play around with them and see what they do. ("Try it out" button on the right in each route section). It also tells you the description of the route, any URL parameters it takes (we didn't look at URL parameters today), a schema for the request body if it accepts one (a JSON object that we send in the request), and the schema for the response.
