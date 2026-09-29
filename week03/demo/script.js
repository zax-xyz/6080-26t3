const form = document.getElementById("register-form");

const errorElem = document.getElementById("error-msg");

form.addEventListener("submit", e => {
  e.preventDefault();

  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  if (password !== confirmPassword) {
    errorElem.textContent = "password does not match";
  }
});
