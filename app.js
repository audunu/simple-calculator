let display = document.querySelector('.display');
let displayValue = '';
const zero = document.querySelector('.zero');
const one = document.querySelector('.one');
const two = document.querySelector('.two')
const three = document.querySelector('.three')
const four = document.querySelector('.four')
const five = document.querySelector('.five')
const six = document.querySelector('.six')
const seven = document.querySelector('.seven')
const eight = document.querySelector('.eight')
const nine = document.querySelector('.nine')



one.addEventListener('click', () => {
    displayValue = 1;
    display.textContent = 1;
});

two.addEventListener('click', () => {
    displayValue = 2;
    display.textContent = 2;
});

three.addEventListener('click', () => {
    displayValue = 3;
    display.textContent = 3;
});

four.addEventListener('click', () => {
    displayValue = 4;
    display.textContent = 4;
});

five.addEventListener('click', () => {
    displayValue = 5;
    display.textContent = 5;
});

six.addEventListener('click', () => {
    displayValue = 6;
    display.textContent = 6;
});

seven.addEventListener('click', () => {
    displayValue = 7;
    display.textContent = 7;
});

eight.addEventListener('click', () => {
    displayValue = 8;
    display.textContent = 8;
});

nine.addEventListener('click', () => {
    displayValue = 9;
    display.textContent = 9;
});











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
        add(a, b);
    }
    else if (operator === '-') {
        subtract(a, b);
    }
    else if (operator === '*') {
        multiply(a, b);
    }
    else if (operator === '/') {
        divide(a, b);
    }
}


