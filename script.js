// Assignment code here

var uppercaseletters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" .split("")
var lowercaseletter = "abcdefghijklmnopqrstuvwxyz".split("")
var specialcharacter = "!@$#%^&*()_?".split("")
var numbs = "0123456789".split("")

function generatePassword() {
 var passwordoptions = []
 let newPassword = []
 var passwordlength = prompt("How long do you want your password to be?");
 if (passwordlength<8 || passwordlength>128){
    alert("Please choose an appropriate length for your password.")
    return
  }
  var uppercase = confirm ("Do you want uppercase letters in your password?");
  var lowercase = confirm ("Would you like to use lowercase letters in your password?");
  var specialcharacters = confirm ("Do you want special characters in your password?");
  var numbers = confirm ("Would you like to have numbers in your password?");

  if (uppercase === true) {
    passwordoptions=passwordoptions.concat(uppercaseletters)
   }
   
   if (lowercase === true) {
     passwordoptions=passwordoptions.concat(lowercaseletter)
    }
 
    if (specialcharacters === true) {
     passwordoptions=passwordoptions.concat(specialcharacter)
    }
 
    if (numbers === true) {
     passwordoptions=passwordoptions.concat(numbs)
    } 

    console.log(passwordoptions)
    for (let index = 0; index < passwordlength; index++) {
    newPassword.push(passwordoptions[Math.floor(Math.random()*passwordoptions.length)])
     console.log(newPassword)
   
    }
   return newPassword.join("")
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }