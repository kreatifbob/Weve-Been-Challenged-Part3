// Assignment code here


// Get references to the #generate element
function masterPassword() {
  var generateBtn = document.querySelector("#generate");


  //  1. Prompt the user for the password criteria
  //    a. Password lengths 8 to 128
  var psLengthVar=confirm ("Enter password length! Note: Min. 8 - Max 128 ");
  // 	  b. Lowercase, 
  var psSpecifyVarLower=confirm ("Should password include any lowercases")
  //    c. Uppercase, 
  var psSpecifyVarUpper=confirm ("Should password include any uppercases")
  //    d. Numbers 
  var psSpecifyVarNumbers=confirm ("Should password include any numbers")
  //    e. Special characters
  var psSpecifyVarSpecial=confirm ("Should password include any numbers")
  //  2. Validate the input 
  
  if (psLengthVar<8 || psLengthVar>128) {
    masterPassword();
   }
  

  
    //  3. Generate password based on criteria 
    function generatePassword(length = 8) {
    let password = '';
    let psSpecifyVarLower = "abcdefghijklmnopqrstuvwxyz";
    let psSpecifyVarUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let psSpecifyVarNumbers = "0123456789";
    let psSpecifyVarSpecial = "!#$%&()*+,-./:;<=>?@[\]^_`{|}~";
    let psLengthVar = length;
   
    let array = [];
    for (let i=0; i<length; i++){
      array.push(Math.floor(Math.random() * chars.length)); 
    }
   
    for (let i = 0; i < passwordLength; i++) {
      password += chars[array[i]]; 
    }

    return password;
   }
  }
 masterPassword();



  //  4. Display password to the page 
  function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

