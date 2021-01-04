// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input. Grouped all variables together for clarity and succingtness. 
function writePassword() {
  var pwLength = prompt("Characeter Length of Password");
  var passwordText = document.querySelector("#password");
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVXYZ";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var specialCharacters = "!@#$%^&*()-_+=";
  var numbers = "1234567890";
  var password = "";

  // I moved the rest of the code logic lower becuase the rest of the code is really relevant until we force the right password length condiditions. 

  // check for PW length and check for correct number of characters. 

  // prevent the rest of the code from running if password length is too short
  if (pwLength < 8) {
    alert("Your password is too short");
    return;
  }

  // prevent the rest of the code from running if password lenth is too long
  else if (pwLength > 128) {
    alert("Your password is too long");
    return;
  }

  // NOW that the password length is acceptable, THEN proceed with the rest of the code. 
  else {

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
  }

  // Changing the For Loop and adding using a new variable with an empty array. Capture the password characters and the complete string
  var passwordCharacters = []

  // Use a for loop to loop through the password string and pick any random character
  // then store the selected character into an array
  for (i = 0; i <= pwLength - 1; i++) {
    var randomCharacter = password.charAt(
      Math.floor(Math.random() * Math.floor(password.length))
    );

    // store each randomCharacter into the array using push method
    passwordCharacters.push(randomCharacter);
  }

  console.log("pswd2: ", passwordCharacters);

  // combine the different array characters into one string using 'join'"
  console.log("pswd3: ", passwordCharacters.join(""));

  // write the new password on the #password input
  passwordText.innerHTML = passwordCharacters.join("");

  // Add the list of previous passwords to a list so they can be tracked 
  document.querySelector(".prevPasswords").innerHTML += "<li>" + passwordCharacters.join("") + "</li>"
}

