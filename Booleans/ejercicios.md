
- *Booleanos*  

let isLightOn = true;
let isRaining = false;
let isHungry = false;
let isMarried = true;
let truValue = 4 > 3;
let falseValue = 4 < 3; 
---
Valores verdaderos

 Todos los números (positivos y negativos) son verdaderos excepto cero
Todos las string (cadenas) son verdaderos excepto un string vacío ('')

*El booleano true*

-Valores falsos-

    0 
    0n
    null
    undefined
    NaN
    El booleano false
    '', "", ``, string vacío

    Undefined
    
    let firstname;
    console.log(firstname);

    // Null
    let surname = null;
    console.log(surname);

Operadores de asignación
    // https://www.w3schools.com/js/js_assignment.asp

Operadores aritméticos  
    /* 
    +, -, *, /, %, ** 
    */

Operadores de comparación  
    console.log(3 != 2);
    console.log(3 === "3");

Operadores lógicos    
     && ampersand -> Y
    || pipe      -> Ó
    ! negation   -> NO

    let check = 4 > 3 && 10 > 5;
    console.log(check);

    const checking = 4 < 3 && 10 < 5;
    console.log(checking);

    let doublecheck = 4 > 3 || 10 > 5;
    console.log(doublecheck);

    // let isACOn = !isACOn;

    let checks = 4 > 3;
    let checkss = !(4 < 3);
    console.log(checkss); // true

    let marcos = !false; //true



---
### Ejercicios: Nivel 1

1.  Declare las siguientes variables; firstName, lastName, country, city, age, isMarried, year y asignar un valor, use el operador typeof para verificar diferentes tipos de datos.
    
2.  Verifique si typeof '10' es igual a 10
    
3.  Verifique si parseInt('9.8') es igual a 10
    
4.  Verifique cualquier valor booleano true o false.
    
    1.  Escriba tres declaraciones de JavaScript que proporcionen un valor verdadero.
    2.  Escriba tres declaraciones de JavaScript que proporcionen un valor falso.
5.  Calcule primero el resultado de la siguiente expresión de comparación sin usar console.log(). Después de decidir el resultado, confirmelo usando console.log()
    
    1.  4 > 3
    2.  4 >= 3
    3.  4 < 3
    4.  4 <= 3
    5.  4 == 4
    6.  4 === 4
    7.  4 != 4
    8.  4 !== 4
    9.  4 != '4'
    10.  4 == '4'
    11.  4 === '4'
    12.  Encuentre la longitud de Python y jargon y haga una declaración de comparación falsa.
6.  Calcule primero el resultado de las siguientes expresiones sin usar console.log(). Después de decidir el resultado, confirmelo usando console.log()
    
    1.  4 > 3 && 10 < 12
    2.  4 > 3 && 10 > 12
    3.  4 > 3 || 10 < 12
    4.  4 > 3 || 10 > 12
    5.  !(4 > 3)
    6.  !(4 < 3)
    7.  !(false)
    8.  !(4 > 3 && 10 < 12)
    9.  !(4 > 3 && 10 > 12)
    10.  !(4 === '4')
    11.  No hay 'on' tanto en dragon como en python
=============================================
### Ejercicios: Nivel 2

1.  Escriba un script que solicite al usuario que ingrese la base y la altura del triángulo y calcule el área de un triángulo (área = 0,5 x b x h).
    
    Ingrese base: 20
    Ingrese altura: 10
    El área del triángulo es: 100
    
2.  Escriba un script que solicite al usuario que ingrese el lado a, el lado b y el lado c del triángulo y calcule el perímetro del triángulo (perímetro = a + b + c)
    
    Ingrese lado a: 5
    Ingrese lado b: 4
    Ingrese lado c: 3
    El perimetro del triangulo es: 12
    
3.  Obtenga el largo y el ancho usando prompt y calcule el área del rectángulo (área = largo x ancho y el perímetro del rectángulo (perímetro = 2 x (largo + ancho))
    
4.  Obtenga el radio usando prompt y calcule el área de un círculo (área = pi x r x r) y la circunferencia de un círculo (c = 2 x pi x r) donde pi = 3.14.
    
5.  Calcule la pendiente, la intersección X y la intersección Y de y = 2x -2
    
6.  La pendiente es m = (y2-y1)/(x2-x1). Encuentra la pendiente entre el punto (2, 2) y el punto (6,10)
    
7.  Compare la pendiente de las dos preguntas anteriores.
    
8.  Calcula el valor de y (y = x2 + 6x + 9). Trate de usar diferentes valores de x y averigüe en qué valor de x y es 0.
    
9.  Escriba un script con prompt que solicite al usuario que ingrese las horas y la tarifa por hora. ¿Calcular el salario de la persona?
    
    Ingrese horas: 40
    Introduce la tarifa por hora: 28
    Su ganancia semanal es 1120
    
10.  Si la longitud de su nombre es mayor que 7, diga que su nombre es largo; de lo contrario, diga que su nombre es corto.
    
11.  Compare la longitud de su nombre y la longitud de su apellido y debería obtener este resultado.
    
    let firstName = "Antonio";
    let lastName = "Gil";
    
    Tu primer nombre, Antonio, es más largo que tu apellido, Gil.
    
12.  Declare dos variables myAge y yourAge y asignarles los valores iniciales y myAge y yourAge.
    
    let myAge = 250;
    let yourAge = 25;
    
    Soy 225 años mayor que tú.
    
13.  Usando prompt, obtenga el año en que nació el usuario y, si el usuario tiene 18 años o más, permita que el usuario conduzca, si no dígale que espere una cierta cantidad de años.
    
    Introduzca el año de nacimiento: 1995
    Tienes 25 años. Tienes la edad suficiente para conducir.
    
    Introduzca el año de nacimiento: 2005
    Tienes 15 años. Podrás conducir después de 3 años.
    
14.  Escriba un script que solicite por prompt al usuario que ingrese el número de años. Calcular el número de segundos que puede vivir una persona. Supongamos que alguien vive solo cien años
    
    Ingrese el número de años de vida: 100
     Viviste 3153600000 segundos.
    
15.  Cree un formato de hora legible por humanos usando el objeto Date.
    
    1.  YYYY-MM-DD HH:mm
    2.  DD-MM-YYYY HH:mm
    3.  DD/MM/YYYY HH:mm

### Ejercicios: Nivel 3

1.  Cree un formato de hora legible por humanos usando el objeto Date. La hora y el minuto deben ser siempre dos dígitos (7 horas deben ser 07 y 5 minutos deben ser 05)
    1.  YYY-MM-DD HH:mm eg. 20120-01-02 07:05