var recieveMessageButton = document.querySelector('#recieve')
var clearPageButton = document.querySelector('#clear')

var affirmationInput = document.getElementById('affirmation')
var mantraInput = document.getElementById('mantra')


var bellImage = document.querySelector('img')
var paragraph = document.querySelector('p')


recieveMessageButton.addEventListener('click', recieveMessage)
clearPageButton.addEventListener('click', refreshPage)

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function recieveMessage(event) {
event.preventDefault()
if (affirmationInput.checked === true) {
  paragraph.innerText = affirmation[getRandomIndex(affirmation)]

  bellImage.classList.add('hidden')
  paragraph.classList.remove('hidden')
  clearPageButton.classList.remove('hidden')
}
else if (mantraInput.checked === true) {
  paragraph.innerText = mantra[getRandomIndex(mantra)]
  bellImage.classList.add('hidden')
  paragraph.classList.remove('hidden')
  clearPageButton.classList.remove('hidden')
}
else
alert("Please select what kind of message you want")
}

function refreshPage() {
  location.reload()
}
