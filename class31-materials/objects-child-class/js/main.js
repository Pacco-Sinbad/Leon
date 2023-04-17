//Create an a class and extend it - Can be anything you would like it to be! 

class Animal{
    constructor(name){
        this.name = name
    }
    speak(){
        console.log(`${this.name} makes a sound`)
    }
}

class Wildanimal extends Animal{
    constructor(name,origin,endangered){
        super(name)
        this.origin = origin
        this.endangered = endangered
    }
    speak(){
        console.log(`${this.name} makes a ferocious sound`)
    }
}

class Monkey extends Wildanimal {
    constructor(name,origin,endangered){
        super(name)
        super(origin)
        super(endangered)
    }
    swing(){
        console.log(`${this.name} made like a tree and swung outta here!!!`)
    }
}