//Arrays

//Create and array of tv shows. Loop through and print each show to the console
let shows = ['house', "99", 'office']
shows.forEach((x) => console.log(x))
//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays
let numbers = [2,1,3,5,4]

let newnumbers = numbers.filter( x => x % 2 === 0)

console.log(newnumbers)
//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number
function takeItAllIn(arr){
     let newnumberspoop = arr.sort((a,b) => a-b);
     console.log(newnumberspoop);
    alert((newnumberspoop[1] * newnumberspoop[newnumberspoop.length-2])) ;
};

takeItAllIn(numbers)