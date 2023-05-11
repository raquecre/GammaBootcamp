//1
let firstNaame = 'Raquel',
    lastNume = 'Crespo',
    country = 'Spain',
    city = 'Madrid',
    age = 26,
    isMarried = false,
    year = 2023;

//2
let strgnumber = '10',
    number = 10,
    comparationStrgnumber = typeof strgnumber,
    comparationNumber = typeof number;

console.log(comparationNumber === comparationStrgnumber);

//3
let varParseInt = parseInt('9.8');
console.log(number === varParseInt);

//4
let true1 = 2 < 3,
    true2 = 3 < 4,
    true3 = 4 < 5;
console.log(true1, true2, true3);
let false1 = !(2 < 3),
    false2 = !(3 < 4),
    false3 = !(4 < 5);
console.log(false1, false2, false3);

//5

let var1 = 4 > 3;  //T
let var2 = 4 >= 3; //T
let var3 = 4 < 3; // F
let var4 = 4 <= 3; //F
let var5 = 4 == 4; //T
let var6 = 4 === 4; //T
let var7 = 4 != 4; //F
let var8 = 4 !== 4; //F
let var9 = 4 != '4'; //F
let var10 = 4 == '4'; //T
let var11 = 4 === '4';//F

console.log(var1, var2, var3, var4, var5, var6, var7, var8, var9, var10, var11);

//Encuentre la longitud de Python y jargon y haga una declaración de comparación falsa.
let strPython = 'Python',
    strJargon = 'Jargon';
console.log(strPython.length != strJargon.length);
//6
let Num1 = 4 > 3 && 10 < 12, //T
    Num2 = 4 > 3 && 10 > 12, //F
    Num3 = 4 > 3 || 10 < 12, //T
    Num4 = 4 > 3 || 10 > 12, //T
    Num5 = !(4 > 3), //F
    Num6 = !(4 < 3), //T
    Num7 = !(false), //T
    Num8 = !(4 > 3 && 10 < 12),//F
    Num9 = !(4 > 3 && 10 > 12),//T
    Num10 = !(4 === '4'),//T
    strdragon = 'dragon';

//No hay 'on' tanto en dragon como en python,//F 

console.log(Num1, Num2, Num3, Num4, Num5, Num6, Num7, Num8, Num9, Num10);

//Nivel 2 ====================================
//1

let base = prompt('Introduce la base del triangulo');
let height = prompt('Introduce la altura del triangulo');
let area = 0.5 * base * height;
console.log(area);

//2
let side1 = parseInt(prompt('Introduce el primer lado')),
    side2 = parseInt(prompt('Introduce el segundo lado')),
    side3 = parseInt(prompt('Introduce el tercer lado')),
    perimeter = side1 + side2 + side3;
console.log(perimeter);

//3
let h = parseInt(prompt('Introduce el largo')),
    width = parseInt(prompt('Introduce el ancho')),
    perimeterArea = 2 * (h + width);
console.log(perimeterArea);

//4
let radio = parseInt(prompt('Introduce el radio')),
    circleArea = Math.PI * radio * radio;
circlePerimeter = 2 * Math.PI * radio;
console.log(circleArea);


//5////   y = 2*x - 2 // y = mx + b
class Line {
    slope;
    ordinate;

    constructor(slope, ordinate) {
        this.ordinate = ordinate;
        this.slope = slope;
    }

    calculateY(xValue) {
        return this.slope * xValue + this.ordinate;
    }

    calculateX(yValue) {
        return (yValue - this.ordinate) / this.slope;
    }

    calculateSlope() {
        //return this.slope;
        let y1 = this.calculateY(0);
        let y2 = this.calculateY(2);
        let x1 = 0;
        let x2 = 2;
        return (y2 - y1) / (x2 - x1);

    }
}


let someLine = new Line(2, 3);
console.log("y intersection: " + someLine.calculateX(0));
console.log("x intersection: " + someLine.calculateY(0));
console.log("slope: " + someLine.calculateSlope());

let otherLine = new Line(5, 3);

//6
let varY1 = 2;
let varY2 = 10;
let varX1 = 6;
let varX2 = 2;

let slope6 = (varY1 + varX1) / (varY2 + varX1);
console.log(slope6);

//7


//8

//9
let hourWork = parseInt(prompt('Introduce las horas trabajadas')),
    hourPrice = parseInt(prompt('Introduce la tarifa por hora')),
    salary = hourPrice * hourWork;
console.log(salary);
//10
let Name = (prompt('Pon tu nombre')),
    numName = Name.length;

numName >= 8
    ? console.log('Nombre muy largo')
    : console.log('Nombre muy corto');

//11
let firstName = "Raquel";
let lastName = "Crespo";

if (firstName.length == lastName.length) {
    console.log(`Tu nombre ${firstName}, es igual de largo que tu apellido, ${Crespo}.`);

} else if (firstName.length > lastName.length) {
    console.log(`Tu nombre ${firstName}, es más largo que tu apellido, ${Crespo}.`);

} else if (firstName.length < lastName.length) {
    console.log(`Tu nombre ${firstName}, es más corto que tu apellido, ${Crespo}.`);

} else {
    console.log(`Ups, algo salió mal, lo sentimos ${firstName + lastName}`);
}

//12
let myAge = 250;
let yourAge = 25;

console.log(`Soy ${myAge - yourAge} mayor que tú.`) //Soy 225 años mayor que tú.

//13
let yearDrive = parseInt(prompt('introduzca el año de nacimiento.'));
let ageDrive = yearDrive - 2023
ageDrive > 18;
ageDrive
    ? console.log(`Tienes ${ageDrive}, tienes la edad suficiente para conducir.`)
    : console.log(`Tienes ${ageDrive}, no tienes la edad suficiente para conducir.`);

//15
const now = new Date();
let thisYear = now.getFullYear(),
    thisMonth = now.getMonth() + 1,
    thisHour = now.getHours(),
    thisMinute = now.getMinutes(),
    thisDay = now.getDay();

//15.1
console.log(`${thisYear}-0${thisMonth}-${thisDay} ${thisHour}:${thisMinute}`);

//15.2
console.log(`${thisDay}-0${thisMonth}-${thisYear} ${thisHour}:${thisMinute}`);

//15.3
console.log(`${thisDay}/0${thisMonth}/${thisYear} ${thisHour}:${thisMinute}`);

// Nivel 3____________________________________________________________________________

//1 

