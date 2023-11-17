// Array of special characters to be included in password
var specialCharacters = [
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
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
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
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
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
  'Z'
];

// let passwordLength;
let lowercaseOption;
let uppercaseOption;
let numericOption;
let specialCharactersOption;

let passwordOptions;


// Function to prompt user for password options
function getPasswordOptions() {
  //condition for prompt to select length of password;  characters >= 8 ; characters <= 128
  let passwordLength = prompt("Let's create your password!  Please type how many characters you'd like it to have below and click OK. You can select between 8 and 128 characters.");
  if (passwordLength >= 8 && passwordLength <= 128) {
    alert(`You selected ${passwordLength} characters. Great! Now let's continue.`);
  } else {
    alert(`Uh, oh, that doesn't seem right! Please refresh the page and write a password lenght between 8 and 128.`)
  };

  //prompt to pick character types: Lowercase, Uppercase, Numeric, Special Characters ($@%&*, etc)  use confirm() - returns true if OK false otherwise ;  
  //at least one character type must be selected for form validation

  //lowercase option
  if (confirm("Would you like any lowercase characters in your password? (e.g. a, b, c, d...)") == true) {
    lowercaseOption = true;
  } else {
    lowercaseOption = false;
  }

  //uppercase option
  if (confirm("Would you like any lowercase characters in your password? (e.g. a, b, c, d...)") == true) {
    uppercaseOption = true;
  } else {
    uppercaseOption = false;
  }

  //numeric option
  if (confirm("Would you like any numeric characters in your password? (e.g 1, 2, 3, 4...)") == true) {
    numericOption = true;
  } else {
    numericOption = false;
  }

  //special characters option
  if (confirm("Would you like any special characters in your password? (e.g @,%,+, /,!,#,$...)") == true) {
    specialCharactersOption = true;
  } else {
    specialCharactersOption = false;
  }

  //return statement
  return passwordOptions = [lowercaseOption, uppercaseOption, numericOption, specialCharactersOption];

}

// Function for getting a random element from an array
function getRandom(arr) {
  //random picker of at least 1 character from each array

  return
}

// Function to generate password with user input
function generatePassword() {
  //based on user input and random characters selected, fill in password based on chosen length and return the completed password
  return
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);