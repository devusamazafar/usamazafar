//functions
function singasong() {
    console.log("happy barith day to you.....");
}
singasong();

//re useable function
function sumToNumbers(Number1, Number2) {
    return Number1 + Number2;
}
const returnablevalue = sumToNumbers(10, 10)
console.log(returnablevalue);

//way one

// function iseven(number){
//     if (number % 2 === 0){
//         return true
//     }
//     else{
//         return false
//     }


// }
//     console.log(iseven(100));

// way tow

// function iseven(number) {
//     if (number % 2 === 0) {
//         return true
//     }
//     return false



// }
// console.log(iseven(100));

// way three

function iseven(number) {

    return number % 2 === 0;
}
console.log(iseven(99));


//another function example 

function firstChr(name) {
    return name[0];

}
console.log(firstChr("usama"));


// const ans = findtarget(myarray,55)
const myarray = [1, 2, 3, 4, 55, 66, 88]
function findtarget(array, target) {
    for (let i = 0; i < array.length; i++) {
        if (
            array[i] === target
        ) {
            return i;
        }
    }
    return -1;
}




