// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let holiday = 'THANKSGIVING'

console.log(holiday.toUpperCase())
//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)

let newstr = 'string'

alert(newstr.slice(-3))
// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.

function numberTime(a,b,c,d,e) {
    alert(Math.abs(100 - a - b - c - d - e))
}
// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
function soManyNumbers(a,b,d){
    let newarr = [a,b,d];
    console.log(`${Math.max(newarr)} ${Math.min(newarr)}`)
}


// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.
// function flip(){
//     let it = Math.random().toFixed(2) * 100
//     if(it % 2 == 0){
//         return 'heads' 
//     }else if(it % 2 != 0){
//         return 'tails' 
//     }
// }
const flip = _ => (Math.random().toFixed(2) * 100) % 2 == 0 ? 'heads' : 'tails'
console.log(flip())
//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.

function ididntfinish(a){
    let i = 1;
    while(i <= a){
        console.log(flip());
        i++
    }
} ;

ididntfinish(37)