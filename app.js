let display = document.querySelector('.display');
let displayValue = '';
let displayValueB = '';
let operator = '';
const zero = document.querySelector('.zero');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const divide = document.querySelector('.divide');
const multiply = document.querySelector('.multiply');
const add = document.querySelector('.add');
const subtract = document.querySelector('.subtract');
const equals = document.querySelector('.equals');

equals.addEventListener('click', () => {
    display.textContent = operate(operator, displayValue, displayValueB);
})






divide.addEventListener('click', () => {
    operator = '/';
});

multiply.addEventListener('click', () => {
    operator = '*';
});

add.addEventListener('click', () => {
    operator = '+';
});

subtract.addEventListener('click', () => {
    operator = '-';
});


zero.addEventListener('click', () => {
    if (isNaN(displayValue)) {
        displayValue = 0;
        display.textContent = 0;
    }
    else {
        displayValueB = 0;
    }
});


one.addEventListener('click', () => {
    if (isNaN(displayValue)) {
    displayValue = 1;
    display.textContent = 1;
}
else {
    displayValueB = 1;
}
});

two.addEventListener('click', () => {
    if (isNaN(displayValue)) {
    displayValue = 2;
    display.textContent = 2;
}
else {
    displayValueB = 2;
}

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


