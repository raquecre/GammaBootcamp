/* 
// Las condiciones se pueden implementar de las siguientes maneras:

// if
// if (condition) {
//     la parte que se ejecuta cuando es true
// }

// let num = 3;
// if (num > 0) {
//     console.log(`${num} es mi número`);
// }

// let isRaining = true;
// if (isRaining) {
//     console.log("pilla paraguas");
// }

// if else
let isRaining = true;
if (!isRaining) {
    console.log("pilla paraguas");
} else {
    console.log("disfrutas del sol");
}

// if else if else
let a = 3;
if (a > 0) {
    console.log("es un número positivo");
} else if (a < 0) {
    console.log("es un número negativo");
} else if (a == 0) {
    console.log("es cero");
} else {
    console.log("no es un número");
}

// switch
let weather = "rainy";
switch (weather) {
    case "rainy":
        console.log("esta lloviendo");
        break;
    case "cloudy":
        console.log("no hay luz");
        break;
    case "sunny":
        console.log("hace calor");
        break;
    default:
        console.log("mejor me quedo en casa");
        break;
}
 */
//ejemplo con pregunta:
// let dayUserInput = prompt("¿Qué día es hoy?");
// let day = dayUserInput.toLowerCase();

// switch (day) {
//     case "lunes":
//         console.log("Hoy es Lunes");
//         break;
//     case "martes":
//         console.log("Hoy es Martes");
//         break;
//     case "miércoles":
//         console.log("Hoy es Miércoles");
//         break;
//     case "jueves":
//         console.log("Hoy es Jueves");
//         break;
//     case "viernes":
//         console.log("Hoy es Viernes");
//         break;
//     case "sábado":
//         console.log("Hoy es Sábado");
//         break;
//     case "domingo":
//         console.log("Hoy es Domingo");
//         break;
//     default:
//         console.log("No es un día de semana.");
// }

// let num = prompt("Ingrese un número");
// switch (true) {
//   case num > 0:
//     console.log("El número es positivo");
//     break;
//   case num == 0:
//     console.log("El número es cero");
//     break;
//   case num < 0:
//     console.log("El número es negativo");
//     break;
//   default:
//     console.log("El valor ingresado no era un número");
// }

// operador ternario ES6

//let isCodeWaring = true;

//!isCodeWaring ? console.log("estas practicando katas") : console.log("eres un vago");

// ================================================
// ejemplo de transformación en ternario (de momento no os compliqueis la vida)
//  year = "senior";
// if (credits < 30) {
//   year = "freshman";
// } else if (credits <= 59) {
//   year = "sophomore";
// } else if (credits <= 89) {
//   year = "junior";
// }

// year = credits < 30 ? "freshman" : credits <= 59 ? "sophomore" : credits <= 89 ? "junior" : "senior";
// ================================================

//1
/*  let userAge = parseInt(prompt("ingrese su edad")),
driveDiferenceAge = 18 - userAge;



if (userAge >= 18) {
    console.log(`Tienes la edad suficiente para conducir`);

} else if (userAge < 18) {
    console.log(`Tienes la edad suficiente para conducir`);
    console.log(`Aún te faltan ${driveDiferenceAge} años para conducir`);

} else {
    console.log(`Eso no era un número`);

} 
 */
//2 
 let myAge = 26,
    yourAge = parseInt(prompt('Introduce tú edad')),
    diferenceAge = myAge - Math.abs(yourAge);

if (myAge > yourAge) {
    console.log(`Eres ${diferenceAge} años menor que yo.`);

} else if (myAge < yourAge) {
    console.log(`Eres ${diferenceAge} años mayor que yo.`);

} else if (myAge = yourAge) {
    console.log(`Tienes ${diferenceAge} años, ¡igual que yo!`);
}
else {
    console.log(`Eso no es una edad.`)
}

/* //3
let a = 4,
    b = 3,
    comparation = true;


if (comparation) {
    console.log(`a es mayor que b`);

} else {
    console.log(`a es menor que b`);
}

comparation
    ? console.log(`a es mayor que b`) : console.log(`a es menor que b`);


//4

let promptNumber = prompt(`Ingrese un número.`),
    userNumber = promptNumber % 2 == 0;
if (userNumber) {
    console.log(`es un numero par`);

} else if (!userNumber) {
    console.log(`es un numero impar`);

} else {
    console.log(`Es otra cosa`);
} 

// Nivel 2====================================================
/*1
let alumnNote = parseInt(prompt('Nota numérica del alumno'));

if (100 > alumnNote && alumnNote > 80) {
    console.log('A');


}else if (88 > alumnNote > 81) {
    console.log('AB');
    
}else if (89 > alumnNote && alumnNote > 70) {
    console.log('B');

} else if (69 > alumnNote && alumnNote > 60) {
    console.log('C');

} else if (59 > alumnNote && alumnNote > 50) {
    console.log('D');

} else if (0 > alumnNote && alumnNote > 49) {
    console.log('E');

}
else {
    console.log("Eso no es un número ");

}

//2 
let otoño = 'Septiembre, octubre , Noviembre';
let invierno = 'Diciembre, Enero, Febrero';
let primavera = 'Marzo, Abril, Mayo';
let verano = 'Junio, Julio, Agosto';

let userMonth =toLowerCase(prompt('Pon el mes en el que estamos')) ;




//NIVEL 3======================================
/* lo hace con switch 
agrupa los meses con el msmo numero de días
al final del todo ya hace un console log para que me muestre el resultado.
leap year año bisitesto
buscar como poner año bisiesto en js*/