//trim kya ha 
//trim string ma mojod letters ki spaces ko khatam karny ka liy use hota ha for ex
let fullName = "usamazafar";
//console.log(fullName.length);
//fullName.trim(); is tarha likhny se ya spaces khatam nhi hon gi knu ka ya hamy ak ni string da ga jis ma spaces nhi hon gi us ka liy ham ko is ko dobara run krwana parhy ga nya nam rakh kr or ham isi ko ismal karna ha to let hta dan gy to bhi kam ho jay ga for ex
//fullName = fullName.trim();
//console.log(fullName);
//console.log(fullName.length);


//toUpperCase ka matlab string ma mojod alpha batiecs ko uppercase kr dy ga for ex
//console.log(fullName.toUpperCase()); 
//or tolowercase bhi touppercase ki tarha kam karta ha bas is se alpha batiecs ko lowercase kar dy ga
//slice () agr mujy fullname ma se apnimarzi ka cracters show krwane han to like usamazafar ma se usama ko show karwana ha to ma slice()ko use karonga for ex
//start index ap ko apni string kanha se shoro karni ha 
//end index or ap ko kanha tak jana ha
let newstring=fullName.slice(0,5);  //slice jo ha vo 0 se sorho hota ha lakin janha pr khatam hota ha ya us nub ko count nhi karta for ex
console.log(newstring);