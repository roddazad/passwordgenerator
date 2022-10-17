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
var passLength = prompt("Please type the length of your password (between 8-120 Charecters)", "Your respond here");
    confirm("You are choosing "+passLength+" charecters for your password");
 var isUpperCase = prompt("Please type 'y' if you would like an uppercase letter in your password otherwise type 'n'", "Your respond here");
  if (isUpperCase === 'y'){
    confirm("You chose to have an uppercase letter in your password?");
  } else {
    confirm ("You did not chose to have an uppercase letter in your password?");
  }
var specialChar = prompt("Please type 'y' if you would like an special charecter in your password otherwise type 'n'", "Your respond here");
if (specialChar === 'y'){
  confirm("You chose to have a special charecter in your password?");
} else {
  confirm ("You did not chose to have a special charecter in your password?");
}
var numericChar = prompt("Please type 'y' if you would like an numeric charecter in your password otherwise type 'n'", "Your respond here");
if (numericChar === 'y'){
  confirm("You chose to have a numeric charecter in your password?");
} else {
  confirm ("You did not chose to have a numeric charecter in your password?");
}
  var random = ' ';
 var char ="1,2,3,4,5,6,7,8,9,0,_,+,!,@,#,$,%,^,&,*,(,),q,w,e,r,t,y,u,i,o,p,a,s,d,f,g,h,j,k,l,z,x,c,v,b,n,m,Q,W,E,R,T,Y,U,I,O,P,A,S,D,F,G,H,J,K,L,Z,X,C,V,B,N,M,"
  if (isUpperCase === 'y'&& specialChar === 'y' && numericChar === 'y'){
      for (var i=0; i<passLength.length; i++){
        var randomChar = Math.floor(Math.random()*char.length);
        random += char.substring(randomChar, randomChar + 1);
      }


  }

}
