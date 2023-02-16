let expression = "";
let equation = "";
function addToDisplay(value) {
  expression += value;
  equation += value;
  document.getElementById("display").value = expression;
}
function clearDisplay() {
  expression = "";
  equation = "";
  document.getElementById("display").value = "";
}
function calculate() {
  try {
    const result = eval(expression);
    equation += `=${result}<br>`;
    document.getElementById("display").value = result;
  } catch (e) {
    document.getElementById("display").value = "Error";
  } finally {
    expression = "";
  }
  document.getElementById("equation").innerHTML = equation;
}
