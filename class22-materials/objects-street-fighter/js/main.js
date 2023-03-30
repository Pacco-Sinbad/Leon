//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
function StreetFighter(fightername, fighterspecialmove, fightercostumeColor, fighterspecies){
    this.name = fightername,
    this.specialMove = fighterspecialmove,
    this.costumeColor = fightercostumeColor,
    this.species = fighterspecies,

    this.finishThem = function() {
        console.log(`${this.specialMove}`);
    },
    this.openning = function() {
        alert(`hyyyisah`);
    },
    this.die = function() {
        this.status = dead;
    }
}