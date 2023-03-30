//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let stringOfNumbers = [1,2,3,4,5,6,7,8,9,10,11,12];

alert( stringOfNumbers.reduce((total,current)=> {current + total, 0}))
//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
function doStuff(arr){
    return arr.map((x) => x^2)
}
//Create a function that takes string
//Print the reverse of that string to the console
function doMore(str){
    console.log(str.reverse())
}
//Create a function that takes in a string
//Alert if the string is a palindrome or not
function enough(str){
    if(str.toLowerCase() === str.reverse().toLowerCase()){
        alert('Palindrome')
    }
}