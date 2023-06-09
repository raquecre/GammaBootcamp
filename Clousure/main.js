//.......................LEVEL            1       ...............
//Crear una closure que tenga una función interna

function firstFuncA() {
    let dog = 0;
    function secondFunctionA() {
        dog++;
        return dog;
    }
    return secondFunctionA()
}

console.log(firstFuncA());

//.......................LEVEL            2       ...............

function fistFuncB() {
    let number1 = 2;

    function secondFunctionB() {
        let number2 = 3;
        return number1 + number2;
    }
    function thirdFunctionB() {
        let number3 = 2;
        return secondFunctionB() * number3;
    }
    function forthFuctionB() {

        return{
          opc2: thirdFunctionB(),
          opc1: secondFunctionB(),
        
        } 

    }

    return forthFuctionB()
}

console.log(fistFuncB());

