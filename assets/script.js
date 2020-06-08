// Assignment Code
var generateBtn = document.querySelector("#generate");
const lowerCase = ['a', 'b', 'c', 'e', 'd', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const upperCase = ['A', 'B', 'C', 'E', 'D', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];
const number = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

function getRandomInt(n) {
  return Math.floor(Math.random() * n);
}
function shuffle(s) {
  var arr = s.split('');           
  var n = arr.length;    

  for(var i=0 ; i<n-1 ; i++) {
    var j = getRandomInt(n);       
    
    var temp = arr[i];             
    arr[i] = arr[j];
    arr[j] = temp;
  }
  
  s = arr.join('');                
  return s;                        
}

function generatePassword() {

  var randomPassword = "";

  var passwordLength = prompt("How long would you like your password to be? (Must be between 8-128 characters)");
    while (passwordLength <8 || passwordLength >128) {
      alert("Password length must be between 8-128 characters!");
      var passwordLength = prompt("How long would you like your password to be? (Must be between 8-128 characters)");
    } 

  var confirmLower = confirm("Would you like to include lower case letters in your password?");
  var confirmUpper = confirm("Would you like to include upper case letters in your password?");
  var confirmSpecial = confirm("Would you like to include special characters in your password?");
  var confirmNumber = confirm("Would you like to include number in your password?");
    while (confirmLower === false && confirmUpper === false && confirmSpecial === false && confirmNumber === false) {
      alert("You must choose at least 1 form of character for your password!");
      var confirmLower = confirm("Would you like to include lower case letters in your password?");
      var confirmUpper = confirm("Would you like to include upper case letters in your password?");
      var confirmSpecial = confirm("Would you like to include special characters in your password?");
      var confirmNumber = confirm("Would you like to include number in your password?");
      
    }

  while (randomPassword.length < passwordLength) {

      if (confirmLower === true && randomPassword.length < passwordLength) {
        var randomLower = lowerCase [Math.floor(Math.random() * lowerCase.length)];
        randomPassword += randomLower;       
        }

      if (confirmUpper === true && randomPassword.length < passwordLength) {
        var randomUpper = upperCase [Math.floor(Math.random() * upperCase.length)];
        randomPassword += randomUpper;    
        }

      if (confirmSpecial === true && randomPassword.length < passwordLength) {
        var randomSpecial = special [Math.floor(Math.random() * special.length)];
        randomPassword += randomSpecial   
        }

      if (confirmNumber === true && randomPassword.length < passwordLength) {
        var randomNumber = number [Math.floor(Math.random() * number.length)];
        randomPassword += randomNumber   
        }
      if (randomPassword.length < passwordLength) {
        continue;
        }
      else {
        console.log(randomPassword);
        return randomPassword;
      }   
    }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  password = shuffle(password);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);