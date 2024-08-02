const maxValue = 150;
const minValue = 25;

let number = Math.floor((maxValue - minValue + 1)*Math.random()) + minValue;
let prompt = "Guess the number!"
let guessed = false;
let guess;
let attempts = 0;

while(!guessed){
    guess = window.prompt(prompt);
    if(isNaN(Number(guess))){
        window.alert("Enter a valid number!")
    }else{
        attempts++;
        if(guess == number){
            guessed = true;
            window.alert(`CORRECT! YOU WON! The number was ${guess}! It took you ${attempts} attempts`);
        }else{
            if(guess > number){
                prompt = "TOO HIGH! The winning number is less than yours."
            }else{
                prompt = "TOO LOW! The winning number is greater than yours!"
            }
        }
    }
    
}