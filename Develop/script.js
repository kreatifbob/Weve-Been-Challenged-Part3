// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


  //  1. Prompt the user for the password criteria
  var psLengthVar=prompt ("Enter password length! Note: Min. 8 - Max 128 ");
  //    a. Password lengths 8 to 128
  var psSpecifyVar=prompt ("Should password include any lowercases, uppercases, numbers and special characters? Y/N")
  // 	  b. Lowercase, uppercase, numbers and special characters

  //  2. Validate the input 
  // Unable to login into canvas and watch recordings of classes have emailed support multiple times and received no response

  
  //  3. Generate password based on criteria 
    function generatePassword(length = 8) {
    let password = '';
    let chars = "0123456789abcdefghijklmnopqrstuvwxyz!#$%&()*+,-./:;<=>?@[\]^_`{|}~ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let passwordLength = length;
   
    let array = [];
    for (let i=0; i<length; i++){
      array.push(Math.floor(Math.random() * chars.length)); 
    }
   
    for (let i = 0; i < passwordLength; i++) {
      password += chars[array[i]]; 
    }

    return password;
  }


  //  4. Display password to the page 
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

