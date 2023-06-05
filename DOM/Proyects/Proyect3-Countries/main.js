import { countries } from "./countries.js";

let table = document.querySelector("table");

let icountry = 0;
while (icountry < countries.length) {
    let row = document.createElement('tr');

    let i = 0;
    while (i < 6) {
        let data = document.createElement('td');
        data.textContent = countries[icountry];
        row.appendChild(data);
        icountry++;
        i++;
    }
    table.appendChild(row);

}


