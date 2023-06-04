
//----------- Selectoress de clase necesarios    ------------------
const selectH1 = document.querySelector('h1');
const selectH2 = document.querySelector('h2');
const selectH3 = document.querySelector('h3');
const selectinput = document.querySelector('input');
const selectButton = document.querySelector('button');


// -----Introducir las Ccas que contienen los estilos  -------------

selectH1.classList.add('class', 'classStyleH1');
selectH2.classList.add('class', 'classStyleH2');
selectH3.classList.add('class', 'classStyleH3');

let container = document.createElement('div');
let table = document.createElement('table');

container.appendChild(table);
document.body.appendChild(container);



//-------------    la parte dinámica       --------------

/*
OBJ:    cuando el usuario de un número y pulse el botón, el programa pinte todos ellos. 
segun si es par, primo o impar el fondo está pintado por un color distinto.

// Hacer que nos genere una lista de números de 0 hasta el número que de el usuario

*/

// table styling
table.style.width = '60%';
table.style.marginRight = '20%';
table.style.marginLeft = '20%';
table.style.marginTop = '1pc';
table.style.textAlign = 'center';
table.style.fontFamily = 'ariel';
table.style.fontSize = '15px';
table.style.fontWeight = 'bold';
table.style.color = 'white';

// ----------- extraer numeros primos---------------------------

let isPrime = num => {
  if (num == 1 || num == 0) return false;
  if (num == 2 || num == 3)
    return true;//solo numeros 0, 1, 2 y 3.

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i == 0) return false;//aquí descarta tanto impares como pares
  }
  return true;//aquí dice numeros primos
}

// ----------- CONTADOR---------------------------

// START - generate numbers
function generateNumbers(numCount) {
  let nums = 0;
  while (nums < numCount) {
    // create table row
    let row = document.createElement("tr");

    let n = 1;
    let iterationCount = numCount - nums > 6 ? 6 : numCount - nums;
    // for (let n = 1; n <= 6; n++)
    while (n <= iterationCount) {

      // create table data
      let data = document.createElement("td");
      data.textContent = nums;

      // style data elements
      data.style.margin = "2px";
      data.style.padding = "5px";

      // selective styling
      if (isPrime(nums)) {
        data.style.backgroundColor = "#F76262";

      } else if (nums % 2 !== 0) {
        data.style.backgroundColor = "#fee904";

      } else {
        data.style.backgroundColor = "#42b845";

      }
      row.appendChild(data);
      nums++;
      n++;
    }
    table.appendChild(row);
  }
}
// END
let msg = document.querySelector('#message');

let inputArea = document.querySelector('input');

inputArea.addEventListener('keypress', key => {
  let val = parseInt(inputArea.value);

  if (val < 0 || val > 1000) {
    msg.textContent = 'Please enter a number between 1-1000!';

  } else msg.textContent = '';
})

let button = document.querySelector('#button_1');

button.addEventListener('click', () => {
  table.innerHTML = '';
  let inputValue = parseInt(inputArea.value);

  if (inputValue > 1000 || inputValue < 0) {
    msg.textContent = 'Enter a valid number between 1 and 1000.';
  }
  else generateNumbers(inputValue);
})
