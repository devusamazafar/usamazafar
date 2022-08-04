// array ky matherd

// agr ham ko array ky last pr koi value add karni ho to us ka liya ham push use karny gy for ex

// array push pop
console.log("push ki example");
 let fruits =["mango","banana","apple"];
 console.log(fruits);
 //push
  // fruits.push("grapes");
  // console.log(fruits);
 //agr ham ko last wali value remove karni ho to ham pop ka use kary gy lakin ya remove nhi kary ga ya retarn ma dy ga us value ko k is ko kanhi or lga do for ex
   console.log("pop ki example");
   
   let poppedfruits = fruits.pop();
   console.log(fruits);
   console.log(poppedfruits);
  // let fruits1 =["mango","apple","banana"];
  // console.log(fruits1);
  // fruits1.pop();
  // console.log(fruits1);
 // ham chack bhi kar sakty han ky hmari pop wali value kya ha for ex
  // console.log(fruits1.pop());

// array shift unshift

//unshift se ham array ky shoro ma value ko add kar sakty han ham ak se zyada value ko bhi add kar sakty han iski madad se for ex
fruits.unshift("grapes");
fruits.unshift("apple")
console.log(fruits);

// shift se ham array ky shoro ki value ko remove kar skta hon for ex
fruits.shift();
console.log(fruits);