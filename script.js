// TODO: Generate random color from buttonColors array
// TODO: Add generated color to game pattern array
// TODO: Play sound for the chosen button color
// TODO: Add flash animation class to chosen button and remove it after 100ms
// TODO: Start game sequence if the 'a' key is pressed
const buttonColors = ["green", "red", "yellow", "blue"];
const gamePattern = [];
const userPattern = [];

document.documentElement.addEventListener("keydown", function (e) {
  if (e.key === `a`)
    setTimeout(() => {
      nextSequence();
    }, 300);
});

const buttonsContainer = document.querySelector(".container");
buttonsContainer.addEventListener("click", (e) => {
  const button = e.target.closest(".btn");
  if (!button) return;
  else {
    const userChosenButton = button.getAttribute("data-color");
    userPattern.push(userChosenButton);
    nextSequence();
  }
});

// Generates a random color from the buttonColors array and adds that color to
// the game pattern array.
const nextSequence = () => {
  const randomColor = buttonColors[`${Math.floor(Math.random() * 4)}`];
  const randomButton = document.getElementById(`${randomColor}`);

  //   Push button color to game pattern arrays
  gamePattern.push(randomColor);

  //   Play sound after the button was chosen
  playSound(randomColor);

  //   Add flash animation when the game was chosen
  randomButton.classList.add(`flash`);
  setTimeout(() => {
    randomButton.classList.remove(`flash`);
  }, 100);
};

const playSound = (currentColor) => {
  const audio = new Audio(`./sounds/${currentColor}.mp3`);
  audio.play();
};
