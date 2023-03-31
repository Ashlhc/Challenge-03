//variables
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
console.log(lowercase);
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
console.log(uppercase);
var numeric = ["0","1","2","3","4","5","6","7","8","9"];
console.log(numeric);
var symbols = ["!","@","#","$","%","^","&","*","(",")","+"];
console.log(symbols);
var allChars = [lowercase, uppercase, numeric, symbols];
console.log(allChars);
var Userinput = 0;

function generatePassword() {

// pwd length

var passwordLength = 
prompt("Enter the length of your password (between 8 and 128 characters)"); 
function checkpasswordlength() {
  if ( passwordLength >= 8 && passwordLength <= 128) {
    alert("Size is important")
  } else {
    alert("Are you paying attention? Enter a number between 8 and 128.")
  }
}
checkpasswordlength();

//function userlowercase()
 
var userlowercase = confirm("Do you want lower case letters?");
function checkuserlowercase () {
  if ( userlowercase == true )
{
    alert("Nice, lowercase letters it is!")
  }else{
    alert("Lame, no lowercase letters then")
  }
 
}
checkuserlowercase();
// function uppercase()


var useruppercase = confirm("Do you want to use Uppercase letters?");
function checkuseruppercase ()  {
  if ( useruppercase == true ) 
{
    alert("Nice, Uppercase letters it is!")
  }else{
    alert("Lame, no Uppercase letters then")
  }
 
}   
checkuseruppercase (); 
// function numbers

 
var usernumeric =  confirm("Do you want to use numbers?");
function checkusernumeric () {
  if ( usernumeric == true )
{
    alert("Nice, numbers it is!?")
  }else{
    alert("Lame, no numbers then")
  }

}
checkusernumeric();
// function symbols


var usersymbols =  confirm("Do you want to use special characters?");
function checkusersymbols() {
  if ( usersymbols == true )
{
    alert("Nice, special characters it is!?")
  }else{
    alert("Lame, no special characters then")
  }
  
}
checkusersymbols();
var finalPassword = ""
var combinedArray = []
  if (userlowercase) {
    combinedArray = combinedArray.concat(lowercase)
  }
  if (useruppercase) {
    combinedArray = combinedArray.concat(uppercase)
  }
  if (usernumeric) {
    combinedArray = combinedArray.concat(numeric)
  }
  if (usersymbols) {
    combinedArray = combinedArray.concat(symbols)
  }

for (var i = 0; i < passwordLength; i++) {
  var RandomChar = combinedArray [Math.floor(Math.random()*combinedArray.length)]
  finalPassword += RandomChar
}
return finalPassword
}

var generateBtn = document.querySelector("#generate");


//Write password to the #password input 
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
generateBtn.addEventListener("click", writePassword);






// Assignment Code
//var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//function writePassword() {
 // var password = generatePassword();
 // var passwordText = document.querySelector("#password");

 // passwordText.value = password;

//}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);
//    passwordText.value = password;
    
//    generateBtn.addEventListener("click", writePassword);
  
  
 // function passwordCriteria = prompt () {}
  
  
//}
  



//prompt for password length is a number
//make generatePassword function 
//password.length.Number
//if statement if number is above 8 && below 128
//if {

//}
//confirm for lowercase, uppercase, numeric, and special characters
//store their response in a variable
//bunch of if else statements checking 
//if statement for each confirm and if it is a yes or true I would push or add random characters to a big array of all characters selected so far.
//for loop while i is less than their answer for num length prompt
//in this for loop we would randomly pull characters from the big array
//pull random characters from the array using math.random 
//have a var declared above for loop
//that var += theRandomChar
//return the password var 
//don't bother touching either the html or css file



// Write password to the #password input
// function writePassword() {
  //var password = generatePassword();
  //var passwordText = document.querySelector("password");

  //passwordText.value = password;

//}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);
// keepplaying = confirm ("message goes here")