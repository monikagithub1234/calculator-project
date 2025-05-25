function appendValue(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculate() {
    try {
        let expression = document.getElementById("display").value;
        document.getElementById("display").value = eval(expression);
    } catch (error) {
        alert("Invalid Expression");
    }
}