var Word = require("./word"); 
var inquirer = require("inquirer"); 

// ARRAY TO CAPTURE THE WORD LIST 
var wordLib = ["dog", "cat", "bird", "chinchilla"]; 

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
                // console.log ("you said " + choice); 
                playgame(); 
            }

            else {
                // console.log ("you said " + choice); 
                noThanks(); 
            }
        })
}

// FUNCTION THAT RUNS GAME 
function playgame () { 
    console.log("Play Game"); 
    // GENERATE A WORD 
    var findWord = wordLib[Math.floor (Math.random() * wordLib.length)]; 
    var word = new Word (findWord); 
    console.log(word); 

    //DISPLAY THE WORD AS BLANK 

    // PROMPT THE USER TO ENTER A LETTER 

    // CHECK IF THE LETTER IS IN THE WORD

    // REDISPLAY THE WORD 

}

// FUNCTION THAT EXITS IF YOU SAY NO THANKS
function noThanks () { 
    console.log ("OK, maybe another day. Bye!"); 
}