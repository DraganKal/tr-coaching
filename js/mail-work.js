const formU = document.getElementById("form-u");
const nameInputU = document.getElementById("name-u");
const phoneInputU = document.getElementById("phone-u")
const emailInputU = document.getElementById("email-u");
const locationInputU = document.getElementById("location-u");
const sizeInputU = document.getElementById("size-u");
const stilInputU = document.getElementById("stil");
const submitButtonU = document.getElementById("button-u");
const thankMessageU = document.getElementById("thank-message-u");

formU.addEventListener("submit", (e) => {
  e.preventDefault();
  if (validateFormU()) {
    const formDataU = new FormData(formU);
    const xhrU = new XMLHttpRequest();
    xhrU.open("POST", "send-email-work.php");
    xhrU.onload = function () {
      if (xhrU.status === 200) {
        fadeOut(submitButtonU);
        fadeIn(thankMessageU);
        formU.reset();

      } else {
        alert("Došlo je do greške, molimo pokušajte ponovo.");
      }
    };
    xhrU.send(formDataU);
  }
});

function validateFormU() {
  let isValid = true;
  if (nameInputU.value === "") {
    nameInputU.classList.add("is-invalid");
    isValid = false;
  } else {
    nameInputU.classList.remove("is-invalid");
  }

  if (phoneInputU.value === "") {
    phoneInputU.classList.add("is-invalid");
    isValid = false;
  } else {
    phoneInputU.classList.remove("is-invalid");
  }
  
  if (emailInputU.value === "" || !isValidEmail(emailInputU.value)) {
    emailInputU.classList.add("is-invalid");
    isValid = false;
  } else {
    emailInputU.classList.remove("is-invalid");
  }

  if (locationInputU.value === "") {
    locationInputU.classList.add("is-invalid");
    isValid = false;
  } else {
    locationInputU.classList.remove("is-invalid");
  }

  if (sizeInputU.value === "") {
    sizeInputU.classList.add("is-invalid");
    isValid = false;
  } else {
    sizeInputU.classList.remove("is-invalid");
  }

  if (stilInputU.value === "") {
    stilInputU.classList.add("is-invalid");
    isValid = false;
  } else {
    stilInputU.classList.remove("is-invalid");
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