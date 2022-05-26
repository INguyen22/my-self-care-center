var recieveMessageButton = document.querySelector('button')

var affirmationInput = document.getElementById('affirmation')


var bellImage = document.querySelector('img')
var paragraph = document.querySelector('p')


recieveMessageButton.addEventListener('click', recieveMessage)

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function recieveMessage(event) {
event.preventDefault()
//p.innerText =

bellImage.classList.add('hidden')
paragraph.classList.remove('hidden')
}
