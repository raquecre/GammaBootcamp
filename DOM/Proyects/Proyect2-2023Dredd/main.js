/* Desarrolle la siguiente aplicación, utilice los siguientes 
elementos HTML para empezar.
 Obtendrá el mismo código en la carpeta de inicio. 
 Aplique todos los estilos y la funcionalidad utilizando sólo JavaScript.

El color del año cambia cada 1 segundo
El color de fondo de la fecha y la hora cambia cada dos segundos
poner que los colores cambien aleatoriamente con una funcion
El reto completado tiene fondo verde
El desafío en curso tiene fondo amarillo
Los próximos retos tienen fondo rojo */


//----------------El color del año cambia cada 1 segundo----------------

//selecionar el título
//disminuirle el tamaño de le








// ---------------H1  Joseph Dredd desafíos en

const onlyTextDredd = document.querySelector('h1');
console.log(onlyTextDredd);

onlyTextDredd.style.fontSize = '15px';
onlyTextDredd.style.fontFamily = 'courier';
onlyTextDredd.style.textAlign = 'center';


//----------------------    generador color random       ------------------
let generateColor = () => {
    let alphanums = '0123456789abcdef';

    let colorArr = [];
    for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * 15);
        colorArr.push(alphanums[index]);
    }
    return '#' + colorArr.join('');

}
//----------------- 2023 Clase------------

let bigYear = document.querySelector('strong');
bigYear.style.fontSize = "40px";
bigYear.style.fontFamily = "courier";

setInterval(() => {
    bigYear.style.color = generateColor();
}, 1000)






//----------------------    añadir FECHA + style                  ------------------
function getDate() {
    let d = new Date();
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let monthIndex = d.getMonth();
    let year = d.getFullYear();
    let date = d.getDate();
    let hour = d.getHours();
    let mins = d.getMinutes();


    d = d < 10 ? '0' + d.toString() : d;
    hour = hour < 10 ? '0' + hour.toString() : hour;
    mins = mins < 10 ? '0' + mins.toString() : mins;

    return `${date} ${months[monthIndex]} ${year} / ${hour}:${mins}`;
}

let dreddDate = document.querySelector('p');
dreddDate.textContent = getDate();

//generador de fondo aleatorio
setInterval(() => {
    dreddDate.style.backgroundColor = generateColor();
}, 1000)

dreddDate.style.margin = 'auto';
dreddDate.style.padding = '6px'
dreddDate.style.textAlign = 'center';
dreddDate.style.fontSize = '12px';
dreddDate.style.fontWeight = '400';
dreddDate.style.width = '40%';

//---------------------- H2 DETENER NO JS------------------
const selectH2 = document.querySelector('h2');

selectH2.style.fontSize = '12px';
selectH2.style.textAlign = 'center';
selectH2.style.textDecorationLine = 'underline';
selectH2.style.fontFamily = 'sans-serif';
selectH2.style.color = 'grey';


//-----------------------LOS LI DENTRO DE UL---------------- OK

const allsLis = document.querySelectorAll('li');

allsLis.forEach((li) => {
    li.style.listStyle = 'none';
    li.style.margin = '5px';
    li.style.fontSize = '16px';
    li.style.fontFamily = 'sans-serif; serif';
    li.style.padding = '6px';

    if (li.textContent.endsWith('Done')) {
        li.style.backgroundColor = 'green';

    } else if (li.textContent.endsWith('Ongoing')) {
        li.style.backgroundColor = 'yellow';

    } else {
        li.style.backgroundColor = 'red';
    }

})


