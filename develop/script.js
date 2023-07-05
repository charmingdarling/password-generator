//1: Make a string consisting of Alphabets(lowercase and uppercase), Numbers, and Special Characters. the we will use Math. random() and Math. floor() method to generate a number in between 0 and l-1(where l is length of string).

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Declare variables
var lowercase = ["abcdefghijklmnopqrstuvwxyz"];
var uppercase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var number = ["0123456789"];
var special = ["!#$()*+,-./:;<=>?@[^_`{|}~"];
var character = "";
var password = "";

function generatePassword() {
  console.log("You clicked the button!");

    //Prompt the user for password criteria
    var characterLength = prompt("Please choose the number of character you want between 8 and 128."); 

    var length = Number(characterLength);
    
    if (length = NaN || characterLength < 8 || characterLength > 128) {
      alert("Enter a valid number of characters");
      return "Try again.";
      }

    if (confirm("Would you like to use lowercase letters?")){
    character = character.concat(lowercase);}

    if (confirm("Would you like to use uppercase letters?")){
    character = character.concat(uppercase);}

    if (confirm("Would you like to use numbers?")){
    character = character.concat(number)}

    if (confirm("Would you like to use special characters?")){
    character = character.concat(special);}

    for (var i = 0 ; i < characterLength; i++) {
    password += character[Math.floor(Math.random()*characterLength.length)];
    }
    
    return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);