//everything must be in an object no exceptions
// each game should be a new object that is created when the new game button is pressed
class GameSession{
    constructor(){
    // this.numberOfGames = 0
    // this.botWins = 0
    // this.userWins = 0
    this.start = document.querySelector('#start')
    this.start.addEventListener('click', this.resetWins)
    };
    resetWins(){
        this.numberOfGames = 0
        this.botWins = 0
        this.userWins = 0
        console.log(this)
        console.log(this.numberOfGames)
        console.log(this.botWins)
        console.log(this.userWins)
        document.querySelector('#newgame').style.visibility = 'visible'
        document.querySelector('#start').innerText = 'Reset Game Session'
    };
};
const localSession = new GameSession


class TicTacToe{
    constructor(){
        this.button = document.querySelector('#newgame')
        this.button.addEventListener("click", this.newGame)
    };
    newGame(){
        let gameTiles = document.querySelectorAll('td')
        gameTiles.forEach((x)=> x.innerText = 'x/o')
        localSession.numberOfGames++
        console.log(localSession)
    };
};

const game1 = new TicTacToe



