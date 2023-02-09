let container = document.querySelector(".container");
let inpValue = document.querySelector(".inpValue");
let menuContainer = document.querySelector(".menu_container");
let button_operators = document.querySelectorAll(".button_operator");
let button_style = document.querySelectorAll(".button_style");

let firstValue = "";
let secondValue = "";
let firstState = false;
let secondState = false;
let sign = "";
let result = 0;

for (let i = 0; i < button_style.length; i++) {
  button_style[i].addEventListener("click", (event) => {
    if (
      firstState === false &&
      event.target.innerText >= "0" &&
      event.target.innerText <= "9" &&
      firstValue.length <= 9
    ) {
      firstValue += event.target.innerText;
      inpValue.value = firstValue;
    }

    /////////////////////////////////////////////

    if (
      secondState === true &&
      event.target.innerText >= "0" &&
      event.target.innerText <= "9" &&
      secondValue.length <= 9
    ) {
      secondValue += event.target.innerText;
      inpValue.value = secondValue;
    }

    /////////////////////////////////////////////

    if (
      event.target.innerText === "/" ||
      event.target.innerText === "X" ||
      event.target.innerText === "-" ||
      event.target.innerText === "+" ||
      event.target.innerText === "="
    ) {
      clearButton();
      firstState = true;
      secondState = true;
      if (secondValue !== "") {
        calculator();
      }
      sign = event.target.innerText;
    }

    /////////////////////////////////////////////

    if (event.target.innerText === "AC") {
      clearInput();
    }
    /////////////////////////////////////////////
    if (event.target.innerText === "%" || event.target.innerText === "+/-") {
      sign = event.target.innerText;
      clearButton();
      calculator();
    }

    /////////////////////////////////////////////

    if (inpValue.value.length == "7") {
      inpValue.style.fontSize = "60px";
    } else if (inpValue.value.length >= "8") {
      inpValue.style.fontSize = "50px";
    } else {
      inpValue.style.fontSize = "80px";
    }
  });

  function calculator() {
    let num1 = +firstValue;
    let num2 = +secondValue;

    if (sign === "+" && num2 !== "") {
      result = num1 + num2;
      firstValue = result;
    }
    if (sign === "-" && num2 !== "") {
      result = num1 - num2;
      firstValue = result;
    }
    if (sign === "/" && num2 !== "") {
      result = num1 / num2;
      firstValue = result;
    }
    if (sign === "X" && num2 !== "") {
      result = num1 * num2;
      firstValue = result;
    }
    if (sign === "+/-") {
      if ((firstState = true)) {
        firstValue = -num1;
        result = firstValue;
      } else {
        firstValue = -num2;
        result = firstValue;
      }
    }
    if (sign === "=") {
      inpValue.value = result;
    }
    if (sign === "%") {
      if ((firstState = true)) {
        firstValue = num1 / 100;
        result = firstValue;
      } else {
        firstValue = num2 / 100;
        result = firstValue;
      }
    }
    secondValue = "";
    inpValue.value = result;
  }
}

currenyStyle(button_operators);

function clearInput() {
  clearButton();
  inpValue.value = "";
  firstValue = "";
  secondValue = "";
  result = "";
  firstState = false;
  secondState = false;
}

function clearButton() {
  button_operators.forEach((item) => {
    item.style.backgroundColor = "#f69a01";
    item.style.color = "white";
  });
}

function currenyStyle(targetObject) {
  targetObject.forEach((item) => {
    item.addEventListener("click", () => {
      targetObject.forEach((item) => {
        item.style.backgroundColor = "#f69a01";
        item.style.color = "white";
      });
      item.style.backgroundColor = "white";
      item.style.color = "#f69a01";
    });
  });
}
