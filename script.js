function getHistory() {
  return document.getElementById("his").innerText;
}
function printHistory(num) {
  document.getElementById("his").innerText = num;
}
function getOutput() {
  return document.getElementById("ans").innerText;
}
function printOutput(num) {
  if (num == "") {
    document.getElementById("ans").innerText = num;
  } else if (num == ".") {
    document.getElementById("ans").innerText = num;
  } else {
    document.getElementById("ans").innerText = getFormattedNumber(num);
  }
}
function getFormattedNumber(num) {
  let n = Number(num);
  let value = n.toLocaleString("en");
  return value;
}
function reverseNumberFormat(num) {
  return Number(num.replace(/,/g, ""));
}

let number = document.getElementsByClassName("number");

for (let i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function () {
    let output = reverseNumberFormat(getOutput());
    if (output != NaN) {
      output = output + this.innerText;
      console.log(output);
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
    } else if (this.id == "backspace") {
      var output = reverseNumberFormat(getOutput()).toString();
      if (output) {
        output = output.substr(0, output.length - 1);
        printOutput(output);
      }
    } else {
      let output = getOutput();
      let history = getHistory();
      if (output != "") {
        output = reverseNumberFormat(output);
        history = history + output;
        if (this.id == "=") {
          let result = eval(history);
          printOutput(result);
          printHistory(history);
        } else {
          history = history + this.id;
          printHistory(history);
          printOutput(0);
        }
      }
    }
  });
}
