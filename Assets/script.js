var wins = 0;
var losses = 0;
var ties = 0;
var options = ['R', 'P', 'S'];  

function RPS() {
    var user = window.prompt("Rock, Paper, Scissors", "Enter R, P, or S")
    
    if (!user) {
        return;
    }
    user = user.toUpperCase

    var index = Math.floor(Math.random() * options.length);
    var computerChoice = options[index];
    
    if (user === computerChoice ) {
        ties++
        window.alert("Its a tie! Your opponent choose " + computerChoice)
    }else if(
        (user === 'R' && computerChoice === 'P') ||
        (user === 'P' && computerChoice === 'S') ||
        (user === 'S' && computerChoice === 'R')
    ) {
        losses++
        window.alert("You Lose! Your opponent choose " + computerChoice)
    }else {
        wins++
        window.alert("You Win! Your opponent choose " + computerChoice)
    }

    window.alert(
        "Stats:\nWins: " + wins + "\nLosses: "+ losses + "\nTies: " + ties
    )
    
    var playAgain = window.confirm("Play again?")

   if(playAgain) {
    RPS()
   }
}   
 RPS()
