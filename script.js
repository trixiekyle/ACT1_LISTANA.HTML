const numberForm = document.getElementById("numberForm");
const numberInput = document.getElementById("numberInput");
const clearButton = document.getElementById("clearButton");
const results = document.getElementById("results");

const inputResult = document.getElementById("inputResult");
const oddNumbers = document.getElementById("oddNumbers");
const evenNumbers = document.getElementById("evenNumbers");
const oddSum = document.getElementById("oddSum");
const evenSum = document.getElementById("evenSum");

numberForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const inputValue = numberInput.value.trim();

  // A positive whole number contains digits only and must be greater than zero.
  if (!/^\d+$/.test(inputValue) || Number(inputValue) <= 0) {
    alert("Please enter a valid positive whole number greater than zero.");
    return;
  }

  const n = Number(inputValue);
  const oddList = [];
  const evenList = [];
  let oddTotal = 0;
  let evenTotal = 0;

  for (let number = 1; number <= n; number++) {
    if (number % 2 === 0) {
      evenList.push(number);
      evenTotal += number;
    } else {
      oddList.push(number);
      oddTotal += number;
    }
  }

  inputResult.textContent = n;
  oddNumbers.textContent = oddList.join(" ");
  evenNumbers.textContent = evenList.join(" ");
  oddSum.textContent = oddTotal;
  evenSum.textContent = evenTotal;
  results.hidden = false;
});

clearButton.addEventListener("click", function () {
  numberInput.value = "";
  inputResult.textContent = "";
  oddNumbers.textContent = "";
  evenNumbers.textContent = "";
  oddSum.textContent = "";
  evenSum.textContent = "";
  results.hidden = true;
  numberInput.focus();
});
