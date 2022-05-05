let secrectNumber = Math.trunc(Math.random() * 20 + 1);
console.log(secrectNumber);
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // when there is no number
  if (!guess) {
    document.querySelector(".message").textContent = "⛔️ No Number!";
  }

  // when the player win
  else if (guess === secrectNumber) {
    displayMessage("🎉 Correct Number!");
    document.querySelector(".number").textContent = secrectNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (score > highScore) {
      highScore = score;
      console.log(highScore);
      document.querySelector(".highscore").textContent = highScore;
    }
  }

  // when the number is wrong
  else if (guess !== secrectNumber) {
    if (score > 1) {
      displayMessage(guess > secrectNumber ? `📈 Too high!` : `📉 Too Low!`);
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("💥 You lost the game!");
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secrectNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  displayMessage("Guess Number!");
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".guess").value = "";
});
