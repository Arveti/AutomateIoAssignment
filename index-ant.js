#!/usr/bin/env node 
var program = require('commander');
var unirest = require('unirest');
var apidetails = require('./apidetails');
var chalk = require('chalk');
require('console.table');


program
	.arguments('<word> [limit]')
	.action(function(word,limit){
    var Url=apidetails.getApi('antonyms');
			if(Url){
                var limit = limit||3;
			Url=Url.replace('{word}',word).replace('{limit}',limit);
                //console.log(Url);
             unirest.get(Url).end(function(response){
                // console.log(response.body);
                 
					if(response.ok){  
                        try{
                        var words = response.body[0].words;
                        var synonyms = [];
                        for(var l in words)
                            synonyms.push({"Number ":Number(l)+1,"Antonyms ":words[l]});
                        
                        console.table(synonyms);
                }
                catch(ex){
                    console.error(chalk.bold.red("Server Returned No Antonyms"))

                        }
                 }       
             else{
						console.error(chalk.bold.red("No response from server"))
					}
             
             });
}
    else
        console.error(chalk.bold.red("API Error!"));
}).parse(process.argv);

