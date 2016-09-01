#!/usr/bin/env node 
var program = require('commander');
var unirest = require('unirest');
var apidetails = require('./apidetails');
var chalk = require('chalk');

//var url = "http://api.wordnik.com:80/v4/word.json/"+word+"/examples?includeDuplicates=false&useCanonical=false&skip=0&limit=5&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5";

var Url=apidetails.getApi('dailyword');
			
if(Url){
            //  console.log(" Url:" + Url);
                unirest.get(Url).end(function(response){
            //  console.log(response);

                if(response.ok)
                {
						console.log(chalk.bold.green("Word of the day - "+ response.body.word));
				}
            else{
						console.error(chalk.bold.red("No response from the server - Please enter a valid word!"))
				}
                    
				});
}
           
           else
           	console.error(chalk.bold.red("API Error!"))

