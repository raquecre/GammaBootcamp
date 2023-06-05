
//quiero que muestre el keyCode en el momento que pulso la letra
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

document.addEventListener('keydown', event => {
    let selectInputKeyCode = document.getElementById('inputKeycode');
    selectInputKeyCode.innerHTML = event.key;
    let selectOutputKeyCode = document.getElementById('outputKeyCode');
    val = event.keyCode;
    selectOutputKeyCode.innerHTML = val;
    let coloredElements = document.getElementsByClassName('randomColor');

    let color = getRandomColor();
    for (const element of coloredElements) {

        element.style.color = color;

    }

    

})





//tengo que decirle que la letra que pulso es lo que quiero que procese/* 
//