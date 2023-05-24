  # Ejercicios Map & Set
+ [💻 Ejercicios](#💻-ejercicios)
    - [Ejercicios: Nivel 1](#ejerciciosnivel-1)
    - [Ejercicios: Nivel 2](#ejerciciosnivel-2)
    - [Ejercicios: Nivel 3](#ejerciciosnivel-3)
 + [Teoría](../README.md)
### Ejercicios:Nivel 1

```js
const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
const countries = ["Finland", "Sweden", "Norway"];
```

1. crear un set vacío
2. Crear un set que contenga de 0 a 10 utilizando el bucle
3. Eliminar un elemento de set
4. Limpia set
5. Crear un set de 5 elementos string a partir de un array
6. Crear un map de países y el número de caracteres de un país

### Ejercicios:Nivel 2

1. Encontrar a unión b
2. Encontrar a intersección b
3. Encontrar diferencias de a vs b

### Ejercicios:Nivel 3

1. Cuántos idiomas hay en el archivo de objetos de países.

1. \*\*\* Utiliza los datos de los países para encontrar las 10 lenguas más habladas:

```js
// El resultado debería ser el siguiente
console.log(mostSpokenLanguages(countries, 10))[
  ({ English: 91 },
  { French: 45 },
  { Arabic: 25 },
  { Spanish: 24 },
  { Russian: 9 },
  { Portuguese: 9 },
  { Dutch: 8 },
  { German: 7 },
  { Chinese: 5 },
  { Swahili: 4 },
  { Serbian: 4 })
];

// El resultado debería ser el siguiente
console.log(mostSpokenLanguages(countries, 3))[
  ({ English: 91 }, { French: 45 }, { Arabic: 25 })
];
```
 + [💻 Teoría](../README.md)