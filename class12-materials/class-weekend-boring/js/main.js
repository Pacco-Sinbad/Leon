document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value

  //Conditionals go here

if ( day == "Tuesday" || day == "Thursday" || day == "tuesday" || day == "thursday") {
  document.querySelector('#placeToSee').innerText = 'CLASSSSS!!!!!' }

else if ( day == "Sunday" || day == "sunday" || day == "Saturday" || day == "saturday") {
  document.querySelector('#placeToSee').innerText = 'Weekend!!! Party Time' } 

else{
  document.querySelector('#placeToSee').innerText = 'BORRRRING!!!!'
}
}
