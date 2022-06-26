//start with prompt
var wins = 0;
var losses = 0;
var ties = 0;
var rock = "R" || "r"
var paper = "P" || "p"
var scissors = "S" || "s"


    //userinput enter and click
    //save user input in a variable and make sure to convert it into upper case
function RPS() {
    var ai = "RPS"
    var aiPick = " "
    var pick = ""
    var user = prompt("Rock, Paper, Scissors", "R, P, or S")
    for(var i = 0; i < 1; i++) {
        aiPick += Math.floor(Math.random() * 3);
      
    }
       
    if(user === rock && aiPick === paper || 
        user === paper && aiPick === scissors || 
        user === scissors && aiPick === rock) {
        alert("You lose! Your opponent choose " + choice)
    }

    if(user === rock && aiPick === scissors || 
        user === paper && aiPick === rock || 
        user === scissors && aiPick === paper) {
        alert("You win! Your opponent choose " + choice)
    }

    if(user === rock && aiPick === rock || 
        user === paper && aiPick === paper || 
        user === scissors && aiPick === scissors) {
        alert("You tie! Your opponent choose " + choice)
    }
}


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