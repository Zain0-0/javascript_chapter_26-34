var secretNumber = Math.floor(Math.random() * 10) + 1;
var userInput = parseInt(prompt(" Enter a number between 1 and 10."));

if (!isNaN(userInput) && userInput >= 1 && userInput <= 10) {
    if (userInput === secretNumber) {
        document.write("Congratulations! You guessed the secret number (" + secretNumber + ").");
    } else {
        alert("Sorry, Try again " );
    }
} else {
    alert("Invalid input! Please enter a number between 1 and 10.");}