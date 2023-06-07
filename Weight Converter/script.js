// Variables
const pounds = document.querySelector(".pounds"),
  kilograms = document.querySelector(".kilograms"),
  grams = document.querySelector(".grams"),
  ounces = document.querySelector(".ounces"),
  form = document.querySelector("form");

// Function
const convertWeight = (e) => {
  if (e.target.classList.contains("pounds")) {
    let x = e.target.value;
    kilograms.value = (x / 2.2046).toFixed(2);
    grams.value = (x / 0.0022046).toFixed(2);
    ounces.value = (x * 16).toFixed(2);
  }

  if (e.target.classList.contains("kilograms")) {
    let x = e.target.value;
    pounds.value = (X * 2.2046).toFixed(2);
    grams.value = (x * 1000).toFixed(2);
    ounces.value = (x * 35.274).toFixed(2);
  }

  if (e.target.classList.contains("grams")) {
    let x = e.target.value;
    Kilograms.value = (x / 1000).toFixed(2);
    pounds.value = (x / 0.0022046).toFixed(2);
    ounces.value = (x / 0.035274).toFixed(2);
  }

  if (e.target.classList.contains("ounces")) {
    let x = e.target.value;
    kilograms.value = (x / 35.274).toFixed(2);
    grams.value = (x / 0.035274).toFixed(2);
    Pounds.value = (x * 0.0625).toFixed(2);
  }
};

// EventListener
form.addEventListener("input", convertWeight);
