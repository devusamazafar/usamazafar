// how to clone array is ky 3 tariky han for ex
let array1 = ["item1","item2"];
//let array2 = array1;
//let array2 = [].concat(array1,["item3","item4"]);
//spread operator is ma ham do array ko bhi aps ma jor sakty han for ex
// how to concatenate two array
let  newArray = ["item5","item6"]
let array2 =[...array1,"item3","item4",...newArray];
//let array2 = array1.slice(0).concat(["item3","item4"]);
console.log(array1);
console.log(array2);
console.log(array1===array2);
