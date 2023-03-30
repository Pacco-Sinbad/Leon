//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let arr = [1,2,3,4,5,6,7,8]

alert(arr.reduce((tot,cur) => tot = tot + cur, 0));
//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
function take(arr){
    return arr.map((x) => x^2)
}
let sqrs = take(arr)
//Create a function that takes string
//Print the reverse of that string to the console
function stringy(str){
    console.log(str.split('').reverse().join(''))
}
stringy('this better fucking work')
//Create a function that takes in a string
//Alert if the string is a palindrome or not
function another(str){
    if(str == str.toLowerCase().split("").reverse().join("")){
        alert('PALINDROME')
    }
}