

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNumber = myNums.filter( (number) =>(number > 4 && number <7))

console.log(newNumber);



console.log(myNums.filter( (number) =>(number > 6)));


// The filter with Arrow function 

const myNum2 =  myNums.filter((num)=>{

  return  num === 5
})


console.log(myNum2);