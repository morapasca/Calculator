const calculatorScreen = document.querySelector(".calculator-screen");

const updateScreen = (number) => {
    calculatorScreen.value = number;
};

const numbers = document.querySelectorAll(".number");
// console.log(numbers);

// numbers.forEach((number) => {
//     number.addEventListener("click", (event) => {
//         updateScreen(event.target.value);
//     });
// });

// defenisikan variable untuk kalkulasi
let prevNumber = "";
let calculationOpertator = "";
let currentNumber = "";

// memberikan Number yg diklik ke variable currentNumber
const inputNumber = (number) => {
    if (currentNumber === "0") {
        currentNumber = number;
    } else {
        currentNumber += number;
    }
};

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value);
        updateScreen(currentNumber);
    });
});

// click event operator
const operators = document.querySelectorAll(".operator");

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value);
    });
});

// defenisikan function operator
const inputOperator = (operator) => {
    if (calculationOpertator === '') {
        prevNumber = currentNumber;
    }
    calculationOpertator = operator;
    currentNumber = '0';
};

// menambahkan click event ke tombol =
const equalSign = document.querySelector(".equal-sign");

equalSign.addEventListener("click", () => {
    calculate();
    updateScreen(currentNumber);
});

// function calculation
const calculate = () => {
    let result = "";
    switch (calculationOpertator) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber);
            break;
        case "-":
            result = prevNumber - currentNumber;
            break;
        case "*":
            result = prevNumber * currentNumber;
            break;
        case "/":
            result = prevNumber / currentNumber;
            break;
        default:
            break;
    }
    currentNumber = result;
    calculationOpertator = "";
};

// mengaktifkan tombol AC
const clearBtn = document.querySelector(".all-clear");

clearBtn.addEventListener("click", () => {
    clearAll();
    updateScreen(currentNumber);
});

const clearAll = () => {
    prevNumber = "";
    calculationOpertator = "";
    currentNumber = "0";
};

// kalkulasi angka desimal
const decimal = document.querySelector(".decimal");

inputDecimal = (dot) => {
    if (currentNumber.includes('.')) {
        return;
    }
    currentNumber += dot;
};

decimal.addEventListener("click", (event) => {
    inputDecimal(event.target.value);
    updateScreen(currentNumber);
});