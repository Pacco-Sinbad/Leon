//Create a conditonal that checks their age
//If under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too





document.querySelector('h1').addEventListener('click', agechecker)

function agechecker(){
    let age = document.querySelector('input').value
    if(age < 16) {
        console.log('they cannot drive')
    }else if(age < 18){
        console.log("they can't even get in the club")
    }else if(age < 30){
        console.log('you cannot rent a fancy car')
    }else{ 
        console.log('your life is over')
    }
}    

//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph
