const skills = ["HTML", "CSS", "JS", "React", "Node", "Python"];
let age = 38;
let isMarried = true;
const student = {
    firstName: "Joseph",
    lastName: "Dredd",
    age: 38,
    isMarried: true,
    skills: ["HTML", "CSS", "JS", "React", "Node", "Python"],
};


const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Joseph": {
        "email": "joseph@joseph.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 38,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`;

//---------------------    LEVEL      1    ---------------------------

//1

let skillsJSON = JSON.stringify(skills);
console.log(skillsJSON);

//2

let ageJSON = JSON.stringify(age, undefined);

console.log(ageJSON);

//3

let isMarriedJSON = JSON.stringify(isMarried, undefined);

console.log(isMarriedJSON);

//4
let studentJSON = JSON.stringify(student, undefined);

console.log(studentJSON);

//---------------------    LEVEL      2    ---------------------------



let studentsNames = JSON.stringify(
    student,
    ['firstName', 'lastName', 'skills'],
    4,
);
console.log(studentsNames);

//---------------------    LEVEL      3    ---------------------------

//1

let users = JSON.parse(txt);
console.log(users);

//2

const usersObj = JSON.parse(txt, (key, value) => {
    let newskill =
        typeof key ==  Object.keys(users); //&& value == this.skills[]
    return newskill;

})

users.forEach(user => {
    
});

console.log(usersObj);
 const nameKey = Object.keys(users);
console.log(nameKey); 

let values = Object.values(users);
let keyValues = Object.values(values);
console.log(keyValues);

for (const key of keyValues) {
    
}





