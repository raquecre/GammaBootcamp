/*Los tipos de datos primitivos en JavaScript incluyen:

Números: enteros, flotantes--------------------------------
let age = 8;
const gravity = 9.81;
const pi = 3.14;
const PI = Math.PI;
console.log(PI);
console.log(Math.round(PI));
console.log(Math.round(9.81));
console.log(Math.floor(9.81));
console.log(Math.max(-5, 3, 20, 4, 5, 10));

Math.sqrt(100)

Cadenas: cualquier dato entre comillas simples, comillas dobles o comillas invertidas
let quote = "kjdsnflkdsf, sdkjfnldksjnf lkjdsflkdnsafdlk";
//template literals
let a = 2,
    b = 3;

console.log(`la suma de ${a} y ${b} es: ${a + b}`);

métodos de cadena------------------------------------------------------------------------------------------

let js = "Javascript, es lo mejor de mi vida";
let stringlenght = js.length;
console.log(stringlenght);

let letterposition = js[4];
console.log(letterposition.toUpperCase());

toUpperCase(): este método cambia la cadena a letras mayúsculas. ej: js.toUpperCase();
toLowerCase(): este método cambia la cadena a letras minúsculas.

substring(): Se necesitan dos argumentos, el índice inicial y posición final:
console.log(js.substring(4,5));

split(): El método split divide una string en un lugar específico.
console.log(js.split(" "));

trim(): Elimina el espacio final al principio o al final de una cadena.
let sentence = " La vida puede ser un JavasCript ";
console.log(sentence);
console.log(sentence.trim(" "));

Booleanos: valor verdadero o falso--------------------------------------------------------------------

Nulo - valor vacío o sin valor
Indefinido - una variable declarada sin un valor
Los tipos de datos que no son primitivos en JavaScript incluyen:--------------------------------------------------------------------------------------

 Array-------------------------------------------------------------------------------------------------------------------------------------------------------------
// let numsandgreetings = [1, 2, "hola"];

Objetos-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
let userOne = {
name: "Jose",
 position: "teacher",
country: "Colombia" };

Funciones-------------------------------------------------------------------------------------------------------------------------------------
function elias(/*parámetros
return // lo que quiero que me devuelva;
};


trim(): Elimina el espacio final al principio o al final de una cadena.

includes(): Toma un argumento de subcadena y verifica si existe un argumento de subcadena en la cadena. 

includes() devuelve un valor booleano. Si existe una subcadena en una cadena, devuelve verdadero; de lo contrario, devuelve falso.

replace(): toma como parámetro la subcadena antigua y una nueva subcadena.

charAt(): Toma índice y devuelve el valor en ese índice

charCodeAt(): Toma el índice y devuelve el código char (número ASCII) del valor en ese índice

indexOf(): Toma una subcadena y si la subcadena existe en una cadena, devuelve la primera posición de la subcadena; si no existe, devuelve -1
 
lastIndexOf(): Toma una subcadena y si la subcadena existe en una cadena, devuelve la última posición de la subcadena; si no existe, devuelve -1

concat(): toma muchas subcadenas y las une.

startsWith(): toma una subcadena como argumento y verifica si la cadena comienza con esa subcadena especificada. Devuelve un valor booleano (verdadero o falso).

endsWith(): toma una subcadena como argumento y verifica si la cadena termina con esa subcadena especificada. Devuelve un valor booleano (verdadero o falso).

search: toma una subcadena como argumento y devuelve el índice de la primera coincidencia. El valor de búsqueda puede ser una cadena o un patrón de expresión regular.

match: toma una subcadena o un patrón de expresión regular como argumento y devuelve una matriz si hay una coincidencia; de lo contrario, devuelve un valor nulo. Veamos cómo se ve un patrón de expresión regular. Comienza con /signo y termina con /signo.

repeat(): toma un número como argumento y devuelve la versión repetida de la cadena. 

_____________________________________________________________________________
## 💻 Día 2: Ejercicios

### Ejercicio: Nivel 1

1.  Declare una variable llamada challenge y asígnele un valor inicial **'Suffering JavaScript everyday'**.

2.  Imprima la cadena en la consola del navegador usando **console.log()**
3.  Imprima la **longitud** de la cadena en la consola del navegador usando console.log()
4.  Cambie todos los caracteres de cadena a letras mayúsculas usando el método **toUpperCase()**
5.  Cambie todos los caracteres de la cadena a letras minúsculas usando el método **toLowerCase()**
6.  Corta (segmenta) la primera palabra de la cadena usando el método **substr()** o **substring()**
7.  Corta la frase JavaScript everyday de  Suffering JavaScript everyday.
8.  Verifique si la cadena contiene una palabra **Script** usando el método **includes()**
9.  Divide la **cadena** en un **array** usando el método **split()**
10.  Divida la cadena Suffering JavaScript everyday en el espacio usando el método **split()**
11.  'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' **divide** la cadena en la coma y cámbiala a una matriz.
12.  Cambie Suffering JavaScript everyday a Suffering JavaScript sometimes usando el método **replace()**.
13.  ¿Qué es el carácter en el índice 15 en la cadena 'Suffering JavaScript everyday'? Utilice el método **charAt()**.
14.  ¿Cuál es el código de carácter de J en la cadena 'Suffering JavaScript everyday' usando **charCodeAt()**
15.  Use **indexOf** para determinar la posición de la primera aparición de **a** en Suffering JavaScript everyday.
16.  Utilice **lastIndexOf** para determinar la posición de la última aparición de **a** en el string.
17.  Usa **indexOf** para encontrar la posición de la primera aparición de la palabra **porque** en la siguiente oración:**'No puedes terminar una oración con porque, porque, porque es una conjunción'**
18.  Usa **lastIndexOf** para encontrar la posición de la última aparición de la palabra **porque** en la siguiente oración:**'No puedes terminar una oración con porque, porque, porque es una conjunción'**
19.  Usa **buscar** para encontrar la posición de la primera aparición de la palabra **porque** en la siguiente oración:**'No puedes terminar una oración con porque, porque, porque es una conjunción'**
20.  Use **trim()** para eliminar cualquier espacio en blanco final al principio y al final de una cadena. Por ejemplo, 'Suffering JavaScript everyday'.
21.  Use el método **startsWith()** con la cadena Suffering JavaScript everyday y haga que el resultado sea verdadero
22.  Use el método **endsWith()** con la cadena Suffering JavaScript everyday y haga que el resultado sea verdadero
23.  Usa el método **match()** para encontrar todos los **a** en nuestro string favorito
24.  Use **concat()** y fusione 'Suffering JavaScript' y 'everyday' en una sola cadena, 'Suffering JavaScript everyday'
25.  Use el método **repeat()** para imprimir Suffering JavaScript everyday 2 veces.