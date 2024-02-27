// TODO: Start the game by pressing any key
// TODO: Create game pattern sequence
// TODO: Store user's choices
let colorChoices = ["green", "red", "yellow", "blue"];
let gamePattern = [];
let userPattern = [];

// Generates a random color from the colorChoices array and adds that color to
// the game pattern array.
const randomGeneratedColor = function () {
  let randomColor = Math.floor(Math.random() * 4);
  gamePattern.push(colorChoices[randomColor]);
};
