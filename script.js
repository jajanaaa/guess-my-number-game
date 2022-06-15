'use strict';

// Create random number betwen 1 and 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// Change score
let guess;
let score = 20;

// Select guess value

console.log(secretNumber);

// Check number function
function checkNumber() {
  guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  if (!guess) {
    document.querySelector('.message').textContent = 'No number! 🚫';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct number! 🎉';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else if (guess < secretNumber) {
    if (score >= 1) {
      document.querySelector('.message').textContent = 'Number is too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game! 💔';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Number is too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game! 💔';
      document.querySelector('.score').textContent = 0;
    }
  }
}
//Select button and add event listener
document.querySelector('.check').addEventListener('click', checkNumber);

// Again button - reset function
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.guess').value = '';
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
