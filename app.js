const display = document.querySelector('.display');
const equalsButton = document.querySelector('.equals');
const pointButton = document.querySelector('.point');
const clearButton = document.querySelector('.clear');
const plusminusButton = document.querySelector('.plusminus');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');

let firstOperand = 0;
let secondOperand = '';
let operatorValue = '';


plusminusButton.addEventListener('click', (e) => {
    if (display.textContent.includes('-')) {
        display.textContent.replace('-', '')
    }
    else {
        display.textContent = '-' + display.textContent;
    }
    updateOperands();
})

function updateOperands() {
    if (operatorValue !== '') {
        secondOperand = Number(display.textContent);
    }
    else {
        firstOperand = Number(display.textContent);
    }
}




numbers.forEach(element => {
    element.addEventListener('click', (e) => {
        // if display is 0 OR operation has started AND there is no comma or equal has been clicked
        if ((display.textContent === '0' || operatorValue !== '') && (!display.textContent.includes('.') || secondOperand === '')) {
            display.textContent = e.target.textContent;
        }
        else {
            display.textContent += e.target.textContent;
        }
        updateOperands();
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

clearButton.addEventListener('click', (e) => {
    firstOperand = 0;
    secondOperand = '';
    display.textContent = firstOperand;
    operatorValue = '';
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


