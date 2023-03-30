//Create a function that has a loop that prints '21' 21 times to the console and then call that function
//Bonus can you make it print '21' 21 times to the dom?


function poop(){
    for (i=1; i<=21; i++) {
        newElement = document.createElement('p')
        document.querySelector('body').appendChild(newElement)
        
}
    document.querySelectorAll('p').innerText = '21'
    }  
poop()