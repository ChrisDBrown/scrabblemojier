let ncp = require("copy-paste");

if (process.argv[2] === undefined) {
  console.log("Provide a string to scrabble");
  process.exit(1);
}

const str = process.argv[2].toLowerCase();
const scrabbled = str.split("").filter(char => char.match(/[a-z]/g)).map(letter => ":scrabble-" + letter + ":").join(" ");
console.log(scrabbled);

ncp.copy(scrabbled, () => console.log('Copied to clipboard'));