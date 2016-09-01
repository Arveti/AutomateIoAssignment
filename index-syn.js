#!/usr/bin/env node 
var program = require('commander');
var unirest = require('unirest');
var apidetails = require('./apidetails');
var chalk = require('chalk');
require('console.table');


program
	.arguments('<syn> [limit]')
	.action(function(syn,limit){
    var Url=apidetails.getApi('synonyms');
			if(Url){
                var limit = limit||3;
			Url=Url.replace('{word}',syn).replace('{limit}',limit);
                //console.log(Url);
             unirest.get(Url).end(function(response){
                // console.log(response.body[2].words);
					if(response.ok){
                        try{
                        var words = response.body[0].words;
                         var synonyms = [];
                        for(var l in words)
                            synonyms.push({"Number ":Number(l)+1,"Synonyms":words[l]});
                        
                        console.table(synonyms);
                        }
                        catch(ex){
                    console.error(chalk.bold.red("Server Returned No Synonyms"))

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

