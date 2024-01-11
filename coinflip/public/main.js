
const clear = document.querySelector('#clear')

clear.addEventListener('click', _ => {


    fetch('/clear_flips', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({}),
    })
    .then(res =>{
        window.location.reload(true)
    })
})

//set up the button to delete the oldest flip using the delete method with the /flips route. and using the delete method on the server side as well (app.delete) this will most likely have to be handled on the client side but using logic i think i can tell the program to start deleting after a certain number of button clicks. this counter can then just reload when the page reloads.
//the other issue will be how the flips are displayed because currently they are from top down when in reality we would like for the newest flip to be displayed at the top.