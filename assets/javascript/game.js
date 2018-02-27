// var wins = 0;
// var losses = 0;
// var chancesLeft = 10;
// var alreadyGuessed = [];


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
    computerGuess: function() {
            game.computerChoice = game.computerChoices[Math.floor(Math.random()* game.computerChoices.length)];

        },
    // FUNTION THAT LETS THE USER PICK A LETTER
    userGuess: function() {
        document.onkeyup = function (event) {
            var userInput = event.key.toLowerCase();


        };

    };
    // GAME LOGIC FOR WINNING
    if (game.userGuess() === game.computerGuess()) {
        game.wins++;
        console.log(game.wins);
        game.losses = 0;
        console.log(game.losses);
        game.alreadyGuessed = [];
        console.log(game.userGuess());
    }
    // GAME LOGIC FOR WRONG GUESS
    else if(game.userGuess() !== game.computerGuess()) {
        game.chancesLeft--;
        game.alreadyGuessed = game.alreadyGuessed.push(game.userGuess());
        console.log(game.chancesLeft);
        console.log(game.alreadyGuessed);
        
        // GAME LOGIC FOR GAME LOSS
        if (game.chancesLeft === 0) {
            game.losses++;
            console.log(game.losses);
            game.alreadyGuessed = [];
            }
    }

    // HTML TO MAIN PAGE AFTER EVERY GUESS/LOSS/WIN
    var html =
        "<p>Wins: " + game.wins + "</p>" +
        "<p>Losses: " + game.losses + "</p>" +
        "<p>Chances Left: " + game.chancesLeft + "</p>" +
        "<p>Letters Guessed: " + game.alreadyGuessed + "</p>";


    document.querySelector(".psychic").innerHTML = html;



