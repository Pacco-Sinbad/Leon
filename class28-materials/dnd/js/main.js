//Example fetch using DnD5eAPI - place subclasses in ul
//http://www.dnd5eapi.co/docs/

document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
    document.querySelector('ul').innerHTML = ""
  const choice = document.querySelector('input').value.split(' ').join('-')
//   console.log(choice)
  const url = `https://www.dnd5eapi.co/api/spells/${choice}/`
    document.querySelector('h2').innerText = 'Name?'
    document.querySelector('h3').innerText = 'Class:'
    document.querySelector('h4').innerText = 'Sub Classes'
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
       console.log(data)
       document.querySelector('h2').innerText = `${data.name}`
       document.querySelector('h3').innerText += `${data.classes[0].name}`
       for (let i =0 ; i < data.subclasses.length; i++){
        const li = document.createElement('li')
        li.textContent =  `${data.subclasses[i].name}`
        document.querySelector('ul').appendChild(li)
       }
       
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
     
}

