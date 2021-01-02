// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  passwordText.innerHTML = password
  var password = generatePassword();
//   passwordText.value = password;
}

//Add all other prompts to the list of questions to capture criteria
function generatePassword(password) { 
  var pwLength = prompt("Characeter Length of Password");
  var caseUpper = confirm("Uppercase Y/N");
  var caseLower = confirm("Lowercase Y/N");
  var caseNumber = confirm("Numbers Y/N");
  var caseSpecial = confirm("Special Symbols or Characters Y/N");
  // console.log(caseUpper);
  // console.log(pwLength);

//   console.log(pwLength);
  var passwordText = document.querySelector("#password");
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVXYZ";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var specialCharacters = "!@#$%^&*()-_+=";
  var numbers = "1234567890";
  var password = "" 
  
  //   password = specialCharacters + upperCase + lowerCase + numbers;
  // check for PW length and check for correct number of characters.
  if(pwLength < 8){
      alert("Your password is too short")
    }
  else if (pwLength > 128){
      alert("Your password is too long")
    }
  else{
    // if(caseUpper){
    //     password = password + upperCase
    // }
    if (caseUpper) {
       password = password.concat(upperCase);
  }
  if (caseLower) {
       password = password.concat(lowerCase);
  }
  if (caseSpecial) {
       password = password.concat(specialCharacters);
  }
  if (caseNumber) {
       password = password.concat(numbers);
  }

    for (i = 0; i <= pwLength - 1; i++){ 
        password = password + upperCase.charAt(
            Math.floor(Math.random() * Math.floor(upperCase.length))
        );   
    }
  }
  passwordText.innerHTML = password
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);