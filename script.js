// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input. Grouped all variables together for clarity and succingtness. 
function writePassword() {
  var pwLength = prompt("Characeter Length of Password");
  var passwordText = document.querySelector("#password");
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVXYZ";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var specialCharacters = "!@#$%^&*()-_+=";
  var numbers = "1234567890";
  var password = "" ;
  
  // I moved the rest of the code logic lower becuase the rest of the code is really relevant until we force the right password length condiditions. 

  // check for PW length and check for correct number of characters. 
  if (pwLength < 8) {
    alert("Your password is too short");
    // prevent the rest of the code from running if password length is too short
    return;
  } else if (pwLength > 128) {
    alert("Your password is too long");
    // prevent the rest of the code from running if password lenth is too long
    return;
  }
  else{

  // NOW that the password length is acceptable, THEN proceed with the rest of the code. 

  //display prompts to confirm the desired parameters  
  var caseUpper = confirm("Uppercase Y/N");
  var caseLower = confirm("Lowercase Y/N");
  var caseNumber = confirm("Numbers Y/N");
  var caseSpecial = confirm("Special Symbols or Characters Y/N");

  // if the user presses 'Ok' on each popup, we add that parameter into the password string to be processed
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
  console.log("pass1", password)


    // Changing the For Loop and adding using a new variable with an empty array
    var passwordCharacters = []

    // Use a for loop to loop through the password string and pick any random character
    // then store the selected character into an array

    for (i = 0; i <= pwLength - 1; i++){ 
        password = passwordCharacters + password.charAt(
                 Math.floor(Math.random() * Math.floor(password.length))
             );  
      // store each randomCharacter into the array using push method
    passwordCharacters.push(randomCharater);
  }

  console.log("pswd2: ", passwordCharacters);

  // combine the different array characters into one string using 'join'"
  console.log("pswd3: ", passwordCharacters.join(""));

  // write the new password on the #password input
  passwordText.innerHTML = passwordCharacters.join("");
}
 
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// function generatePassword(password) {}. Seemed to be causing issues. After doing some research and discussing it with a mentor, it seems we could doo without it. 