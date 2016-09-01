#!/usr/bin/env node 
var program = require('commander');
var unirest = require('unirest');
var apidetails = require('./apidetails');
var chalk = require('chalk');
require('console.table');


program
	.arguments('<word> [limit]')
	.action(function(word,limit){
    var Url=apidetails.getApi('examples');
			if(Url){
                var limit = limit||3;
			Url=Url.replace('{word}',word).replace('{limit}',limit);
               // console.log(Url);
             unirest.get(Url).end(function(response){
               //  console.log(response.body);
					if(response.ok){   
                        var examples = response.body.examples;
                        var exampleslist = [];
                        for(var l in examples)
                            exampleslist.push({"Number ":Number(l)+1,"Examples ":examples[l].text});
                        
                        console.table(exampleslist);
            }
             else{
						console.error(chalk.bold.red("No response from server-Please enter a valid word!"))
					}
             
             });
}
    else
        console.error(chalk.bold.red("API Error!"));
}).parse(process.argv);

