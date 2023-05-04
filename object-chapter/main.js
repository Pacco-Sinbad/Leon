//    ///////                    THE JAVASCRIPT LANGUAGE CHAPTER FROM JAVASCRIPT.INFO                     //////
   
   
   
//                             ////OBJECTS THE BASICS/////

// ////OBJECTS////
// let user = {}
// user.name = 'John'
// user.surname = 'Smith'
// user.name = 'Pete'
// delete user.name
// //
// function isEmpty(obj){
//     alert( obj === {} ? true : false)
// }
// ////proper solution uses a for key in obj loop. if the loop start that means the object isnt empty.
// function isItEmpty(obj){
//     for (let key in obj){
//         return false
//     } 
//     return true
// }
// //
// function sumOfEmployeeSalaries(obj){
//     let sum = 0
//     for (let key in obj){
//         sum += +(obj[key])
//     }
//     console.log(sum)
// }

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   }

// sumOfEmployeeSalaries(salaries)

// //

// function multiplyNumeric(obj){
//     for (let key in obj){
//         if(obj[key] % 1 === 0){
//             obj[key]*= 2
//         }
//     }
//     console.log(obj)
// }

// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
//   };
  
//   multiplyNumeric(menu);

  // the proper conditional here would have been == 'number' which makes sense because %1 returns whether the keys value is an integer. floaated values would not work in this instance.

  ////OBJECT REFERENCES AND COPYING////
  //no tasks
  ////GARBAGE COLLECTION/////
  //no tasks
  /////OBJECT MEHTODS, "THIS"////

  let calculator = {
    read(){
        this.a = +prompt('select the first value', 0)
        this.b = +prompt('select the second value', 0)
    },
    sum(){
        return this.a + this.b
    },
    mul(){
        return this. a * this.b
    }
  }

  let ladder = {
    step: 0,
    up() {
      this.step++;
      return this
    },
    down() {
      this.step--;
      return this
    },
    showStep: function() { // shows the current step
      alert( this.step );
      return this
    }
  };

  ladder.up().up().down().showStep().down().showStep();

  ////CONSTRUCTOR, OPERATOR "NEW"////
  

  ////OPTIONAL CHAINING '?'////


  ////SYMBOL TYPE////


  ////OBJECT TO PRIMITIVE CONVERSION////




                                                    ////DATA TYPES/////

