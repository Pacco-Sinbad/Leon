//---Easy
//create a function that subtracts two numbers and alerts the difference
let num = 0
function sum(a,b){
    num = a + b
    alert(num)
}
//create a function that divides three numbers and console logs the quotient
function divide(a,b,c){
    num = a / b / c
    console.log(num)
}
//create a function that multiplys three numbers and returns the product
function multiply(a,b,c){
    num = a * b * c
    return num
}
//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number

document.querySelector('h1').addEventListener('click', equation)

// function gatherValues(){
//     a = document.querySelector('#a')
//     b = doucment.querySelector('#b')
//     c = doucment.querySelector('#c')
//     function equation(a,b,c){
//         let num
//         let rest
//         num = Number(a) + Number(b)
//         rest = Number(num) % Number(c)
//         return num
//     }
// }

function equation(){
    a = document.querySelector('#a')
    b = doucment.querySelector('#b')
    c = doucment.querySelector('#c')
    let num
    let rest
    num = Number(a) + Number(b)
    rest = Number(num) % Number(c)
    return num
}



//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number
function equate(a,b,c,d){
    if(a*b > 100){
        console.log(a*b + c + d)
    }else if(a*b < 100){
        console.log(a*b - c - d)
    }else{
        alert((a*b*c)%d)
    }
}