//Create a constructor with 4 properties and 3 methods
function MakePizza(toppings,sauce,cheese,crust){

    this.toppings = toppings,
    this.sauce= sauce,
    this.cheese = cheese,
    this.crust = crust,
    this.bake = function(){
        alert("put it in at 420degrees")
    }
    
}

let myFavoritePizza = new MakePizza(['pepperoni', 'sausage', 'onions'], 'extra', 'cheddar only', 'extra thicc')

console.log(myFavoritePizza)