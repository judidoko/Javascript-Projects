const number = document.querySelector(".number");
const btn = document.querySelector(".generate");

const generateNumber = () => {
  // Generate Random Number
  const randomNumber = Math.floor(Math.random() * 10 + 1);
  number.innerHTML = randomNumber;
};

btn.addEventListener("click", generateNumber);

// To generate Number when a the page laod
generateNumber();
