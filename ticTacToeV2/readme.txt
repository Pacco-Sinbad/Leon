The goal here is to use a "controller" object to indicate to the other objects whether or not to run their programs.
Those objects will in turn return true or false to the "controller" object.
Following will be a general list of the objects I think need to be in the program and the responsibilities I would like tied to those objects.


Game Session
    This will keep track of:
        Number of Games played
        Wins accumulated by the bot and the Player
    This will only hold info sent to it by the game and display that info in the dom. 

Game
    This will keep track of:
        the turn count
        the boards condition
        winning combos

user/bot    
    this will keep track of:
        which player should be placing a "tile"
        returning that info to the Game object
