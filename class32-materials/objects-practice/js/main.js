// Come up with with a parent class
// Extend that parent class into two children
// Use Encapsulation, Abstraction, Inheritance, and Polymorphism 
// class Contractor{
//     constructor(name,role){
//         this._name = name
//         this._role = role
//     }
//     get name(){
//         return this._name
//     }
//     get role(){
//         return this._role
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs!`)
//     }
// }
// class Front extends Contractor{
//     constructor(name,role,tech){
//         super(name,role)
//         this._tech = tech
//     }
//     get tech(){
//         return this._tech
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`)
//     }
// }
// class Back extends Contractor{
//     constructor(name,role,tech){
//         super(name,role)
//         this._tech = tech
//     }
//     get tech(){
//         return this._tech
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`)
//     }
// }
// let bob = new Contractor('Bob','Front-end')
// let simba = new Front('Simba','Front-end','React')
// let machi = new Back('The Machine','Back-end','Node')

// let agency = [bob,simba,machi]

// for(person of agency){
//     person.sayHello()
// }


class Contractor{
    constructor(name, role){
        this._name = name;
        this._role = role
    }

    get name(){
        return this._name
    };

    get role(){
        return this._role
    }

    introduce(){
        console.log(`Hi I'm ${this._name} and I am part of the 100 Devs team as a ${this._role}.`)
    }
}

class Front extends Contractor{
    constructor(name, role, position){
        super(name);
        super(role);
        this._mainRole = position;
    }

    get postion(){
        return this._mainRole
    }

    introduce(){
        super.introduce()
        console.log(`I primarily focus on front end work dealing with ${this._mainRole} `)
    }
}

class Back extends Contractor{
    constructor(name, role, position){
        super(name);
        super(role);
        this._mainRole = position;
    }

    get postion(){
        return this._mainRole
    }

    introduce(){
        super.introduce()
        console.log(`I primarily focus on back end work dealing with ${this._mainRole} `)
    }
}

let machi = new Front ('Machi', 'FrontEnd', 'Design');
