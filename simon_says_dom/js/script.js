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

// funzione numeri random 
const NumeriRandom = (min , max ) => {
  return Math.floor(Math.random() * (max - min * 1 )+ min)}


let counterUno = 10;

let timer;



  numbersList.innerHTML = `<li>${NumeriRandom(1 , 50)}</li> <li>${NumeriRandom(1 , 50)}</li> <li>${NumeriRandom(1 , 50)}</li> <li>${NumeriRandom(1 , 50)}</li> <li>${NumeriRandom(1 , 50)}</li>`

const FirstInterval = setInterval (() => { 

  if(counterUno === 0 ){
    clearInterval(FirstInterval)
    instructions.classList.add(`d-none`)
    countDown.classList.add(`d-none`)
    answersForm.classList.remove(`d-none`)
    numbersList.classList.add(`d-none`)



  }else {
    countDown.innerText = counterUno
  

    
  }

  counterUno--

}, 1000 );


// button.addEventListener('click' , (e) => {





// })
