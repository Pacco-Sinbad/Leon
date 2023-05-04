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
        // document.querySelector('#newgame').style.visibility = 'visible'
        document.querySelector('#reset').style.visibility = 'visible'
        document.querySelector('#start').style.visibility = 'collapse'
        game1.newGame()
        // document.querySelector('.orderOfPlay').style.visibility = 'visible' ////////////////////
    };

    resetGamesCount(){
        this.numberOfGames = 1
        this.botWins = 0
        this.userWins = 0
        game1.newGame()
        console.log("RESET SCORE")
        document.querySelector('.userscore').innerText = localSession.userWins
        document.querySelector('.botscore').innerText = localSession.botWins
    }
};



class TicTacToe{
    constructor(){
        this.turnCount = 1 /////////////////////////////////////////////

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
        gameTiles.forEach((x)=> x.innerText = '#')
        localSession.numberOfGames++
        console.log('New Game')
        if (localSession.numberOfGames % 2 == 0){
            this.turnCount = 1
        }else this.turnCount = 0///////////////// if breaking chagne back to 2
        Bot.botCheck()
    };
    topLeft(){
        if(document.querySelector('#tl').innerText == '#'){
            document.querySelector('#tl').innerText = 'x'
            this.turnCount++ 
            winningConditions.whoWon()
            }else alert('please choose another tile')   
    };
    topCenter(){
        if(document.querySelector('#tc').innerText == '#'){
            document.querySelector('#tc').innerText = 'x'
            this.turnCount++ 
            winningConditions.whoWon()
            }else alert('please choose another tile')

    }
    topRight(){
        if(document.querySelector('#tr').innerText == '#'){
            document.querySelector('#tr').innerText = 'x'
            this.turnCount++ 
            winningConditions.whoWon()
            }else alert('please choose another tile')

    }
    centerLeft(){
        if(document.querySelector('#cl').innerText == '#'){
            document.querySelector('#cl').innerText = 'x'
            this.turnCount++ 
            winningConditions.whoWon()
            }else alert('please choose another tile')

    }
    centerCenter(){
        if(document.querySelector('#cc').innerText == '#'){
            document.querySelector('#cc').innerText = 'x'
            this.turnCount++ 
            winningConditions.whoWon()
            }else alert('please choose another tile')

    }
    centerRight(){
        if(document.querySelector('#cr').innerText == '#'){
            document.querySelector('#cr').innerText = 'x'
            this.turnCount++ 
            winningConditions.whoWon()
            }else alert('please choose another tile')

    }
    bottomLeft(){
        if(document.querySelector('#bl').innerText == '#'){
            document.querySelector('#bl').innerText = 'x'
            this.turnCount++ 
            winningConditions.whoWon()
            }else alert('please choose another tile')

    }
    bottomCenter(){
        if(document.querySelector('#bc').innerText == '#'){
            document.querySelector('#bc').innerText = 'x'
            this.turnCount++ 
            winningConditions.whoWon()
            }else alert('please choose another tile')

    }
    bottomRight(){
        if(document.querySelector('#br').innerText == '#'){
            document.querySelector('#br').innerText = 'x'
            this.turnCount++ 
            winningConditions.whoWon()
            }else alert('please choose another tile')

    }        
};

let Bot = {
    ran: 0,
    botTurn(){
    let tile
    console.log('Turn ' + game1.turnCount + ' BotTurn')
    if(game1.turnCount % 2 == 0){
            if(game1.turnCount < 2){
                alert('Bot Starts')
            }
            tile = Math.ceil(Math.random()*9)
            console.log(tile + 'BOT PICK')
        }else alert('You Start')

    if(tile === 1){
            if(document.querySelector('#tl').innerText == '#'){
            document.querySelector('#tl').innerText = 'o'
            game1.turnCount++
            this.ran++
            winningConditions.whoWon()
            }else this.botTurn()
            
    }else if(tile === 2){
            if(document.querySelector('#tc').innerText == '#'){
            document.querySelector('#tc').innerText = 'o'
            game1.turnCount++
            this.ran++  
            winningConditions.whoWon()
            }else this.botTurn()
            
    }else if(tile === 3){
            if(document.querySelector('#tr').innerText == '#'){
            document.querySelector('#tr').innerText = 'o'
            game1.turnCount++
            this.ran++  
            winningConditions.whoWon()
            }else this.botTurn()
            
    }else if(tile === 4){
            if(document.querySelector('#cl').innerText == '#'){
            document.querySelector('#cl').innerText = 'o'
            game1.turnCount++
            this.ran++  
            winningConditions.whoWon()
            }else this.botTurn()
            
    }else if(tile === 5){
            if(document.querySelector('#cc').innerText == '#'){
            document.querySelector('#cc').innerText = 'o'
            game1.turnCount++
            this.ran++  
            winningConditions.whoWon()
            }else this.botTurn()
            
    }else if(tile === 6){
            if(document.querySelector('#cr').innerText == '#'){
            document.querySelector('#cr').innerText = 'o'
            game1.turnCount++
            this.ran++  
            winningConditions.whoWon()
            }else this.botTurn()
            
    }else if(tile === 7){
            if(document.querySelector('#bl').innerText == '#'){
            document.querySelector('#bl').innerText = 'o'
            game1.turnCount++ 
            this.ran++ 
            winningConditions.whoWon()
            }else this.botTurn()
            
    }else if(tile === 8){
            if(document.querySelector('#bc').innerText == '#'){
            document.querySelector('#bc').innerText = 'o'
            game1.turnCount++ 
            this.ran++ 
            winningConditions.whoWon()
            }else this.botTurn()
            
    }else if(tile === 9){
            if(document.querySelector('#br').innerText == '#'){
            document.querySelector('#br').innerText = 'o'
            game1.turnCount++ 
            this.ran++ 
            winningConditions.whoWon()
            }else this.botTurn()
           
    }
    
},
    botCheck(){
        console.log('Bot Check ' + ' ran' + this.ran + ' turn' + game1.turnCount)
        if(game1.turnCount <= 10){
        if(this.ran == 0){           
            this.botTurn()
         }else this.ran = 0
        }
        
    }
        
}   

let winningConditions = {
    whoWon(){
        if(document.querySelector('#tl').innerText == 'x' && document.querySelector('#tc').innerText == 'x' && document.querySelector('#tr').innerText == 'x' ){
            alert('You Won')
            game1.newGame()
            this.userWin()
            return
        }else if(document.querySelector('#cl').innerText == 'x' && document.querySelector('#cc').innerText == 'x' && document.querySelector('#cr').innerText == 'x' ){
            alert('You Won')
            game1.newGame()
            this.userWin()
            return
        }else if(document.querySelector('#bl').innerText == 'x' && document.querySelector('#bc').innerText == 'x' && document.querySelector('#br').innerText == 'x' ){
            alert('You Won')
            game1.newGame()
            this.userWin()
            return
        }else if(document.querySelector('#tl').innerText == 'x' && document.querySelector('#cl').innerText == 'x' && document.querySelector('#bl').innerText == 'x' ){
            alert('You Won')
            game1.newGame()
            this.userWin()
            return
        }else if(document.querySelector('#tc').innerText == 'x' && document.querySelector('#cc').innerText == 'x' && document.querySelector('#bc').innerText == 'x' ){
            alert('You Won')
            game1.newGame()
            this.userWin()
            return
        }else if(document.querySelector('#tr').innerText == 'x' && document.querySelector('#cr').innerText == 'x' && document.querySelector('#br').innerText == 'x' ){
            alert('You Won')
            game1.newGame()
            this.userWin()
            return
        }else if(document.querySelector('#tl').innerText == 'x' && document.querySelector('#cc').innerText == 'x' && document.querySelector('#br').innerText == 'x' ){
            alert('You Won')
            game1.newGame()
            this.userWin()
            return
        }else if(document.querySelector('#tr').innerText == 'x' && document.querySelector('#cc').innerText == 'x' && document.querySelector('#bl').innerText == 'x' ){
            alert('You Won')
            game1.newGame()
            this.userWin()
            return
        }else if(document.querySelector('#tl').innerText == 'o' && document.querySelector('#tc').innerText == 'o' && document.querySelector('#tr').innerText == 'o' ){
            alert('Bot Won')
            game1.newGame()
            this.botWin()
            return
        }else if(document.querySelector('#cl').innerText == 'o' && document.querySelector('#cc').innerText == 'o' && document.querySelector('#cr').innerText == 'o' ){
            alert('Bot Won')
            game1.newGame()
            this.botWin()
            return
        }else if(document.querySelector('#bl').innerText == 'o' && document.querySelector('#bc').innerText == 'o' && document.querySelector('#br').innerText == 'o' ){
            alert('Bot Won')
            game1.newGame()
            this.botWin()
            return
        }else if(document.querySelector('#tl').innerText == 'o' && document.querySelector('#cl').innerText == 'o' && document.querySelector('#bl').innerText == 'o' ){
            alert('Bot Won')
            game1.newGame()
            this.botWin()
            return
        }else if(document.querySelector('#tc').innerText == 'o' && document.querySelector('#cc').innerText == 'o' && document.querySelector('#bc').innerText == 'o' ){
            alert('Bot Won')
            game1.newGame()
            this.botWin()
            return
        }else if(document.querySelector('#tr').innerText == 'o' && document.querySelector('#cr').innerText == 'o' && document.querySelector('#br').innerText == 'o' ){
            alert('Bot Won')
            game1.newGame()
            this.botWin()
            return
        }else if(document.querySelector('#tl').innerText == 'o' && document.querySelector('#cc').innerText == 'o' && document.querySelector('#br').innerText == 'o' ){
            alert('Bot Won')
            game1.newGame()
            this.botWin()
            return
        }else if(document.querySelector('#tr').innerText == 'o' && document.querySelector('#cc').innerText == 'o' && document.querySelector('#bl').innerText == 'o' ){
            alert('Bot Won')
            game1.newGame()
            this.botWin()
            return
        }else Bot.botCheck()
    },
    userWin(){
        localSession.userWins += 1
        document.querySelector('.userscore').innerText = localSession.userWins
    },
    botWin(){
        localSession.botWins += 1
        document.querySelector('.botscore').innerText = localSession.botWins
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


