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
    this.guess = function (letter) { 
        for (var i = 0; i < this.letterArray.length; i++) {
            this.letterArray[i].check(letter);
        }
    }
}

//TEST CODE 

// var word = new Word ("frankenstein"); 
// var letter = "n"

// console.log(word.display()); 
// word.guess("a"); 
// console.log(word.display()); 
// word.guess("n"); 
// console.log(word.display()); 
// word.guess("f"); 
// console.log(word.display());

module.exports = Word; 

