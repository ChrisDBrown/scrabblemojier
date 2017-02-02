if (process.argv[2] === undefined) {
  console.log("Provide a string to scrabble");
  process.exit(1);
}

const str = process.argv[2].toLowerCase();
const scrabbled = str.split("").map(letter => ":scrabble-" + letter + ":").join(" ");
console.log(scrabbled);