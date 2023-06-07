// VARIABLES DECLEARATION
const btn = document.querySelector(".btn"),
  coupon = document.querySelector(".coupon");

// function
const copyText = (e) => {
  e.preventDefault();
  coupon.select();
  coupon.setSelectionRange(0, 99999);
  document.execCommand("copy");

  btn.textContent = "Copied!!!";
  setTimeout(() => {
    btn.textContent = "Copy";
  }, 3000);
};
// Event Listeners
btn.addEventListener("click", copyText);
