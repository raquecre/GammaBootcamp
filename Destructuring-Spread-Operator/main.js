import { countries_data } from "./countries_data.js";

/*
// Destructuring & Spread Operator

const numbers = [1,2,3];
let [numOne,numTwo,numThree] = numbers;
console.log(numOne, numTwo, numThree);

const fullStack = [
    ["HTML", "CSS", "JS", "React"],
    ["Node", "Express", "MongoDB"],
  ];
const [frontEnd,backEnd]= fullStack;

console.log(backEnd);

const names = ["Joseph", "Brook", "David", "John"];
let [, secondPerson, ,forthPerson] = names;
console.log(secondPerson);

const nams = [undefined, "Brook", "David"];
let [
    juanitocalatrava = "Joseph",
    juanitocalatravasecond,
    juanitocalatravathird,
    juanitocalatravafourth = "Mr potato",
] = nams;

console.log(juanitocalatrava,
juanitocalatravasecond,
juanitocalatravathird,
juanitocalatravafourth,);

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let [firstNumber, secondNumber,thirdNumber, ...numerillos] = num;
console.log(firstNumber);
console.log(numerillos);

// destructuring con iteración
const technologies =[
["frontEnd","Javascript"],
["backEnd","NodeJs"],
];
for (const [stack,tech] of technologies) {
    console.log(stack,tech);
}
for (const [first,second,third] of fullStack) {
    console.log(first,second,third);
}

// destructuring de objetos
const rectangle = {
    width: 20,
    height: 10,
    area: 200,
  };
let {width, height, area, perimeter = 60} = rectangle;
console.log(width, height, area, perimeter);
    // dos formas de obtener lo mismo
let {width: w, height: h, area: a, perimeter: p} = rectangle;
console.log(w, h, a, p);

//=================================================
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

//   const getInfo = (data) => {
//     const skills = data.skills;
//     const orderedSkills = skills.slice(0,-1).join(", ");

//     const dreddLanguages = data.languages;
//     const orderedLanguages = dreddLanguages.slice(0, -1).join(", ");

//     personInfo = `${data.firstName} ${data.lastName} vive en ${data.country}.
// Su edad es de ${data.age} años. El es un ${data.job}.
// El enseña ${orderedSkills} y ${skills[skills.length-1]}.
// El habla ${orderedLanguages} y ${dreddLanguages[dreddLanguages.length-1]}.
//     `
//     return personInfo;
//   }
//   console.log(getInfo(person));
const getInfo = ({
    firstName,
    lastName,
    age,
    country,
    job,
    skills,
    languages,
}) => {
   const orderedSkills = skills.slice(0,-1).join(", ");
   const orderedLanguages = languages.slice(0,-1).join(", ");
   personInfo = `${firstName} ${lastName} vive en ${country}.
   Su edad es de ${age} años. El es un ${job}.
   El enseña ${orderedSkills} y ${skills[skills.length-1]}.
   El habla ${orderedLanguages} y ${languages[languages.length-1]}.
        `
    return personInfo;

};
console.log(getInfo(person));

//destructuring de un objeto mediante iteración
const dreddTodoList = [
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
for (const {task,time,completed} of dreddTodoList) {
    console.log(task,time,completed);
}

// Spread Operator

const evens = [0, 2, 4, 6, 8, 10];
const odds = [1, 3, 5, 7, 9];
const evenNumbers = [...evens];
const oddNumbers = [...odds];

console.log(evenNumbers);
console.log(oddNumbers);
const allNumbers = [...evens, ...odds];

console.log(allNumbers);

const user = {
    firstName: "Joseph",
    lastName: "Dredd",
    age: 38,
    country: "Mega-City",
    job: "Judge",
};
// const copyUser = {...user};
const copiedUser = {
    ...user, 
    job: "mercenary",
};
console.log(copiedUser);

// spread operator con función flecha
const sumNums = (...args) => {
    //lógica de la suma
    let total = 0;
    for (const arg of args) {
        total += arg;
    }
    return total;
};
console.log(sumNums(1,2,3,4,5,6,7));*/

//----------  LEVEL  -----------------------  1  ---------------------
const constants = [2.72, 3.14, 9.81, 37, 100];
const countries = ["Finland", "Estonia", "Sweden", "Denmark", "Norway"];
const rectangle = {
    width: 20,
    height: 10,
    area: 200,
    perimeter: 60,
};
const users = [
    {
        name: "Brook",
        scores: 75,
        skills: ["HTM", "CSS", "JS"],
        age: 16,
    },
    {
        name: "Alex",
        scores: 80,
        skills: ["HTM", "CSS", "JS"],
        age: 18,
    },
    {
        name: "David",
        scores: 75,
        skills: ["HTM", "CSS"],
        age: 22,
    },
    {
        name: "John",
        scores: 85,
        skills: ["HTML"],
        age: 25,
    },
    {
        name: "Sara",
        scores: 95,
        skills: ["HTM", "CSS", "JS"],
        age: 26,
    },
    {
        name: "Martha",
        scores: 80,
        skills: ["HTM", "CSS", "JS"],
        age: 18,
    },
    {
        name: "Thomas",
        scores: 90,
        skills: ["HTM", "CSS", "JS"],
        age: 20,
    },
];


//1

let [numberE, numberPi, gravity, humanBodyTemp, waterBoilingTemp] = constants;

//2
let [fin, est, sw, den, nor] = countries;

//3
let {
    width: w,
    height: h,
    area: a,
    perimeter: p
} = rectangle;

//----------  LEVEL  ----------------  2  ---------------------

//1
//Iterar a través del array de usuarios
//y obtener todas las keys del 
//objeto utilizando la desestructuración

for (const { name, scores, skills, age } of users) {
    console.log(name, scores, skills, age);
};
//fata esto


//2 Encuentra las personas 
//que tienen menos de dos habilidades

for (const { name, scores, skills, ages } of users) {
    if (skills.length <= 2) {
        console.log(`${name} tiene ${skills}`);

    }
}


//----------  LEVEL  ----------------  3  ---------------------

//1Desestructurar el objeto países
// imprimir nombre, capital, población e idiomas de todos los países

for (const { name, capital, languages, population, flag, curency } of countries_data) {
    console.log({ name, capital, languages, population });
}

const student = ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]];

//2
let [name, [,,], scores] = student;

console.log(name, skills, scores);



//3
const students = [
    ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]],
    ["John", ["HTM", "CSS", "JS", "React"], [85, 80, 85, 80]],
];

function convertArrayToObject() {
    let arrOfObject=[];
    for (const [name, skills, scores] of students) {
        arrOfObject.push([name, skills, scores]);
    }
return arrOfObject;
}

console.log(convertArrayToObject(student));


//4
const student1 = {
    name: "David",
    age: 25,
    skills: {
      frontEnd: [
        { skill: "HTML", level: 10 },
        { skill: "CSS", level: 8 },
        { skill: "JS", level: 8 },
        { skill: "React", level: 9 },
      ],
      backEnd: [
        { skill: "Node", level: 7 },
        { skill: "GraphQL", level: 8 },
      ],
      dataBase: [{ skill: "MongoDB", level: 7.5 }],
      dataScience: ["Python", "R", "D3.js"],
    },
  };


// Copie el objeto estudiante a newStudent sin mutar el objeto original. En el nuevo objeto añade lo siguiente 
const newStudent = {...student1};
console.log(newStudent);

// Añadir Bootstrap con el nivel 8 a los conjuntos de habilidades de front end

 /*const newStudent2 = {...newStudent, skills:{...frontEnd:,frontEnd{...skill,skill: "Bootstrap", level:8}}}

console.log(newStudent2); */
// Añadir Express con nivel 9 a los conjuntos de habilidades del back end
// Añadir SQL con nivel 8 a los conjuntos de habilidades de la base de datos
// Añadir SQL sin nivel a los conjuntos de habilidades de ciencia de datos