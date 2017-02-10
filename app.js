'use strict';
var totalRightAnswers = 0;
var numberGuess;
var stateGuess;
var states = ['washington', 'oregon', 'california'];

var userName = prompt('Gettings, What is your name?').toLowerCase();;
console.log('Name of guest is ' + userName);
alert('Nice to meet you ' + userName);

alert('ALRIGHT ' + userName + ', ITS GAME TIME! Answer the following questions with either YES on NO. :D');

function pizzaFunc(){
  var pizzaQuestion = prompt('Do you like Pizza? Yes or no?').toLowerCase();
  console.log(userName + ' answered  ' + pizzaQuestion);
  if (pizzaQuestion === 'yes') {
    alert('Thats right, every one likes pizza');
    totalRightAnswers += 1;
  } else if (pizzaQuestion === 'no') {
    alert('Dont lie');
  }
}
pizzaFunc();

function readFunc(){
  var readingQuestion = prompt('Do I like to read?').toLowerCase();
  console.log(userName + ' guessed ' + readingQuestion);
  if (readingQuestion === 'yes') {
    alert(readingQuestion + ', that is right ' + userName + '!');
    totalRightAnswers += 1;
  } else if(readingQuestion === 'no') {
    alert('WRONG');
  }
}
readFunc();

function stateFunc(){
  var capitolQuestion = prompt('Is the Capitol of California Sacremento?').toLowerCase();
  console.log(userName + ' answered ' + capitolQuestion);
  if (capitolQuestion === 'no') {
    alert('That is incorect ' + userName);
    totalRightAnswers += 1;
  }else if(capitolQuestion === 'yes'){
    alert('Right on mon.');
  }
}
stateFunc();

function beerFunc(){
  var beerQuestion = prompt('Is beer great?').toLowerCase();
  console.log(userName + ' said ' + beerQuestion);
  if (beerQuestion === 'no') {
    alert('WRONG ' + userName + ', ITS AMAZING.');
  } else if(beerQuestion === 'yes') {
    alert('Right again homie');
    totalRightAnswers += 1;
  }
}
beerFunc();

function coffeeFunc(){
  var coffeeQuestion = prompt('Is coffee great?').toLowerCase();
  console.log(userName + ' said this: ' + coffeeQuestion);
  if (coffeeQuestion === 'yes') {
    alert('You are correct ' + userName);
    totalRightAnswers += 1;
  } else if (coffeeQuestion === 'no') {
    alert('come on man');
  }
}
coffeeFunc();

function numberFunc(){
  for (var i = 0; i < 4; i++) {
    numberGuess = parseInt( prompt('Im thinking of a number between 1 and 10, you have 4 tries at it.') );
    if (numberGuess === 5){
      alert('Yes, thats right.');
      totalRightAnswers += 1;
      break;
    } else if(numberGuess > 5) {
      alert('too high.');
    } else if(numberGuess < 5){
      alert('too low');
    } else {
      alert('that is not a number.');
    }
  }
}
numberFunc();

function lastFunc(){
  for (var i = 0; i < 6; i++){
    stateGuess = prompt('Guess a state that I have lived in. You get a few tries').toLowerCase();
    if (states.indexOf(stateGuess) >= 0){
      alert('Yup! I have actually lived in California, Oregon and Washington');
      totalRightAnswers += 1;
      break;
    }else{
      alert('WRONG!');
    }
  }
}
lastFunc();

alert('You got ' + totalRightAnswers + ' out of 7 right :D');
document.write('You got ' + totalRightAnswers + ' out of 7 right :D');


// Note: I thought that I had to include the follwoing variable in order for the loop to work,
// however, it seemed to run fine without it this time.
// var numberAsnwer = 5;