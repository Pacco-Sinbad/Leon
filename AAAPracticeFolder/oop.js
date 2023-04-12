// // creat a stopwatch that can start stop show duration and reset. it throws an error if start or stop are called repetitivley

// // this was the solution. i did not come up with it because i didnt know where to start getting time and was frustrated trying to find the answer.

// // function Stopwatch() {
// //     let startTime, endTime, running, duration=0;

// //     this.start = function() {
// //         if (running)
// //             throw new Error('Stopwatch has already started.');
        
// //         running = true;
        
// //         startTime = new Date();
// //     };

// //     this.stop = function(){
// //         if (!running)
// //             throw new Error('Stopwatch has not started yet.');

// //         running = false;

// //         endTime = new Date();

// //         const seconds = (endTime.getTime() - startTime.getTime()) /1000;
// //         duration += seconds

// //     };

// //     this.reset = function(){
// //         running = false;
// //         startTime = null;
// //         endTime = null;
// //         duration = 0;
// //     };

// //     Object.defineProperty(this, 'duration', {
// //         get: function() {return duration; }
// //     });
// // }

// //reattempt this at another date

// //   class Character {
// //     constructor(name, health, strength) {
// //       this.name = name;
// //       this.health = health;
// //       this.strength = strength;
// //       this.xp = 0; // XP is always zero for new characters
// //     }
// //     // Return the character description
// //     describe() {
// //       return `${this.name} has ${this.health} health points, ${this
// //         .strength} as strength and ${this.xp} XP points`;
// //     }
// //   }

// // const aurora = new Character("Aurora", 150, 25);
// // const glacius = new Character("Glacius", 130, 30);

// // // Aurora is harmed by an arrow
// // aurora.health -= 20;

// // // Aurora gains a strength necklace
// // aurora.strength += 10;

// // // Aurora learns a new skill
// // aurora.xp += 15;

// // console.log(aurora.describe());
// // console.log(glacius.describe());

// class Dog{
//     constructor(name, breed, height){
//         this.name = name;
//         this.breed = breed;
//         this.height = height;
//     };
//     describe(){
//         console.log(`${this.name} is a ${this.breed} doge measuring ${this.height}`)
//     }
//     cat(){
//         console.log(`look, a cat! ${this.name} barks: ${this.bark()}`)
//     }
//     bark(height) {
//         if(height > 60){
//             return 'Grrr! Grrr!'
//         }else return 'Woof! woof!'
//     }
// }

// class BankAccount{
//     constructor(name, balance, credit){
//         this.name = name;
//         this.balance = balance;
//         this.credit = credit;
//     };
//     describe(){
//         console.log(`The owner of ${this.name} account has a balance of ${this.balance} and an available credit amount of ${this.credit}.`)
//     }
// }

class Stopwatch{
    constructor (){
        this.first = 0
        this.second = 0
        this.running = false
    }
    start(){
        if(this.running == false){
            this.first = new Date().getTime();
            this.running = true;
        }else {
            throw new Error ('Already Running');
        }    
    }
    stop(){
        if(this.running == true){
            this.second = new Date().getTime();
            this.running = false;
        }else {
            throw new Error ('The SW is not running yet.');
        }
    }
    reset(){
        this.first = 0;
        this.second = 0;
        this.running = false;
    }
    duration(){
        if(this.running == false){
            let split = (this.second - this.first) / 1000;
            console.log(split);
        }else {
            throw new Error ('the stopwatch is currently running');
        }
    }
}

const sw = new Stopwatch()

