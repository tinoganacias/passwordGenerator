// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function makePassword() {
 
  
console.log(makePassword)
  

  var pLength =  prompt("Choose the length of your password between 8 and 128 characters");
console.log(prompt)
  if (pLength >= 8 && pLength <= 128) {

    var numbers = confirm("Use numbers?    'ok' for yes, 'cancel' for no");
    var lowerCase = confirm("Use lowercase?    'ok' for yes, 'cancel' for no");
    var upperCase = confirm("Use uppercase?    'ok' for yes, 'cancel' for no");
    var specialCharacters = confirm("Use special characters?    'ok' for yes, 'cancel' for no");
  }
    
  if (pLength < 8 || pLength > 128) {
    return writePassword()
  }

 
  
  if (numbers) {
      var numbers = ["987654321"]
    }
  
if (numbers === false) {
  var numbers = [""]
}

    if (lowerCase) {
     var lowerCase = ["abcdefghijklmnopqrstuvwxyz"]
    }

if (lowerCase === false) {
  var lowerCase = [""]
}

    if (upperCase) {
     var upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
}

if (upperCase === false) {
  var upperCase = [""]
}

    if (specialCharacters) {
     var specialCharacters = ["!@#$%^&*()"];
    }

    if (specialCharacters === false) {
      var specialCharacters = [""]
    }
   
  
  var randomizer = numbers + lowerCase + upperCase + specialCharacters;
  var password = "";


  for (var i = 0; i < pLength; i++) {
    var newPassword = randomizer[Math.floor(Math.random() * randomizer.length)];
    password += newPassword;
}


return password
}


function writePassword() {
  var password = makePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


generateBtn.addEventListener("click", writePassword);



