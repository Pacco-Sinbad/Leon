let user = {}
user.name = 'John'
user.surname = 'Smith'
user.name = 'Pete'
delete user.name
//
function isEmpty(obj){
    alert( obj === {} ? true : false)
}
////proper solution uses a for key in obj loop. if the loop start that means the object isnt empty.
function isItEmpty(obj){
    for (let key in obj){
        return false
    } 
    return true
}
//
function sumOfEmployeeSalaries(obj){
    let sum = 0
    for (let key in obj){
        sum += +(obj[key])
    }
    console.log(sum)
}

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

sumOfEmployeeSalaries(salaries)

//

function multiplyNumeric(obj){
    for (let key in obj){
        if(obj[key] % 1 === 0){
            obj[key]*= 2
        }
    }
    console.log(obj)
}

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
  multiplyNumeric(menu);

  // the proper conditional here would have been == 'number' which makes sense because %1 returns whether the keys value is an integer. floaated values would not work in this instance.