// array destructuring

const myArray = ["apple", "mango", "banana", "grapes"];

let [myvar1, myvar2, ...myNewArray] = myArray;
console.log(myArray);
console.log(myvar1);
console.log(myvar2);
console.log(myNewArray);
















































// let n = 5;
// let String = "";

// for (let i = 1; i < n; i++) {

//     for (let j = 1; j < n - i; j++) {
//         String += "-";
//     }

//     for (let k = 0; k < 2 * i - 1; k++) {
//         String += "*";
//     }
//     String += "\n";
// }

// console.log(String);