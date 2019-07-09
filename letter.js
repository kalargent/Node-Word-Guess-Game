
var Letter = function (letter) { 
    this.letter = letter, 
    this.guessed = false, 
    this.display = function () {
        if (this.guessed === false) { 
            return "_ "; 
        }
        else return this.letter + " ";
    } 
    this.check = function (value) { 
        if (value === this.letter) {
            this.guessed = true; 
            return true; 
        }
        else return false; 

    }

}


module.exports = Letter; 

// TEST CODE 
// var letter =  new Letter("a"); 

// console.log (letter.display()); 
// console.log (letter.check("b")); 
// console.log (letter.display()); 


 
