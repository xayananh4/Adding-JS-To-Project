// business logic
let resultsForAdding = "";
function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 / number2;
}

function allTheProblems(number1, number2) {
  resultAdd = add(number1,number2);
  resultSub = subtract(number1,number2);
  resultDiv = multiply(number1, number2);
  resultMulitply = multiply(number1,number2);
  return "The addition of your numbers equals: " + resultAdd + "\n"  +
  "The subtraction of your numbers equals: " + Math.abs(resultSub) + "\n"  +
  "The division of your numbers equals: " + Math.abs(resultDiv) + "\n"  +
  "The multiplication of your numbers equals: " + resultMulitply;
}

function allTheProblemsChallenging(number1, number2) {
  resultAdd = add(number1,number2);
  resultSub = subtract(number1,number2);
  resultDiv = multiply(number1, number2);
  resultMulitply = multiply(number1,number2);
  return number1 + " + " + number2 + " = " + resultAdd + "\n"  +
  number1 + " - " + number2 + " = "  + Math.abs(resultSub) + "\n"  +
  number1 + " / " + number2 + " = "  + Math.abs(resultDiv) + "\n"  +
  number1 + " * " + number2 + " = "  + resultMulitply;
}

// user interface logic 
const number1 = prompt("Enter a number:");
const number2 = prompt("Enter another number:");


alert(allTheProblemsChallenging(parseInt(number1), parseInt(number2)));



