//Create a stopwatch object that has four properties and three methods
let stopwatch= {
    color: ',black',
    make: ',accutell',
    material: ',plastc',
    size: ',pocketsized',

    telltime(time){
        return `the current time is ${time}`;
    },
    split(currenttimer){
        return ` ${currenttimer} `;
        this.reset();
    },
    reset(){
        stopwatch.time = '0'
    }
}