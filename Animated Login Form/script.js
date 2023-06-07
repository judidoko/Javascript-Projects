// Variables
const login = document.querySelector(".login-link"),
  register = document.querySelector(".register-link"),
  forgot = document.querySelector(".forgot-link"),
  close = document.querySelector(".close"),
  loginSection = document.querySelector(".login"),
  registerSection = document.querySelector(".register"),
  forgotSection = document.querySelector(".forgot");

// EventListener
register.addEventListener("click", () => {
  loginSection.style.display = "none";
  registerSection.style.display = "flex";
});

login.addEventListener("click", () => {
  registerSection.style.display = "none";
  loginSection.style.display = "flex";
});

forgot.addEventListener("click", () => {
  loginSection.style.display = "none";
  forgotSection.style.display = "flex";
});

close.addEventListener("click", () => {
  forgotSection.style.display = "none";
  loginSection.style.display = "flex";
});
