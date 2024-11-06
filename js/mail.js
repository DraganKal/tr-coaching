const form = document.getElementById("second-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const submitButton = document.getElementById("second-button");
const thankMessage = document.getElementById("thank-message");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (validateForm()) {
    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "send-email.php");
    xhr.onload = function () {
      if (xhr.status === 200) {
        fadeOut(submitButton);
        fadeIn(thankMessage);
        form.reset();

      } else {
        alert("Došlo je do greške, molimo pokušajte ponovo.");
      }
    };
    xhr.send(formData);
  }
});

function validateForm() {
  let isValid = true;
  if (nameInput.value === "") {
    nameInput.classList.add("is-invalid");
    isValid = false;
  } else {
    nameInput.classList.remove("is-invalid");
  }
  if (emailInput.value === "" || !isValidEmail(emailInput.value)) {
    emailInput.classList.add("is-invalid");
    isValid = false;
  } else {
    emailInput.classList.remove("is-invalid");
  }
  if (messageInput.value === "") {
    messageInput.classList.add("is-invalid");
    isValid = false;
  } else {
    messageInput.classList.remove("is-invalid");
  }
  return isValid;
}

function isValidEmail(email) {
  const emailRegex = /\S+@\S+\.\S+/;
  return emailRegex.test(email);
}

function fadeOut(element) {
  element.classList.add("fade-out");
  element.addEventListener("animationend", () => {
    element.style.display = "none";
    element.classList.remove("fade-out");
  });
}

function fadeIn(element) {
  element.style.display = "block";
  element.classList.add("fade-in");
  element.addEventListener("animationend", () => {
    element.classList.remove("fade-in");
  });
}