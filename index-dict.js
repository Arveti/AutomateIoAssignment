#!/usr/bin/env node 
var program = require('commander');
var request = require('unirest');
var chalk = require('chalk');
var dictionaryApi=require('./apidetails.js');
require('console.table');
require('shelljs/global');
program.arguments('<word> [limit]').action(function(word,limit){
//console.log("word: "+word);
	var def="dict def "+word+";";
	var example="dict ex "+word;
	var syn="dict syn "+word;
	var ant="dict ant "+word;

exec(def).stdout;
exec(example).stdout;
exec(syn).stdout;
exec(ant).stdout;



//console.log(output);
//console.log("std-out :"+exec(cmd).stdout)
}).parse(process.argv)