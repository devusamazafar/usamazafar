//param destructuring

//object 
// ya sirf object ma istmal hoti ha

const person ={
    firstName:"usama",
    gender:"male",
}

function print({firstName,gender}){
    console.log(firstName);
    console.log(gender);
}
print(person);