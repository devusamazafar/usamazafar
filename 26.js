//prve vs reference data types
//primitve typimites 
let num1 = 6;
let num2 = num1;
console.log ("value is num1 is", num1);
console.log ("value is num2 is", num2);
console.log("after incrementing num1")
num1++
console.log ("value is num1 is", num1);
console.log ("value is num2 is", num2);

//reference types
let array1 = ["item1","item2"];
let array2 = array1;
console.log(array1);
console.log(array2);
console.log("after pushing element to array1");
array1.push("item3");
console.log(array1);
console.log(array2)