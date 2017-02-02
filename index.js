#! /usr/bin/env node
const dotenv = require('dotenv');
// eslint-disable-next-line
dotenv.load();
const argv = require('yargs')
  .env('SCRABBLEMOJIER')
  .default({
    copy: true,
    prefix: ':',
    suffix: ':',
    blank: ':blank:',
  }).argv;
const ncp = require('copy-paste');

if (argv._.length === 0 || typeof argv._[0] !== 'string') {
  process.stdout.write('Enter a string to scrabble!');
  process.exit(1);
}

const str = argv._[0].toLowerCase();
const scrabbled = str
  .split(' ')
  .map(word => word
    .split('')
    .filter(char => char.match(/[a-z]/g))
    .map(char => `${argv.prefix}${char}${argv.suffix}`)
    .join(' '))
  .join(` ${argv.blank} `);

process.stdout.write(`${scrabbled}\n`);

if (argv.copy) {
  ncp.copy(scrabbled, () => process.stdout.write('Copied to clipboard'));
}
