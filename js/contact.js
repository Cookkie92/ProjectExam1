const form = document.querySelector("#contactForm");
const contactName = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
const contactSubject = document.querySelector("#subject");
const contactMessage = document.querySelector("#message");
const messageError = document.querySelector("#messageError");
const subjectError = document.querySelector("#subjectError");
const contactEmail = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const contactSucess = document.querySelector("#sucess");

function validateForm() {
  try {
    event.preventDefault();

    let nameSuccessful = false;
    let subjectSuccessful = false;
    let emailSuccessful = false;

    if (checkLength(contactName.value, 0) === true) {
      nameError.style.display = "none";
      nameSuccessful = true;
    } else {
      nameError.style.display = "block";
      nameSuccessful = false;
    }
    if (checkLength(contactSubject.value, 14) === true) {
      subjectError.style.display = "none";
      subjectSuccessful = true;
    } else {
      subjectError.style.display = "block";
      subjectSuccessful = false;
    }
    if (checkLength(contactMessage.value, 24) === true) {
      messageError.style.display = "none";
      messageSuccessful = true;
    } else {
      messageError.style.display = "block";
      messageSuccessful = false;
    }
    if (validateEmail(email.value) === true) {
      emailError.style.display = "none";
      emailSuccessful = true;
    } else {
      emailError.style.display = "block";
      emailSuccessful = false;
    }
    if (
      nameSuccessful === true &&
      subjectSuccessful === true &&
      emailSuccessful === true &&
      messageSuccessful === true
    ) {
      console.log("show me the way");
      document.getElementById("sucess").style.display = "block";
    }
  } catch (error) {
    console.log("Error occured", error);
  }
}

form.addEventListener("submit", validateForm);

function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}
