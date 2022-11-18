// When I click on Genreate password, I am given prompts as to how long I want the password to be

// I am saked if I want upper and lower case letters

// When 1st is done, I am asked if I'd like it to contain numbers

// When 2nd is done, I am asked if I want symbols

// Then 

// 

// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
]
var lowerCase = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
]
var characters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.',
]
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
// var newUpperCase = lowerCase.toString().toUpperCase().split(",")
console.log(generateBtn);

function generatePassword() {
var passordLength = parseInt(
  window.prompt("How many characters would you like your passord to be?"), 10
)
 if (passordLength < 8 ) {
  window.alert("Number must be greater than 8 or less than 128")
  return null
 }
 if (passordLength > 128 ) {
  window.alert("Number must be greater than 8 or less than 128")
  return null
 }
 var upperCaseLetters = parseInt(
  window.confirm("Would you like to include Uppercase Letters?")
 )
 var lowerCaseLetters = parseInt(
  window.confirm("Would you like to include Lowercase Letters?")
 )
var passwordNumbers = parseInt(
  window.confirm("Would you like to include numbers?")
)
var passwordSymbols =parseInt(
  window.confirm("Would you like to include symbols?")
)


}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// function sum(x,y) {
//   return x + y
// }