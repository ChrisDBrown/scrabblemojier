const ncp = require('copy-paste');

if (process.argv[2] === undefined) {
  process.stdout.write('Provide a string to scrabble');
  process.exit(1);
}

const str = process.argv[2].toLowerCase();
const scrabbled = str.split('').filter(char => char.match(/[a-z]/g)).map(letter => `:scrabble-${letter}:`).join(' ');
process.stdout.write(scrabbled);

ncp.copy(scrabbled, () => process.stdout.write('Copied to clipboard'));
