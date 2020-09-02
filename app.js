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
    winningNum = getWinningNum(min, max),
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

// Play again
game.addEventListener('mousedown', function(e){
  if(e.target.className === 'play-again'){
    window.location.reload();
  }
})


guessBtn.addEventListener('click', function(){

  let guess = parseInt(guessInput.value);

  //Validation
  if(isNaN(guess) || guess < min  || guess > max){
    setMessage(`Please Enter a Number Between ${min} and ${max}`, 'red')
  }

  // Check Win Status
  if(guess === winningNum){
    // Game Over. WON
    
    gameOver(true, `You Win!! ${winningNum} is correct.`)
    
  } else{
    // If Guess is Wrong
    guessesLeft -= 1;
    
    if (guessesLeft === 0){
      // Game Over LOST
      
      gameOver(false, `Game Over, You Lost!! The correct answer was ${winningNum}.`)

    } else{
      // Game Still On Answer Incorrect
      // Set Message
      setMessage(`${guess} is not correct. ${guessesLeft} guesses left`, 'red');
      // Change Border Color
      guessInput.style.borderColor = 'red';
      // Clear Input
      guessInput.value = '';
    }
  }

});

// Game Over
function gameOver(won, msg){
  let color;
  won === true ? color = 'green' : color = 'red';

  // Disable Input
  guessInput.disabled = true;
  // Change Border Color   
  guessInput.style.borderColor = color;
  // Set Message
  console.log(color);
  setMessage(msg, color);

  // Play Again?
  guessBtn.value = 'Play Again';
  guessBtn.className += 'play-again'; 
}

// Get Winning Number
function getWinningNum(min, max){
  return  Math.floor(Math.random()*(max-min+1)+min);
}

// Set Message 
function setMessage(msg, color){
  message.textContent = msg;
  message.style.color = color;
}