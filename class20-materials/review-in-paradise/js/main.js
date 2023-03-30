// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let favFood = 'Pizza'
favFood = 'More Pizza'
alert(favFood)
//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
let str = 'String'
alert(str.charAt(1))
// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
function threeNum(a,b,c){
    let number = (a / b) * c
    alert(number)
}

threeNum(2,3,5)

// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.

function oneNum(a){
    console.log( Math.cbrt(a).toFixed(4) )
}
oneNum(9)
// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
function months(month){
    month = month.toLowerCase()
    if(month == 'january' || month =='february' || month =='march' || month =='april' || month =='may' || month =='october' || month =='november' || month =='december' ){
        alert(boo)
    }else{
        alert(yay)
    }
}

//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.
function twoNum(a,b){
    for(let i = a; i <=b; i++){
        if( i % 5 != 0){
            console.log(i)
        }
    }
}

