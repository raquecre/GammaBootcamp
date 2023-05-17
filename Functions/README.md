### Ejercicios: Nivel 1

  
1. Declare una función _fullName_ e imprima su nombre completo.

2. Declare una función _fullName_ y ahora toma firstName, lastName como parámetro y retorna su nombre completo.

3. Declare una función _addNumbers_ que toma dos parámetros y retorna la suma de ambos.

4. El área de un rectángulo se calcula de la siguiente manera: _area = length x width_. Escribe una función _areaOfRectangle_ que calcule el área de un rectángulo.

5. El perímetro de un rectángulo se calcula de la siguiente manera: _perimeter= 2x(length + width)_. Escribe una función _perimeterOfRectangle_ que calcule el perímetro de un rectángulo.

6. El volumen de un prisma rectangular se calcula de la siguiente manera: _volume = length x width x height_. Escribe una función _volumeOfRectPrism_ que calcule el volumen de un prisma.

7. El área de un círculo se calcula de la siguiente manera: _area = π x r x r_. Escribe una función _areaOfCircle_ que calcule el área de un círculo.

8. La circunferencia de un círculo se calcula de la siguiente manera: _circumference = 2πr_. Escribe una función _circumOfCircle_ que calcule la circunferencia de un círculo.

9. La densidad de una sustancia se calcula de la siguiente manera:_density= mass/volume_. Escribe una función _density_ que calcule la densidad de una sustancia.

10. La velocidad se calcula dividiendo el total de la distancia recorrida por un objeto en movimiento entre el tiempo total. Escribe una función que calcule la velocidad de un objeto en movimiento, _speed_.

11. El peso de una sustancia se calcula de la siguiente manera: _weight = mass x gravity_. Escribe una función _weight_ que calcule el peso de una sustancia.

12. La temperatura en °C se puede convertir a °F usando esta fórmula: _°F = (°C x 9/5) + 32_. Escribe una función _convertCelsiusToFahrenheit_ que convierta °C a °F.

13. El índice de masa corporal (IMC) se calcula de la siguiente manera: _imc = peso en Kg / (altura x altura) en m2_. Escribe una función que calcule _imc_. El IMC se utiliza para definir de forma amplia diferentes grupos de peso en adultos de 20 años o más. Compruebe si una persona tiene un _peso bajo, peso normal, con sobrepeso_ u _obeso_ según la información que se proporciona a continuación.

  

- Se aplican los mismos parámetros de grupos tanto a hombres como a mujeres.

- _Peso bajo_: IMC inferior a 18,5

- _Peso normal_: IMC de 18,5 a 24,9

- _Sobrepeso_: IMC de 25 a 29,9

- _Obeso_: IMC es 30 o más

  

14. Escribe una función llamada _checkSeason_, toma un parámetro de mes y retorna la estación: Otoño, Invierno, Primavera o Verano.

15. Math.max retorna su argumento más grande. Escriba una función findMax que tome tres argumentos y devuelva su máximo sin usar el método Math.max.

  

```js

console.log(findMax(0, 10, 5));

10;

console.log(findMax(0, -10, -2));

0;

```