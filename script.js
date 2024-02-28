// TODO: Generate random color from buttonColors array
// TODO: Add generated color to game pattern array
// TODO: Play sound for the chosen button color
// TODO: Add flash animation class to chosen button and remove it after 100ms
// TODO: Start game sequence if the 'a' key is pressed
const buttonColors = ["green", "red", "yellow", "blue"];
const gamePattern = [];
let userPattern = [];
const hasStarted = false;
const levelTitleEl = document.getElementById("level-title");
let level = 0;

document.documentElement.addEventListener("keydown", function (e) {
  if (!hasStarted && e.key === "a") {
    nextSequence();
    hasStarted = true;
  }
});

const buttonsContainer = document.querySelector(".container");
buttonsContainer.addEventListener("click", (e) => {
  const button = e.target.closest(".btn");
  if (!button) return;
  else {
    const userChosenButton = button.getAttribute("data-color");
    userPattern.push(userChosenButton);

    playSound(userChosenButton);
    animatePress(button);
    checkAnswer(userPattern.length - 1);
  }
});

// Generates a random color from the buttonColors array and adds that color to
// the game pattern array.
const nextSequence = () => {
  const randomColor = buttonColors[`${Math.floor(Math.random() * 4)}`];
  const randomButton = document.getElementById(`${randomColor}`);
  userPattern = [];
  level++;
  levelTitleEl.textContent = `Level ${level}`;

  //   Push button color to game pattern arrays
  gamePattern.push(randomColor);

  //   Play sound after the button was randomly chosen
  playSound(randomColor);

  //   Add flash animation when the button was randomly chosen
  flashAnimation(randomButton);
};

const playSound = (currentColor) => {
  const audio = new Audio(`./sounds/${currentColor}.mp3`);
  audio.play();
};

const flashAnimation = (element) => {
  element.classList.add(`flash`);
  setTimeout(() => {
    element.classList.remove(`flash`);
  }, 100);
};

const gameOverAnimation = (element) => {
  element.classList.add(`game-over`);
  setTimeout(() => {
    element.classList.remove(`game-over`);
  }, 100);
};

const animatePress = (element) => {
  element.classList.add(`pressed`);
  setTimeout(() => {
    element.classList.remove(`pressed`);
  }, 100);
};

const checkAnswer = (currentLevel) => {
  if (userPattern[currentLevel] === gamePattern[currentLevel]) {
    if (userPattern.length === gamePattern.length) {
      setTimeout(() => {
        nextSequence();
      }, 1000);
    }
  } else {
    gameOver();
    resetGame();
  }
};

const gameOver = () => {
  levelTitleEl.textContent = `Game Over!`;
  playSound("wrong");
  gameOverAnimation(document.body);
};

const resetGame = () => {
  level = 0;
  gamePattern = [];
  hasStarted = false;
};
