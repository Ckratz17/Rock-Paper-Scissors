//start with prompt
var wins = 0;
var losses = 0;
var ties = 0;

function RPS(length) {
    var body = document.getElementById("body")
    body.innerHTML += '<h1>Thanks for playing!</h1>'
    var opponent = "RPS"
    var opponentChoice = ""
    var player = ''

    var opponentLength = opponent.length

    var choice = prompt('Choose "R" "P" "S"')

    if(choice === 'r' || choice ==='R') {
        player = player + choice
    }

    if(choice === 'p' || choice ==='P') {
        player = player + choice
    }

    if(choice === 's' || choice ==='S') {
        player = player + choice
    }

    console.log(player)

    for(var i = 0; i < 1; i++) {
      opponentChoice += opponent.charAt(Math.floor(Math.random() * opponentLength));
    }

    if(player === 'R' || player === "r" && opponentChoice === "R") {
        alert("You tied, the opponent chose " + opponentChoice)
        draws = draws + 1
    }


    if(player === 'P' || player === "p" && opponentChoice === "P") {
        alert("You tied, the opponent chose " + opponentChoice)
        draws = draws + 1
    }


    if(player === 'S' || player === "s" && opponentChoice === "S") {
        alert("You tied, the opponent chose " + opponentChoice)
        draws = draws + 1
    }

    if(player === 'R' || player === "r" && opponentChoice === "P") {
        alert("You lose, the opponent chose " + opponentChoice)
        losses = losses + 1
    }

    if(player === 'P' || player === "p" && opponentChoice === "S") {
        alert("You lose, the opponent chose " + opponentChoice)
        losses = losses + 1
    }

    if(player === 'S' || player === "s" && opponentChoice === "R") {
        alert("You lose, the opponent chose " + opponentChoice)
        losses = losses + 1
    }

    if(player ==='R' || player === "r"  && opponentChoice === "S") {
        alert("You Win! The opponent chose " + opponentChoice)
        wins = wins + 1
    }

    if(player === 'P' || player === "p" && opponentChoice === "R") {
        alert("You Win! The opponent chose " + opponentChoice)
        wins = wins + 1
    }
    
    if(player === 'S' || player === "s" && opponentChoice === "P") {
        alert("You Win! The opponent choose " + opponentChoice)
        wins = wins + 1
    }

    alert("Your current stats are " + wins + " wins, " + draws + " draws, " + losses + " losses")
    
    playMore();

}

RPS();

function playmore() {
    var playAgain = prompt("Do you want to play again? y/n")
while(playAgain === 'y' || playAgain === "yes" || playAgain ==='Y' || playAgain === "Yes"){
    RPS();
    playAgain = '';
}

}
    //userinput enter and click
    //save user input in a variable and make sure to convert it into upper case



//ai pick 
    //create array = ["R", "S", "P"]
    //pick random index of the array : math.floor(math.random()* 3)
    //based on index capture the item(string)
    //save computer pick in a variable

//keep each win, loss, and tie in variables: 3 variables
    //losses inital value 0, wins = 0, ties = 0;

//compare user input with computer pick
    //if(userinput === "R" && computerpick ==="P") || (userinput === "P" && computerpick ==="S") || (userinput === "S" && computerpick ==="R"))
        //losses++;

//show score on the popup(Alert)
    //display score

// to replay add confirm from user and run the same function agian.