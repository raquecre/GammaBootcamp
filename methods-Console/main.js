/*
//LEVEL 1---------------------------------------------------------


//1
const countries = [
    ["Finland", "Helsinki"],
    ["Sweden", "Stockholm"],
    ["Norway", "Oslo"],
];
console.table(countries);

//2

const countries2 = [
    { country: "Finland", capital: "Helsinki" },
    { country: "Sweden", capital: "Stockholm" },
    { country: "Norway", capital: "Oslo", },
]

console.table(countries2)

//3


console.group("country and capital");
console.log(countries2);
console.groupEnd();


//------LEVEL  2   -----------------------------------------------

//1

console.assert(10 > 2 * 10, " 10 no es mayor que 100");

//2

console.warn("Esto es un mensaje de advertencia");

//3
console.error("Eso es un error grande");



//-----LEVEL 3  ------------------------------------------

//1
console.time("Time Loop while");
console.log(countries2);


    console.log(true);


console.timeEnd("Time Loop while");

//--------
console.time("Time Loop for");

console.log(numbers);

console.timeEnd("Time Loop for");

//------------
console.time("Time Loop for of");

for (const country of countries) {
    
}

console.timeEnd("Time Loop for of");
//--------
console.time("Time Loop forEach");
console.timeEnd("Time Loop forEach");

*/
//-----------------------------------------------------------------------------------------------------------------------------
//----------------------------------             ERRORES EN CONSOLA           -------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------
//Compare the two code fragments.

//The first one uses finally to execute the code after try...catch:

                    /*
                    try {
                    work work
                    } catch (err) {
                    handle errors
                    } finally {
                    cleanup the working space
                    }
                    */

//este va a aparecer funcione o no el segmento de código dentro del try,por lo que es el que debemos usar
// siempre y cuando queramos que se muestre la frase.

//The second fragment puts the cleaning right after try...catch:
                     /*
                      try {
                     work work
                     } catch (err) {
                      handle errors
                     }
                     
 //cleanup the working space                                       */
//en este caso solo va a aparecer siempre y cuando las líneas de código que se incluyen dentro del 'try' sean consideradas erróneas.



//We definitely need the cleanup after the work, doesn’t matter if there was an error or not.
//expl. 1
//Is there an advantage here in using finally or both code fragments are equal? If there is such an advantage, then give an example when it matters.
