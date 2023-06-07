const btnNum = document.querySelectorAll(".btn-num");
const btnOperator = document.querySelectorAll(".btn-op");
const btnFunction = document.querySelectorAll(".btn-func")
const displayMain = document.querySelector(".result");
const commaButton = document.querySelector(".dot");

let currentA = '';
let currentB = '';
let operator = '';

btnNum.forEach(key => {
    key.addEventListener('click', function(e) {
        if(operator == false) { // first number input
            currentA = currentA.concat(e.target.innerText);
            displayMain.innerText = currentA;
        } else { // second number input
            currentB = currentB.concat(e.target.innerText);
            displayMain.innerText = `${currentA} ${operator} ${currentB}`;
        }
    })
});

btnOperator.forEach(key => {
    key.addEventListener('click', function(e) {
        if(currentA && currentB) { //subsequent operator inputs
            currentA = operate(operator, currentA, currentB).toString();
            operator = e.target.innerText;
            currentB = '';
            displayMain.innerText = `${currentA} ${operator}`;
        } else if(currentA) { // first operator input
            operator = e.target.innerText;
            displayMain.innerText = `${currentA} ${operator}`;
        }
    })
});

btnFunction.forEach(key => {
    key.addEventListener('click', function (e) {
        if(e.target.innerText == 'Clear') {
            clear();
        } else if(e.target.innerText == 'Delete') {
            backspace();
        } else if (e.target.innerText == '=') {
            equals();
        }
    })
});

// Calculator logic

const add = function(a, b) {
    return a + b;
};

const sub = function(a, b) {
    return a - b;
};

const mul = function(a, b) {
    return a * b;
};

const div = function(a, b) {
    if(currentB == 0) {
        displayMain.innerText = "Floomp!"
    } else {
        return a / b;
    }
};

const operate = function(operator, currentA, currentB) {
    let a = Number(currentA);
    let b = Number(currentB);

    switch (operator) {
        case '+':
            return add(a, b).toFixed(2);
        case '-':
           return sub(a, b).toFixed(2);
        case '*':
            return mul(a, b).toFixed(2);
        case '/':
            return div(a,b).toFixed(2);
    }
};

// Calculator functions

const clear = function() {
    currentA = '';
    currentB = '';
    operator = '';
    displayMain.innerText = '';
    displayTemp.innerText = '';
};

const backspace = function() {
    if (currentA && operator && currentB) {
        currentB = currentB.substring(0, currentB.length - 1);
        displayMain.innerText = `${currentA} ${operator} ${currentB}`;
    } else if (currentA && operator) {
        operator = '';
        displayMain.innerText = currentA;
    } else {
        currentA = currentA.substring(0, currentA.length - 1);
        displayMain.innerText = currentA;
    }
};

const equals = function () {
    if(currentA && operator && currentB) {
        currentA = operate(operator, currentA, currentB).toString();
        currentB = '';
        operator = '';
        displayMain.innerText = currentA;
    } else {
        return;
    }
};