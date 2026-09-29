const registerCard = document.getElementById("register-card");
const loggedInCard = document.getElementById("logged-in-card");

const registerForm = document.getElementById("register-form");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("password-confirmation");
const errorMsgElem = document.getElementById("error-msg");

registerForm.addEventListener("submit", e => {
  e.preventDefault();

  const password = passwordInput.value;
  const passwordConfirmation = confirmPasswordInput.value;
  if (password !== passwordConfirmation) {
    errorMsgElem.textContent = "Passwords do not match";
    return;
  }

  if (password.length < 8) {
    errorMsgElem.textContent = "Password must be at least 8 characters";
    return;
  }

  // const chars = Array.from(password);
  //
  // if (!chars.some(c => c === c.toUpperCase() && c !== c.toLowerCase())) {
  //   errorMsgElem.textContent = "Password must have at least 1 capital letter";
  //   return;
  // }
  //
  // if (!chars.some(c => !isNaN(c))) {
  //   errorMsgElem.textContent = "Password must have at least 1 number";
  //   return;
  // }

  registerCard.style.display = "none";
  loggedInCard.style.display = "flex";
});
