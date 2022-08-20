"user strict";

const selectorQuery = (identificador) => {
  return document.querySelector(identificador);
};

const formulario = selectorQuery(".form");
const emailInput = selectorQuery("#btn-email");
const passwordInput = selectorQuery("#btn-password");
const emailLabel = selectorQuery(".btn-placeholder-email");
const passwordLabel = selectorQuery(".btn-placeholder-password");
const emailError = selectorQuery(".input-email-error");
const passwordError = selectorQuery(".input-password-error");
const passwordMostrar = selectorQuery(".input-visualy");
const passwordOcultar = selectorQuery(".input-desvisualy");
const submitCreateAcount = selectorQuery(".create-acount");

const stylesStar = (e) => {
  return e.style;
};

const emailLabelStar = stylesStar(emailLabel);
const passwordLabelStar = stylesStar(passwordLabel);
const emailErrorStar = emailError.textContent;

// FOCUS FUNCTIONS
const focusEmail = (e) => {
  emailLabel.style.fontSize = "1.2rem";
  emailLabel.style.top = "0.7rem";
};

const focusPassword = (e) => {
  passwordLabel.style.fontSize = "1.2rem";
  passwordLabel.style.bottom = "2.9rem";
  passwordMostrar.style.display = "block";
  if (
    passwordMostrar.style.display === "block" &&
    passwordOcultar.style.display === "block"
  ) {
    passwordMostrar.style.display = "none";
  }
};

// BLUR FUNCTIONS
const blurEmail = (e) => {
  const inputLongitud = emailInput.value.length;

  if (inputLongitud === 0) {
    emailLabel.style = emailLabelStar;
    emailError.style.display = "block";
  }
  if (inputLongitud <= 5) {
    emailInput.style.borderBottom = "4px solid rgb(227, 139, 46)";
    emailInput.style.marginBottom = "2rem";
    emailError.style.display = "block";
  }
  if (inputLongitud > 5) {
    emailInput.style.borderBottom = "";
    emailError.style.display = "none";
    emailInput.style.marginBottom = "0";
  }
};

const blurPassword = (e) => {
  const inputLongitud = passwordInput.value.length;
  if (inputLongitud === 0) {
    passwordLabel.style = passwordLabelStar;
    passwordError.style.display = "block";
    passwordMostrar.style.display = "none";
    passwordOcultar.style.display = "none";
  }
  if (inputLongitud <= 3) {
    passwordInput.style.borderBottom = "4px solid rgb(227, 139, 46)";
    passwordError.style.display = "block";
  }
  if (inputLongitud > 3) {
    passwordInput.style.borderBottom = "";
    passwordError.style.display = "none";
  }
};

// KEYDOWN FUNCTIONS
const inputEmail = (e) => {
  let inputLongitud = emailInput.value.length;

  if (inputLongitud <= 3 && inputLongitud >= 1) {
    emailError.textContent = "Escribe un email válido.";
  }
  if (inputLongitud === 0) {
    emailError.textContent = "Ingresa un email o un número de teléfono válido.";
  }
  if (inputLongitud > 3) {
    emailError.style.display = "none";
  }
};

// CLICK FUNCTIONS
const mostrarPassword = (e) => {
  passwordInput.type = "text";
  passwordOcultar.style.display = "block";
  passwordMostrar.style.display = "none";
};

const ocultarPassword = (e) => {
  passwordInput.type = "password";
  passwordMostrar.style.display = "block";
  passwordOcultar.style.display = "none";
};

// SUBMIT FUNTIONS
const createAcountSubmit = (e) => {
  e.preventDefault();
  submitCreateAcount.style.display = "block";
};

emailInput.addEventListener("focus", focusEmail);
emailInput.addEventListener("blur", blurEmail);
emailInput.addEventListener("input", inputEmail);

passwordInput.addEventListener("focus", focusPassword);
passwordInput.addEventListener("blur", blurPassword);
passwordMostrar.addEventListener("click", mostrarPassword);
passwordOcultar.addEventListener("click", ocultarPassword);

formulario.addEventListener("submit", createAcountSubmit);
