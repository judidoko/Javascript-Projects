// VARIABLES DECLEARATION
const btn = document.querySelector(".btn"),
  result = document.querySelector(".result"),
  word = document.querySelector(".input-text");

// function
function countVowel() {
  let vowelCount = 0;
  let wordVal = word.value.toLowerCase();

  for (let i = 0; i < wordVal.length; i++) {
    let letter = wordVal[i];
    if (letter.match(/([a,e,i,o,u])/)) {
      vowelCount++;
    }
  }
  result.innerHTML = `${word.value.toUpperCase()} has 
  ${vowelCount} vowels`;
}
// Event Listeners
btn.addEventListener("click", countVowel);
