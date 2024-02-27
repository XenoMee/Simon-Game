// TODO: Start the game by pressing any key
// TODO: Create game pattern sequence
// TODO: Create user pattern sequence
// TODO: Add sound and animation to the randomly picked buttons
let colorChoices = ["green", "red", "yellow", "blue"];
let gamePattern = [];
let userPattern = [];

const buttonsContainer = document.querySelector(".container");
buttonsContainer.addEventListener("click", (e) => {
  const button = e.target.closest(".btn");
  if (!button) return;
});

// Generates a random color from the colorChoices array and adds that color to
// the game pattern array.
const randomGeneratedColor = function () {
  let randomColor = Math.floor(Math.random() * 4);
  gamePattern.push(colorChoices[randomColor]);
};

const playSound = function (currentColor) {
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
