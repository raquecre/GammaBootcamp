//1
let challenge = 'Suffering JavaScript everyday';
//2
console.log(challenge);
//3
console.log(challenge.length);
//4
console.log(challenge.toUpperCase());
//5
console.log(challenge.toLowerCase());
//6
console.log(challenge.substring(10, 20));
//7
console.log(challenge.substring(0, 20));
//8
console.log(challenge.includes('Script'));
//9
console.log(challenge.split(""));
//10
console.log(challenge.split(" "));
//11
let apps = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(apps.split(","));
//12
console.log(challenge.replace("everyday", "sometimes"));
//13 es el caracter 'c'
console.log(challenge.charAt(15));
//14 el código es 83
console.log(challenge.charCodeAt('J'));
//15 la primera posicion es 11
console.log(challenge.indexOf("a"));
//16 la última es 27
console.log(challenge.lastIndexOf("a"));
//17 posicion 35
let why = 'No puedes terminar una oración con porque, porque, porque es una conjunción'
console.log(why.indexOf("porque"));
//18 posición 51
console.log(why.lastIndexOf("porque"));
//19 posición 35
console.log(why.search("porque"));
//20
console.log(challenge.trim(" "));
//21
console.log(challenge.startsWith('Suffering'));
//22
console.log(challenge.endsWith('JavaScript'));
//23
console.log(challenge.match('a'));
//24
let sufferingJavaScript = 'Suffering JavaScript';
let everyday = 'everyday';
console.log(challenge.concat(sufferingJavaScript + everyday));
//25
console.log(challenge.repeat(challenge));
