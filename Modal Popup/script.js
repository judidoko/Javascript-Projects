// VARIABLES DECLEARATION
const modal = document.querySelector(".modal"),
  btn = document.querySelector(".btn"),
  close = document.querySelector(".close");

// open modal fuction
function openModal(e) {
  e.preventDefault();
  modal.style.display = "block";
}

// Close modal fuction
function closeModal(e) {
  e.preventDefault();
  modal.style.display = "none";
}

btn.addEventListener("click", openModal);
close.addEventListener("click", closeModal);
modal.addEventListener("click", closeModal);
