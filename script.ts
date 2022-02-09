var myArray: number[] = [1, 2, 3, 4, 5 ,6 ,7,8,9,10];


for(let i of myArray){ // 1
    for(let y of myArray){
        let result : string = `${i} X  ${y}  = ${i * y}` 
        console.log(result)
     
    }
}



