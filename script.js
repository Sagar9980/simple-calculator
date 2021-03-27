function getHistory() {
  return document.getElementById("his").innerText;
}
function printHistory(num) {
  return (document.getElementById("his").innerText = num);
}
function getOutput() {
  return document.getElementById("ans").innerText;
}
function printOutput(num) {
  return (document.getElementById("ans").textContent = num);
}
let number = document.getElementsByClassName("number");

for (let i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function () {
    let output = getOutput();
    if (output != NaN) {
      output = output + this.innerText;
      printOutput(output);
    }
  });
}
let operator = document.getElementsByClassName("operator");
for (let i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", function () {
    if (this.id == "clear") {
      printHistory("");
      printOutput("");
    }
    if (this.id == "backspace") {
      let output = getOutput().toString();
      if (output) {
        output = output.substr(0, output.length - 1);
        printOutput(output);
      }
    }
    if (this.id == "plus-minus") {
      let output = getOutput().toString();
      if (output) {
        let minus = "-";
        let result = minus.concat(output);
        printOutput(result);
      }
    } else {
      let output = getOutput();
      let history = getHistory();
      if (output != "") {
        history = history + output;
        if (this.id == "=") {
          let result = eval(history);
          printOutput(result);
          printHistory(history);
        } else {
          if (this.id != "backspace") {
            history = history + this.id;
            printHistory(history);
            printOutput();
          }
        }
      }
    }
  });
}
