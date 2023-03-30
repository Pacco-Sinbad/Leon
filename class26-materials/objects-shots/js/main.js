//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
//Get a dog photo from the dog.ceo api and place the photo in the DOM
document.querySelector('button').addEventListener('click', shot)
let i = 0
function shot(){
let url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${document.querySelector("input").value}`
// let url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=mojito'
  fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        if(i> data.drinks.length-1){
            i = 0
            console.log(data)
        document.querySelector("h2").innerHTML=data.drinks[i].strDrink;
        document.querySelector('img').src=data.drinks[i].strDrinkThumb;
        document.querySelector('h3').innerText=data.drinks[i].strInstructions;
        }else{
        console.log(data)
        document.querySelector("h2").innerHTML=data.drinks[i].strDrink;
        document.querySelector('img').src=data.drinks[i].strDrinkThumb;
        document.querySelector('h3').innerText=data.drinks[i].strInstructions;
    //   document.querySelector("h2").innerText=(data)
        }
        i+=1
})
    .catch(err => {
        console.log(`error ${err}`)
    });

    
}
