let input = document.getElementById("input");

//variable to check last element is operator or number

// function for display digit

let isOp = false;
function evaluator(value) {
    isOp = false;
    input.value += value;

}

//function for opraters

function evaluatorOp(value) {

    if (isOp == true) {
        input.value = input.value.substr(0, input.value.length - 1);
    }

    isOp = true;
    input.value += value;

}

//function for clear data

function btn() {
    isOp = false;
    input.value = ""

}

//function for equle

function eq() {
    if (isOp) {
        return;
    }
    input.value = eval(input.value);
}





