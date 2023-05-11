    // Operadores de incremento
    //Pre-incremento
    let count = 0;
    console.log(++count); //1
    console.log(count); //1

    //Post-incremento
    let addition = 0;
    console.log(addition++); //0
    console.log(addition); //1

// Operadores de decremento
    //Pre-decremento
    let counting = 0;
        console.log(--counting); //-1
        console.log(counting); //-1
    
    //Post-decremento
    let additions = 0;
    console.log(additions--); //0
    console.log(additions); //-1

// Operadores ternarios
let isRainingMen = true;
isRainingMen
  ? console.log("Necesitas un impermeable.")
  : console.log("No necesitas un impermeable.");

isRainingMen = false;
isRainingMen
  ? console.log("Necesitas un impermeable.")
  : console.log("No necesitas un impermeable.");

//Precedencia de operadores
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

//Métodos Window
    // Método Window alert()
    // console.log(alert("No puedo más"));

    // Método Window prompt()
    // console.log(prompt("Ingrese su dinero", "Por aquí por favor")); 
    // Método Window confirm()
    // let confirma = confirm("¿Seguro?");
    // console.log(confirma);


    // Objeto Date
    const now = new Date();
    console.log(now);

    //Obtener año completo
    console.log(now.getFullYear());

    //Obtener mes
    console.log(now.getMonth());
        // 0, porque el mes es enero, meses(0-11)

    //Obtener fecha
    console.log(now.getDay());
        // El domingo es 0, el lunes es 1 y el sábado es 6

    //Obtener tiempo
        //getTime()
        let todaytime = now.getTime();
        console.log(todaytime);
        // este es el número de segundos que han pasado desde el 1ero de Enero de 1970 

        //Date.now()
        let todaytimes = Date.now();
        console.log(todaytimes);

        const rightnow = new Date();
        const year = rightnow.getFullYear(); // return años
        const month = rightnow.getMonth() + 1; // return meses(0 - 11)
        const date = rightnow.getDate(); // return días (1 - 31)
        const hours = rightnow.getHours(); // return horas (0 - 23)
        const minutes = rightnow.getMinutes(); // return minutos (0 -59)