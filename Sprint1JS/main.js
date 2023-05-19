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

function sumaLista(userArray) {
    let resultSumaLista = 0;
    for (let i = 0; i < userArray.length; i++) {
        resultSumaLista += userArray[i];
    }
    return resultSumaLista;

}
sumaLista([2, 4, 5]);

//4
function arrExtrValuePos(extrValue) {
    let emphyArrayPositive = [];
    for (let i = 0; i <= extrValue; i++) {
        emphyArrayPositive.push(i);

    }
    return emphyArrayPositive;
}
arrExtrValuePos(5);

//5 
function arrExtrValueNeg(extrValue) {
    let emphyArrayNegative = [];
    for (let i = 0; i <= extrValue; i--) {
        emphyArrayNegative.push(i);

    }

    return emphyArrayNegative;
}
arrExtrValueNeg(6);


//6
function randomLettersNumbers(letter, number) {
    result = letter.repeat(number);

    return total;
}
randomLettersNumbers('T', 6);

//7
let numUser1 = parseInt(prompt("Escribe tu primer número:"));
let numUser2 = parseInt(prompt("Escribe tu segundo número:"));
let numUser3 = parseInt(prompt("Escribe tu tercer número:"));
let numUser4 = parseInt(prompt("Escribe tu cuarto número:"));

let AverageMath = (numUser1 + numUser2 + numUser3 + numUser4) / 4;

console.log(alert(`La media de los números que has dado es: ${AverageMath}`));

//8
function century(year) {
    let century = Math.floor(year / 100) + 1;

    return `Ese año pertenece al siglo ${century}`;
}

//9
function myScore(examScore) {
    let yourScore;
    if (examScore < 5) {
        yourScore = `Como tu nota es un ${examScore}, estás suspenso.`;

    } else if (examScore == 5) {
        yourScore = `Como tu nota es un ${examScore}, estás aprobado.`;

    } else if (examScore == 6) {
        yourScore = `Como tu nota es un ${examScore}, tienes un bien.`;

    } else if (examScore <= 8) {
        yourScore = `Como tu nota es un ${examScore}, tienes un notable.`;

    } else if (examScore == 9) {
        yourScore = `Como tu nota es un ${examScore}, tienes un sobresaliente.`;

    } else if (examScore == 10) {
        yourScore = `Como tu nota es un ${examScore}, tienes una matricula.`;

    }

    return yourScore;
}

//10
function moneyPay(price, taxRate) {

    if (price >= 100) {
        let discountPrice = (price * 0.9);
        totalPay = discountPrice * (100 + taxRate) / 100;

    } else {
        totalPay = price * (100 + taxRate) / 100;
    }

    return totalPay;
}
console.log(moneyPay(200, 5));

//11
function multipleOf(number1, number2) {
    let multipleAnswer = number1 % number2;
    if (multipleAnswer == 0) {
        multipleAnswer = `True, porque ${number1} es múltipo de ${number2}.`;

    } else {
        multipleAnswer = `False, porque ${number1} no es múltipo de ${number2}.`;
    }

    return multipleAnswer;
}

//12 
function addUserNumber() {
    let totalSum = 0;
    let userNumbers = 1;
    let result = 0;
    do {
        userNumbers = parseInt(prompt('Dame un número'));
        totalSum += userNumbers;
    } while (userNumbers != 0)

    if (totalSum % 2 == 0) {

        result = console.log(`${totalSum} es par`);
        addUserNumber();
    } else {

        result = console.log(`${totalSum} es impar`);
    }

    return result;
}
addUserNumber();



