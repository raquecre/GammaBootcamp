import { countries_data } from "./countries_data.js";

/*
// Sets y Maps

    // Set
    const gamma = new Set();
    console.log(gamma); // Set(0){}

    const countries = [
        "Finland",
        "Sweden",
        "Denmark",
        "Norway",
        "Finland",
        "IceLand",
        "Sweden",
        ];
const setOfCountries = new Set(countries);
console.log(setOfCountries);

        //iterar
    for (const country of setOfCountries) {
        console.log(country);
    }

    //añadir elementos
    const Hamilton = new Set();
    console.log(Hamilton);

    Hamilton.add("HTML5");
    Hamilton.add("CSS3");
    console.log(Hamilton);

    let technologies = ["Javascript", "React"];
    for (const tech of technologies) {
        Hamilton.add(tech);

    }
    console.log(Hamilton);

    //comprobar existencia en un Set
    console.log(Hamilton.has("Apple"));

    // tamaño de un Set 
    console.log(Hamilton.size);
    //limpiar un Set
    Hamilton.clear();
    console.log(Hamilton);
//======================================== ejemplo de intersección
let a = [1, 2, 3, 4, 5];
let b = [3, 4, 5, 6];

let A = new Set(a);
let B = new Set(b);

let c = a.filter((n) => !B.has(n));
let C = new Set(c);
console.log(c); 

    // Map
    let mapa = new Map();
    console.log(mapa);

    const people = [
        ["Sergio","Cocacola"],
        ["Raquel","Fanta"],
        ["Kent", "Mate Sirio"],
        ["Elias", "redbull"],
    ];

    let peopleMap =  new Map(people);
    console.log(peopleMap.size);

    peopleMap.set("Antonio", "cafe");
    console.log(peopleMap);

    // obtención de un valor de Map
    console.log(peopleMap.get("Elias"));

    // comprobar key en un Map
    let antonioExists = peopleMap.has("Antonio");
    console.log(antonioExists);

    // obtener todos los valores de map
    for (const [key,value] of peopleMap) {
        console.log(key,value);
    }

    */


//_________________________LEVEL 1_____________________________

//1
let numberSet = new Set();

//2
for (let i = 0; i <= 10; i++) {
    numberSet.add(i)
};
console.log(numberSet);

//3
numberSet.delete(10);

console.log(numberSet);

//4
numberSet.clear();
console.log(numberSet);

//5
//Esta forma que viene es la más común para hacerlo, ya que suele darse con un array ya preestablecido.
const countries3 = ["Finland", "Sweden", "Norway", "blabla", "blublu"];
let setOfCountries3 = new Set(countries3);
setOfCountries3.forEach(country => console.log(country));


let arrayNumSt = new Set()
for (let i = 0; i <= 5; i++) {
    arrayNumSt.add(i.toString());

};
console.log(arrayNumSt);


//6
const countries = ["Finland", "Sweden", "Norway"];

let countriesSet = new Set(countries);



//________________________LEVEL 2__________________________________

//1
const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
let c = [...a, ...b];

let A = new Set(a);
let B = new Set(b);
let C = new Set(c);

console.log(C);

//2
let d = a.filter((num) => B.has(num));
let D = new Set(d);
console.log(D);

//3
let e = a.filter((num) => !B.has(num));
let E = new Set(e);
console.log(E);


//________________________LEVEL 3________________________________________

//1 ===========   Cuántos idiomas hay en el archivo de objetos de países.


//  Quiero que coja todos los paises que hay en cada valor, los almacene en 
//  una variable en el caso de que no estuviera ya lo almacene

//tenemos variable  que contiene un array lleno de objetos
//hay que entrar en cada objeto, que no tiene nombre, y seleccionar el value[2]
// hacer un length de ello
//repetir ese proceso dentro de todos los objetos.

 let languagesCount = (new Set(countries_data.reduce((arr,cur) => {
    arr = arr.concat(cur.languages);
    return arr;
},[]))).size;
console.log(languagesCount);  


//2Utiliza los datos de los países para encontrar las 10 lenguas más habladas:


let languagesCountList = (new Set(countries_data.reduce((arr,cur) => {
    arr = arr.concat(cur.languages);
    return arr;
},[])));
console.log(languagesCountList); 

//Quiero que el valor inicial sea el país y el segundo valor sea la cantidad de ellos que se repiten

/*
por lo tanto creo una caja nueva vacía donde solo esten los idiomas, incluidos los que están repetidos.

apunto una vez cada país que hay sin repetirlos, y,
 en el caso de que haya uno que ya tengo le sumo uno al ya existente.

*/