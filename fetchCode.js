fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
    })
    .catch(err => {
        console.log(`error ${err}`)
    });



    //Get a dog photo from the dog.ceo api and place the photo in the DOM
fetch("https://dog.ceo/api/breeds/image/random")
.then(res => res.json()) // parse response as JSON
.then(data => {
  document.querySelector("img").src=(data.message)
})
.catch(err => {
    console.log(`error ${err}`)
});

//Add A try Catch Block to the function below

async function getACuteDogPhoto(){
  try{
    const res = await fetch('')
    const data = await res.json()
    console.log(data)
  }catch(err){
    alert(err)
  }  
}

getACuteDogPhoto()