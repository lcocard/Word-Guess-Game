
var alreadyGuessedLetterIndex = 0;
var foundLetterFlag = 0;
var wrongLetterIndex = 0;
var wins = 0;
var wordGuessArray = ["genesis", "madonna", "blondie", "queen", "rush", "police", "metallica", "aerosmith", "scorpions", "eurythmics"]
var genesis = {
    songTitle: "Genesis",
    pic: "assets/images/genesis.png"
}
var madonna = {
    songTitle: "Madonna",
    pic: "assets/images/MADONNA.png"
}
var blondie = {
    songTitle: "Blondie",
    pic: "assets/images/blondie.png"
}
var queen = {
    songTitle: "Queen",
    pic: "assets/images/queen-band.png"
}
var rush = {
    songTitle: "Rush",
    pic: "assets/images/Rush-band.png"
}
var police = {
    songTitle: "Police",
    pic: "assets/images/thepolice.png"
}
var metallica = {
    songTitle: "Metallica",
    pic: "assets/images/metallica.png"
}
var aerosmith = {
    songTitle: "Aerosmith",
    pic: "assets/images/aerosmith.png"
}
var scorpions = {
    songTitle: "Scorpions",
    pic: "assets/images/scorpions.png"
}
var eurythmics = {
    songTitle: "Eurythmics",
    pic: "assets/images/eurythmics.png"
}
/* ***** Pick random word from array  */
var wordGuessPick = wordGuessArray[Math.floor(Math.random() * wordGuessArray.length)];
/*  ***** Split word into array */
var splitWordGuessPick = wordGuessPick.split("");
console.log(splitWordGuessPick);
var currentGuessWord = ["- "];
var guessesremaining = 20;
var userGuessLetter = [" "];
var directionsText = document.getElementById("directions-text");
var winsText = document.getElementById("wins-text");
var currentGuessWordText = document.getElementById("currentGuessWord-text");
var guessesremainingText = document.getElementById("guessesremaining-text");
var userGuessLetterText = document.getElementById("userGuessLetter-text");
winsText.textContent = "Wins: " + wins;
/* Build array to be dispalyed for Current Word */
for (var s = 1; s < splitWordGuessPick.length; s++) {
    currentGuessWord.push("- ");
}
currentGuessWordText.textContent = " Current Word: " + currentGuessWord.join('');
guessesremainingText.textContent = " Number of guesses remaining: " + guessesremaining;
userGuessLetterText.textContent = " Letters already guessed: " + userGuessLetter;
// This function is run whenever the user presses a key.
document.onkeyup = function (event) {
    var alreadyGuessedLetterIndex = 0;
    var foundLetterFlag = 0;
    var wrongLetterIndex = 0;
    // This loop is for limiting the user tries to 20 and increasing the wining number if the entire word was guessed
    for (var i = 0; i < 20; i++) {
        // This loop is for checking if there are any letters remaining to be guessed. It will terminate the loop that iterates 20 times, as the word has been guessed already, and we will reset the variables
        // The image will be changed with a new one showing the band, there will be a title displayed at the top and a song will play

        // Determines which key was pressed.
        var userGuessLetterElement = event.key;
        console.log(userGuessLetterElement);
        // This logic determines if the key pressed by the user is one of the letters from the word to be guessed
        for (var k = 0; k < splitWordGuessPick.length; k++) {
            if (userGuessLetterElement === splitWordGuessPick[k]) {
                currentGuessWord[k] = userGuessLetterElement;
                alreadyGuessedLetterIndex++;
                foundLetterFlag = 1;
                console.log(alreadyGuessedLetterIndex);
                // Hide the directions
                directionsText.textContent = "";
                currentGuessWordText.textContent = " Current Word: " + currentGuessWord.join('');
                if (alreadyGuessedLetterIndex === 1) {
                    userGuessLetter.push(userGuessLetterElement);
                    userGuessLetterText.textContent = " Letters already guessed: " + userGuessLetter.join('');
                    if (JSON.stringify(currentGuessWord) == JSON.stringify(splitWordGuessPick)) {
                        wins++;
                        winsText.textContent = " Wins: " + wins;
                    }
                }
            }
            else {
                // Hide the directions
                directionsText.textContent = "";
                wrongLetterIndex++;
            }
        }
        if (foundLetterFlag !== 1 && wrongLetterIndex === splitWordGuessPick.length) {
            guessesremaining = guessesremaining - 1;
            guessesremainingText.textContent = " Number of guesses remaining: " + guessesremaining;
        }


    }
}
