var word = require("./word"); 
var inquirer = require("inquirer"); 

startGame(); 
console.log("game started"); 

function startGame () { 
    console.log("game started"); 

    inquirer   
        .prompt ({
            name: "wannaGuess", 
            type: "list", 
            message: "Do you want to guess a word?", 
            choices: ["Yes", "Nah, I'm good"]
        })

        .then (function(response) { 
            var choice = response.wannaGuess; 
            console.log ("you said " + choice); 
        })
}