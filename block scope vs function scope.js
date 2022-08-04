//block scope vs function scope

// let and const is block scope 

//var is function scope 

{
    let firstName = "usama";
console.log(firstName);
}

{
    const firstName = "usama zafar"
    console.log(firstName);
}

{
    var firstName ="usama zafar17";

}
console.log(firstName);


if(true){
    let firstName="usama"
    console.log(firstName);
}

function myapp(){
    if(true){
        let myname="usamazafar";
        console.log(myname);
    }
    console.log(myname);
}
myapp();
