// Assignment code here

var uppercaseletters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" .split("")
var lowercaseletter = "abcdefghijklmnopqrstuvwxyz".split("")
var specialcharacter = "!@$#%^&*()_?".split("")
var numbs = "0123456789".split("")

function generatePassword() {
 var passwordoptions = []
 let newPassword = []
 var passwordlength = prompt("How long did you want your password to be?");
 if (passwordlength<8 || passwordlength>128){
    alert("Please choose an appropriate length for your password.")
    return
  }
}