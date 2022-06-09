const prompt = require("prompt-sync")();

// params 'number' user input number of asterisk
function patternRender(number) {
  var pattern = "";
  for (var i = number; i > 0; i--) {
    pattern += "*".repeat(i) + "\n";
  }
  return pattern;
}

const numberOfAsterisks = Number(
  prompt("How many asterisk on the first row : ")
);
console.log(patternRender(numberOfAsterisks));
// patternRender(5);
