//functions
const singasong = () => {
    console.log("happy barith day to you.....");
}
singasong();

//re useable function
const sumToNumbers = (Number1, Number2) => {
    return Number1 + Number2;
}
const returnablevalue = sumToNumbers(20, 10)
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

const iseven = (number) => {

    return number % 2 === 0;
}
console.log(iseven(100));


//another function example 

const firstChr = (name) => {
    return name[4];

}
console.log(firstChr("usama"));


const myarray = [1, 2, 3, 4, 55, 66, 88]
const ans = findtarget(myarray, 88)

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

console.log(ans);
























const name1 = function () {
    console.log("usama");
}
name1();

const sumnumbers = function (Number1, Number2) {
    return Number1 + Number2;

}
const sumvalue = sumnumbers(5, 5);
console.log(sumvalue);


const even= (number)=>{
         if (number % 2 === 0){
             return true
         }
         else{
             return false
         }
    
    
     }
console.log(even(10))