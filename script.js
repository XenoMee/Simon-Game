// TODO: Start the game by pressing any key
// TODO: Create game pattern sequence
// TODO: Create user pattern sequence
// TODO: Add sound and animation to the randomly picked buttons
const buttonColors = ["green", "red", "yellow", "blue"];
const gamePattern = [];
const userPattern = [];

const buttonsContainer = document.querySelector(".container");
buttonsContainer.addEventListener("click", (e) => {
  const button = e.target.closest(".btn");
  if (!button) return;
  nextSequence();
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
  switch (currentColor) {
    case "green":
      const greenSound = new Audio("./sounds/green.mp3");
      greenSound.play();
      break;

    case "red":
      const redSound = new Audio("./sounds/red.mp3");
      redSound.play();
      break;

    case "yellow":
      const yellowSound = new Audio("./sounds/yellow.mp3");
      yellowSound.play();
      break;

    case "blue":
      const blueSound = new Audio("./sounds/blue.mp3");
      blueSound.play();
      break;

    default:
      console.log("Unknown color");
  }
};
