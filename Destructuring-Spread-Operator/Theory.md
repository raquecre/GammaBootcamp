![](/source/assets/Logo_Yellow.png)
# Destructuring & Spread Operator

- [Desestructuración y Spread](#desestructuración-y-spread)
    - [Desestructuración de Arrays](#desestructuración-de-arrays)
    - [Desestructuración durante la iteración](#desestructuración-durante-la-iteración)
    - [Desestructuración de objetos](#desestructuración-de-objetos)
    - [Renombrar durante la estructuración](#renombrar-durante-la-estructuración)
    - [Parámetro de objeto sin desestructuración](#parámetro-de-objeto-sin-desestructuración)
    - [Parámetro de objeto con desestructuración](#parámetro-de-objeto-con-desestructuración)
    - [Desestructuración del objeto durante la iteración](#desestructuración-del-objeto-durante-la-iteración)
    - [Operador Spread o Rest](#operador-spread-o-rest)
    - [Operador Spread para obtener el resto de elementos del array](#operador-spread-para-obtener-el-resto-de-elementos-del-array)
    - [Spread operator to copy array](#spread-operator-to-copy-array)
    - [Spread operator to copy object](#spread-operator-to-copy-object)
      - [Operador Spread con función flecha](#operador-spread-con-función-flecha)
 + [💻 Ejercicios](./exercises/README.md)


## Desestructuración y Spread

La desestructuración es una forma de desempaquetar arrays y objetos y asignarlos a una variable distinta.

### Desestructuración de Arrays

```js
const numbers = [1, 2, 3];
let [numOne, numTwo, numThree] = numbers;

console.log(numOne, numTwo, numThree);
```

```sh
  1 2 3
```

```js
const names = ["Joseph", "Brook", "David", "John"];
let [firstPerson, secondPerson, thirdPerson, fourthPerson] = names;

console.log(firstPerson, secondPerson, thirdPerson, fourthPerson);
```

```sh
Joseph Brook David John
```

```js
const scientificConstants = [2.72, 3.14, 9.81, 37, 100];
let [e, pi, gravity, bodyTemp, boilingTemp] = scientificConstants;

console.log(e, pi, gravity, bodyTemp, boilingTemp);
```

```sh
2.72 3.14 9.81 37 100
```

```js
const fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];
const [frontEnd, backEnd] = fullStack;

console.log(frontEnd);
console.log(backEnd);
```

```sh
["HTML", "CSS", "JS", "React"]
["Node", "Express", "MongoDB"]
```

Si queremos omitir uno de los valores del array utilizamos una coma adicional. La coma ayuda a omitir el valor en ese índice específico.

```js
const numbers = [1, 2, 3];
let [numOne, , numThree] = numbers; //2 es omitido

console.log(numOne, numThree);
```

```sh
1 3
```

```js
const names = ["Joseph", "Brook", "David", "John"];
let [, secondPerson, , fourthPerson] = names; // primera y tercera persona es omitido

console.log(secondPerson, fourthPerson);
```

```sh
Brook John
```

Podemos utilizar el valor por defecto en caso de que el valor del array para ese índice sea undefined:

```js
const names = [undefined, "Brook", "David"];
let [
  firstPerson = "Joseph",
  secondPerson,
  thirdPerson,
  fourthPerson = "John",
] = names;

console.log(firstPerson, secondPerson, thirdPerson, fourthPerson);
```

```sh
Joseph Brook David John
```

No podemos asignar una variable a todos los elementos del array. Podemos desestructurar algunos de los primeros y podemos obtener los restantes como array utilizando el operador spread(...).

```js
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let [num1, num2, num3, ...rest] = nums;

console.log(num1, num2, num3);
console.log(rest);
```

```sh
1 2 3
[4, 5, 6, 7, 8, 9, 10]
```
**[↩️](#destructuring--spread-operator)**

### Desestructuración durante la iteración

```js
const countries = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];

for (const [country, city] of countries) {
  console.log(country, city);
}
```

```sh
Finland Helsinki
Sweden Stockholm
Norway Oslo
```

```js
const fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];

for (const [first, second, third] of fullStack) {
  console.log(first, second, third);
}
```

```sh
HTML CSS JS
Node Express MongoDB
```
**[↩️](#destructuring--spread-operator)**


### Desestructuración de objetos

Cuando desestructuremos el nombre de la variable que usamos para desestructurar debe ser exactamente el mismo que la clave o propiedad del objeto. Vea el ejemplo siguiente.

```js
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
};
let { width, height, area, perimeter } = rectangle;

console.log(width, height, area, perimeter);
```

```sh
20 10 200 undefined
```
**[↩️](#destructuring--spread-operator)**

### Renombrar durante la estructuración

```js
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
};
let { width: w, height: h, area: a, perimeter: p } = rectangle;

console.log(w, h, a, p);
```

```sh
20 10 200 undefined
```

Si la clave no se encuentra en el objeto, la variable se asignará a undefined. A veces la clave puede no estar en el objeto, en ese caso podemos dar un valor por defecto durante la declaración. Vea el ejemplo.

```js
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
};
let { width, height, area, perimeter = 60 } = rectangle;

console.log(width, height, area, perimeter); //20 10 200 60
//Modifiquemos el objeto: anchura a 30 y perímetro a 80
```

```js
const rectangle = {
  width: 30,
  height: 10,
  area: 200,
  perimeter: 80,
};
let { width, height, area, perimeter = 60 } = rectangle;
console.log(width, height, area, perimeter); //30 10 200 80
```

Desestructuración de keys como parámetros de una función. Creemos una función que toma un objeto rectángulo y devuelve el perímetro de un rectángulo.  

**[↩️](#destructuring--spread-operator)**

### Parámetro de objeto sin desestructuración

```js
// Sin desestructuración
const rect = {
  width: 20,
  height: 10,
};
const calculatePerimeter = (rectangle) => {
  return 2 * (rectangle.width + rectangle.height);
};

console.log(calculatePerimeter(rect)); // 60
//with destructuring
```

```js
//Otro ejemplo
const person = {
  firstName: "Joseph",
  lastName: "Dredd",
  age: 38,
  country: "Mega-City",
  job: "Judge",
  skills: [
    "behaviour",
    "manners",
    "respect",
    "loyalty",
    "civility",
    "kindness",
    "education",
    "JavaScript"
  ],
  languages: ["English", "Spanish", "Gammish"],
};
// Creemos una función que proporcione información sobre el objeto persona sin desestructurar

const getPersonInfo = (obj) => {
  const skills = obj.skills;
  const formattedSkills = skills.slice(0, -1).join(", ");
  const languages = obj.languages;
  const formattedLanguages = languages.slice(0, -1).join(", ");

  personInfo = `${obj.firstName} ${obj.lastName} lives in ${
    obj.country
  }. He is ${obj.age} years old. He is an ${
    obj.job
  }. He teaches ${formattedSkills} and ${
    skills[skills.length - 1]
  }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`;

  return personInfo;
};

console.log(getPersonInfo(person));
```
  
**[↩️](#destructuring--spread-operator)**

### Parámetro de objeto con desestructuración

```js
const calculatePerimeter = ({ width, height }) => {
  return 2 * (width + height);
};

console.log(calculatePerimeter(rect)); // 60
```

```js
// Creemos una función que proporcione información sobre el objeto persona con desestructuración
const getPersonInfo = ({
  firstName,
  lastName,
  age,
  country,
  job,
  skills,
  languages,
}) => {
  const formattedSkills = skills.slice(0, -1).join(", ");
  const formattedLanguages = languages.slice(0, -1).join(", ");

  personInfo = `${firstName} ${lastName} lives in ${country}. He is ${age} years old. He is an ${job}. He teaches ${formattedSkills} and ${
    skills[skills.length - 1]
  }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`;

  return personInfo;
};
console.log(getPersonInfo(person));
/*
Joseph Dredd lives in Mega.City. He is 38 years old. He is an Judge. He teaches behaviour, manners, respect, loyalty, civility, kindness, education and JavaScript. He speaks English, Spanish and a little bit of Gammish.
*/
```
**[↩️](#destructuring--spread-operator)**

### Desestructuración del objeto durante la iteración

```js
const todoList = [
  {
    task: "Dispense justice",
    time: "4/1/2020 8:30",
    completed: true,
  },
  {
    task: "Saying: I am the law",
    time: "4/1/2020 10:00",
    completed: false,
  },
  {
    task: "Assess the law",
    time: "4/1/2020 1:00",
    completed: false,
  },
];

for (const { task, time, completed } of todoList) {
  console.log(task, time, completed);
}
```

```sh
Dispense justice 4/1/2020 8:30 true
Saying: I am the law 4/1/2020 10:00 false
Assess the law 4/1/2020 1:00 false
```
**[↩️](#destructuring--spread-operator)**

### Operador Spread o Rest

Cuando desestructuramos un array utilizamos el operador spread(...) para obtener el rest de elementos como array. Además utilizamos el operador spread para repartir los elementos del array en otro array.

### Operador Spread para obtener el resto de elementos del array

```js
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let [num1, num2, num3, ...rest] = nums
​
console.log(num1, num2, num3)
console.log(rest)
```

```sh
1 2 3
[4, 5, 6, 7, 8, 9, 10]
```

```js
const countries = [
  "Germany",
  "France",
  "Belgium",
  "Finland",
  "Sweden",
  "Norway",
  "Denmark",
  "Iceland",
];

let [gem, fra, , ...nordicCountries] = countries;

console.log(gem);
console.log(fra);
console.log(nordicCountries);
```

```sh
Germany
France
["Finland", "Sweden", "Norway", "Denmark", "Iceland"]
```
**[↩️](#destructuring--spread-operator)**

### Spread operator to copy array

```js
const evens = [0, 2, 4, 6, 8, 10];
const evenNumbers = [...evens];

const odds = [1, 3, 5, 7, 9];
const oddNumbers = [...odds];

const wholeNumbers = [...evens, ...odds];

console.log(evenNumbers);
console.log(oddNumbers);
console.log(wholeNumbers);
```

```sh
[0, 2, 4, 6, 8, 10]
[1, 3, 5, 7, 9]
[0, 2, 4, 6, 8, 10, 1, 3, 5, 7, 9]
```

```js
const frontEnd = ["HTML", "CSS", "JS", "React"];
const backEnd = ["Node", "Express", "MongoDB"];
const fullStack = [...frontEnd, ...backEnd];

console.log(fullStack);
```

```sh
["HTML", "CSS", "JS", "React", "Node", "Express", "MongoDB"]
```
**[↩️](#destructuring--spread-operator)**

### Spread operator to copy object

Podemos copiar un objeto utilizando un operador spread

```js
const user = {
  name: "Joseph",
  title: "Judge",
  country: "US",
  city: "Mega-City",
};

const copiedUser = { ...user };
console.log(copiedUser);
```

```sh
{name: "Joseph", title: "Judge", country: "US", city: "Mega-City"}
```

Modificar o cambiar el objeto mientras se copia

```js
const user = {
  name: "Joseph",
  title: "Judge",
  country: "US",
  city: "Mega-City",
};

const copiedUser = { ...user, title: "instructor" };
console.log(copiedUser);
```

```sh
{name: "Joseph", title: "instructor", country: "US", city: "Mega-City"}
```

#### Operador Spread con función flecha

Siempre que queramos escribir una función flecha que tome un número ilimitado de argumentos, utilizaremos un operador spread. Si utilizamos un operador spread como parámetro, el argumento pasado cuando invocamos una función cambiará a un array.

```js
const sumAllNums = (...args) => {
  console.log(args);
};

sumAllNums(1, 2, 3, 4, 5);
```

```sh
[1, 2, 3, 4, 5]

```

```js
const sumAllNums = (...args) => {
  let sum = 0;
  for (const num of args) {
    sum += num;
  }
  return sum;
};

console.log(sumAllNums(1, 2, 3, 4, 5));
```

```sh
15

```
 + [💻 Ejercicios](./exercises/README.md)
  
**[↩️](#destructuring--spread-operator)**
