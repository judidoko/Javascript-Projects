// Variables
const btn = document.querySelector(".btn"),
  tip = document.querySelector(".tip"),
  total = document.querySelector(".total"),
  error = document.querySelector(".error");

//   Hide Error Message Function
const hideErrorMessage = () => {
  setTimeout(() => {
    error.style.display = "none";
  }, 5000);
};

// Function
const calculateTip = () => {
  const bill = document.querySelector(".bill").value;
  const rate = document.querySelector(".rate").value;

  if (bill === "" || rate === "") {
    error.style.display = "block";
    hideErrorMessage();
  } else if (isNaN(bill)) {
    error.innerHTML = "Please enter a number";
    error.style.display = "block";
    hideErrorMessage();
  } else {
    let tipAmt = bill * rate;
    tipAmt = Math.ceil(tipAmt);
    tip.innerHTML = `Tip: &#8358;${tipAmt}`;

    let totalBill = Number(bill) + tipAmt;
    total.innerHTML = `Total Bill: &#8358;${totalBill}`;
  }
};

btn.addEventListener("click", calculateTip);
