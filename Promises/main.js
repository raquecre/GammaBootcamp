//................. LEVEL            1         ......................


//Lee la API de los países utilizando fetch e imprime el nombre del país, la capital, los idiomas, la población y la superficie.

// seleccionamos la url
//acceder a los datos en forma de JSON
// obtenemos los datos gracias a que lo hemos llamado como una variable
//OJO! tb hay que controlar si falla

const urlCountries = "https://restcountries.com/v3.1/all";
/* 
fetch(url)
    .then((response) => response.json())
    .then((countries) => console.log(countries))
    .catch((error) => console.log(error))
 */
//____________________________________________--

const fetchCountries = async () => {
    try {
        const response = await fetch(urlCountries);
        const countries = await response.json();

        countries.forEach(country => {
            const nameCountry = country.name.common;
            const capitalCountry = country.capital;
            const languagesCountry = country.languages.name;
            const awaitCountry = country.await;
            const areaCountry = country.area;
            
            //... LEVEL    3  ......................
            let arrayAreas = [];
            let i = 0;
            while (arrayAreas.length <= 10) {
                arrayAreas.push(area[i]);
            }
            i++
            for (const topArea of arrayAreas) {


                if (areaCountry > topArea ) {
                    arrayAreas.push(areaCountry)
                }
            }

           
            console.log(`
                countries: ${nameCountry}
                capital: ${capitalCountry}
                idiomas: ${languagesCountry}
                población: ${awaitCountry}
                superficie:${areaCountry}km2 `
            )
        })
    } catch (error) { console.log(`${error} esta dando fallo`) }
}
fetchCountries()

//................. LEVEL            2         ......................

//Imprime todos los nombres de los gatos en la variable catNames.

const urlCats = "https://api.thecatapi.com/v1/breeds";

const fetchCats = async () => {
    try {
        const response = await fetch(urlCats);
        const cats = await response.json();
        cats.forEach(cat => {
            const catNames = cat.name;
            //... LEVEL    3  ......................
            const catWeightObject = Object.values(cat.weight.metric);
            const catWeightString = String(catWeightObject);
            const first = catWeightString.slice(0, 1);
            const last = catWeightString.slice(2, 3);
            const middle = +first + last / 2;
            console.log(`
            ${catNames}
            ${middle}
        
            `);
        })

        console.log();
    } catch (error) { console.log(error); }
}


//... LEVEL    3  ......................


