/* // Functions

// declaramos una función sin parametros
// function functionName() {
//     //el código va aqui
// }
// functionName(); // llamada a una función

    // Funciones sin parámetros
    function square() {
        let num = 3;
        let sq = num ** 2;
        console.log(sq);
    }

    square();

    function suma(){
        let num1 = 3;
        let num2 = 4;
        let sumatoria = num1 + num2;
        console.log(sumatoria);
    }

    suma();

    function fullName() {
        let firstName = "Jesus";
        let surname = "Montoro";
        let space = " ";
        let printFullName = firstName + space + surname;
        console.log(printFullName);
    }

    fullName();

    // Funciones sin parámetros y con return
    function fullName() {
            let firstName = "Jesus";
            let surname = "Montoro";
            let space = " ";
            let printFullName = firstName + space + surname;
            return printFullName;
        }
    console.log(fullName()); 

    // Funciones con un parámetro (number, string, boolean, object, function)
    // function functionName(parameter) {
    //     //el código va aqui
    // }
    // functionName(parameter); // llamada a una función

    function square(number){
        let area = number ** 2;
        return area;
    }
    
    console.log(square(2));

    // Funciones con dos parámetros (number, string, boolean, object, function)
    // function functionName(parameter1, parameter2) {
    //     //el código va aqui
    // }
    // functionName(parameter1, parameter2); // llamada a una función

    function addition(number1, number2){
        let sum = number1 + number2;
        return sum;
    }

    addition(2,3);

    function returnFullName(firstName, lastName) {
        return `${firstName} ${lastName}`;
    }

    returnFullName('Pedro','Rodriguez');

    // Función con muchos parámetros
    // function functionName(parameter1, parameter2, parameter3,...) {
    //     //el código va aqui
    // }
    // functionName(parameter1, parameter2, parameter3,...); // llamada a una función
    
    //Función con un número ilimitado de parámetros (gestionamos el número de parámetros en la lógica)
    // function sumAllNums(parameters) {
    //     let sum = 0;

    //     for (let i = 0; i < parameters.length; i++) {
    //         sum += parameters[i];
            
    //     }
    //     return sum;
    // }

    // console.log(sumAllNums([1,2,3,4])); // 10
    
    // //Función anónima
    // const anonymousFun = function(){
    //     //código
    // }

    // const square = function(number){
    //     return number ** 2;
    // }
    // square(5);

    //Función autoinvocable
    // (function (number){
    //     return number ** 2;
    // })(2);

    //Función flecha
    // const square = (number) => {
    //     return number ** 2;
    // }
    
    // square(2);

    // function bob (a){
    //   return a + 100;
    // }
    // const bob = (a) => {
    //     return a + 100;

    // }
    // let bob = (a) => a + 100;

    // Funciones con parámetros por defecto
    // function greetings(name = "Peter"){
    //     let text = `${name} es bienvenido`;
    //     return text;
    // }
    // console.log(greetings());  */

//LEVEL 1 ___________________________________________

//1 
function fullName() {
    return `Raquel Crespo`

}
console.log(fullName());

//2
function fullName2() {
    let firstName = "Raquel";
    let lastName = " Crespo";
    return firstName + lastName;

}
console.log(fullName2());

//3
function addNumbers(param1, param2) {
    let resultSum = param1 + param2;
    return resultSum;
}
//4
function areaOfRectangle(length, width) {
    let area = length * width;
    return area;

}
//5
function perimeter(length, width) {
    let perimeter = 2 * (length + width);
    return perimeter;
}

//6
function volumeOfRectPrism(length, width, height) {
    let volume = length * width * height;
    return volume;
}
//7
function areaOfCircle(radio) {
    let area = Math.PI * radio ** 2;
    return area;

}
//8
function circumOfCircle(radio) {
    let circumference = 2 * Math.PI * radio;
    return circumference;

}

//9
function density(mass, volume) {
    let density = mass / volume;
    return density;

}
//10
function speed(meters, seconds) {
    let speed = meters / seconds;
    return speed;

}
//11
function weight(mass) {
    let weight = mass * 9.807;
    return weight;

}
//12
function convertCelsiusToFahrenheit(celsius) {
    let fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit;

}
//13
function IMC(kilogrames, meters) {
    let IMC = (kilogrames / (meters * meters));
    
    if (IMC <= 18.5) {
       return 'Peso Bajo';

    } else if (IMC > 18.5 && IMC < 24.5) {
        return 'Peso Normal';

    } else if (IMC > 25 && IMC < 29.9) {
         return'Sobrepeso';

    }else if (IMC >= 30) {
         return 'Obeso';
    };
   
}
console.log(IMC(200,1.50));




//14
function checkSeason(month) {
    let winter = ['diciembre', 'enero', 'febrero'];
    let summer = ['junio' ,'julio', 'agosto'];
    let spring = ['marzo', 'abril', 'mayo'];
    let autumm = ['septiembre', 'octubre', 'noviembre'];
    if (winter.includes(month)) {

        return 'invierno';
    } else if (summer.includes(month)) {

        return 'verano';

    }else if (spring.includes(month)) {

        return 'primavera';
        
    }else if (autumm.includes(month)) {
        return 'verano';
    }

}
console.log (checkSeason('enero'));
 
function checkSeason2(season) {
    
 if (season === 'diciembre' ||season === 'enero' ||season === 'febrero' ) {
     return`Estamos en Invierno`;

 } else if (season ===  'marzo' ||season === 'abril' ||season === 'mayo' ) {
     return console.log(`Estamos en primavera`);

 } else if (season === 'junio'||season === 'julio' ||season === 'agosto') {
     return console.log(`Estamos en verano`);

 } else if (season === 'octubre'||season === 'noviembre' ||season === 'septiembre'){
     return console.log(`Estamos en otoño`);

 }

}
console.log(checkSeason2('octubre')); 


//15

function findMax(num1, num2, num3) {
    if (num1 > num2 && num1 > num3){
        return num1;

    }else if(num2 > num1 && num2 > num3 ){
        return num2;

    }else if (num3 > num1 && num3 > num2) {
        return num3
        
    }
} console.log(findMax(1,4,3));