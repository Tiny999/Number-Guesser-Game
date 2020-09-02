/* 

  GAME FUNCTION:
  - Player must guess a number between a minimum and maximum
  - Player gets a crtain amount of guesses 
  - Notify player of guesses remaining
  - Notify the player of the correct answer if they lose
  - Let player choose to play again

*/

// Game Values
let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

// UI Variables
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

///Assign UI Min and Max
minNum.textContent = min;
maxNum.textContent = max;



 

// Event Listeners
guessBtn.addEventListener('click', function(){

  let guess = parseInt(guessInput.value);

  //Validation
  if(isNaN(guess) || guess < min  || guess > max){
    setMessage(`Please Enter a Number Between ${min} and ${max}`, 'red')
  }

  // Check Win Status
  if(guess === winningNum){
    // Disable Input
    guessInput.disabled = true;
    // Change Border Color
    guessInput.style.borderColor = 'green';
    // Set Message
    setMessage(`You Win!! ${winningNum} is correct.`, 'green');
  } else{

  }

});

// Set Message 
function setMessage(msg, color){
  message.textContent = msg;
  message.style.color = color;
}