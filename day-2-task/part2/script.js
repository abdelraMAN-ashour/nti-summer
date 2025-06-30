let input = "";

function EnterNumber(value) {
    input += value;
    document.getElementById("Answer").value = input;
}

function EnterOperator(op) {
    input += op;
    document.getElementById("Answer").value = input;
}

function EnterEqual() {
    const result = eval(input);
    document.getElementById("Answer").value = result;
    input = result;
}

function EnterClear() {
    input = "";
    document.getElementById("Answer").value = "";
}
