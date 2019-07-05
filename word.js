var Letter = require("./letter");  

function Word (word) { 
    console.log(word);
    this.letterArray = []; 

    for (var i = 0; i < word.length; i++ ) { 
        var Letter = new letter (word[i]); 
        this.letterArray.push(word[i]); 
        console.log (letterArray);
        letter.display(); 
    }
    
}

Word("zipper");
console.log(letter.display()); 
