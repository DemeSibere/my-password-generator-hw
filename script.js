// Assignment Code
var generateBtn = document.querySelector("#generate");
//my...
function generatePassword() {

  var passwordLength = prompt('How long do you want your password?');
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password must be between 8 and 120 characters")
    return
  }
  var shouldIncludeLowercase = confirm('Do you want lowercase letters?');
  var shouldIncludeUppercase = confirm('Do you want uppercase letters?');
  var shouldIncludeSpecialchars = confirm('Do you want special character?');
  var shouldIncludeNumbers = confirm('Do you want numbers?');

  var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var specialcharacters = ['?', '<', '!', '#', '$', '%', '^', '&', '/', '*', '+', '(', ')', ':',
    ';', '"', '-', '_', '+', '=', '>', '@', '[', '\\', ']', '{', '}'];

  var allowedcharacters = [];

  console.log(passwordLength)
  
  if (shouldIncludeLowercase === true) {
    for (var i = 0; i < lowercase.length; i++) {
      allowedcharacters.push(lowercase[i]);
    }
  }
  if (shouldIncludeUppercase === true) {
    for (var i = 0; i < uppercase.length; i++) {
      allowedcharacters.push(uppercase[i]);
    }
  }
  if (shouldIncludeNumbers === true) {
    for (var i = 0; i < number.length; i++) {
      allowedcharacters.push(number[i]);
    }
  }

  if (shouldIncludeSpecialchars === true) {
    for (var i = 0; i < specialcharacters.length; i++) {
      allowedcharacters.push(specialcharacters[i]);
    }
  }

  console.log(allowedcharacters);
  var password = '';

  for (i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * allowedcharacters.length);
    var randomChar = allowedcharacters[randomIndex];
    password = password + randomChar;
  }

  console.log(password);
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

