"user strict";

const selectorQuery = (identificador) => {
  return document.querySelector(identificador);
};

// VARIABLES
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
const emailContry = selectorQuery(".input-email-contry");

// UTILIZABLES
const stylesStar = (e) => {
  return e.style;
};

const numberFilter = (array) => {
  return array.every((x) => /[0-9]/.test(x));
};

const emailLabelStar = stylesStar(emailLabel);
const passwordLabelStar = stylesStar(passwordLabel);
const emailErrorStar = emailError.textContent;

let contadorDeErroresEmail = 0;
let contadorDeErroresPassword = 0;

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
    emailError.textContent = "Ingresa un email o un número de teléfono válido.";
    contadorDeErroresEmail += 1;
  }
  if (inputLongitud <= 5) {
    emailInput.style.borderBottom = "3px solid rgb(227, 139, 46)";
    emailInput.style.marginBottom = "2rem";
    emailError.style.display = "block";
    contadorDeErroresEmail += 1;
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
    contadorDeErroresPassword += 1;
  }
  if (inputLongitud <= 3) {
    passwordInput.style.borderBottom = "3px solid rgb(227, 139, 46)";
    passwordInput.style.marginBottom = "0.1rem";
    passwordError.style.display = "block";
    contadorDeErroresPassword += 1;
  } else if (inputLongitud > 3) {
    passwordInput.style.borderBottom = "";
    passwordError.style.display = "none";
    passwordInput.style.marginBottom = "0";
  }
};

// INPUT FUNCTIONS
const functionInputEmail = (e) => {
  let inputLongitud = emailInput.value.length;
  let arrayDeValores = emailInput.value.split("");
  console.log(arrayDeValores);

  if (numberFilter(arrayDeValores)) {
    emailContry.style.display = "flex";
  }

  if (contadorDeErroresEmail > 0) {
    if (inputLongitud === 0) {
      emailError.style.display = "block";
      emailContry.style.display = "none";
      emailInput.style.borderBottom = "3px solid rgb(227, 139, 46)";
      emailInput.style.marginBottom = "2rem";
      emailError.textContent =
        "Ingresa un email o un número de teléfono válido.";
    } else if (inputLongitud <= 5 && inputLongitud >= 1) {
      if (numberFilter(arrayDeValores)) {
        emailError.textContent = "Escribe un número válido.";
      } else {
        emailError.textContent = "Escribe un email válido.";
      }
      emailInput.style.borderBottom = "3px solid rgb(227, 139, 46)";
      emailInput.style.marginBottom = "2rem";
      emailError.style.display = "block";
    } else if (inputLongitud > 5) {
      emailError.style.display = "none";
      emailInput.style.marginBottom = "0";
      emailInput.style.borderBottom = "none";
    }
  }
};

const functionInputPassword = (e) => {
  let inputLongitud = passwordInput.value.length;

  if (contadorDeErroresPassword > 0) {
    if (inputLongitud <= 3) {
      passwordInput.style.borderBottom = "3px solid rgb(227, 139, 46)";
      passwordInput.style.marginBottom = "0.1rem";
      passwordError.style.display = "block";
      passwordError.textContent =
        "La contraseña debe tener entre 4 a 60 caracteres.";
    } else {
      passwordError.style.display = "none";
      passwordInput.style.marginBottom = "0";
      passwordInput.style.borderBottom = "none";
    }
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
emailInput.addEventListener("input", functionInputEmail);

passwordInput.addEventListener("focus", focusPassword);
passwordInput.addEventListener("blur", blurPassword);
passwordInput.addEventListener("input", functionInputPassword);

passwordMostrar.addEventListener("click", mostrarPassword);
passwordOcultar.addEventListener("click", ocultarPassword);

formulario.addEventListener("submit", createAcountSubmit);
