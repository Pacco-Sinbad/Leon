// function shuffleCheck(){
//     fetch(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=0`)
//     .then(res => res.json()) // parse response as JSON
//     .then(data => {
        
//     })   
      
    
//     .catch(err => {
//         alert('Please Start A New Game')
//         console.log(`error ${err}`)
//     });    
// }

////////////////////////////////////////////////////////////////////////////

document.querySelector('.reset').addEventListener('click', newGame)

function newGame(){
    fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      localStorage.setItem('deckID', data.deck_id)
      deckID = data.deck_id
    })
    .catch(err => {
        console.log(`error ${err}`)
    });    

} 

/////////////////////////////////////////////////////////////////////////////

document.querySelector('.play').addEventListener('click', draw)
// if(localStorage.getItem('deckID'))
function draw(){
    deckID = localStorage.getItem('deckID')
    const url = `https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=2`
    fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        console.log(data)
        document.querySelector('#playerOne').src = data.cards[0].image
        document.querySelector('#playerTwo').src = data.cards[1].image
        if(data.remaining == 0){
            fetch(`https://deckofcardsapi.com/api/deck/${deckID}/shuffle/`)
            .then(res => res.json()) // parse response as JSON
            .then(data => {
              alert('Deck Reshuffled')})   
              
            
            .catch(err => {
                alert('Please Start A New Game')
                console.log(`error ${err}`)
            });    
       }
         
      
    })
    .catch(err => {
        alert('Please Start A New Game')
        console.log(`error ${err}`)
    });    
// shuffleCheck();
}
/////////////////////////



/////////////////////////////////////

