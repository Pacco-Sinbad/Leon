//Create an espresso machine constructor that makes machines with 4 properties and 3 methods
class EspressoMachine{
    constructor(material,beanCapacity,price,counterRealestate){
        this.material = material;
        this.beanCapacity = beanCapacity;
        this.price = price;
        this.counterRealestate = counterRealestate;
    };
    espressoShots(x){
        console.log(`${x} number of shots in your drink`);
    };
    steamyMilk(){
        alert('milk go fzzzzzzzzz');
    };
    grindBeans(c){
        console.log(`grind enough bean to brew ${c} cups of coffee`);
    };
};

let merFerExpresss = new EspressoMachine('stainless steel', 8, 300.99, '2sqft')