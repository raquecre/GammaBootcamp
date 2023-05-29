//1------------------------------------------------------------------------------------------------

//seleccionar los numeros que tenga la frase. -------------
//      esto se puede hacer con un match.

const textSalary = "Gana 4000 euros de sueldo al mes, 10000 euros de bonificación anual, 5500 euros de cursos online al mes";
const numbers = /\d+/g;
const textMatches = textSalary.match(numbers);


//Ir almacenando los numeros en una variable  que los sume entre ellos.---------------
console.log(textMatches);
//      lo que ha pintado en el match hay que decir que, segun los genere los ponga en una variable,
//           bucle o un for Each que los acumule. 

//como son 12 meses, esa operación la tiene que hacer 12 veces.
//        bucle que pare cuando de 12 vueltas

let sumSalary = 0;
// mapeas para que pueda manipuralo como quieres,
// luego le indicas que todos los elementos son números.
let textMatchesNum = textMatches.map(n => parseInt(n));
console.log(textMatchesNum);

//necesidad de separar cada elemento porque hay uno que es anual
let [basicSalary, Bonus,salaryOnline] = textMatchesNum;


// Ahora ya estan sumados todos los salarios


textMatchesNum.forEach( (basicSalary,salaryOnline)=> sumSalary += basicSalary + salaryOnline);

console.log(sumSalary);


//ahora quiero que me lo sume todo 12 veces y dsp le sumo el bonus anual
let annuarySalary = 0;


for (let i = 0; i < 12; i++) {
   annuarySalary += sumSalary;

}
console.log(annuarySalary + Bonus);

//2----------------------------------------------------------------------------------------------------------
//falta utilizar los metodos que están vinculados.

const points = ["-12", "2", "-4", "-3", "-1", "0", "4", "8"];

// Quiero sumar la primera posicion (8) y la última posicion(-12).
                        // extraer a números
let pointsNum = points.map(n => p)
                        //ordenar de mayor a menor.
                      //  extraer el valor máximo.
                      // extraer el valor mínimo.

//sumar los dos valores ignorando el signo + y -.


let sortedPoints = pointsNum.sort( n => parseInt(n));

console.log(sortedPoints);








