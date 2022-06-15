'use strict';

// Create random number betwen 1 and 20
const secretNumber = Math.trunc(Math.random() * 20) + 1;

document.querySelector('.number').textContent = secretNumber;

// Select guess value

console.log(secretNumber);

// Check number function
function checkNumber() {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  if (!guess) {
    document.querySelector('.message').textContent = 'No number! 🚫';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct number! 🎉';
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'Number is too low!';
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = 'Number is too high!';
  }
}

//Select button and add event listener
document.querySelector('.check').addEventListener('click', checkNumber);
