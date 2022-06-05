// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
  console.log("Hey you clicked on me")


  //  1. Prompt the user for the password criteria
  //    a. Password lengths 8 to 128
  // 	  b. Lowercase, uppercase, numbers and special characters
  //  2. Validate the input 
  //  3. Generate password based on criteria 

  //  4. Display password to the page 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
