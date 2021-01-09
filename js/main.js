import { changeImg, addScore, addAnimation, removeAnimation } from "./ui.js";

const leftScore = document.querySelector(".score-left");
const rightScore = document.querySelector(".score-right");
export const display = document.querySelector(".mini-box");
const btn = document.querySelector(".button-wrapper");

const SELECTIONS = [
  { name: "rock", beats: "scissors" },
  { name: "paper", beats: "rock" },
  { name: "scissors", beats: "paper" },
];

// score
export function score(playerSelection, comp) {
  const playerWinner = winner(playerSelection, SELECTIONS[comp]);
  const compWinner = winner(SELECTIONS[comp], playerSelection);
  if (playerWinner) addScore(leftScore);
  if (compWinner) addScore(rightScore);
}

// winner
function winner(playerSelection, opponentSelection) {
  return playerSelection.beats === opponentSelection.name;
}

// Event Listener
btn.addEventListener("click", (e) => {
  e.preventDefault();
  removeAnimation();

  if (e.target.classList.contains("btn")) {
    addAnimation();
    let pick = e.target.dataset.pick;
    const playerSelection = SELECTIONS.find(
      (playerSelection) => playerSelection.name === pick
    );
    changeImg(playerSelection);
  }
});
