//Create a function that takes in a number. The function should return an array that contains every number from 1 to that number as seperate elements

function numberList(x){
    let newArr = []
    for (let i = 0; i <= x; i++){
        newArr[i] = i
    }
    console.log(newArr)
}


numberList(20)