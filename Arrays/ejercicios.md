
## 💻 Ejercicios dia 5


### Ejercicios: Nivel 1

  
```js

const countries = [

"Albania",

"Bolivia",

"Canada",

"Denmark",

"Ethiopia",

"Finland",

"Germany",

"Hungary",

"Ireland",

"Japan",

"Kenya",

];

  

const webTechs = [

"HTML",

"CSS",

"JavaScript",

"React",

"Redux",

"Node",

"MongoDB",

];

```

  

1. Declara un array _vacío_.

2. Declara un array com mas de 5 elementos.

3. Encuentra la longitud de tu array.

4. Obtenga el primer elemento, el elemento del medio y el último elemento de un array.

5. Declara un array llamado _mixedDataTypes_, coloque diferentes tipos de datos en el array y encuentre la longitud del array. El tamaño del array debe ser mayor que 5.

6. Declare un variable array de nombre _itCompanies_ y asignarles valores iniciales Facebook, Google, Microsoft, Apple, IBM, Oracle y Amazon.

7. Imprima el array usando _console.log()_.

8. Imprima el número de empresas en el array.

9. Imprime la primer empresa , la intermedia y la última empresa

10. Imprime cada empresa.

11. Cambie el nombre de cada empresa a mayúsculas uno por uno e imprímalos.

12. Imprime el array como una oración: Facebook, Google, Microsoft, Apple, IBM, Oracle y Amazon son grandes empresas de TI.

13. Compruebe si existe una determinada empresa en el array itCompanies. Si existe, retorna la empresa; de lo contrario, retorna la empresa _no existe_

14. Filtre las empresas que tienen más de una 'o' sin el método _filter()_

15. Ordene el array usando el método _sort()_

16. Invierte la array usando el método _reverse()_

17. Cortar las primeras 3 empresas del array

18. Cortar las últimas 3 empresas del array

19. Cortar la empresa o empresas intermedias de TI del array

20. Eliminar la primera empresa de TI del array

21. Eliminar la empresa o empresas intermedias de TI del array

22. Elimine la última empresa de TI del array

23. Eliminar todas las empresas de TI

  

### Ejercicios: Nivel 2

  

1. Cree un archivo de countries.js separado y almacene el array de países en este archivo, cree un archivo separado web_techs.js y almacene el array de webTechs en este archivo. Acceda a ambos archivos en el archivo main.js

1. Primero elimine todos los signos de puntuación y cambie de string a array y cuente el número de palabras en el array

  

```js

let text =

"I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";

console.log(words);

console.log(words.length);

```

  

```sh

["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]

  

13

```

  

1. En el siguiente carrito de compras agregue, elimine, edite artículos

  

```js

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

```

  

- Agregue 'Meat' al comienzo de su carrito de compras si aún no se ha agregado

- Agregue 'Sugar' al final de su carrito de compras si aún no se ha agregado

- Elimine 'Honey' si es alérgico a la miel (honey)

- Modificar Tea a 'Green Tea'

  

1. En el array de países, verifique si 'Ethiopia' existe en el array si existe, imprima 'ETHIOPIA'. Si no existe agregar a la lista de países.

1. En el array webTechs, verifique si Sass existe en el array y si existe, imprima 'Sass es un preproceso de CSS'. Si no existe, agregue Sass al array e imprima el array.

1. Concatene las siguientes dos variables y guardelas en una variable fullStack.

  

```js

const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];

const backEnd = ["Node", "Express", "MongoDB"];

  

console.log(fullStack);

```

  

```sh

["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]

```

  

### Ejercicios: Nivel 3

  

1. El siguiente es un array de 10 edades de estudiantes:

  

```js

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

```

  

- Ordene el array y encuentre la edad mínima y máxima

- Encuentre la edad media (un elemento intermedio o dos elementos intermedios divididos por dos)

- Encuentre la edad promedio (todos los elementos divididos por el número de elementos)

- Encuentre el rango de las edades (max menos min)

- Compare el valor de (mín - promedio) y (máx - promedio), use el método _abs()_

  

1.Cortar los diez primeros países del array de países

1. Encuentre el país o países de en medio en el array de países.

1. Divide el array de países en dos arrays iguales si es par. Si el array de países no es par, agregue un país más para la primera mitad.


```js
const countries = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'Andorra',
  'Angola',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bhutan',
  'Bolivia',
  'Bosnia and Herzegovina',
  'Botswana',
  'Brazil',
  'Brunei',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Cape Verde',
  'Central African Republic',
  'Chad',
  'Chile',
  'China',
  'Colombi',
  'Comoros',
  'Congo (Brazzaville)',
  'Congo',
  'Costa Rica',
  "Cote d'Ivoire",
  'Croatia',
  'Cuba',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'East Timor (Timor Timur)',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Ethiopia',
  'Fiji',
  'Finland',
  'France',
  'Gabon',
  'Gambia, The',
  'Georgia',
  'Germany',
  'Ghana',
  'Greece',
  'Grenada',
  'Guatemala',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Honduras',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  'Korea, North',
  'Korea, South',
  'Kuwait',
  'Kyrgyzstan',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macedonia',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands',
  'Mauritania',
  'Mauritius',
  'Mexico',
  'Micronesia',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Morocco',
  'Mozambique',
  'Myanmar',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Poland',
  'Portugal',
  'Qatar',
  'Romania',
  'Russia',
  'Rwanda',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'Saint Vincent',
  'Samoa',
  'San Marino',
  'Sao Tome and Principe',
  'Saudi Arabia',
  'Senegal',
  'Serbia and Montenegro',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'Spain',
  'Sri Lanka',
  'Sudan',
  'Suriname',
  'Swaziland',
  'Sweden',
  'Switzerland',
  'Syria',
  'Taiwan',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  'Togo',
  'Tonga',
  'Trinidad and Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom',
  'United States',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Vatican City',
  'Venezuela',
  'Vietnam',
  'Yemen',
  'Zambia',
  'Zimbabwe'
]
```