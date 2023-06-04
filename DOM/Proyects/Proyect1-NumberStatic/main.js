//saber si son números primos
let isPrime = num => {
    if (num == 1 || num == 0) return false;
    if (num == 2 || num == 3)
        return true;//solo numeros 0, 1, 2 y 3.

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) return false;//aquí descarta tanto impares como pares
    }
    return true;//aquí dice numeros primos
}
let table = document.querySelector("table");
// START - generate numbers


function generateNumbersandTable(numerito) {
    inums = 1;
    while (inums < numerito) {
        // create table row
        let row = document.createElement("tr");
        i = 0;
        while (i < 5) {
            // create table data
            let data = document.createElement("td");
            data.textContent = inums;


            // selective styling
            if (isPrime(inums)) {
                data.style.backgroundColor = "#F76262";

            } else if (inums % 2 !== 0) {
                data.style.backgroundColor = "#fee904";

            } else {
                data.style.backgroundColor = "#42b845";

            }
            row.appendChild(data);
            inums++;
            i++;


        }
        table.appendChild(row);

    }

}

console.log(generateNumbersandTable(100));
