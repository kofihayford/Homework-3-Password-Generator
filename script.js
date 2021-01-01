// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  passwordText.innerHTML = password
  var password = generatePassword();
//   passwordText.value = password;
}

function generatePassword(password) { 
  var pwLength = prompt("Length");

//   console.log(pwLength);
  var passwordText = document.querySelector("#password");
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVXYZ";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var specialCharacters = "!@#$%^&*()-_+=";
  var numbers = "1234567890";
  
  //   password = specialCharacters + upperCase + lowerCase + numbers;

  passwordText.innerHTML = pwLength
  // check for PW length and check for correct number of characters.
  if(pwLength < 8){
      alert("Your password is too short")
    }
  else if (pwLength > 128){
      alert("Your password is too long")
    }
  else{
    for (i=0; i<=pwLength; i++){ 
        passsword = 
    }
  }
}

//take the value of PW length and use that to inform the length of the password

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);