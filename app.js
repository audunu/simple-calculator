const display = document.querySelector('.display');
const equalsButton = document.querySelector('.equals');
const pointButton = document.querySelector('.point');
const clearButton = document.querySelector('.clear');

let firstOperand = Number(display.textContent);
let secondOperand = '';
let operatorValue = '';


const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');



clearButton.addEventListener('click', (e) => {
    firstOperand = 0;
    secondOperand = '';
    display.textContent = firstOperand;
    operatorValue = '';
})




numbers.forEach(element => {
    element.addEventListener('click', (e) => {
        // if display is 0 OR operation has started AND there is no comma or equal has been clicked
        if ((display.textContent === '0' || operatorValue !== '') && (!display.textContent.includes('.') || secondOperand === '')) {
            display.textContent = e.target.textContent;
        }
        else {
            display.textContent += e.target.textContent;
        }
        if (operatorValue !== '') {
            secondOperand = Number(display.textContent);
        }
        else {
            firstOperand = Number(display.textContent);
        }
    })
})

operators.forEach(element => {
    element.addEventListener('click', (e) => {
        if (secondOperand !== '') {
            executeCalculation();
        }
        operatorValue = e.target.textContent;
    })
})

pointButton.addEventListener('click', (e) => {
    if (!display.textContent.includes('.')) {
        display.textContent += e.target.textContent;
    }    
    
})

equalsButton.addEventListener('click', (e) => {
    if (secondOperand !== '') {
        executeCalculation();
    }
    
})


function executeCalculation() {
    display.textContent = Math.round((operate(operatorValue, firstOperand, secondOperand) + Number.EPSILON) * 10000) / 10000;
    firstOperand = Number(display.textContent);
    secondOperand = '';
    operatorValue = '';
}










const add = function (a, b) {
    return a + b;
};

const subtract = function (a, b) {
    return a - b;
};

const multiply = function (a, b) {
    return a * b;
}

const divide = function (a, b) {
    return a / b;
}

const operate = function (operator, a, b) {
    if (operator === '+') {
        return add(a, b);
    }
    else if (operator === '-') {
        return subtract(a, b);
    }
    else if (operator === '*') {
        return multiply(a, b);
    }
    else if (operator === '/') {
        return divide(a, b);
    }
}


