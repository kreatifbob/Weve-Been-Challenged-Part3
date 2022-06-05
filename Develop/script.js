// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
  console.log("Hey you clicked on me")


  //  1. Prompt the user for the password criteria
  var psLength=prompt ("Enter password length! Note: Min. 8 - Max 128 ")
  //    a. Password lengths 8 to 128
  var psspecify=prompt ("Should password include any lowercases, uppercases, numbers and special characters? Y/N")
  // 	  b. Lowercase, uppercase, numbers and special characters

  //  2. Validate the input 
  
  //  3. Generate password based on criteria 
  
  function getRandomSymbol() {
    const symbols = '!"#$%&()*+,-./:;<=>?@[\]^_`{|}~'
    return symbols[Math.floor(Math.random() * symbols.length)];
  }

  //  4. Display password to the page 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
