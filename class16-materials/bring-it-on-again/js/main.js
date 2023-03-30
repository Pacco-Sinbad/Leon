// *Variables*
// Declare a variable, assign it a value, and alert the value
// let num
// num = 35
// alert(num)
// Create a variable, divide it by 10, and console log the value
// let cow = 45
// let chicken = cow / 10
// console.log(chicken)
// *Functions*
// Create a function that multiplys 3 numbers and alerts the product
// function multiplyThree(a,b,c){
//     alert(a * b * c)
// }
// multiplyThree(3,3,3)
// Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. Console log the result
// function takeFour(a,b,c,d){
//     let thingy = a + b - c - d
//     console.log(thingy)
// }
// takeFour(3,4,5,6)
// *Conditionals*
// Create a function that takes in 3 numbers. Starting with 100 add the first number, subtract the second, and divide the third. If the value is greater then 25, console log "WE HAVE A WINNNA"
// function winna(a,b,c){
//     let quo = (100 + a - b) / c
//     if (Number(quo) > 25 ){
//         console.log('We have a winna')
//     }
// }
// winna(23,42,2)
// Create a function that takes in a day of the week. If it is a weekend alert, "weekend" and if not alert "week day". Handle capitilization and if the user does not enter a day of the week alert "Try again!"
// function whatTheFuckDayIsIt(day){
//     day = day.toLowerCase()
//     if(day == 'sunday' || day == 'saturday'){
//         alert('Weekend')
//     }else if(day == 'monday' || day == 'tuesday' || day == 'wednesday' || day == 'thursday' || day == 'friday'){
//         alert('weekday')
//     }else{
//         alert('try again')
//     }
// }
// whatTheFuckDayIsIt('Monday')
//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3

function multiplesOfThree(a){
    for(i=1; i<=a; i+=3){
      console.log(i) 
    }
}
multiplesOfThree(15)