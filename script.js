let currentValue = "";
let currentOperator = null;
let previousValue = null;
let calculated = false;


// a / 0. = "infinity"   -unfixed

function appendValue(value) {

    if (calculated){
        currentValue = "";
        calculated = false;
    }

    if (currentValue === "" && value === '.'){
        currentValue += "0"+value;
    }else if (currentValue === "" && value === "0") {
        return;
    }else {
        currentValue += value;
    }
    

    displayValue();
}

function displayValue() {
    
    document.getElementById("result").value = currentValue;
}

function toggleSign(operator){
    if (currentValue === ""){
        return
    }else{
        currentValue = currentValue * -1;
        console.log(currentValue);
        displayValue();
    }

}

function clearDisplay() {
    currentValue = "";
    currentOperator = null;
    previousValue = null;
    calculated = false;
    displayValue();
}

function calculateResult() {
    

    if (calculated || currentOperator === "" || previousValue === null || currentValue ===""){
        return;
    }
    
   
    currentValue = calculate(previousValue, parseFloat(currentValue), currentOperator);
    displayValue();
    calculated = true;

}


function setOperator(operator) {

    if (operator === '%') {
        if (currentValue !== "" && previousValue !== null) {
            currentValue = calculate(previousValue, parseFloat(currentValue), '%');
            displayValue();
            return; 
        }
        return; 
    }

    if (currentOperator && currentValue !== "" && calculated == false) {
        previousValue = calculate(previousValue, parseFloat(currentValue), currentOperator);
        currentValue = "";
        displayValue();
    } else if (currentValue !== "") { 
        previousValue = parseFloat(currentValue);
        currentValue = "";
    }

    currentOperator = operator;
    calculated = false; 
    
    document.getElementById("result").value = currentOperator; 
}




function calculate(a,b, operator){

    switch (operator){
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '%': 
            return a * (b / 100);
        case '÷':
            return a / b;
        case 'x':
            return a * b;
    }
}



