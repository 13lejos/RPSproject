//declares starting score
let yourScore = 0
let computerScore = 0
let scoring
let yourPick
let computerSelection 
let gameCounter = 1

document.getElementById('yours').innerHTML = yourScore;
document.getElementById('theirs').innerHTML = computerScore;


// function calls a game of RPS
function playRound(yourSelect){

    
// Declare your choice
// Store your choice as a number
// call a choice from the computer
//   

let computerSelect = getRandom();


// call function to have the computer select a number 1-3
// then assign it a string name 
function getRandom()
{

const min = Math.ceil(1)
const max = Math.floor(4)
computerSelection = Math.floor(Math.random() * (max-min) + min )

return computerSelection;
}

if (computerSelect === 1){
    computerSelection = "rock"
}   
else if (computerSelect === 2){
    computerSelection = "paper"
}   
else if (computerSelect === 3){
    computerSelection = "scissors"
}   

/* determine your choice and compare it to the computer's choice
if (yourSelect === 1) 
{
alert("you chose rock! " + "the computer chose " + computerSelect + ".");
}
else if (yourSelect === 2) 
{
alert("you chose paper! "  + "the computer chose " + computerSelect + ".");
}
else if (yourSelect === 3) 
{
alert("you chose scissors! " + "the computer chose " + computerSelect + ".");
}

// define tied/win/loss within the game rules
// adds to the winner's score
if (yourSelect === 1 && computerSelect === "rock")
{
    scoring = "tied"
    alert("You " + scoring + "! your score is " + yourScore + " the computer's score is " + computerScore) 
}
else if (yourSelect === 1 && computerSelect === "paper")
{
    scoring = "lost"
    computerScore = ++computerScore
    alert("You " + scoring + "! your score is " + yourScore + " the computer's score is " + computerScore)
}
else if(yourSelect === 1 && computerSelect === "scissors")
{
    scoring = "won"
    yourScore = ++yourScore
    alert("You " + scoring + "! your score is " + yourScore + " the computer's score is " + computerScore)
}

else if (yourSelect === 2 && computerSelect === "paper")
{
    scoring = "tied"
    alert("You " + scoring + "! your score is " + yourScore + " the computer's score is " + computerScore) 
}
else if (yourSelect === 2 && computerSelect === "scissors")
{
    scoring = "lost"
    computerScore = ++computerScore
    alert("You " + scoring + "! your score is " + yourScore + " the computer's score is " + computerScore)
}
else if(yourSelect === 2 && computerSelect === "rock")
{
    scoring = "won"
    yourScore = ++yourScore
    alert("You " + scoring + "! your score is " + yourScore + " the computer's score is " + computerScore)
}
else if(yourSelect === 3 && computerSelect === "scissors")
{
    scoring = "tied"
    alert("You " + scoring + "! your score is " + yourScore + " the computer's score is " + computerScore) 
}
else if (yourSelect === 3 && computerSelect === "rock")
{
    scoring = "lost"
    computerScore = ++computerScore
    alert("You " + scoring + "! your score is " + yourScore + " the computer's score is " + computerScore)
}
else if(yourSelect === 3 && computerSelect === "paper")
{
    scoring = "won"
    yourScore = ++yourScore
    alert("You " + scoring + "! your score is " + yourScore + " the computer's score is " + computerScore)
}
*/
if (yourSelect === 1 && computerSelection === "rock")
{
    scoring = "tied"
    yourPick = "rock"
    printScore()
    
}
else if (yourSelect === 1 && computerSelection === "paper")
{
    scoring = "lost"
    computerScore = ++computerScore
    yourPick = "rock"
    printScore()
    
}
else if(yourSelect === 1 && computerSelection === "scissors")
{
    scoring = "won"
    yourScore = ++yourScore
    yourPick = "rock"
    printScore()
    
}

else if (yourSelect === 2 && computerSelection === "paper")
{
    scoring = "tied"
    yourPick = "paper"
    printScore()
   
}

else if (yourSelect === 2 && computerSelection === "scissors")
{
    scoring = "lost"
    computerScore = ++computerScore
    yourPick = "paper"
    printScore()
   
}
else if(yourSelect === 2 && computerSelection === "rock")
{
    scoring = "won"
    yourScore = ++yourScore
    yourPick = "paper"
    printScore()
    
}
else if(yourSelect === 3 && computerSelection === "scissors")
{
    scoring = "tied"
    yourPick = "scissors"
    printScore()
    
}
else if (yourSelect === 3 && computerSelection === "rock")
{
    scoring = "lost"
    computerScore = ++computerScore
    yourPick = "scissors"
    printScore()
   
}
else if(yourSelect === 3 && computerSelection === "paper")
{
    scoring = "won"
    yourScore = ++yourScore
    yourPick = "scissors"
    printScore()
    
}




document.getElementById('yours').innerHTML = yourScore;
document.getElementById('theirs').innerHTML = computerScore;
gameCounter = ++gameCounter
}

function resetGame(){
yourScore = 0
computerScore = 0

document.getElementById('yours').innerHTML = yourScore;
document.getElementById('theirs').innerHTML = computerScore;

document.querySelectorAll("log").forEach(el => el.remove());
gameCounter = 1

}

function printScore()
{
    
    const logReport = document.getElementById("logReport")
    let reported = document.createElement('log')
    logReport.appendChild(reported)
    reported.textContent = ("Game "+ gameCounter + ": " + "You picked " + yourPick + "! The computer picked " + computerSelection + " you " + scoring + "!");
}