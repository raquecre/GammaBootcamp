import { countries } from "./countries_data.js";


//REDUCE ----------------------

//let value = arr.reduce(function(acumulator, item, index, array){

//},[inicio]);




// Functions

// declaramos una función sin parametros
// function functionName() {
//     //el código va aqui
// }

// Objects

// Scope
// - object global window
// a = "JS";
// b = 10;

// Funciones de orden superior
//Funciones callback
// Ejemplo 1

// const callback = (f) => {
//     return f ** 2
//   }

//   // función que toma otra función como callback
//   function cube(callback, n) {
//     return callback(n) * n
//   }

//   console.log(cube(callback, 3))

// Ejemplo 2

// const higherOrder = (n) => {
//     const doSomething = (m) => {
//         const doWhatEver = (t) => {
//             return 2 * n + 3 * m + t;
//         };
//         return doWhatEver;
//     };
//     return doSomething;
//   };
//   console.log(higherOrder(2)(3)(10));

// Controladores de tiempo
// Set interval

// function callback() {
//     // el código va aquí
//   }
//   setInterval(callback, duration);

// function sayHello() {
//     console.log("Hello");
//   }
//   setInterval(sayHello, 1000);

// SetTimeOut

// function sayHello() {
//     console.log("Hello");
//   }
//   setTimeout(sayHello, 3000);

// Funciones callback
// Ejemplo 3

// ForEach
// arr.forEach(function (element, index, arr) {
//     console.log(index, element, arr);
//   });

// const numbers = [1, 2, 3, 4, 5];
// const sumArray = (arr) => {
//     let sum = 0;
//     const callback = function (element,index,arr) {
//     // console.log(element, index, arr);
//     sum += index;
//     };
//     arr.forEach(callback);
//     return sum;
// };
// console.log(sumArray(numbers));

// Ejemplos
// let sum = 0;
// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach((element) => console.log(element));
// console.log(sum);

// let sum = 0;
// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach((num) => (sum += num));

// console.log(sum);

// const countries = ["finland", "denmark", "sweden", "norway", "iceland"];
// countries.forEach((element) => console.log(element[0].toUpperCase()+element.slice(1)));

// Map

// const modifiedArray = arr.map(function (element, index, arr) {
//     return element;
//   });

// const numbers = [1, 2, 3, 4, 5];
// const numbersSquare = numbers.map((num) => num * num);

// console.log(numbersSquare);

// Filter

// const countries = ["finland", "denmark", "sweden", "norway", "iceland"];
// const countriesContainingLand = countries.filter((country) =>
//     country.includes("land")
// );

// Funciones de orden superior
//Funciones callback
// Ejemplo 1

// const callback = (f) => {
//     return f ** 2
//   }

//   // función que toma otra función como callback
//   function cube(callback, n) {
//     return callback(n) * n
//   }

//   console.log(cube(callback, 3))

// Ejemplo 2

// const higherOrder = (n) => {
//     const doSomething = (m) => {
//         const doWhatEver = (t) => {
//             return 2 * n + 3 * m + t;
//         };
//         return doWhatEver;
//     };
//     return doSomething;
//   };
//   console.log(higherOrder(2)(3)(10));

// Controladores de tiempo
// Set interval

// function callback() {
//     // el código va aquí
//   }
//   setInterval(callback, duration);

// function sayHello() {
//     console.log("Hello");
//   }
//   setInterval(sayHello, 1000);

// SetTimeOut

// function sayHello() {
//     console.log("Hello");
//   }
//   setTimeout(sayHello, 3000);

// Funciones callback
// Ejemplo 3

// ForEach
// arr.forEach(function (element, index, arr) {
//     console.log(index, element, arr);
//   });

// const numbers = [1, 2, 3, 4, 5];
// const sumArray = (arr) => {
//     let sum = 0;
//     const callback = function (element,index,arr) {
//     // console.log(element, index, arr);
//     sum += index;
//     };
//     arr.forEach(callback);
//     return sum;
// };
// console.log(sumArray(numbers));

// Ejemplos
// let sum = 0;
// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach((element) => console.log(element));
// console.log(sum);

// let sum = 0;
// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach((num) => (sum += num));

// console.log(sum);

// const countries = ["finland", "denmark", "sweden", "norway", "iceland"];
// countries.forEach((element) => console.log(element[0].toUpperCase()+element.slice(1)));

// Map

// const modifiedArray = arr.map(function (element, index, arr) {
//     return element;
//   });

// const numbers = [1, 2, 3, 4, 5];
// const numbersSquare = numbers.map((num) => num * num);

// console.log(numbersSquare);

// Filter

// const countries = ["finland", "denmark", "sweden", "norway", "iceland"];
// const countriesContainingLand = countries.filter((country) =>
//     country.includes("land")
// );
// console.log(countriesContainingLand);

// Reduce

// arr.reduce((acc, cur) => {
//     // algunas operaciones van aquí antes de devolver un valor
//     return;
//   }, initialValue);

// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((acc, cur) => acc + cur);

// console.log(sum);

// Every

// const names = [5, "Mathias", "Elias", "Brook"];
// const areAllStr = names.every((name) => typeof name === "string");
// console.log(areAllStr);

// const numbers = [5, 2, 4, 28];
// const all = numbers.every((num) => typeof num == "number"); 

// console.log(all?"Kent":"Patata");

// Find

// Ejemplo 1
// const ages = [24, 22, 25, 32, 35, 18];
// const age = ages.find((age) => age < 20);

// console.log(age);

// Ejemplo 2

// const scores = [
//     { name: "Sergio", score: 95 },
//     { name: "Raquel", score: 80 },
//     { name: "Elias", score: 50 },
//     { name: "Kent", score: 85 },
//     { name: "Pedro", score: 100 },
//     ];

//     const score = scores.find((user) => user.score > 80);
//     console.log(score);

// findIndex

// const ages = [24, 22, 25, 32, 35, 18];
// const age = ages.findIndex((age) => age < 20);
// console.log(age);

// some

// const bools = [true, true, false, true];
// const numbers = [1, 2, 12, 0];

// const areSomeString = numbers.some((b) => typeof b === "string");
// const areSomeTrue = bools.some((b) => b === true);

// console.log(areSomeTrue);
// console.log(!areSomeString);

// sort

//const products = ["Milk", "Coffee", "Sugar", "Honey", "Apple", "Carrot"];
//console.log(products.sort());

//const numbers = [9.81, 3.84, 100, 37];
//console.log(numbers.sort());
//numbers.sort(function (a, b) {
//   return b - a;
// });

// console.log(numbers);

// const users = [
//   { name: "Kent", age: 150 },
//   { name: "Raquel", age: 50 },
//   { name: "Sergio", age: 100 },
//   { name: "Elias", age: 22 },
// ];
// users.sort((a, b) => {
//  if (a.age < b.age) return -1;
//   if (a.age > b.age) return 1;
//   return 0;
// });
// console.log(users);


//let sum = 0;
//for (let index = 0; index < products.length; index++) {
//    const element = products[index];
//    if(element.price > 3) {
//       var price = element.price;
//       sum += price;
//    } 
// }
//products
//.filter((product) => product.price > 3)
// .map((product) => product.price)
// .reduce((a, b) => a + b)

//1
/*
forEach_________
funcion orden superior con valores preestablecidos

map_____________

filter__________

reduce__________
*/


const countries1 = ["Finland", "Sweden", "Denmark", "Norway", "Iceland"];
const names = ["Joseph", "Mathias", "Elias", "Brook"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
    { product: "banana", price: 3 },
    { product: "mango", price: 6 },
    { product: "potato", price: " " },
    { product: "avocado", price: 8 },
    { product: "coffee", price: 10 },
    { product: "tea", price: "" },
];


//2

//3

countries1.forEach(country => console.log(country));

//4
names.forEach(name => console.log(name));

//5
numbers.forEach(number => console.log(number));

//6
const modifiedCountries1 = countries1.map(function (element) {
    return element;
});
modifiedCountries1.forEach((element) => console.log(element.toUpperCase()))

console.log(modifiedCountries1);

//7

modifiedCountries1.map((country) => console.log(modifiedCountries1.length));

//8
const numbersSquare = numbers.map(function (element) {
    return element;
});

numbersSquare.forEach((number) => console.log(number ** 2));

//9
const modifiedNames = names.map(function (element) {
    return element;
});
modifiedNames.forEach((name) => console.log(name[0].toUpperCase));
//10

// products.map( product => p.price)


//11
const countriesContainingLand = countries1.filter((country) =>
    country.includes("land"));

console.log(countriesContainingLand);

//12
let countries6characteres = countries1.filter((country) =>
    country.length == 6);

console.log(countries6characteres);

//13
let countriesMinCharacteres = countries1.filter((country) =>
    country.length >= 6);

console.log(countriesMinCharacteres);

// 14
// let countriesLetterE = countries1.filter((country) =>
//     country("E"));

// console.log(countriesLetterE);

//15
let priceNum = products.filter((element) =>
    typeof element.price == "number");

console.log(priceNum);
//16
let stringList = ["1", "2", "3", "4"];
function getStringList(number) {
    let list = stringList.map( (number) =>
    console.log(number));

}
console.log(getStringList);


//17 

let totSum = 0;
let numberSum = numbers.reduce((accumulator, current) =>
    accumulator + current);

console.log(numberSum);



//18
/* let result = "";
let concatCountries1 = countries1.reduce ((result, country) => {
country.forEach((country) => {
    result.push(country);
})
return result;
}

console.log(concatCountries1);

 */


/*
let result = "";
let concatCountries1 = countries1.reduce((result, country) => {}
    result + country);

console.log(concatCountries1);
*/

//19

//20

let namesSome = names.some((name) =>
    name.length > 7);

console.log(namesSome);

//21
let countriesLand = countries1.every((country) =>
    country == "Land");

console.log(countriesLand);

//22
//Buscar un string o buscaar en el indice

//23
let country6Letters = countries1.find((country) =>
    country.length == 6);

console.log(country6Letters);

//24

let country6Position = countries1.indexOf((country) =>
    country.length === 6);

console.log(country6Position);

//25
let indexOfNorway = countries1.indexOf