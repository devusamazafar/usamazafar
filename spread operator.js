//spread operator in array

const array1=[1,2,3,4];
const array2=[5,6,7,8];

const newArray=[...array1,...array2];
console.log(newArray);
//spread operator in objects
//object ma 1 ky se zyada key nhi ho sakti
const obj1={
    key1:"value1",
    key2:"value2",
}
const obj2 ={
    key3 :"value3",
    key4 :"value4",
}
const newobject={...obj1,...obj2}
console.log(newobject);