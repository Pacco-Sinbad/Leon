//---Easy
//create a function that subtracts two numbers and alerts the difference
function addTwoNumbers(a,b){
    let sum = a + b
    alert(sum)
}
//create a function that divides three numbers and console logs the quotient

//create a function that multiplys three numbers and returns the product

//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number

//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number
function fourNumbers(a,b,c,d){
    let quotient = a * b
    if(quotient > 100){
        let sum = quotient + c + d
        console.log(sum)
    }else if(quotient < 100){
        let sum = quotient - d -c
        console.log(sum)
    }else{
        let mod = (a * b * c) % d
        console.log(mod)
    }

    }
