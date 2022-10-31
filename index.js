var readlineSync = require('readline-sync');
// var chalk = require('chalk');
var score = 0;

var userName = readlineSync.question('What is your name ? ');
console.log(`Hello ${userName}, Let's play small quiz on NeogCamp.`);

var questions = [
  {
    question: 'What is neogcamp? ',
    answer: 'coding bootcamp'
  },
  {
    question: 'What they teach in bootcamp? ',
    answer: 'web development'
  },
  {
    question: 'Who is the mentor at neogcamp? ',
    answer: 'tanay pratap'
  },
  {
    question: 'Is level zero is free of cost? ',
    answer: 'yes'
  },
  {
    question: 'Is it project based learning? ',
    answer: 'yes'
  }
];

function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if(userAnswer.toLowerCase === answer.toLowerCase){
    console.log('Correct');
    score++;
  }else{
    console.log('wrong answer!');
    score--;
  }
  console.log('Your current score is : ', score);
  console.log('------Next Question------');
}

function game(){
  for(var i = 0; i < questions.length; i++){
    var currentObject = questions[i];
    play(currentObject.question, currentObject.answer);
  }
}
game();

console.log('Your Final Score is : ', score);