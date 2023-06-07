// Variable
const count = document.querySelector(".count"),
  input = document.querySelector(".input");

input.addEventListener("keyup", () => {
  count.innerHTML = input.value.length;
});
