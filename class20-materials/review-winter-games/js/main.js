//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)
let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]

function onlyEven(arr){
    let newArray = []
    arr.map((x, i) => x % 2 == 0 ? newArray.push(x) : x)
    return newArray
}

const evenNumbers = onlyEven(numbers)
console.log(evenNumbers)