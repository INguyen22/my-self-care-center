var recieveMessageButton = document.querySelector('#recieve')
var clearPageButton = document.querySelector('#clear')

var affirmationInput = document.getElementById('affirmation')
var mantraInput = document.getElementById('mantra')

var body = document.querySelector('body')
var bellImage = document.getElementById('bellIcon')
var paragraph = document.querySelector('p')
var loadingAnimation = document.querySelector('.loader')
var question = document.querySelector('h4')
var form = document.querySelector('form')
var kirby = document.querySelector('.kirby')

recieveMessageButton.addEventListener('click', recieveMessageOnClick)
clearPageButton.addEventListener('click', refreshPage)

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function hiddenProperties() {
  recieveMessageButton.classList.add('hidden')
  bellImage.classList.add('hidden')
  paragraph.classList.remove('hidden')
  clearPageButton.classList.remove('hidden')
  loadingAnimation.classList.add('hidden')
  question.classList.add('hidden')
  form.classList.add('hidden')
  kirby.classList.remove('hidden')
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
    hiddenProperties()
    body.style.background = "linear-gradient(#FFB6C1 40%, #FFE4E1, #F8F8FF) no-repeat"
}
  else if (mantraInput.checked === true) {
    paragraph.innerText = mantra[getRandomIndex(mantra)]
    hiddenProperties()
    body.style.background = "linear-gradient(#228B22 40%, #8FBC8F, #F8F8FF) no-repeat"
}
  else if (!alert("Please select what kind of message you want")) {
   location.reload()
  }
}

function refreshPage() {
  location.reload()
}
