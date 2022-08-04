let input = document.getElementById("input");

//function for display numbers

let isOp = false;

function evaluator(value) {
    isOp=false
    input.value += value;

}

//function for clear data 

function btn() {
    isOp=false
    input.value = "";
}

//function for oprater

function evaluatorOp(value) {
    if (isOp == true) {
        console.log(1, input.value);
        input.value = input.value.substr(0, input.value.length - 1);
        console.log(2, input.value);
    }
    isOp = true
    input.value += value;
    console.log(3, input.value);
}

//function for equal

function eq() {
if(isOp){
    return;
}
    input.value = eval(input.value);
}

function evaluatorback(){
    input.value=input.value.slice(0,-1);
}