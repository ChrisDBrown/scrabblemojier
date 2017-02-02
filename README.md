# scrabblemojier
Quickly transform text to slack emoji scrabble tiles

## About
The best feature of slack is emojis. The best use of slack is to spam them. Now you can do it _and_ be on topic at the same time!

![Imgur](http://i.imgur.com/8na52UU.png)

Thanks to the great people at [slackmojis](https://slackmojis.com/) you can grab these tiles (under scrabble letters) and use this script to turn any sentence into the highest point score possible. "Scrabblemojier" is 29, by the way.

Put any phrase into scrabblemojier and it'll do all the tedious emojification work for you, and automatically copy to your clipboard for maximum speed.

## Installation

Install it globally so you can use it super fast from anywhere!

`npm install -g scrabblemojier`

## Basic use

`scrabblemojier Word` to scrabblemoji a single word

`scrabblemojier "Make this sentence scrabbletastic"` to do a sentence

Easy! Fast! Scrabble!

### Command line options

Want to change an option just this time? Add these flags to the command.

`--no-copy` if you don't want it going to your clipboard

`--prefix=":yolo-"` for a different prefix on each letter (default is `:`)

`--suffix="-swag:"` for a different _suffix_ on each letter (default is `:`)

`--blank=":blankety-blank"` to change your blank tile (default is `:blank:`)

### .env file options

Want to change an option _forever and ever_ (or at least until you change your mind)? Use the `.env.example` file as a guideline and make a `.env` file with these values.

`SCRABBLEMOJIER_COPY=0` to disable copying

`SCRABBLEMOJIER_PREFIX=:yolo-` to change the prefix

`SCRABBLEMOJIER_SUFFIX=-swag:` for the _suffix_

`SCRABBLEMOJIER_BLANK=:blankety-blank:` to change your blank tile


#### Disclaimer

If you get yourself booted from a slack group or fired because you've gone mad with scrabblemoji power, it's entirely your own fault. But _please_ [tweet](https://twitter.com/ChrisDeeBrown) or [e-mail](email:owner@chrisdbrown.co.uk) me the story so I can have a laugh.