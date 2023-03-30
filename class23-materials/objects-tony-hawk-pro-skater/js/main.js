//Create a Tony Hawk Pro Skater constructor that makes fighting game characters with 4 properties and 3 methods
function Skater(name,height,goofy,mongo,board,wheelcolor){
    this.name = name,
    this.height = height,
    this.goofy = goofy,
    this.mongo = mongo,
    this.board = board,
    this.wheelcolor = wheelcolor,

    this.heelflip = function(){
        alert('50 POINTS')
    },
    this.kickflip = function(){
        alert('100 POINTS')
    },
    this.comboTrick = function(){
        alert('bonus 300 points')
    }
}