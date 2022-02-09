var person = { 
    fName:"Vladimir", 
    iName:"Petras" ,
 }
// put object into array
let myArray1 : Array<object> = [person, person, person,person,person,person,person,person,person,person]
myArray1.forEach(function(value,index){
    console.log(`Array element ${value} with index ${index}`);  
})
// let myArray = ["Yoda","Mace Windu", "Obi-Wan"];
// myArray.forEach(function(value, index) {
//   console.log(`Array element ${value.propertyName} with index ${index}`);
// })