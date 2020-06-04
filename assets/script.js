// Assignment Code
var generateBtn = document.querySelector("#generate");
const lowerCase = ['a', 'b', 'c', 'e', 'd', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const upperCase = ['A', 'B', 'C', 'E', 'D', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];
const number = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.onclick = function passwordString(params) {
  let passwordLength = prompt("How long would you like your password to be? (Must be between 8-128 characters)");
    if (passwordLength <8 || passwordLength >128) {
      alert("Password length must be between 8-128 characters!");
    } 
  
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
