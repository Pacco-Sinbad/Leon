//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods


class NetflixTvShow{
    constructor(mainCharacter, genre, setting, rating){
        this.character = mainCharacter,
        this.genre = genre
        this.setting = setting
        this.rating = rating
    }

        playShow() {
            alert('the show is starting')
        }
        stopShow(){
            alert('the show is paused')
        }
        areYouStillThere(){
            this.stopShow()
            alert('Are you still There?')
        }
    
}

let bridgerton = new NetflixTvShow('Weird Girl', 'Period Romantic Drama', 'Old England', 'XXX');
