
var generateBtn = document.querySelector("#generate");

// Declare variables
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
var special = "!#$()*+,-./:;<=>?@[^_`{|}~";
var character
var password = "";

function generatePassword(){
  console.log("You clicked the button!"); // Checking that the button worked.
  character = ""; //Placed variables within function 
  password = "";
  var typeCheck = false //variable to call if user doesn't choose a character type

  //Prompt the user for password criteria
  var characterLength = prompt("Please choose the number of character you want between 8 and 128."); 

  var length = Number(characterLength);

    if (length = NaN || characterLength < 8 || characterLength > 128) {
      alert("Enter a valid number of characters");
      return "Try again.";
      }

    if (confirm("Would you like to use lowercase letters?")){
    character = character.concat(lowerCase);}

    if (confirm("Would you like to use uppercase letters?")){
    character = character.concat(upperCase);}

    if (confirm("Would you like to use numbers?")){
    character = character.concat(number)}

    if (confirm("Would you like to use special characters?")){
    character = character.concat(special);}

    for (var i = 0 ; i < characterLength; i++) {
    password += character[Math.floor(Math.random()*character.length)];
    }
    return password; 
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  alert("Here is your password.");
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

