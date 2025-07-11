//definizioni di variabili 

const countDown = document.getElementById('countdown')
const instructions = document.getElementById('instructions')
const numbersList = document.getElementById('numbers-list')
const answersForm = document.getElementById('answers-form')
const inputGroup = document.getElementById('input-group')
const message = document.getElementById('message')

// const uno = document.getElementById('uno').value
// const due = document.getElementById('due').value
// const tre = document.getElementById('tre').value
// const quattro = document.getElementById('quattro').value
// const cinque = document.getElementById('cinque').value

const button = document.getElementById('btn')

const NumeriRandom Math.floor(Math.random(1 , 50 ))

let counterUno = 10;

let timer;

const FirstInterval = setInterval (() => { 

  if(counterUno === 0 ){
    clearInterval(FirstInterval)
    instructions.classList.add(`d-none`)
    countDown.classList.add(`d-none`)
    answersForm.classList.remove(`d-none`)


  }else {
    countDown.innerText = counterUno

    
  }

  counterUno--

}, 1000 );


// button.addEventListener('click' , (e) => {





// })
