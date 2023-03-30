// *Variables*
// Create a variable and console log the value
let commie = 27
console.log(commie)
// Create a variable, add 10 to it, and alert the value
let lywood = 13
alert(lywood +10 )
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function sumfour(a, b, c, d){
    alert(a - b - c - d)
}
sumfour(2,3,5,7)
// Create a function that divides one number by another and returns the remainder
function quo(a,b){
    return a % b
}
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function jumanji(a,b){
    if(a + b > 50){
        alert('JUMANJI')
    }else{ alert('meh')}
}
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function divisible(a,b,c){
    if( (a * b * c) % 3 === 0 ){
        alert('zebra')
    }
}

divisible(21,23,43)
//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function why(a, word){
    for(i=1; i<=a; i++){
        console.log(word)
    }
}
why(21,'assholes')

