const argv = require('yargs').default({
  copy: true,
  prefix: ':scrabble-',
  suffix: ':',
}).argv;
const ncp = require('copy-paste');

if (argv._.length === 0) {
  process.stdout.write('Enter a string to scrabble!');
  process.exit(1);
}

const str = process.argv[2].toLowerCase();
const scrabbled = str
  .split('')
  .filter(char => char.match(/[a-z]/g))
  .map(char => `${argv.prefix}${char}${argv.suffix}`)
  .join(' ');
process.stdout.write(`${scrabbled}\n`);

if (argv.copy) {
  ncp.copy(scrabbled, () => process.stdout.write('Copied to clipboard'));
}
