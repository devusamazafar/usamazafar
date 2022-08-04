// difference between dot and bractket notaion
const key ="email";
const person = {
    name: "usama",
    age: 22,
    "my hobbies": ["games", "music", "pizza"]
}
console.log(person);
//dot notaion 
console.log (person.name);
//agr ham ko do word valy variable ko liknha ho jasy my hobbies ko likhna ho to ham bractket ka use karny gy for ex
console.log(person["my hobbies"]);

//another differencs 
person[key]="hr226273@gmail.com";
console.log(person);
