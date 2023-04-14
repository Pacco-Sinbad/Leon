class User{
    constructor(name){
        this.name = name;
        this.character = 'X';
        this.firstorsecond = 'first';
    };
    charSelect = () => document.querySelector('.XO').addEventlistener('click', this.xoro);
    xoro(){
        this.character = 'O';
    };
    orderSelect = () => document.querySelector('.order').addEventListener('click', this.order);
    order(){
        this.firstorsecond = 'second';
    };
};

class Computer{
    constructor(){
        this.character 
        this.firstorsecond
    }
}


class TicTacToe{
    constructor(){

    };
    newGame(){
        //reset board
        let name = prompt('please tell me your name');
        name = new User(name);
    };
    botsTurn = () => {
        if(user != 1){
            //place character opposite of user in a random spot using math.random times 9. ceil
            //use additional conditionals to determine if that spot already has a value
        }
    };
    usersTurn = () => {
        //user clicks an area on the board and using conditionals to determine if that spot has been taken or not is than able or not able to place their character in that location
        user = 0 // at the end so that the bot knows it is allowed to play
    }
}