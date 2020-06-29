// Assignment Code


var displayEl = document.getElementById('result');
var lengthEl = document.getElementById('length');
var spCharEl = document.getElementById('special');
var numEl = document.getElementById('numbers');
var upEl = document.getElementById('up');
var lowEl = document.getElementById('low');
var clipEl = document.getElementById('copy');
var generateEl = document.getElementById('generate');


var randomFunc ={

low: getRandomLower,
up: getRandomUpper,
num: getRandomNumber,
sym: getRandomSymbol
}; 
// Event listener
generateEl.addEventListener('click', () => {
var length= +lengthEl.value; 
var lower = lowEl.checked;
var upper =  upEl.checked; 
var special =  spCharEl.checked; 
var numbers = numEl.checked; 

console.log(lower, upper, special,numbers)

displayEl.innerText= generatePassword( 
  lower,
  upper,
  special,
  numbers,
  length
  );

});


//Genaerateb Password

function generatePassword(low, up, num, sym) {

}
//getting lower case characters
function getRandomLower(){
  return String.fromCharCode(Math.floor(Math.random() * 26 + 97));

}

function getRandomUpper(){
  return String.fromCharCode(Math.floor(Math.random() * 26 + 65));

}

function getRandomNumber(){
  return String.fromCharCode(Math.floor(Math.random() * 10 + 48));

}

function getRandomSymbol(){
  const symbols ='!@#$%^&*(){}[]=<>/,.';
  return symbols [Math.floor(Math.random()* symbols.length)];

}
console.log(getRandomSymbol());