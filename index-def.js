#!/usr/bin/env node 
var program = require('commander');
var unirest = require('unirest');
var apidetails = require('./apidetails');
var chalk = require('chalk');

//var url = "http://api.wordnik.com:80/v4/word.json/"+word+"/examples?includeDuplicates=false&useCanonical=false&skip=0&limit=5&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5";
program
	.arguments('<word>')
	.action(function(word){
    var Url=apidetails.getApi('definition');
			if(Url){
			Url=Url.replace('{word}',word);
                //   console.log(" Url:" + Url);
                unirest.get(Url).end(function(response){
                //   console.log(response);

					if(response.ok && response.body instanceof Array && response.body.length>0){
					var word=response.body[0].word;
					var meaning=response.body[0].text;
						console.log("Meaning: "+chalk.green(meaning));
					
					}else{
                //   console.log(response);
						console.error(chalk.bold.red("Server returned no meaning - Please enter a valid word!"))
					}
				});
}
           
           else
           	console.error(chalk.bold.red("API Error!"))

           }).parse(process.argv);