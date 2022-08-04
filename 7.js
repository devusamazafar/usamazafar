//typeof oprater ya ham ko variabels ki type btay ga ka ya kis type ka ha for ex
let age = 22;
let fullName = "usamazafar";
console.log(typeof age);
console.log(typeof fullName); //is tarha typeof hamny data type btata ha
//data types in ko bolty han (primitive data types)
// string "usama"
// number 2,4,3.5 etc
// booleans
// undefined
// null
// bigint
// symbol

//convert number to string for ex
age=age + "";
console.log(typeof (age));
//convert string to number string ko number ma change karny ka liye string se pahly + lgany gy for ex
let mystr = +"usama";
console.log(typeof (mystr));
//ak or trika ha string ko number ma or number ko string ma for ex
let newAge = 20;
newAge = String(newAge);
console.log(typeof (newAge));

let lastAge = "60";
newAge = Number(newAge);
console.log(typeof (newAge));



