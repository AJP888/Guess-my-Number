'use strict';

let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;


document.querySelector('.check').addEventListener
('click', function(){
const guess = Number(document.querySelector('.guess').value);
console.log(guess, typeof guess);


///WHEN THERE IS No Input
if(!guess) {
  document.querySelector('.message').textContent = 
  'N0 NUMBER!';

// When Player Wins!!
} else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 
    'CORRECT NUMBER!'; 
    document.querySelector('.number').textContent = 
    secretNumber;
    
document.querySelector('body').
style.backgroundColor = 'green';

document.querySelector('.number').
style.width = '30rem';

if (score > highscore) {
let highscore = score;
document.querySelector('.highscore').textContent = highscore;
}

//When Guess is to High      
    } else if (guess !== secretNumber) {   
       if(score > 1) {
            document.querySelector('.message').textContent 
            = guess > secretNumber ? 'To High!' : 'To Low!';
            score--;
            document.querySelector('.score').textContent = 
            score;
        } else {
            document.querySelector('.message').textContent = 
            'You Lost the Game';
            document.querySelector('.score').textContent = 
            0;
        }
    }
});

// AGAIN BUTTON
document.querySelector('.again').addEventListener
('click', function () {
score = 20;
secretNumber = Math.floor(Math.random() * 20) + 1;
    
document.querySelector('.message').textContent = 
'Start guessing...';
document.querySelector('.score').textContent = 
score;
document.querySelector('.number').textContent = '?';
document.querySelector('.guess').value = '';
 
document.querySelector('body').style.
backgroundColor = '#222';

document.querySelector('.number').style.width = 
'15rem';
});



// // Take 2

// let SecretNumber = Math.floor(Math.random() * 20) + 1; // This makes sure that the Max number is 20 as * 20 will only hit 19.99
// let Score = 20 // This states the base Score in the Game
// let HighScore = 0; // States the starting value for the HighScoe

// document.querySelector('.message').addEventListener('click', function(){
// const guess = Number(document.querySelector('.guess').value);
// console.log(guess, typeof guess);



// // WHEN THERE IS NO INPUT

// if(!guess) {
// document.querySelector('.message').textContent = 'No Number!';  //Using .message class we change the .textContent to NO NUMBER if there is !guess no guess stated
// } else if ( guess === secretNumber) {
// document.querySelector('.message').textContent = 'Correct Number!'; // Using .message class we are changing the .textContent to Correct Number
// document.querySelector('.number').textContent = secretNumber; // This states that if we get the Correct number then it is the correct Number. 

// // Effecting the CSS style.
// document.querySelector('body').style.backGround = 'green'; // Will change the BackGround color to GREEN ONCE YOU HAVE COMPLETED THE RIGHT NUMBER
// document.querySelector('.number').textContent.style.width = '30rem'; // turns the width to 30 rem once you have WON


// if(score > highscore) {
// let highScore = score; // if the score is higher than the high score then highScore becomes the score
// document.querySelector('.highScore').textContent - highScore;
// }
// } else if(guess !== secretNumber) {
//  if(score > 1) { 
//     document.querySelector('.message').textContent = guess > secretNumber ? 'To High' : 'To Low!';
//     score --;
//     document.querySelector('.score').textContent = score;
//  } else {
//      document.querySelector('.message').textContent = 'You Lost the Game';
//      document.querySelector('.score').textContent = 0;
//  }
// }
// });


// /// AGAIN BUTTON

// document.querySelector('.again').addEventListener('click', function() {
// score = 20;
// secretNumber = Math.floor(Math.random() * 20) + 1;
// document.querySelector('.message').textContent = 
// 'Start guessing...';
// document.querySelector('.score').textContent = 
// score;
// document.querySelector('.number').textContent = '?';
// document.querySelector('.guess').value = '';
 
// document.querySelector('body').style.
// backgroundColor = '#222';

// document.querySelector('.number').style.width = 
// '15rem';
// });

