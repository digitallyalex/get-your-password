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
  let length = prompt("Let's create your password!  Please type how many characters you'd like it to have below and click OK. You can select between 8 and 128 characters.");
  if (length < 8 || length > 128) {
    alert(`Uh, oh, that doesn't seem right! Please start again and write a password lenght between 8 and 128.`);
    return null;
  };

  //prompt to pick character types: Lowercase, Uppercase, Numeric, Special Characters ($@%&*, etc)  use confirm() - returns true if OK false otherwise ;  
  //at least one character type must be selected for form validation

  //lowercase option
  lowercaseOption = confirm("Would you like any lowercase characters in your password? (e.g. a, b, c, d...)");

  //uppercase option
  uppercaseOption = confirm("Would you like any uppercase characters in your password? (e.g. A, B, C, D...)");

  //numeric option
  numericOption = confirm("Would you like any numeric characters in your password? (e.g 1, 2, 3, 4...)");

  //special characters option
  specialCharactersOption = confirm("Would you like any special characters in your password? (e.g @,%,+, /,!,#,$...)");

  //restriction - conditional on whether or not they chose false on everything - using && on everything - can't continue without any choice
  if (!lowercaseOption && !uppercaseOption && !numericOption && !specialCharactersOption) {
    alert(`Uh, oh, that doesn't seem right! Please start again and make sure to select at least one type of character for your password to be generated.`);
  };
  //return statement
  passwordOptions = {
    length: length,
    lowercaseOption: lowercaseOption,
    uppercaseOption: uppercaseOption,
    numericOption: numericOption,
    specialCharactersOption: specialCharactersOption
  };
  return passwordOptions;
};

// Function for getting a random element from an array
function getRandom(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length);
  let randomElement = arr[randomIndex];
  return randomElement
};

// Function to generate password with user input
function generatePassword() {
  //based on user input(guarantee) and random characters selected(possibles), fill in password based on chosen length and return the completed password (finalPassword);

  let options = getPasswordOptions()
  let guarantee = [];
  let possibles = [];
  let finalPassword = [];

  //adding guaranteed characters and possible options in two different arrays based on user options
  if (options.lowercaseOption) {
    possibles = possibles.concat(lowerCasedCharacters);
    guarantee.push(getRandom(lowerCasedCharacters));
  };

  if (options.uppercaseOption) {
    possibles = possibles.concat(upperCasedCharacters);
    guarantee.push(getRandom(upperCasedCharacters));
  };

  if (options.numericOption) {
    possibles = possibles.concat(numericCharacters);
    guarantee.push(getRandom(numericCharacters));
  };

  if (options.specialCharactersOption) {
    possibles = possibles.concat(specialCharacters);
    guarantee.push(getRandom(specialCharacters));
  };

  //looping through possibles and guarantee arrays to create the final password based on user options
  for (let i = 0; i < options.length; i++) {
    var possible = getRandom(possibles);
    finalPassword.push(possible);
  };

  for (let i = 0; i < guarantee.length; i++) {
    finalPassword[i] = guarantee[i];
  };

  return finalPassword.join(''); // adds up both for loops
};


// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);