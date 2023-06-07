const btnNum = document.querySelectorAll(".btn-num");
const btnOperator = document.querySelectorAll(".btn-op");

let currentA = '';
let currentB = '';
let operator = '';

btnNum.forEach(key => {
    key.addEventListener('click', function(e) {
        if(operator == false) {
            currentA = currentA.concat(e.target.innerText); 
        } else {
            currentB = currentB.concat(e.target.innerText);
        }
    })
});

btnOperator.forEach(key => {
    key.addEventListener('click', function(e) {
        if(currentA) {
            operator = e.target.innerText;
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
    return a / b;
};

const operate = function(operator, currentA, currentB) {
    let a = Number(currentA);
    let b = Number(currentB);

    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
           return sub(a, b);
        case '*':
            return mul(a, b);
        case '/':
            return div(a,b);
    }
};