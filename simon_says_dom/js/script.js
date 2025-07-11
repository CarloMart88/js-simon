//definizioni di variabili 

const countDown = document.getElementById('countdown')
const instructions = document.getElementById('instructions')
const numbersList = document.getElementById('numbers-list')
const answersForm = document.getElementById('answers-form')
const inputGroup = document.getElementById('input-group')
const message = document.getElementById('message')




 

const button = document.getElementById('btn')

// funzione numeri random 
const NumeriRandom = (min , max ) => {
  return Math.floor(Math.random() * (max - min * 1 )+ min)}


let counterUno = 10;

let timer;

const NumberRandomSelection = [];






numbersList.innerHTML =  `

<li id= "uno">${NumeriRandom(1 , 50)}</li>
<li id= "due">${NumeriRandom(1 , 50)}</li>
<li id= "tre">${NumeriRandom(1 , 50)}</li>
<li id= "quattro">${NumeriRandom(1 , 50)}</li>
<li id= "cinque">${NumeriRandom(1 , 50)}</li>
 `

const uno = document.getElementById('uno').textContent
const due = document.getElementById('due').textContent
const tre = document.getElementById('tre').textContent
const quattro = document.getElementById('quattro').textContent
const cinque = document.getElementById('cinque').textContent

NumberRandomSelection.push(uno , due , tre , quattro , cinque)

 
console.log(NumberRandomSelection)


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
