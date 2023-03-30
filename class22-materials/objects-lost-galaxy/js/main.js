//Create a mouse object that has four properties and three methods
let mouse = {
    color: 'grey',
    cute: true,
    tailLength: 'extra long',
    hairLength: 'short',
    hidingplace: 'fridge',

    squeak(){
        return `SQUEAAAAKKK!!!!`
    },
    scurry(){
        return `the mouse scurried under the ${this.hidingplace}`
    },
    cheese(){
        return `the mouse found a hunk of cheese`
    }
}