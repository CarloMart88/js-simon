//definizioni di variabili 

const countDown = document.getElementById('countdown')
const instructions = document.getElementById('instructions')
const numbersList = document.getElementById('numbers-list')
const answersForm = document.getElementById('answers-form')
const inputGroup = document.getElementById('input-group')

let counter = 10;

let timer;

const FirstInterval = setInterval (() => { 

  if(counter === 0 ){
    clearInterval(FirstInterval)
    instructions.classList.add(`d-none`)

  }else {
    countDown.innerText = counter
    
  }

  counter--

}, 1000 );