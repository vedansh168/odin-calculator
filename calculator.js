const display = document.querySelector(".display")

// Buttons repsenting numpad, numbers and decimal point
/*
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const zero = document.querySelector("#zero");
const dbl_zero = document.querySelector("#dbl-zero");
const point = document.querySelector("#point");
*/

const num_buttons = document.querySelectorAll(".num");

// Buttons representing operators

/*
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const multiply = document.querySelector("#multiply");
const divide = document.querySelector("#divide");
*/
const operators = document.querySelectorAll(".operator");

const equals = document.querySelector("#equals-sign");


// Buttons representing clear and delete 
const clr = document.querySelector("#clr");
const del = document.querySelector("#del");

// Helper function to display anything on the display box of calc
function displayKey(num) {
    display.textContent += num;
}

// Helper function to evaluate expression currently being displayed
function evaluate() {
    let expr = display.textContent.trim();
    const tokens = expr.split(/[+\-*/]/)
    let result = 0;
    //PRE: The length of tokens should always be 2, since I evaluate well-formed exprs immediately
    if (expr.includes("+")) {
        result = Number(tokens[0]) + Number(tokens[1]);
    } else if (expr.includes("-")) {
        result = Number(tokens[0]) - Number(tokens[1]);
    } else if (expr.includes("*")) {
        result = Number(tokens[0]) * Number(tokens[1]);
    } else if (expr.includes("/")) {
        result = Number(tokens[0]) / Number(tokens[1]);
    } else {
        result = tokens.join("");
    }
    display.textContent = result.toString();
}

num_buttons.forEach(button => {
    button.addEventListener("click", () => displayKey(button.textContent))})

operators.forEach(button => {
    button.addEventListener("click", () => {
        evaluate();
        displayKey(button.textContent)
    });
})

clr.addEventListener("click", () => {
    display.textContent = "";
})

del.addEventListener("click", () => {
    display.textContent = display.textContent.slice(0, -1);
})

equals.addEventListener("click", evaluate);