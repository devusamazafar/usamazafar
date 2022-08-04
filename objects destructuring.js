//objects destructuring

const band={
     bandName:"led zeppline",
     famousSong:"stairway to heaven",
     usrename:"usama",
     age:22,
}
//destructuring
const{bandName,famousSong,...usama}=band;
console.log(bandName,famousSong);
console.log(usama);
