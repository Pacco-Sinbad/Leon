//everything must be in an object no exceptions
// each game should be a new object that is created when the new game button is pressed
class GameSession{
    constructor(){
    this.numberOfGames = 1
    this.botWins = 0
    this.userWins = 0
    this.start = document.querySelector('#start')
    this.start.addEventListener('click', _ => this.startGame())
    this.reset = document.querySelector('#reset')
    this.reset.addEventListener('click', _ => this.resetGamesCount())
    };

    startGame(){
        this.numberOfGames = 1
        this.botWins = 0
        this.userWins = 0  
        document.querySelector('#newgame').style.visibility = 'visible'
        document.querySelector('#reset').style.visibility = 'visible'
        document.querySelector('#start').style.visibility = 'collapse'
        console.log(this.numberOfGames)
        document.querySelector('.orderOfPlay').style.visibility = 'visible'
    };

    resetGamesCount(){
        this.numberOfGames = 1
        this.botWins = 0
        this.userWins = 0
        console.log(this.numberOfGames)
    }
};



class TicTacToe{
    constructor(){
        this.turnCount = 2 /////////////////////////////////////////////

        this.button = document.querySelector('#newgame')
        this.button.addEventListener("click", _ => this.newGame())

        this.one = document.querySelector('#tl')
        this.one.addEventListener('click', _ => this.topLeft())

        this.two = document.querySelector('#tc')
        this.two.addEventListener('click', _ => this.topCenter())

        this.three = document.querySelector('#tr')
        this.three.addEventListener('click', _ => this.topRight())

        this.four = document.querySelector('#cl')
        this.four.addEventListener('click', _ => this.centerLeft())

        this.five = document.querySelector('#cc')
        this.five.addEventListener('click', _ => this.centerCenter())

        this.six = document.querySelector('#cr')
        this.six.addEventListener('click', _ => this.centerRight())

        this.seven = document.querySelector('#bl')
        this.seven.addEventListener('click', _ => this.bottomLeft())

        this.eight = document.querySelector('#bc')
        this.eight.addEventListener('click', _ => this.bottomCenter())

        this.nine = document.querySelector('#br')
        this.nine.addEventListener('click', _ => this.bottomRight())

    };
    newGame(){
        let gameTiles = document.querySelectorAll('td')
        gameTiles.forEach((x)=> x.innerText = 'x/o')
        localSession.numberOfGames++
        console.log(localSession.numberOfGames)
    };
    topLeft(){
        if(document.querySelector('#tl').innerText == 'x/o'){
            document.querySelector('#tl').innerText = 'x'
            this.turnCount++ 
            }else alert('please choose another tile')   
    };
    topCenter(){
        if(document.querySelector('#tc').innerText == 'x/o'){
            document.querySelector('#tc').innerText = 'x'
            this.turnCount++ 
            }else alert('please choose another tile')

    }
    topRight(){
        if(document.querySelector('#tr').innerText == 'x/o'){
            document.querySelector('#tr').innerText = 'x'
            this.turnCount++ 
            }else alert('please choose another tile')

    }
    centerLeft(){
        if(document.querySelector('#cl').innerText == 'x/o'){
            document.querySelector('#cl').innerText = 'x'
            this.turnCount++ 
            }else alert('please choose another tile')

    }
    centerCenter(){
        if(document.querySelector('#cc').innerText == 'x/o'){
            document.querySelector('#cc').innerText = 'x'
            this.turnCount++ 
            }else alert('please choose another tile')

    }
    centerRight(){
        if(document.querySelector('#cr').innerText == 'x/o'){
            document.querySelector('#cr').innerText = 'x'
            this.turnCount++ 
            }else alert('please choose another tile')

    }
    bottomLeft(){
        if(document.querySelector('#bl').innerText == 'x/o'){
            document.querySelector('#bl').innerText = 'x'
            this.turnCount++ 
            }else alert('please choose another tile')

    }
    bottomCenter(){
        if(document.querySelector('#bc').innerText == 'x/o'){
            document.querySelector('#bc').innerText = 'x'
            this.turnCount++ 
            }else alert('please choose another tile')

    }
    bottomRight(){
        if(document.querySelector('#br').innerText == 'x/o'){
            document.querySelector('#br').innerText = 'x'
            this.turnCount++ 
            }else alert('please choose another tile')

    }        
};

let Bot = {
    ran: 0,
    botTurn(){
    let tile
    console.log(game1.turnCount)
    if(game1.turnCount % 2 == 0){
            tile = Math.ceil(Math.random()*9)
            console.log(tile)///////////////////////////////
        }else alert('Your Turn')

    if(tile === 1){
            console.log("here1")/////////////////////////////
            if(document.querySelector('#tl').innerText == 'x/o'){
            document.querySelector('#tl').innerText = 'o'
            console.log('RAN')
            game1.turnCount++
            this.ran++
            this.botCheck()
            }else this.botCheck()
            
    }else if(tile === 2){
            console.log("here2")/////////////////////////////
            if(document.querySelector('#tc').innerText == 'x/o'){
            document.querySelector('#tc').innerText = 'o'
            console.log('RAN')
            game1.turnCount++
            this.ran++  
            this.botCheck()
            }else this.botCheck()
            
    }else if(tile === 3){
            console.log("here3")/////////////////////////////
            if(document.querySelector('#tr').innerText == 'x/o'){
            document.querySelector('#tr').innerText = 'o'
            console.log('RAN')
            game1.turnCount++
            this.ran++  
            this.botCheck()
            }else this.botCheck()
            
    }else if(tile === 4){
            console.log("here4")/////////////////////////////
            if(document.querySelector('#cl').innerText == 'x/o'){
            document.querySelector('#cl').innerText = 'o'
            console.log('RAN')
            game1.turnCount++
            this.ran++  
            this.botCheck()
            }else this.botCheck()
            
    }else if(tile === 5){
            console.log("here5")/////////////////////////////
            if(document.querySelector('#cc').innerText == 'x/o'){
            document.querySelector('#cc').innerText = 'o'
            console.log('RAN')
            game1.turnCount++
            this.ran++  
            this.botCheck()
            }else this.botCheck()
            
    }else if(tile === 6){
            console.log("here6")/////////////////////////////
            if(document.querySelector('#cr').innerText == 'x/o'){
            document.querySelector('#cr').innerText = 'o'
            console.log('RAN')
            game1.turnCount++
            this.ran++  
            this.botCheck()
            }else this.botCheck()
            
    }else if(tile === 7){
            console.log("here7")/////////////////////////////
            if(document.querySelector('#bl').innerText == 'x/o'){
            document.querySelector('#bl').innerText = 'o'
            console.log('RAN')
            game1.turnCount++ 
            this.ran++ 
            this.botCheck()
            }else this.botCheck()
            
    }else if(tile === 8){
            console.log("here8")/////////////////////////////
            if(document.querySelector('#bc').innerText == 'x/o'){
            document.querySelector('#bc').innerText = 'o'
            console.log('RAN')
            game1.turnCount++ 
            this.ran++ 
            this.botCheck()
            }else this.botCheck()
            
    }else if(tile === 9){
            console.log("here9")/////////////////////////////
            if(document.querySelector('#br').innerText == 'x/o'){
            document.querySelector('#br').innerText = 'o'
            console.log('RAN')
            game1.turnCount++ 
            this.ran++ 
            this.botCheck()
            }else this.botCheck()
           
    }
    
},
    botCheck(){
        console.log(this.ran)
        if(this.ran == 0){
            console.log('didnt run')
            this.botTurn()
         }else this.ran = 0
    }
        
}   

let game1 = new TicTacToe

let localSession = new GameSession;


// document.querySelector("h1").addEventListener('click', colorchange);
// function colorchange(){
//     if(document.querySelector('h1').style.color == 'red'){
//         document.querySelector('h1').style.color = 'black'
//     }else document.querySelector('h1').style.color = 'red'   
// }


