/*
// Classes

// class ClassName{
//     // el código
// }

// class Person{
//     constructor(firstName, lastName, age, country, city){
//         console.log(this);
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//         this.country = country;
//         this.city = city;
//     }
// }
// let newPerson = new Person("Joseph", "Dredd", 38, "US", "Mega-City");
// let newPerson1 = new Person("Lidiya", "Tekle");
// let newPerson3 = new Person("Paco", "Gómez");
// console.log(newPerson);
// console.log(newPerson1);
// console.log(newPerson3);


class PersonDredd {
    constructor(
        firstName = "Joseph",
        lastName = "Dredd",
        age = 38, 
        country = "US", 
        city = "Mega-City",
        ){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.country = country;
        this.city = city; 
        }
    getFullName() {
        const fullName = this.firstName + " " + this.lastName;
        return fullName;
        }
}
console.log(new PersonDredd());
const personDredd = new PersonDredd();
const personElias = new PersonDredd("Elias", "Alfonso", 33, "España", "Madrid");
console.log(personElias);
console.log(personDredd.getFullName());

class Person{
    constructor(firstName, lastName, age, country, city, score){
        console.log(this);
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.country = country;
        this.city = city;
        this.score = score;
        this.skills = [];
    }
    getFullName(){
        const fullName = `${this.firstName} ${this.lastName}`;
        return fullName;
    }
    // getters
    get getScore(){
        return this.score;
    }
    // setters
    set setSkill(skill){
        this.skills.push(skill);
    }
    getPersonInfo(){
        let fullName = this.getFullName();
        let personSkills = this.skills.length > 0 && this.skills.slice(0, this.skills.length - 1).join(", ") +
        ` y ${this.skills[this.skills.length - 1]}`;
        let formattedSkills = personSkills ? `Sus habilidades son: ${personSkills}` : "";
        let info = `${fullName} tiene ${this.age} años. Vive en ${this.city}, ${this.country}. ${formattedSkills}`;
        return info;
    }
    // Método Static
    static showDateTime(){
        let now = new Date();
        let year = now.getFullYear();
        let month = now.getMonth();
        let date = now.getDate();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let dateMonthYear = `${date}/${month}/${year}`;
        let time = `${hours}:${minutes}`;
        let fullTime = `${dateMonthYear} ${time}`;
        return fullTime;
    }
};
console.log(Person.showDateTime());
let newPerson = new Person("Joseph", "Dredd", 38, "US", "Mega-City", 10);
newPerson.setSkill = "murdering";
newPerson.setSkill = "eating";
newPerson.setSkill = "sleeping";
console.log(newPerson.skills);

console.log(newPerson.getPersonInfo());
console.log(newPerson.getScore);

// Herencia
// class ChildClassName extends FatherClassName{
//     //lo que necesites...
// }

class Student extends Person{
    something(){
        console.log(`something something`);
    }
}
const newStudent = new Student("Joseph", "Dredd", 38, "US", "Mega-City");
console.log(newStudent);
console.log(newStudent.something());
console.log(newStudent.getFullName());
console.log(Student.showDateTime());
 */



//------------------ LEVEL                      1          -------------------------------

//-----------------     1   -------------
class animal {
    constructor(name, age, color, legs) {
        this.name = name;
        this.age = age;
        this.color = color;
        this.legs = legs;


    }
    getphysicalCharact() {
        return `${this.color} ${this.legs}`
    }
}
//-----------------    2    -------------- 
//fata extends
const dog = new animal("bobby", 4, "black", 4);
console.log(dog);

const cat = new animal("C3P0", 2, "orange", 3);
console.log(cat);

console.log(cat);



//------------------ LEVEL                      2          -------------------------------

//-----------------     1   -------------
console.log(cat.getphysicalCharact());


//------------------ LEVEL                      3          -------------------------------

extAges = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];
//Quiero: una clase que agrupe todos los parametros que se pueden calcular
//para ello los agrupo todos ellos dentro de una clase que se llama Statistics.
//Necesito un constructor que englobe todaas las edades
// ir accediendo a las edades para después hacer los cálculos necesarios

//............................... FALTA ARREGLAR FALLOS ...............................................................


class Statistics {
    constructor(ages) {
        this.ages = ages;
    }
    get ages() {
        return this.ages.sort();

    }
    /* const ordenateAges =*/

    getSum() {
        let sum = 0;
        this.sum = this.ages.forEach((age) => sum += age);
        return this.sum
    }

    getMin() {
        return this.ages[0];
    }

    getMax() {
        return this.ages[this.ages.length - 1];
    }
    getMean() {
        return  this.sum / this.ages.length;

    }
    getMedian() {

        let positionMedian = 0;
        let valueMedian = 0;
        if (this.ages.length % 2 == 0) {

            positionMedian = (this.ages.length + 1) / 2;

            valueMedian = (this.ages[Math.floor(positionMedian - 1)] + this.ages[Math.ceil(positionMedian - 1)]) / 2;

            console.log(valueMedian);

        } else {
            positionMedian = this.ages.length / 2
            positionMedian;

            console.log(this.age[positionMedian]);
        }

        return this.age[positionMedian];
    }

    getMode() {

        const mode = {};
        let max = 0, count = 0;

        for (let i = 0; i < arr.length; i++) {
            const item = arr[i];

            if (mode[item]) {
                mode[item]++;
            } else {
                mode[item] = 1;
            }

            if (count < mode[item]) {
                max = item;
                count = mode[item];
            }
        }
        return max;
    }
    getRange() {
        return [arr[0], arr[arr.length - 1]];
    }

    getVariance() {

        const diff = this.ages - this.getMedian;
        return diff * diff;

    }

    getstandardDerivation() {
        return Math.sqrt(this.getVariance)
    }
    getdescribe() {
        `Sum: ${this.getSum},
        Min: ${this.getMin},
        Max: ${this.getMax},
        Range: ${this.getRange},
        Mean: ${this.getMean},
        Median: ${this.getMedian},
        Mode: ${this.mode},
        Variance: ${this.getVariance}
        Standard Deviation:${this.getstandardDerivation}`    
    }
}


ages = new Statistics([31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26])
console.log(ages.getdescribe);


//-----------------     2   -------------

