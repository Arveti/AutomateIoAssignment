#!/usr/bin/env node
var prompt = require('prompt');
var apidetails = require('./apidetails');
var chalk = require('chalk');
var unirest = require('unirest');
require('shelljs/global');
var word;
    var Url=apidetails.getApi('randomword');
			if(Url){
                //   console.log(" Url:" + Url);
        
unirest.get(Url).end(function(response){
                //   console.log(response);

					if(response.ok){
					word=response.body.word;
						console.log(chalk.cyan(word));
					var def="dict def "+word+";";
	var syn="dict syn "+word;
	var ant="dict ant "+word;

exec(def).stdout;
exec(syn).stdout;
exec(ant).stdout;
 prompt.start();
            getInput();            
function getInput(){
  prompt.get(['inputword'], function (err, result) {
    if (err) { return onErr(err); }
    console.log('Command-line input received:');
    console.log(' Your  Word: ' + result.inputword);
      if(word.toString() == result.inputword)
              console.log(' Correct Answer ' );
else
    {
                 console.log(' Wrong Answer ' );
                 console.log('\t 1  -  Try Again ' );
                 console.log('\t 2  -  Quit ' );

        getNextInput();
    }

  });
}
                        function getNextInput(){
  prompt.get(['inputnumber'], function (err, result) {
    if (err) { return onErr(err); }
    console.log('Command-line input received:');
    console.log(' Your  Number: ' + result.inputnumber);
      if(result.inputnumber == '1')
getInput();
      else
    {
        console.log(' Thanks for Playing ' );
    }

  });
}
  function onErr(err) {
    console.log(err);
    return 1;
  }					
                    
}
    
    else{
                       // console.log(response);
						console.error(chalk.bold.red("Please enter a valid word!"))
					}
				});

}
           
           else{
           	console.error(chalk.bold.red("API Error!"));
           }


 
 