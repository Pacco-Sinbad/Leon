//Write your pseduo code first! 

// get the temperature

document.querySelector('#convert').addEventListener('click', convert)

// convert the temperature

function convert( ){
 
  let temp = document.querySelector('#cel').value 
      temp = temp * 9 / 5 + 32
    
    document.querySelector('#placeForTemp').innerText = temp
}
// output the result



