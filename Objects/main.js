import { countries } from "./countries.js";

//____________ lEVEL 1 __________________________________________________
//1
const dog = {};

//2
console.log(dog);

//3

dog.name = "C3PO",
    dog.legs = 3,
    dog.color = "white",
    dog.age = 7,
    dog.bark = "woof woof";

console.log(dog);

//4
dog.getDogInfo = function () {
    let getDogInfo = dog.getDogInfo,
        dogName = dog.name,
        dogLegs = dog.legs,
        dogAge = dog.age;
    return `El perro se llama ${dog.name}, tiene ${dog.legs} patas y tiene ${dog.age} años.`
}

console.log(dog.getDogInfo());
console.log(dog.bark);

//5
dog.breed;
dog.getDogInfo;

console.log(dog);


//________________________LEVEL 2 __________________________________________

const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Johny: {
        email: 'johny@johny.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
};

//1 Usuario con más habilidades
/* const keys = Object.keys(users);
console.log(keys);
 
lo primero de todo debemos ''reservar'' el espacio para el resultado
 final asi como para el numero máximo de los arrays que tenemos.
se debe de encontrar EL usuario de todos los usuarios que posee el skills más largo.
Para ello lo que hay que hacer es ir comparando cada uno con el valor maximo.
Una vez se tiene, en el espacio que se ha reservado para ''guardar''
 al usuario con las skills más largas debemos copiar el objeto en pantalla
  sin que eso suponga una modificación en el objeto ''users'' original,
   ya que solo queremos que se muestre y no que elimine todos para dejar solo ese.

Cuando ya se tiene seleccionado ello, ya si se puede utilizar los distintos metodos
 para poder encontrar los demas datos que nos interesen.*/
  
let max = 0;
let lotOfSkills;

for (let user of Object.keys(users)) {
    if (users[user].skills.length > max) {
        max = users[user].skills.length;
        lotOfSkills = Object.assign({}, users[user]);
    }
}
console.log(lotOfSkills);

//2.1
let usersConect = 0;
let usersKey = Object.keys(users);
let users50points = 0;
for (let user of usersKey) {
    if (users[user].isLoggedIn == true) {
        usersConect += 1;

    }
    if (users[user].points > 50) {
        users50points += 1;
    }

}
console.log(`Total de usuarios conectados: ${usersConect}. Total de usuarios con más de 50 puntos:${users50points}`);

//3
const mernStack = "MongoDB, Express, React, Node";
let mernStackNumber = 0;
let nameMernStack = [];
for (let user of usersKey) {
    if (users[user].skills.includes("MongoDB", "Express", "React", "Node")) {
        nameMernStack.push(user);
    }
}
console.log(nameMernStack);

//4
let copyUsers = Object.assign({}, users);

copyUsers.Raquel = {};
console.log(copyUsers);

//5
console.log(Object.keys(copyUsers));
//6
console.log(Object.values(copyUsers));

//7
let countriesKeys = Object.keys(countries);
let countriesNames = "";
console.log(countries[0].name); //dentro del corchete está el foroffff

for (let country of countries) {

    console.log(`${country.name} es un país cuya capital es ${country.capital} y tiene ${country.population} en el que se habla ${country.languages}`);
}
console.log(countriesNames);

//Level 3 __________________________________________________________

//1
const personAccount = [
    {
        firstName: "Raquel",
        lastName: "Crespo",
        expenses: {
            electricity: 100,
            waterBill: 100,
            wifi: 100,
            rent: 100,
            car: 100,
        },
        incomes: {
            salary: 2000,
            transfer: 300,
        },

        totalIncomes = personAccount.salary + personAccount.transfer,
        totalExpense = this.electricity + this.waterBill + this.wifi + this.rent + this.car,
        accountInfo = this.firstName + this.lastName,

    }

]; 

import { users, products } from "./user-products.js";

//2a
function signUp(createAccount) {
let checkUsername;
for (let user of users) {
    if (checkUsername == user.username) {
       console.log(`Ya tienes cuenta en esta página`);

    } else {
        
        isUsername = [
            //aquí hay que crear un username
                users.username = username,
                users._id = _id,
                users.email = email,
}
    
        
        ]
    }
    return isUsername
}
signUp('Martha');



