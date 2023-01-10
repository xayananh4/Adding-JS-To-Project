// 01-09-2023 
// Tuesday Cipher Problems
userInput = prompt("Write Sentence Please: ");

function capitalizeFirstAndLastLetter(first, last) {
  first = userInput.charAt(0);
  last = userInput.charAt(userInput.length - 1);
  return first.toUpperCase() + last.toUpperCase();

}

function reverseString(str) {
    // Step 1. Use the split() method to return a new array
     splitString = str.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]
 
    // Step 2. Use the reverse() method to reverse the new created array
     reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]
 
    // Step 3. Use the join() method to join all elements of the array into a string
     joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"
    
    //Step 4. Return the reversed string
    return joinArray; // "olleh"
}

function addToTheEndofUserInput(testString){
//  I am a sentence
// I am a sentenceEI
result = capitalizeFirstAndLastLetter(testString);
return testString + reverseString(result);

}

function fourthStrFunction(testString){
  count = testString.length;
  _result = count / 2;
  outputString = testString.charAt(_result);
  result01 = addToTheEndofUserInput(testString)
  return outputString + result01;
}

function reserveTheFinalString(testString){
  result = fourthStrFunction(testString)
  return reverseString(result);
}
//  I am a sentence

alert(addToTheEndofUserInput(userInput));
alert(fourthStrFunction(userInput));
alert(reserveTheFinalString(userInput));