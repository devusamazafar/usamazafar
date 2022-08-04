 let num = 5;

 //line loop
  for(let i = 0;i<num;i++){
      let string = "";
      //space loop
      for(let k =1;k<num-i;k++)

      string+="-";
      //star loop
      for(let j = 0;j<i*2+1;j++)

      string+="*";


      console.log(string);
  }

console.log("reversed Pattern");



let n = 5;
let string = "";
  //line loop
for (let i = 0; i < n; i++) {
  //space loop
  for (let j = 0; j < i; j++) {
    string += "-";
  }
  //star loop
  for (let k = 0; k < 2 * (n-i) - 1; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);

