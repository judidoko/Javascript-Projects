const hexColor = document.querySelector(".hex-color");
const btn = document.querySelector(".generate");

// Function to Generate Hex Color
const generateColor = () => {
  const randomColor = Math.random().toString(16).substring(2, 8);
  document.body.style.backgroundColor = "#" + randomColor;
  hexColor.innerHTML = "#" + randomColor;
};

btn.addEventListener("click", generateColor);
