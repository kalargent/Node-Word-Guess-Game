var Word = require("./word"); 
var inquirer = require("inquirer"); 

// ARRAY TO CAPTURE THE WORD LIST 


startGame(); 
// console.log("game started"); 


// FUNCTION THAT STARTS GAME 
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
            // console.log ("you said " + choice); 

            if (choice == "Yes") {
                console.log ("you said " + choice); 
                
            }

            else {
                console.log ("you said " + choice); 
            }
        })
}

// FUNCTION THAT RUNS GAME 
function playgame () { 
    // GENERATE A WORD 

    //DISPLAY THE WORD AS BLANK 

}