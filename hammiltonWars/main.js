 //reduce sort map
//5
const input = [12, 46, 32, 64];
//MEDIA-----------------------------------
//      Sumar todos los números.
let sumImput = input.reduce((sum, val) => sum + val);
console.log(sumImput);

//cantidad de números totales
let lengthInput = input.length;
//dividirlos entre la cantidad de números que hay.

let mean = sumImput / lengthInput;
console.log(mean);


//MEDIANA--------------------------------
//      Si se ponen todos los números en fila, tomar el valor que esté en la mitad.

// ordenar los números de menor a mayor
let inputSort = input.sort();
console.log(inputSort);

// Par o impar
positionMedian = 0;
if (inputSort.length % 2 == 0) {
   
    positionMedian = (input.length + 1) / 2;
    

    valueMedian = (inputSort[Math.floor(positionMedian-1)] + inputSort[Math.ceil(positionMedian-1)]) /2;

    console.log(valueMedian);
    
} else {
    positionMedian = input.length / 2
    positionMedian;

   console.log(inputSort[positionMedian]); 
}

console.log(inputSort[positionMedian]);


 
           // A1 // si length == impar ----->(n+1)/2
                    // puntuación de en medio
                    // Sumar los datos
                    //Hacer la media
           // A2 // si length == par -----> sumar las dos posiciones de en medio y hacer la media





            //const input = [12, 46, 32, 64]; 
           input.sort((a, b) => a - b);
           
           input.reduce(
             (accumulator, currentValue, index, array) => {
               accumulator.mean += currentValue / array.length;
           console.log(index);
               if (array.length % 2 === 0) {
                 // if the array has an even number of elements
                 if (index === array.length / 2 - 1) {
                   accumulator.median += currentValue;
                 } else if (index === array.length / 2) {
                   accumulator.median += currentValue;
                   accumulator.median /= 2;
                 }
               } else {
                 // if the array has an odd number of elements
                 if (index === (array.length - 1) / 2) {
                   accumulator.median = currentValue;
                 }
               }
           
               return accumulator;
             },
             { mean: 0, median: 0 }
           );
           