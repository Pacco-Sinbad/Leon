//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 
let array = [10,3,2]

function multiply(arr){
   return arr.reduce((total, current) => total * current, 1)
}

alert(multiply(array))