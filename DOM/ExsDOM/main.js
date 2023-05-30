//LEVEL       1--------------------

//1
let firstElement = document.querySelector('p');

console.log(firstElement);

//2
let ElementId1 = document.querySelector('#id1');
let ElementId2 = document.querySelector('#id2');
let ElementId3 = document.querySelector('#id3');
let ElementId4 = document.querySelector('#id4');


//3
const allsPsSelector = document.querySelectorAll('.classExample');

allsPsSelector.forEach( p => console.log(p));

//4
const allPs = document.querySelectorAll('p');

allPs[0].textContent = 'Texto ejemplo línea 1';
allPs[1].textContent = 'Texto ejemplo línea 2';
allPs[2].textContent = 'Texto ejemplo línea 3';
allPs[3].textContent = 'Texto ejemplo línea 4';

allPs.forEach( text => console.log(text));


//5

allPs[allPs.length-1].textContent ='Fourth Paragraph';

//6


// LEVEL-------        2          --------------

//1
allPs.forEach((p,i) => {
    p.style.fontFamily = 'Sans-Serif';
    p.style.backgroundColor = 'black';
    p.style.fontSize = '40px';
})

//2

allPs.forEach((p, i) => {
  p.style.fontSize = "24px"; // todos los títulos tendrán un tamaño de letra de 24px
  if (i % 2 === 0) {
    p.style.color = "red";
  } else {
    p.style.color = "green";
  }
});


