// Word-Guess-Game - game_init.js

// debugger
var guessesremaining = 20;
var directionsText = document.getElementById("directions-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var currentGuessWordText = document.getElementById("currentGuessWord-text");
var guessesremainingText = document.getElementById("guessesremaining-text");
var userGuessLetterText = document.getElementById("userGuessLetter-text");
var songText = document.getElementById("song-text");
var wins = 0;
var losses = 0;
var reset_flag = false;
function initialize() {
    removeImage("pic-text");
    appendImage("assets/images/4-WordGuess.jpg", "band-pic", "pic-text");
    var alreadyGuessedLetterIndex = 0;
    var foundLetterFlag = 0;
    var wrongLetterIndex = 0;
    var wordGuessArray = [
        {
            name: "madonna",
            songTitle: "Madonna",
            pic: "assets/images/MADONNA.png"
        },
        {
            name: "genesis",
            songTitle: "Genesis",
            pic: "assets/images/genesis.png"
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
    wordGuessPick = wordGuessArray[Math.floor(Math.random() * wordGuessArray.length)];
    /*  ***** Split word into array */
    splitWordGuessPick = wordGuessPick.name.split("");
    songTitleWordGuessPick = wordGuessPick.songTitle;
    picWordGuessPick = wordGuessPick.pic;
    console.log(splitWordGuessPick);
    console.log(wordGuessPick.songTitle);
    console.log(wordGuessPick.pic);
    currentGuessWord = ["- "];
    guessesremaining = 20;
    userGuessLetter = [" "];


    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    songText.textContent = " ";
    // Build array to be dispalyed for Current Word
    for (var s = 1; s < splitWordGuessPick.length; s++) {
        currentGuessWord.push("- ");
    }
    currentGuessWordText.textContent = " Current Word: " + currentGuessWord.join('');
    guessesremainingText.textContent = " Number of guesses remaining: " + guessesremaining;
    userGuessLetterText.textContent = " Letters already guessed: " + userGuessLetter;
}

function appendImage(imageSource, containerId, imageId) {
    img = document.createElement("IMG");
    img.src = imageSource;
    img.setAttribute('id', imageId);
    document.getElementById(containerId).appendChild(img);
    return imageId;
}

function removeImage(imageId) {
    elementToBeRemoved = document.getElementById(imageId);
    elementToBeRemoved.parentNode.removeChild(elementToBeRemoved);
}


console.log(guessesremaining);

initialize();

// alert("Guess the name of a band from the 80's!");

// This function is run whenever the user presses a key.

document.onkeyup = function (event) {
    var alreadyGuessedLetterIndex = 0;
    var foundLetterFlag = 0;
    var wrongLetterIndex = 0;

    // This loop is for limiting the user tries to 20 and increasing the wining number if the entire word was guessed:
    // for (var i = 0; i < 20; i++) {

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
                    if (JSON.stringify(currentGuessWord) === JSON.stringify(splitWordGuessPick)) {
                        wins++;
                        winsText.textContent = " Wins: " + wins;
                        songText.textContent = " " + songTitleWordGuessPick;
                        removeImage("pic-text");
                        myImage = appendImage(picWordGuessPick, "band-pic", "pic-text");
                        console.log(guessesremaining);
                        console.log(JSON.stringify(currentGuessWord));
                        console.log(JSON.stringify(splitWordGuessPick));


                        // document.body.addEventListener("click", initialize(),{once:true})
                        if (window.alert("Well done, you won!")) {
                            location.reload();
                            document.onkeyup = function (event) {
                                wins = wins;
                                losses = losses;


                            }
                        }
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
                losses++;
                lossesText.textContent = "Losses: " + losses;
                console.log(guessesremaining);
                if (window.alert("Sorry, you lost")) {
                    location.reload();
                    document.onkeyup = function (event) {}
                }
            }
        }
    // }
}
