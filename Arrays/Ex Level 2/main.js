import { countries } from "./countries";
import { webTechs } from "./web_techs";
//1 Countries
let module = require('./countries');

let foundEthiopia = countries.find("Ethiopia");

console.log(foundEthiopia);

//2
let foundSass = webTechs.find('Sass');

if (foundSass == true) {
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
