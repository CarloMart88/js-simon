
// DEFINIZIONI DI VARIABILI
const countDown = document.getElementById('countdown');
const instructions = document.getElementById('instructions');
const numbersList = document.getElementById('numbers-list');
const answersForm = document.getElementById('answers-form');
const message = document.getElementById('message');
const button = document.getElementById('button');

// Funzione per generare numero random tra min e max
const NumeriRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};


let counterUno = 10;  
let counterDue = 20;  


const NumberRandomSelection = [];
const UserNumberChoice = [];


numbersList.innerHTML = `
  <li id="uno">${NumeriRandom(1, 50)}</li>
  <li id="due">${NumeriRandom(1, 50)}</li>
  <li id="tre">${NumeriRandom(1, 50)}</li>
  <li id="quattro">${NumeriRandom(1, 50)}</li>
  <li id="cinque">${NumeriRandom(1, 50)}</li>
`;


NumberRandomSelection.push(
  Number(document.getElementById('uno').textContent),
  Number(document.getElementById('due').textContent),
  Number(document.getElementById('tre').textContent),
  Number(document.getElementById('quattro').textContent),
  Number(document.getElementById('cinque').textContent)
);

console.log("Numeri da ricordare:", NumberRandomSelection);

// Parte il PRIMO TIMER 
const FirstInterval = setInterval(() => {
  countDown.innerText = counterUno;

  if (counterUno === 0) {
    clearInterval(FirstInterval);

   
    numbersList.classList.add('d-none'); 
    instructions.textContent = "Scrivi i numeri che ricordi!";
    answersForm.classList.remove('d-none');   

    // Parte il SECONDO TIMER
    const SecondInterval = setInterval(() => {
      countDown.innerText = counterDue;

      if (counterDue === 0) {
        clearInterval(SecondInterval);

        
        let contatoreFinal = 0;
        for (let i = 0; i < NumberRandomSelection.length; i++) {
          for (let j = 0; j < UserNumberChoice.length; j++) {
            if (NumberRandomSelection[i] === UserNumberChoice[j]) {
              contatoreFinal++;
            }
          }
        }

        // Mostro il messaggio finale
        if (contatoreFinal === 5) {
          message.innerText = "Complimenti! Hai indovinato tutti i numeri!";
        } else if (contatoreFinal > 0) {
          message.innerText = `Hai indovinato ${contatoreFinal} numeri`;
        } else {
          message.innerText = "Peccato! Non hai indovinato nessun numero";
        }

      }

      counterDue--;

    }, 1000);

  }

  counterUno--;

}, 1000);


button.addEventListener('click', function(e) {
  e.preventDefault();


  const one = Number(document.getElementById('one').value);
  const two = Number(document.getElementById('two').value);
  const three = Number(document.getElementById('three').value);
  const four = Number(document.getElementById('four').value);
  const five = Number(document.getElementById('five').value);

  UserNumberChoice.push(one, two, three, four, five);

  console.log("Numeri scelti dall'utente:", UserNumberChoice);


  button.disabled = true;
});

 