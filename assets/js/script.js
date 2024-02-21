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
const buzzValue = 5;
const red = 'red'

let div_container = document.getElementById('div_container');

//Stylized elements

/* div_container.style.display = 'flex'
div_container.style.flexDirection = 'column' */

// Make an cicle for 

for (var n = 0; n < 100 + 1; n++) {

    //Make an condition IF/ELSE
    if (n % fizzValue === 0 && n % buzzValue === 0) { //SE N è divisibile per entrambi 
        console.log('fizz' + 'buzz');   //STAMPA FIZZBUZZ
        div_container.innerHTML += `<p class='m-0 p-1 py-3 border border-3 col-2 bg-warning text-center'> FIZZBUZZ </p>`

    } else if (n % buzzValue === 0) {   //SE N è divisibile per 3
        console.log('buzz');    //Stampa BUZZ
        div_container.innerHTML += `<p class='m-0 p-1 py-3 border border-3 col-2 bg-danger text-center'> BUZZ </p>`

    } else if (n % fizzValue === 0) {   //SE N è divisibile per 5
        console.log('fizz');    //STAMPA FIZZ
        div_container.innerHTML += `<p class='m-0 p-1 py-3 border border-3 col-2 bg-primary text-center'> FIZZ </p>`

    } else { // SENNO'
        console.log(n) //STAMPA N
        div_container.innerHTML += `<p class='m-0 p-1 py-3 border border-3 col-2 bg-secondary text-center'> ${n} </p>`

    }

}


