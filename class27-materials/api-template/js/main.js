//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://api.nasa.gov/planetary/apod?api_key=RYriftkBbxqVe12f4yHvYik1pjbxbYqvayFlS6DH&date=${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        if(data.media_type === 'image'){
          document.querySelector('img').src = data.hdurl
        }else{ 
          document.querySelector('iframe').style.disply = 'block'
          document.querySelector('img').style.display = "none"
          document.querySelector('iframe').src = data.url
        }
        document.querySelector('h3').innerText = `${data.explanation}`
      })
      .catch(err => {
          console.log(`error ${err}`)
          alert('the media type you requested does not exist for this day')
      });
}

