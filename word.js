var Letter = require("./letter");  

function Word (word) { 
    // console.log(word);
    this.letterArray = []; 

    for (var i = 0; i < word.length; i++ ) { 
        var letter = new Letter (word[i]); 
        this.letterArray.push(letter); 
    }
    
    this.display = function () {
        var answer = ""; 
        for (var i = 0; i < this.letterArray.length; i++) { 
            answer += this.letterArray[i].display(); 
        }
        return (answer); 
    }
}

var word = new Word ("zipper"); 

console.log(word.display()); 

