function getComputerChoice() {
  const choice = Math.floor(Math.random() * 3 + 1);
  return choice;
}
//let playerSelection = window.prompt("Enter your choice...");

function playRound() {
  let computerSelection = getComputerChoice();
  let playerSelection = prompt("Enter Rock, Paper, or Scissors", "rock");
  const rules = {
    rock: 1,
    paper: 2,
    scissors: 3,
    one: "Rock crushes scissors.",
    two: "Scissors cut paper.",
    three: "Paper covers rock.",
    four: "It's a tie!"
  }

  if (rules[playerSelection.toLowerCase()] === computerSelection) return { description: rules.four, winner: null };
  if (rules[playerSelection.toLowerCase()] === 1 && computerSelection === 2) return { description: rules.three, winner: false };
  if (rules[playerSelection.toLowerCase()] === 1 && computerSelection === 3) return { description: rules.one, winner: true };
  if (rules[playerSelection.toLowerCase()] === 2 && computerSelection === 1) return { description: rules.three, winner: true };
  if (rules[playerSelection.toLowerCase()] === 2 && computerSelection === 3) return { description: rules.two, winner: false };
  if (rules[playerSelection.toLowerCase()] === 3 && computerSelection === 1) return { description: rules.one, winner: false };
  if (rules[playerSelection.toLowerCase()] === 3 && computerSelection === 2) return { description: rules.two, winner: true };
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    let result = playRound();
    if (result.winner === true) { playerScore += 1; }
    if (result.winner === false) { computerScore += 1 };
    console.log(result.description, result.winner === true ? "you won" : result.winner === false ? "you lost" : "try again");
  }
  return console.log(`You got ${playerScore} points, and the computer got ${computerScore} points. That means you ${playerScore > computerScore ? "won!" : playerScore === computerScore ? "tied." : "lost :-(."}`);

}

game();