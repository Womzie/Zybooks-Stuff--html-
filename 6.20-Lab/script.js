// Your solution goes here 

function playGuessingGame(a, b = 10){
    let numToGuess = a;
    let i = 1;
    let totalGuesses = b;
    
    let guess;
    
    guess = prompt("Enter a number between 1 and 100.");
    
    while(i < totalGuesses){
        if(guess != null){
            if(isNaN(guess)){
                guess = prompt("Please enter a number.")
                i--;
            }
            else if(guess < numToGuess){
                guess = prompt(guess + " is too small. Guess a larger number.")
            }
            else if(guess > numToGuess){
                guess = prompt(guess + " is too large. Guess a smaller number.")
            }
            else {
                return i;

            }
        }
        else{
            return 0;
        }
        i++;
    }
    return 0;
}
