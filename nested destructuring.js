//nested destructuring
const users=[
    {userId:1,firstName:"usama",gander:"male"},
    {userId:2,firstName:"waqar",gander:"male"},
    {userId:3,firstName:"zafar",gander:"male"},
]
const [{firstName}, ,{gander}]=users;
console.log(firstName);
console.log(gander);