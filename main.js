var recieveMessageButton = document.querySelector('#recieve')
var clearPageButton = document.querySelector('#clear')

var affirmationInput = document.getElementById('affirmation')
var mantraInput = document.getElementById('mantra')


var bellImage = document.querySelector('img')
var paragraph = document.querySelector('p')
var loadingAnimation = document.querySelector('.loader')


recieveMessageButton.addEventListener('click', recieveMessageOnClick)
clearPageButton.addEventListener('click', refreshPage)

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function recieveMessageOnClick(event) {
  event.preventDefault()
  setTimeout(recieveMessage, 2000)
  recieveMessageButton.disabled = true
  loadingAnimation.classList.remove('hidden')
}

function recieveMessage() {

if (affirmationInput.checked === true) {
  paragraph.innerText = affirmation[getRandomIndex(affirmation)]

  bellImage.classList.add('hidden')
  paragraph.classList.remove('hidden')
  clearPageButton.classList.remove('hidden')
  loadingAnimation.classList.add('hidden')
}
else if (mantraInput.checked === true) {
  paragraph.innerText = mantra[getRandomIndex(mantra)]

  bellImage.classList.add('hidden')
  paragraph.classList.remove('hidden')
  clearPageButton.classList.remove('hidden')
  loadingAnimation.classList.add('hidden')
}
else
alert("Please select what kind of message you want")
loadingAnimation.classList.add('hidden')
clearPageButton.classList.remove('hidden')
}

function refreshPage() {
  location.reload()
}
