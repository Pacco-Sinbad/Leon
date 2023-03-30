// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
let favDrink = 'monster'
console.log(favDrink.trim())
//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
let sentence = 'this is a string'
let str = sentence.search('apple')
console.log(sentence.search('apple'))
// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function shoot(){
let rps = Math.random()
if (rps < .3333){
    return 'rock'
}else if (rps > .3333 && rps < .6666){
    return 'paper'
}else {return 'scissors'}
}
// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function shotCall(shot){
    let opponent = shoot();
    if(shot === 'scissors' && opponent === 'rock'){
        return ('you lose')
    }else if(shot === 'scissors' && opponent === 'paper'){
        return ('you win')
    }else if(shot === 'rock' && opponent === 'scissors'){
        return ('you win')
    }else if(shot === 'rock' && opponent === 'paper'){
        return ('you lose')
    }else if(shot === 'paper' && opponent === 'rock'){
        return ('you win')
    }else if(shot === 'paper' && opponent === 'scissors'){
        return ('you lose')
    }else if(shot === opponent){
        return 'tie'
    }else{ shotCall(prompt("Please select rock paper or scissors"))}
}
//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
function bestOfThree(arr){
    let i = 0
    while( i < arr.length){
        console.log(shotCall(arr[i]))
        i++
    }
}

bestOfThree(['rock','paper','scissors'])