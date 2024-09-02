function add(a, b) {
    return parseFloat((a + b).toFixed(2));
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

module.exports = { add }