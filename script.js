var generateBtn = document.querySelector("#generate");
// Assignment code here
function generatePassword() {

  let chars = '';
  let lowercases = "abcdefghijklmnopqrstuvwxyz";
  let uppercases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let numbers = "0123456789";
  let Special = "!#$%&()*+,-./:;<=>?@[\]^_`{|}~";

  //  1. Prompt the user for the password criteria
  //    a. Password lengths 8 to 128
  let p = '';
  let pLength=prompt ("Select a password length between 8 and 128");
  // 	  b. Lowercase, 
  let pLowercases=confirm ("Should password include any lowercases")
  //    c. Uppercase, 
  let pUppercases=confirm ("Should password include any uppercases")
  //    d. Numbers 
  let pNumbers=confirm ("Should password include any numbers")
  //    e. Special characters
  let pSpecial=confirm ("Should password include any special characters")

  if (pLength<8 || pLength>128) {
    alert.text="Please try again"
    console.log();
    return
   }

  if (pLowercases) {
    chars+=lowercases;

   }
   

  if (pUppercases) {
    chars+=uppercases
    } 
   

  if (pNumbers) {
    chars+=numbers;

   }
   

  if (pSpecial) {
    chars+=Special

   }
   console.log(chars)

  
 
  for (let i = 0; i < pLength; i++) {
    p += chars[Math.floor(Math.random() * chars.length)]; 
  }

    return p; 



  //for loop

  //stop loop based on entered prompt whıch ıs length of password 
}

  //call function
  function writePassword() {
    var password = generatePassword();
    //display
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);



