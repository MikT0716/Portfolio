let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
generateTarget = () => {
  return Math.floor(Math.random() * 9);
};

compareGuesses = (user, computer, random) => {
  return Math.abs(user - random) <= Math.abs(computer - random) ? true : false;
};

updateScore = (winner) => {
  switch (winner) {
    case "human":
      return humanScore++;
      break;
    case "computer":
      return computerScore++;
      break;
  }
};

advanceRound = () => {
  return (currentRoundNumber += 3);
};
