// Assignment code here

// added variables to establish a parameter for password criteria 

var specialcharacters = "!@#$*";
var numbers = '0123456789';
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowercase = 'abcdefghijklmnopqrstuvwxyz';

// addded variables for user input/password gerneration

let userSelection = [];
let finalPassword = [];

// created a function  to prompt and keep prompting rather than my original plan
//-of creating input for each prompt that way to create a less "buggy" code

function generatePassword() {
  var passwordLength = prompt("Please Enter A Number between 8-128 characters");

  if (passwordLength < 8 || passwordLength > 128) {
    alert('PLEASE ENTER A NUMBER BETWEEN 8-128');
    return
  }

  var specialCharChosen = confirm('CONFIRM SPECIAL CHARACTERS TO USED "!@#$*"');
  if (specialCharChosen) {
    userSelection.push(...specialcharacters)
  }

  var numbersChosen = confirm('CONFIRM NUMBERS TO USED "0123456789"');
  if (numbersChosen) {
    userSelection.push(...numbers)
  }

  var lowercasechosen = confirm('CONFRIM LOWER CASE LETTERS');
  if (lowercasechosen) {
    userSelection.push(...lowercase)
  }

  var uppercasechosen = confirm('CONFRIM UPPER CASE LETTERS');
  if (uppercasechosen) {
    userSelection.push(...upperCase)
  }

  console.log('user selection -> ', userSelection);

  for (let i = 0; i < passwordLength; i++) {
    finalPassword.push(userSelection[Math.floor(Math.random() * passwordLength)])

    console.log('final password', finalPassword)

  }

  // the solution kept coming out with commas so I had to take them away.
  // this is where I found the reference, but I also found in one activities here
  // "https://javascript.plainenglish.io/how-to-turn-an-array-into-a-string-without-commas-in-javascript-241598bb054b"
  
  var myNewString = finalPassword.join("");
  console.log(myNewString);

  return myNewString
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
