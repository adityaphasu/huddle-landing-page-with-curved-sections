const form = document.querySelector(".form");
const email = document.querySelector("#email");
const errorMessage = document.querySelector(".form__error");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateEmail();
});

function setSuccess() {
  errorMessage.textContent = "";
  email.classList.remove("form__input--error");
  email.classList.add("form__input--success");
}

function setError(message) {
  errorMessage.textContent = message;
  email.classList.add("form__input--error");
  email.classList.remove("form__input--success");
}

function isValidEmail(email) {
  const re =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function validateEmail() {
  let emailValue = email.value.trim();

  if (emailValue === "") {
    setError("Email is Required");
  } else if (!isValidEmail(emailValue)) {
    setError("Check your email please");
  } else {
    setSuccess();
  }
}
