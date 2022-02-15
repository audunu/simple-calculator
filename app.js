let display = document.querySelector('.display');
let equalsButton = document.querySelector('.equals');
let firstOperand = parseInt(display.textContent);
let secondOperand = '';
let operatorValue = '';


const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');

numbers.forEach(element => {
    element.addEventListener('click', (e) => {
        display.textContent = e.target.textContent;
        if (operatorValue !== '') {
            secondOperand = parseInt(display.textContent);
        }
        else {
            firstOperand = parseInt(display.textContent);
        }
        
    })
})

operators.forEach(element => {
    element.addEventListener('click', (e) => {
        operatorValue = e.target.textContent;
    
    })
})


equalsButton.addEventListener('click', (e) => {
    display.textContent = operate(operatorValue, firstOperand, secondOperand);
    firstOperand = parseInt(display.textContent);
})











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


