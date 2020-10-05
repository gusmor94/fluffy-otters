// Assignment code here
var lowerChar = "abcdefghijklmnopqrstuvwxyz";
var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numChar = "1234567890";
var specialChar = "!@#$&?"; 

function generatePassword() {
  
  // length of the password
  var passwordLength = window.prompt("Set the length of your password! Type a number between 8 and 128.");
  if (8 > passwordLength || passwordLength > 128 || passwordLength === "" || passwordLength === null) {
    window.alert("Invalid entry.");
    return generatePassword();
  }
  console.log(passwordLength);

  var characters = "";
  // lowercase characters
  var lowercase = window.confirm("Would you like lowercase characters in your password?");
  if (lowercase) {
    characters = characters + lowerChar;
  }
  console.log(lowercase);

  // uppercase characters
  var uppercase = window.confirm("Would you like uppercase characters in your password?");
  if (uppercase) {
    characters = characters + upperChar;
  }
  console.log(uppercase);
  
  // numeric characters
  var numbers = window.confirm("Would you like numeric characters in your password?");
  if(numbers) {
    characters = characters + numChar;
  }
  console.log(numbers);

  // special characters 
  var symbols = window.confirm("Would you like special characters in your password?");
  if(symbols) {
    characters = characters + specialChar;
  }
  console.log(symbols);

  // generated password
  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomPass = Math.floor(Math.random() * characters.length);
    password = password + characters[randomPass];
  }
  console.log(password);

  if (!lowercase && !uppercase && !numbers && !symbols) {
    window.alert("Please pick at least one set of characters to generate a password.");
    return generatePassword();
  }
  return password;
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);