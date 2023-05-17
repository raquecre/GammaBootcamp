//1

let weekdays = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];


let userDay = parseInt(prompt('Dame un número del 0 al 6'));

console.log(`El día de la semana es el ${weekdays[userDay]}`);


//2
let arrBooleans = ['verdadero', 'falso'];
let userNumber = parseInt(prompt('Dame un número del 1 al 9'));

if (userNumber > 0 && userNumber <= 9) {
    console.log(alert(arrBooleans[0]));

} else {
    console.log(alert(arrBooleans[1]));
}

//3 
let resultSumaLista = 0;
function sumaLista(userArray) {
    for (let i = 0; i < userArray.length; i++) {
        resultSumaLista += userArray[i];
    }
    return resultSumaLista;

}
console.log(sumaLista([1, 1]));

/* //4

let emphyArrayPositive = [];
function arrExtrValuePos(extrValue) {
    for (let i = 0; i <= extrValue; i++) {
        emphyArrayPositive.push(i);

    }
    return emphyArrayPositive
}
console.log(arrExtrValuePos(6));

//5 

let emphyArrayNegative = [];
function arrExtrValueNeg(extrValue) {
    for (let i = 0; i <= extrValue; i--) {
        emphyArrayNegative.push(i);

    }
    return emphyArrayNegative
}
conso le.log(arrExtrValueNeg(6));*/

//6
function randomLettersNumbers(letter, number) {
    result = (letter) * number
    return total  

}

console.log(randomLettersNumbers('T', 6));