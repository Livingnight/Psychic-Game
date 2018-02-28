// MAKING ALL THE VARIABLES AND FUNCTIONS
var game = {
    // WINS
    wins: 0,
    // LOSSES
    losses: 0,
    // CHANCES TO GUESS
    chancesLeft: 10,
    // THE LETTERS THAT ARE GUESSED
    alreadyGuessed: [],
    // POSSIBLE COMPUTER CHOICES
    computerChoices: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
        'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    // FUNCTION THAT LETS THE COMPUTER PICK A LETTER

    // FUNCTION THAT LETS THE USER PICK A LETTER
    gameStart: function (userGuess) {
        // this.computerGuess = undefined;
        if (!this.computerGuess){
            this.computerGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
            console.log(this.computerGuess);
        }


        if (userGuess === this.computerGuess) {
            game.wins++;
            console.log(game.wins);
            game.losses = 0;
            console.log(game.losses);
            game.alreadyGuessed = [];
            console.log(userGuess);
            game.chancesLeft = 10;
            this.computerGuess = undefined;

        }
        // GAME LOGIC FOR WRONG GUESS
        else if (userGuess !== this.computerGuess) {
            game.chancesLeft--;
            game.alreadyGuessed.push(userGuess);
            console.log(game.chancesLeft);
            console.log(game.alreadyGuessed);

            // GAME LOGIC FOR GAME LOSS
            if (game.chancesLeft === 0) {
                game.losses++;
                game.chancesLeft = 10;
                console.log(game.losses);
                game.alreadyGuessed = [];
                this.computerGuess = undefined;
            }
        }

        // HTML TO MAIN PAGE AFTER EVERY GUESS/LOSS/WIN
        var html =
            "<p>Wins: " + game.wins + "</p>" +
            "<p>Losses: " + game.losses + "</p>" +
            "<p>Chances Left: " + game.chancesLeft + "</p>" +
            "<p>Letters Guessed: " + game.alreadyGuessed + "</p>";


        document.querySelector("#psychic").innerHTML = html;

    }


};

document.onkeyup = function(){
    var userGuess = event.key.toLowerCase();
    if (game.alreadyGuessed.includes(userGuess)){
        alert("You already guessed that letter!");
    }
    else if (game.computerChoices.includes(userGuess)){
        game.gameStart(userGuess);
    }
    else {
        alert("Must Choose a letter in the alphabet!")
    }
};


