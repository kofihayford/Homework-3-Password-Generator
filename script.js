// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  passwordText.innerHTML = "Lorem ipsum test text";
  var password = generatePassword();
  passwordText.value = password;
}

function generatePassword() {
  var pwLength = prompt("Length");
  // console.log(pwLength);
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVXYZ";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var specialCharacters = "!@#$%^&*()-_+=";
  var numbers = "1234567890";
}

//take the value of PW length and use that to inform the length of the password

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
