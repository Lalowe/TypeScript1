"use strict";
let myArray2 = ["Vladimir", "Vlado", "Lalo", "Laloslav"];
for (let names in myArray2) { // print only index
    console.log(names);
}
for (let names of myArray2) { // print only values
    console.log(names);
}
// print both , index and value
myArray2.forEach(function (value, index) {
    console.log(`Here is value of an array ${value} with index in array ${index}.`);
});
