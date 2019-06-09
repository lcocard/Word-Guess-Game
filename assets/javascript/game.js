// debugger
var alreadyGuessedLetterIndex = 0;
var foundLetterFlag = 0;
var wrongLetterIndex = 0;
var wins = 0;
var wordGuessArray = [
    {
        name: "genesis",
        songTitle: "Genesis",
        pic: "assets/images/genesis.png"
    },
    {
        name: "madonna",
        songTitle: "Madonna",
        pic: "assets/images/MADONNA.png"
    },
    {
        name: "blondie",
        songTitle: "Blondie",
        pic: "assets/images/blondie.png"
    },
    {
        name: "queen",
        songTitle: "Queen",
        pic: "assets/images/queen-band.png"
    },
    {
        name: "rush",
        songTitle: "Rush",
        pic: "assets/images/Rush-band.png"
    },
    {
        name: "police",
        songTitle: "Police",
        pic: "assets/images/thepolice.png"
    },
    {
        name: "metallica",
        songTitle: "Metallica",
        pic: "assets/images/metallica.png"
    },
    {
        name: "aerosmith",
        songTitle: "Aerosmith",
        pic: "assets/images/aerosmith.png"
    },
    {
        name: "scorpions",
        songTitle: "Scorpions",
        pic: "assets/images/scorpions.png"
    },
    {
        name: "eurythmics",
        songTitle: "Eurythmics",
        pic: "assets/images/eurythmics.png"
    }
]
/* ***** Pick random word from array  */
var wordGuessPick = wordGuessArray[Math.floor(Math.random() * wordGuessArray.length)];
/*  ***** Split word into array */
var splitWordGuessPick = wordGuessPick.name.split("");
var songTitleWordGuessPick = wordGuessPick.songTitle;
var picWordGuessPick = wordGuessPick.pic;
console.log(splitWordGuessPick);
console.log(wordGuessPick.songTitle);
console.log(wordGuessPick.pic);
var currentGuessWord = ["- "];
var guessesremaining = 20;
var userGuessLetter = [" "];
var directionsText = document.getElementById("directions-text");
var winsText = document.getElementById("wins-text");
var currentGuessWordText = document.getElementById("currentGuessWord-text");
var guessesremainingText = document.getElementById("guessesremaining-text");
var userGuessLetterText = document.getElementById("userGuessLetter-text");
var songText = document.getElementById("song-text");

function appendImage(imageSource, containerId, imageId) {
    var img = document.createElement("IMG");
    img.src = imageSource;
    img.setAttribute('id', imageId);
    document.getElementById(containerId).appendChild(img);
    return imageId;
}

function removeImage(imageId) {
    var elementToBeRemoved = document.getElementById(imageId);
    elementToBeRemoved.parentNode.removeChild(elementToBeRemoved);
}


winsText.textContent = "Wins: " + wins;
songText.textContent = " ";
// Build array to be dispalyed for Current Word
for (var s = 1; s < splitWordGuessPick.length; s++) {
    currentGuessWord.push("- ");
}
currentGuessWordText.textContent = " Current Word: " + currentGuessWord.join('');
guessesremainingText.textContent = " Number of guesses remaining: " + guessesremaining;
userGuessLetterText.textContent = " Letters already guessed: " + userGuessLetter;

alert("Guess the name of a band from the 80's!")

// This function is run whenever the user presses a key.
document.onkeyup = function (event) {
    var alreadyGuessedLetterIndex = 0;
    var foundLetterFlag = 0;
    var wrongLetterIndex = 0;

    // This loop is for limiting the user tries to 20 and increasing the wining number if the entire word was guessed:
    for (var i = 0; i < 20; i++) {

        // Determines which key was pressed.
        var userGuessLetterElement = event.key;
        console.log(userGuessLetterElement);
        // This logic determines if the key pressed by the user is one of the letters from the word to be guessed:
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
                    // Checking if the user has guessed the entire word:
                    if (JSON.stringify(currentGuessWord) == JSON.stringify(splitWordGuessPick)) {
                        wins++;
                        winsText.textContent = " Wins: " + wins;
                        songText.textContent = " " + songTitleWordGuessPick;
                        removeImage("pic-text");
                        var myImage = appendImage(picWordGuessPick, "band-pic", "pic-text");
                        alert("Well done!");
                    }
                }
            }
            else {
                // Hide the directions:
                directionsText.textContent = "";
                wrongLetterIndex++;
            }
        }
        if (foundLetterFlag !== 1 && wrongLetterIndex === splitWordGuessPick.length) {
            guessesremaining = guessesremaining - 1;
            guessesremainingText.textContent = " Number of guesses remaining: " + guessesremaining;
            if (guessesremaining === 0) {
                alert("Sorry, zero guesses remaining, please try again!");
            }
        }
    }
}
