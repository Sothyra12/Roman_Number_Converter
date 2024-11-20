// script.js

const btn = document.getElementById("convert-btn");
const inputVal = document.getElementById("number");
const outputVal = document.getElementById("output");

const integerToRoman = (input) => {
  if (input === 0) {
    return "";
  }
  if (input >= 1000) {
    return "M" + integerToRoman(input - 1000);
  } else if (input >= 900) {
    return "CM" + integerToRoman(input - 900);
  } else if (input >= 500) {
    return "D" + integerToRoman(input - 500); 
  } else if (input >= 400) {
    return "CD" + integerToRoman(input - 400); 
  } else if (input >= 100) {
    return "C" + integerToRoman(input - 100); 
  }else if (input >= 90) {
    return "XC" + integerToRoman(input - 90); 
  } else if (input >= 50) {
    return "L" + integerToRoman(input - 50); 
  } else if (input >= 40) {
    return "XL" + integerToRoman(input - 40); 
  } else if (input >= 10) {
    return "X" + integerToRoman(input - 10); 
  } else if (input >= 9) {
    return "IX" + integerToRoman(input - 9); 
  } else if (input >= 5) {
    return "V" + integerToRoman(input - 5); 
  } else if (input >= 4) {
    return "IV" + integerToRoman(input - 4); 
  } else {
    return "I" + integerToRoman(input - 1);
  } 
};

const checkUserInput = () => {
  switch (true) {
  case !inputVal.value:
    outputVal.innerText = "Please enter a valid number";
    break;
  case inputVal.value <= 1:
    outputVal.innerText = "Please enter a number greater than or equal to 1";
    break;
  case inputVal.value >= 4000:
    outputVal.innerText = "Please enter a number less than or equal to 3999";
    break;
  default:
    outputVal.textContent = integerToRoman(inputVal.value);
}
  inputVal.value = "";
};

btn.addEventListener("click", checkUserInput);

inputVal.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput();
  }
});

