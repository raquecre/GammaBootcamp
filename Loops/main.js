/* // (Bucles Loops)

    // Bucle For (for Loop)
    // for(inicialización; condición; incremento/decremento) {
    //         aquí va el código (nuestra lógica en cuestión)
    // }
    console.log("Bucle for ascendente");
    for (let index = 0; index <= 5; index++) {
        console.log(index);

    }
    console.log("Bucle for descendente");
    for (let i = 5; i >= 0 ; i--) {
        console.log(i);
        
    }

    let numberToMultiply = 7;
    for (let i = 0; i <=10 ; i++) {
        console.log(`${numberToMultiply} x ${i} = ${numberToMultiply * i}`);
        
    }

    const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland'];
    console.log(countries);
    const newArr = [];
    for (let i = 0; i < countries.length; i++) {
        newArr.push(countries[i].toUpperCase());
    }
    console.log(newArr);

    let numbers = [1,2,3,4,5];
    let expArray2 = [];
    for (let i = 0; i < numbers.length; i++) {
        expArray2.push(`El cuadrado de ${numbers[i]} es ${numbers[i] ** 2}`)
        // numbers[0] ** 2 = 1 ;
        // numbers[1] ** 2 = 4 ;
        // numbers[2] ** 2 = 9 ;
        // ...

    } 
    console.log(expArray2);

    // Bucle While (while loop)
    console.log("Bucle while");
    let i = 5;
    while (i > 0) {
        console.log(i);
        i--;

    }

    // Bucle do While (do while loop)
    console.log("Bucle do while");
    let index = 5;
    do {
        console.log(index);
        index--;
    } while (index > 0);

    // Bucle for of (for of loop)
    // for (const iterador of array) {
    //     el código va aqui
    // }
    let numers = [1,2,3,4,5];
    console.log("Bucle for of");
    for (const numer of numers) {
        console.log(numer);
    }


    const webTechs = [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Redux',
        'Node',
        'MongoDB'
      ];
      for (const webTech of webTechs) {
            console.log(webTech.toUpperCase()); 
            console.log(webTech[0]);
      };

            // break
            for (let i = 0; i <=5; i++) {
                if (i == 3) {
                    break;
                }
                console.log(i);
                
            }
            // continue
            for (let i = 0; i <=5; i++) {
                if (i == 3) {
                    continue;
                }
                console.log(i);
                
            } */
//LEVEL 1===========================================================
//1
console.log(`bucle for`);
for (let i = 0; i <= 10; i++) {
    console.log(i);

}

console.log(`bucle while`);
let i = 0;
while (i <= 10) {
    console.log(i);
    i++;
}

let index = 0;
console.log(`do while`);
do {
    console.log(index);
    index++
} while (index <= 10);


//2
console.log(`bucle for -`);
for (let iNeg = 10; iNeg >= 0; iNeg--) {
    console.log(iNeg);

}

console.log(`bucle while -`);
let iNeg2 = 10;
while (iNeg2 > 0) {
    console.log(iNeg2);
    iNeg2--;
}

let iNeg3 = 10;
console.log(`do while -`);
do {
    console.log(iNeg3);
    iNeg3--
} while (iNeg3 >= 0);

//3
let n = 1;
for (let index = 0; index < n; index++) {
    const element = n[index];

}

//4
/* for (let index = #; index < #rray.length; index++)#{
    const element = array[index];
#   
}  */

//5
for (let i = 0; i <= 10; i++) {
    console.log([`${i} x ${i} = ${i * i}`]);
}

//6

for (let i = 0; i <= 10; i++) {
    console.log([`${i} ${i ** 2} ${i ** 3}`]);
}

//7
for (let i = 0; i <= 100; i + ) {
    console.log([i]);
}

//8
for (let i = 0; i <= 100; i++) {
   if (i % 2 != 0) {
    console.log(i);
   } 
}
//9
 for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0 && i % 5 == 0 && i % 7 == 0 ) {
        console.log(i);
    }
} 
//10
let result = 0;
 for (let i = 0; i <= 100;  i++ ) {
    result =+ i;
    console.log(result);
}

//11
let result1 = 0;
let result2 = 0;
for (let i = 0; i <= 100; i++) {
    for (let i = 0; i <= 100; i++) {
        if (i % 2 == 0) {
        result1 =+i
         
        } 
     }
     for (let i = 0; i <= 100; i++) {
        if (i % 2 != 0) {
        result2 =+i
         
        } 
     } 
    console.log(`${result1}es el resultado de la suma de los pares, y ${result2} el resultado de la suma de los impares `);
}

