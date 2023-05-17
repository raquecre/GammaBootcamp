import { countries } from "./countries.js";
import { webTechs } from "./web_techs.js";
//1 Countries
console.log(countries);
console.log(webTechs);

let foundEthiopia = countries.includes("Ethiopia");

console.log(foundEthiopia);

if (foundEthiopia) {
    console.log(`Ethiopía`);
} else {
    countries.push("Ethiopía");
}

//2
let foundSass = webTechs.includes('Sass');

if (foundSass) {
    console.log(`Sass es un prepoceso de CSS`);

} else {
    webTechs.push('Sass');
    console.log(webTechs);
}


//3
const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];

const backEnd = ["Node", "Express", "MongoDB"];

let fullStack = frontEnd.concat(backEnd);
console.log(fullStack);


//cortar 10 primeros elementos

let first10element = countries.slice(0, 10);

console.log(first10element);

//

//cortar array países
let numberOfCountries = countries.length;
let middleCountry = numberOfCountries / 2;
let firstCountries = countries.slice(0, middleCountry);
let lastCountries = countries.slice(middleCountry, countries.length);

/* console.log(firstCountries);
console.log(lastCountries); */

let lengthFirstCountries = firstCountries.length;

let lengthLastCountries = lastCountries.length;

if (numberOfCountries % 2 == 0 ) {
console.log('da par');
} else {

}