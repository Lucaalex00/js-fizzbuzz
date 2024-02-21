/* 
# Stuff
- const/let
- console.log()
- ciclo for
- if/else
- .append
- querySelector / getElementByID
- Math Calcs
- element.style
*/


// Variables & Number's Transform
const fizzValue = 3;
Number(fizzValue);
const buzzValue = 5;
Number(buzzValue);
/*
console.log(typeof (fizz));
console.log(typeof (buzz)); 
*/

// Make an cicle for 

for (let n = 0; n < 50 + 1; n++) {

    //Make an condition IF/ELSE
    if (n % fizzValue === 0) {
        console.log('fizz');
        document.writeln(n);
    } else if (n % buzzValue === 0) {
        console.log('buzz');
        document.writeln(n);
    } else {
        console.log(n);
    }
}


