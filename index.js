#!/usr/bin/env node
var program = require('commander');

program
.command('def <word>','Definition of the word')
.command('syn <word>[limit]','Lists Same Context Words')
.command('ex <word>[limit]','Gives Examples of the word')
.command('ant <word>[limit]','Lists antonyms of the word')
.command('dict <word>[limit]','Fetches Definition,Examples,Same Context Words and Antonyms of the word',{isDefault: true})
.command('dailyword','Gives word of the day')
.command('play','Play the dictionary game')
.parse(process.argv);