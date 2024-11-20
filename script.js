// script.js

const btn = document.getElementById("convert-btn");
const inputVal = document.getElementById("number");
const outputVal = document.getElementById("output");
const romanNum = {
  1000: "M",
  900: "CM",
  500: "D",
  400: "CD",
  100: "C",
  90: "XC",
  50: "L",
  40: "XL",
  10: "X",
  9: "IX",
  5: "V",
  4: "IV",
  1: "I",
};

const objKeys = Object.keys(romanNum)
  .map(Number)
  .sort((a, b) => b - a);

const integerToRoman = (input) => {
  if (input === 0) return "";

  for (let objKey of objKeys) {
    if (input >= objKey) {
      // romanNum[objKey] returns the value of the key in the object e.g. romanNum[1000] returns "M"
      return romanNum[objKey] + integerToRoman(input - objKey);
    }
  }

  // if (input >= 1000) {
  //   return "M" + integerToRoman(input - 1000);
  // } else {
  //   return "I" + integerToRoman(input - 1);
  // }
};

const checkUserInput = () => {
  const inputStrToNum = parseInt(inputVal.value);
  switch (true) {
    case !inputVal.value:
      outputVal.innerText = "Please enter a valid number";
      break;
    case inputVal.value < 1:
      outputVal.innerText = "Please enter a number greater than or equal to 1";
      break;
    case inputVal.value >= 4000:
      outputVal.innerText = "Please enter a number less than or equal to 3999";
      break;
    default:
      outputVal.textContent = integerToRoman(inputStrToNum);
  }
  inputVal.value = "";
};

btn.addEventListener("click", checkUserInput);

inputVal.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput();
  }
});