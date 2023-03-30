//Write your pseduo code first! 
// listen for celsius number Input and tell function to run

// run function that 
//     assigns that number to a variable
//     calculates the math with that variable in it 

//     assign that value to ferenheit variable 
//     out put that into html Element


document.querySelector('#convert').addEventListener('click', equation)

function equation(){
    const cel = document.querySelector('#celsius').value 
    const far = cel * 9 / 5 + 32
    document.querySelector('#farenheit').innerText = far
}