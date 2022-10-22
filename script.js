///////////////////////// DO NOT CHANGE ////////////////////////////////////
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
///////////////////////// DO NOT CHANGE ABOVE HERE /////////////////////////

function generatePassword() {
////////////////////////// WRITE YOUR CODE HERE /////////////////////////

var userInput = prompt("Please type the length of your password (between 8-120 Charecters)", "Your respond here");

if (userInput >= 8 && userInput <= 120 && userInput !== null){
  confirm("You have chosen "+userInput+ " charecters for your password")
 }else { alert("You response was wrong, Please try again!.")
 prompt("Please type the length of your password (between 8-120 Charecters)", "Your respond here");
  
}

var upperCase = prompt("Please type 'y' if you would like uppercase letter(s) in your password otherwise type 'n'", "Your respond here");
    var isUpperCase = true;
  if (upperCase === 'y'|| upperCase ==='Y'){
    isUpperCase = true;
    } else if (upperCase === 'n'|| upperCase ==='N'){
      isUpperCase = false;
  }

 var lowerCase = prompt("Please type 'y' if you would like lowercase letter(s) in your password otherwise type 'n'", "Your respond here");
    var isLowerCase = true;
 if (lowerCase === 'y' || lowerCase === 'Y'){
  isLowerCase = true;
    } else if (lowerCase === 'n'|| lowerCase ==='N'){
    isLowerCase = false;
  }

var specialChar = prompt("Please type 'y' if you would like special symbol(s) in your password otherwise type 'n'", "Your respond here");
  var isSpecial = true;  
if (specialChar === 'y' || specialChar === 'Y'){
  isSpecial = true;
  } else if (specialChar === 'n' || specialChar === 'N') {
  isSpecial = false;
}
var numericChar = prompt("Please type 'y' if you would like numeric charecter(s) in your password otherwise type 'n'", "Your respond here");
  var isNumeric = true;
if (numericChar === 'y' || numericChar === 'Y'){
  isNumeric = true;
  } else if (numericChar === 'n' || numericChar === 'N'){
  isNumeric = false;
}

var myPass = "";
var charPool = ['0','1','2','3','4','5','6','7','8','9', "a", "b", "c", "d", "e", 
"f", "g", "h", "i", "j", "k","l", "m", "n", "o", "p", "q", "r", "s", "t", "u", 
"v", "w", "x", "y", "z",'!','@','#','$','%','^','&','*','A','B','C','D','E','F','G','H','I','J','K','L','M',
'N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

if (isUpperCase===true && isLowerCase ===true && isSpecial ===true && isNumeric===true){
  for (var i=0; i<userInput; i++){
  var index = Math.floor(charPool.length * Math.random())
  myPass += charPool[index];
  }
  return myPass;
 }

var noUpperCaseArray = ['0','1','2','3','4','5','6','7','8','9', "a", "b", "c", "d", "e", 
"f", "g", "h", "i", "j", "k","l", "m", "n", "o", "p", "q", "r", "s", "t", "u", 
"v", "w", "x", "y", "z",'!','@','#','$','%','^','&','*']
if (isUpperCase===false && isLowerCase ===true && isSpecial ===true && isNumeric===true){
  for (var i=0; i<userInput; i++){
  var index = Math.floor(noUpperCaseArray.length * Math.random())
  myPass += noUpperCaseArray[index];
  }
  return myPass;
 }

var noLowerCase = ['0','1','2','3','4','5','6','7','8','9','!','@','#','$','%','^','&','*','A','B',
'C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
if (isUpperCase===true && isLowerCase ===false && isSpecial ===true && isNumeric===true){
  for (var i=0; i<userInput; i++){
  var index = Math.floor(noLowerCase.length * Math.random())
  myPass += noLowerCase[index];
  }
  return myPass;
 }

var noSpecial = ['0','1','2','3','4','5','6','7','8','9', "a", "b", "c", "d", "e", 
"f", "g", "h", "i", "j", "k","l", "m", "n", "o", "p", "q", "r", "s", "t", "u", 
"v", "w", "x", "y", "z",'A','B','C','D','E','F','G','H','I','J','K','L','M',
'N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
if (isUpperCase===true && isLowerCase ===true && isSpecial ===false && isNumeric===true){
  for (var i=0; i<userInput; i++){
  var index = Math.floor(noSpecial.length * Math.random())
  myPass += noSpecial[index];
  }
  return myPass;
 }
var noNumber = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k","l", "m", "n",
 "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",'!','@','#','$','%','^',
 '&','*','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S',
 'T','U','V','W','X','Y','Z']
 if (isUpperCase===true && isLowerCase ===true && isSpecial ===true && isNumeric===false){
  for (var i=0; i<userInput; i++){
  var index = Math.floor(noNumber.length * Math.random())
  myPass += noNumber[index];
  }
  return myPass;
 }


}

