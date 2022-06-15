'use strict';

// Create random number betwen 1 and 20
const secretNumber = Math.trunc(Math.random() * 20) + 1;

document.querySelector('.number').textContent = secretNumber;
