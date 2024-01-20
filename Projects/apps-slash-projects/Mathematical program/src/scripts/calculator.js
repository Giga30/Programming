let currentValue = '';

function appendValue(value) {
    currentValue += value;
    document.getElementById('result').value = currentValue;
}

function clearResult() {
    currentValue = '';
    document.getElementById('result').value = '';
}

function calculateResult() {
    currentValue = eval(currentValue);
    document.getElementById('result').value = currentValue;
    return currentValue
}

export default calculateResult;

