/*
// Arrays
    //array vacio
    let arr = [];
    console.log(arr);

    //array con valores
    let fruitsAndNumbers = ["banana", 5, "pear", "apple", 6, "lemon"];
    console.log(fruitsAndNumbers.length);

    //generar array con split
    let numg = "gamma";
    console.log(numg.split(""));

//acceder a los elementos del array
let fruits = ["banana", "pear", "apple", "lemon"];
console.log(fruits[0]);

let lastPosition = fruits.length-1; //3
console.log(fruits[lastPosition]);

//modificar elementos de un array
let numbers = [1,2,3,4,5];
numbers[0] = 10;
console.log(numbers);


const countries = [
    "Albania",
    "Bolivia",
    "Canada",
    "Denmark",
    "Ethiopia",
    "Finland",
    "Germany",
    "Hungary",
    "Ireland",
    "Japan",
    "Kenya",
  ];
countries[3] ="Spain";
console.log(countries);

//métodos para manipular los arrays

  //constructor de arrays
  const arrayz = Array(8);
  console.log(arrayz);

  //creando valores estáticos
  console.log(arrayz.fill("x"));
  
  const fillUp = Array(4).fill("Pedro");
  console.log(fillUp);

  //concatenación de arrays
  let numgg = [44,28,5,6,7];
  let enterprise = ["gamma", "tech"];

  let concatArrays = numgg.concat(enterprise);
  console.log(concatArrays);

  //obtener la longitud de un array

  let lengthConcat = concatArrays.length;
  console.log(lengthConcat);

  //obtener el index de un elemento de un array
  console.log(concatArrays.indexOf(6));

    //ejemplo de usos
    let index = fruits.indexOf("pear"); //0
    if (index === -1) {
        console.log("No lo encuentro");
    } else {
        console.log("Si está en el array");
    }i

    //obtener el último index de un elemento en un array
    let supernumbers = [1,2,3,1,5,4,1,4];
    console.log(`supernumbers= ${supernumbers}`);
    let showlastindex = supernumbers.lastIndexOf(1);
    console.log(showlastindex);

    //verificar si un elemento existe en un array
    console.log(supernumbers.includes(3));

    //commbar un array
    console.log(Array.isArray(supernumbers));

    //convertir un array a string
    let convertToStr = supernumbers.toString();
    console.log(convertToStr);

    //unir los elementos de un array
    console.log(supernumbers.join(""));

    // cortar/copiar elementos de un array

    //slice
    let copyArr = supernumbers.slice(3,supernumbers.length);
    console.log(copyArr);

    //splice(posición inicial, 
        // número de elementos a eliminar y 
        // cantidad de elementos que se agregarán)
            supernumbers.splice(2,1);
            console.log(supernumbers);

            const fruitsss = ["Banana", "Orange", "Apple", "Mango"];
            // At position 2, add 2 elements: 
            fruitsss.splice(2, 2, "Lemon", "Kiwi");
            console.log(fruitsss);

            let months = ["January", "February", "Monday", "Tuesday"];
            let days = months.splice(2);
            console.log(days); // ["Monday", "Tuesday"]
            console.log(months);

    //añadir elementos a un array
    const arry = ["item1", "item2", "item3"];
    arry.push("new item"); //añade el elemento al final
    console.log(arry);

    //eliminar último elemento
    arry.pop();
    console.log(arry);

    //eliminar un elemento al comienzo
    arry.shift();
    console.log(arry);

    //añadir un elmento al inicio
    arry.unshift("item0");
    console.log(arry);

    //invertir orden del array
    arry.reverse();
    console.log(arry);

    //ordenar elementos en un array
    arry.sort();
    console.log(arry);


    const webTechs = [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Redux",
        "Node",
        "MongoDB",
      ];
      console.log(webTechs);

      webTechs.sort().reverse();
      console.log(webTechs);

//Array de arrays

let arrayOfArray = [
    [1,2,3],
    [4,5,6]
];
*/

const countries = [
    "Albania",
    "Bolivia",
    "Canada",
    "Denmark",
    "Ethiopia",
    "Finland",
    "Germany",
    "Hungary",
    "Ireland",
    "Japan",
    "Kenya",
];

const webTechs = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Redux",
    "Node",
    "MongoDB",
];

//1
let emptyArray = [];

//2
let fruits = [
    'lechuga',
    'tomate',
    'sandía',
    'melón',
    'mango',
    'manzana',
    'aguacate',
];
//3
let fruitsLength = fruits.length;
console.log(fruitsLength);

//4
//4.1
let firstelement = fruits[0];
console.log(firstelement);
//4.2
let meanPosition = Math.ceil(fruitsLength / 2);
console.log(fruits[meanPosition]);

//4.3
let lastFruitPosition = fruitsLength - 1;

console.log(fruits[lastFruitPosition]);

//5
let mixedDataTypes = [
    54,
    'sandía',
    'melón',
    33,
    43,
    'aguacate',
];
console.log(mixedDataTypes.length);

//6
let itCompanies = [
    'Facebook',
    'Google',
    'Microsoft',
    'Apple',
    'IBM',
    'Oracle',
    'Amazon',
];

//7
console.log(itCompanies);

//8
let numberCompanies = itCompanies.length;
console.log(numberCompanies);

//9
let firstCompany = itCompanies[0];
let middleCompany = itCompanies[Math.ceil(numberCompanies / 2)];
let lastCompany = itCompanies[numberCompanies - 1];

console.log(firstCompany);
console.log(middleCompany);
console.log(lastCompany);

//10
console.log(itCompanies);
//OJO --->
console.log(itCompanies.join(", "));
//11
console.log(itCompanies[0].toUpperCase());
console.log(itCompanies[1].toUpperCase());
console.log(itCompanies[2].toUpperCase());
console.log(itCompanies[3].toUpperCase());
console.log(itCompanies[4].toUpperCase());
//12
console.log(`${itCompanies[0]},${itCompanies[1]},${itCompanies[2]},${itCompanies[3]},${itCompanies[4]},${itCompanies[5]} y ${itCompanies[6]}, son grandes empresas de TI.`);
//Esta forma es más elegante -->
console.log(`${itCompanies.join(", ").slice(0, -1)} y ${itCompanies[itCompanies.length - 1]} son grandes empresas del TI`);

//13
let IncludesCompany = itCompanies.includes('Amazon');
if (IncludesCompany == false) {
    console.log(`No existe.`);
} else {
    console.log(`${IncludesCompany} sí está en la lista.`);
}

//14

let checkLetter = itCompanies.includes('o');
console.log(checkLetter);

//15
let itCompaniesSort = itCompanies.sort();
console.log(itCompaniesSort);

//16
let itCompaniesReverse = itCompanies.reverse();
console.log(itCompaniesReverse);

//17
let itCompanies3FirstCompanies = itCompanies.slice(0, 3);
console.log(itCompanies3FirstCompanies);

//18
let = itCompanies3LastCompanies = itCompanies.slice(4, 7);
console.log(itCompanies3LastCompanies);

//19
let itCompaniesMiddle = itCompanies.slice(itCompanies.slice(itCompanies.length / 2), itCompanies.slice(itCompanies.length / 2) + 1);
console.log(itCompaniesMiddle);

//20
let itCompaniesWithoutFirst = itCompanies.shift();

console.log(itCompanies);

//21
let itCompaniesWithoutMiddleCompanies = itCompanies.splice(3, 5);
console.log(itCompanies);


//22
let itCompaniesWithoutlatest = itCompanies.pop();
console.log(itCompaniesWithoutlatest);

//23

let itCompaniesEmpty = itCompanies.splice(0, itCompanies.length);
console.log(itCompanies);


//Level 2 ===============================================================

//1 OK

//2
let text =

    "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";

//2.1

//FALTA QUITAR COMAS Y PUNTOS=======================================================
/* let newText = text.split(/[,\s] +| [/.]\ ) */;
/* console.log(newText); */
/* let newTextLength = newText.length;
console.log(newTextLength) */;

//1 LISTA COMPRA
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

shoppingCart.unshift("Meat");
console.log(shoppingCart);

shoppingCart.push("Sugar");
console.log(shoppingCart);


let foundHoney = shoppingCart.includes("Honey");

let positionHoney = shoppingCart.indexOf("Honey");
shoppingCart.splice(positionHoney, 1);

console.log(shoppingCart);//aqui ya aparece eliminado


let shoppingCartWithoutHoney = shoppingCart.splice(0, 4);
console.log(shoppingCartWithoutHoney);

let teaModification = "Green Tea";
positionOfTea = shoppingCart.indexOf("Tea");
shoppingCart[positionOfTea] = teaModification;
console.log(shoppingCart);

//Level 3 =================================================

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

sortAges = ages.sort();

console.log(sortAges);

minAges = sortAges[0];

console.log(minAges); //min


maxAge = sortAges[9];
console.log(maxAge);//max

let numberOfAges = ages.length + 1;
console.log(numberOfAges); //nº de nº

let sumAges = 0;

for (let i = 0; i < ages.length; i++) {
    sumAges += ages[i];
}//suma total
console.log(sumAges);

let middleAges = sumAges / numberOfAges;
console.log(middleAges);//media


let medianItem = numberOfAges / 2;

let medianAge = ages[medianItem];
console.log(medianAge);//mediana



let ageCategory = maxAge - minAges;

console.log(ageCategory);//Rango de las edades 

