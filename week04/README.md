# Week 4

## Info

**Link to this repo**: https://go.zax.sh/6080-26t3

**My email**: mica.vo1 \[at] unsw \[dot] edu \[dot] au (also on the course website)

This tut will be focused on DOM manipulation in JavaScript, and using the Fetch API

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
