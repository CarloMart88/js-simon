//definizioni di variabili 

const countDown = document.getElementById('countdown')
const instructions = document.getElementById('instructions')
const numbersList = document.getElementById('numbers-list')
const answersForm = document.getElementById('answers-form')
const inputGroup = document.getElementById('input-group')
const message = document.getElementById('message')




 

const button = document.getElementById('button')

// funzione numeri random 
const NumeriRandom = (min , max ) => {
  return Math.floor(Math.random() * (max - min * 1 )+ min)}


let counterUno = 10;
let counterDue = 20;
let timer;

const NumberRandomSelection = [];

const UserNumberChoice = [];






numbersList.innerHTML =  `

<li id= "uno">${NumeriRandom(1 , 50)}</li>
<li id= "due">${NumeriRandom(1 , 50)}</li>
<li id= "tre">${NumeriRandom(1 , 50)}</li>
<li id= "quattro">${NumeriRandom(1 , 50)}</li>
<li id= "cinque">${NumeriRandom(1 , 50)}</li>
 `

const uno = Number(document.getElementById('uno').textContent)
const due = Number(document.getElementById('due').textContent)
const tre = Number(document.getElementById('tre').textContent)
const quattro = Number(document.getElementById('quattro').textContent)
const cinque = Number(document.getElementById('cinque').textContent)

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






button.addEventListener(`click` , function(e){
  e.preventDefault();  

   const SecondInterval = setInterval (() => {

    countDown.classList.remove('d-none');
    

    if (counterDue === 0) {
      clearInterval(SecondInterval)

      const one = Number(document.getElementById('one').value)
      const two = Number(document.getElementById('two').value)
      const three = Number(document.getElementById('three').value)
      const four = Number(document.getElementById('four').value)
      const five = Number(document.getElementById('five').value)

      UserNumberChoice.push(one , two , three , four , five)
      console.log(UserNumberChoice)


      countDown.classList.add(`d-none`);

   
      let contatoreFinal = 0;

      for( let i = 0; i<NumberRandomSelection.length ; i++) {
      for( let j = 0; j<UserNumberChoice.length ; j++) {

        if(NumberRandomSelection[i] === UserNumberChoice[j]){
            contatoreFinal++

                 } 
  
      }
          }

    if (contatoreFinal === 1) {
        message.innerText = `Complimenti! Hai indovinato 1 numero`;
        } else if (contatoreFinal > 1) {
        message.innerText = `Complimenti! Hai indovinato ${contatoreFinal} numeri`;
        } else {
        message.innerText = `Peccato! Non hai indovinato nessun numero`;
        }

      

    }else {
      
      countDown.innerText = counterDue
      

    }

    counterDue-- ;

  } , 1000 );


});


   

 