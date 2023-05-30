//  FRUIT LIST

//introducir variables en una lista ordenada en html:
        //seleccionar el ul
        //nombrar a la variable para ir introduciendo los elementos.
        //nombrar los elementos interiores.
        //crear los li
        //Usar forEach
        //con el forEach queremos que se recorra 
        //todo el array para que vaya introcuciendolo
        //en una variable.

//selecciono el ul
/* let ulFruit = document.querySelector('ul');

// dentro de un FOR-EACH:
        //creo el elemento de li
        //digo lo que quiero que meta dentro, que es el parámetro for each
        //meto el li+la fruta que he creado en el UL
    //aquí termina el for each.



fruitList.forEach((fruit) => {
    const itemElement = document.createElement('li');
    itemElement.textContent = fruit;
    ulFruit.appendChild(itemElement);
})


//-----------------------        logo    -----------------------

const imageSrc = "https://img.freepik.com/premium-vector/pastel-book-icon-education-concept_77417-1738.jpg?w=2000&quot";

let divElement = document.querySelector('div');

let imgElementCreate = document.createElement('img');
imgElementCreate.src = imageSrc;

divElement.appendChild(imgElementCreate); */


//
//========================EJERCICIOS método Symplon DOM=======================

// 1. -Fruit list-
// const fruitList = ["apple", "banana", "tomato"];
// const ulElement = document.querySelector("ul");

// fruitList.forEach((fruit) => {
//     const itemElement = document.createElement("li");
//     itemElement.innerText =  fruit;
//     ulElement.appendChild(itemElement);
// });

// 2. -Logo-
// const imageSrc = "https://img.freepik.com/premium-vector/pastel-book-icon-education-concept_77417-1738.jpg?w=2000";

// let divElementSelected = document.querySelector('div');
// let imgElementCreated = document.createElement("img");
// imgElementCreated.src = imageSrc;

// divElementSelected.appendChild(imgElementCreated);

// 3. -Change first and last item from an unordered list-
//let firstInList = [...document.querySelectorAll("ul>li:first-child")];
//let lastInList = [...document.querySelectorAll("ul>li:last-child")];

//firstInList.forEach(li => {
 //   li.textContent = "first"
//});
//lastInList.forEach(li => {
 //   li.textContent = "last"
//});
