let operator = "";
let previousValue = "";
let currentValue = "";

document.addEventListener("DOMContentLoaded", function(){
    // Storing all components from HTML in the JS
    let clear = document.querySelector(".button.c");
    let equal = document.querySelector(".button.equal");
    let decimal = document.querySelector(".buttonDot");

    let numbers = document.querySelectorAll(".buttonNum");
    let operators = document.querySelectorAll(".button.operator");

    let currentScreen = document.querySelector(".calc-typed");
    let previousScreen = document.querySelector(".calc-operation");

    numbers.forEach((number) => number.addEventListener("click", function(e){
        handleNumber(e.target.textContent)
        currentScreen.textContent = currentValue 
    }))

    operators.forEach((op) => op.addEventListener('click', function(e){
        handleOperator(e.target.textContent)
        previousScreen.textContent = previousValue + " " + operator;
        currentScreen.textContent = currentValue;
    }))

    clear.addEventListener("click", function(){
        previousValue = '';
        currentValue = '';
        operator = '';
        previousScreen.textContent = currentValue;
        currentScreen.textContent = currentValue;
    })

    equal.addEventListener('click', function(){
        calculate();
        previousScreen.textContent = '';
        currentScreen.textContent = previousValue;
    })

    decimal.addEventListener('click', function(){
        addDecimal();
    })
})

function handleNumber(num){
    if(currentValue.length <= 8){
        currentValue += num;
    }
}

function handleOperator(op){
    operator = op;
    previousValue = currentValue;
    currentValue = "";
}

function calculate(){
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);

    if(operator === "+"){
        previousValue += currentValue;
    }else if(operator === "-"){
        previousValue -= currentValue;

    }else if(operator === "x"){
        previousValue *= currentValue;
    }else {
        previousValue /= currentValue;
    }

    previousValue = roundNumber(previousValue);
    previousValue = previousValue.toString();
    currentValue = currentValue.toString();
    console.log(previousValue)
}

function roundNumber(num){
    return Math.round(num * 1000) / 1000;
}

function addDecimal(){
    if(!currentValue.includes(".")){
        currentValue += ".";
    }
}