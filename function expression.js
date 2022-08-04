//function experssion 
// function ko kisi variable ma store karana for ex
//functions
const singasong = function () {
    console.log("happy barith day to you.....");
}
singasong();

//re useable function
const sumTowNumbers = function (Number1, Number2) {
    return Number1 + Number2;
}
const ans = sumTowNumbers(10, 10)
console.log(ans);

//way one

const iseven = function (number) {
    if (number % 2 === 0) {
        return true
    }
    else {
        return false
    }


}
console.log(iseven(100));

// way tow

// function iseven(number) {
//     if (number % 2 === 0) {
//         return true
//     }
//     return false



// }
// console.log(iseven(100));

// way three

// function iseven(number) {

//     return number % 2 === 0;
// }
// console.log(iseven(99));


//another function example 

function firstChr(name) {
    return name[0];

}
console.log(firstChr("usama"));

