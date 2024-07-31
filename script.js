
/* SCALETTA

1- Recupero gli elementi del DOM di mio interesse
2- Chiedo all'utente il numero di km che deve percorrere
3- Chiedo all'utente la sua età
4- Calcolo il prezzo del biglietto in base ai km ed all'età
5- Stampo nel DOM

*/

// ! Fase preparatoria

// Chilometri
const kmresultElement = document.getElementById('kmresult');
console.log(kmresultElement)

// Età
const ageresultElement = document.getElementById('ageresult');
console.log(ageresultElement)

// Prezzo senza sconto
const firsticketElement = document.getElementById('firsticket')
console.log(firsticketElement)

// Prezzo finale
const ticketElement = document.getElementById('ticket');
console.log(ticketElement)

let result = 0

// Preparo il suffisso dei km
const kmSuffix = 'km'
// Preparo il suffisso dell'età
const ageSuffix = 'anni'
//Preparo il suffiso 'euro'
const priceSuffix = '€'

// ! Fase raccolta dati

// Chiedo il numero di chilometri
const kmNumber = prompt('Inserire il numero di chilometri da percorrere', '50')
console.log(kmNumber + ' ' + kmSuffix)

// Chiedo l'età
const age = prompt('Inserire l\'età', '20')
console.log(age + ' ' + ageSuffix)

// ! Fase lavorazione dati

// Calcolo il prezzo del biglietto in base ai km
const ticketPrice = kmNumber*0.21;
console.log(ticketPrice + ' ' + priceSuffix)

// Calcolo lo sconto in base all'età
result = ticketPrice

if(age < 18){
    console.log(ticketPrice - (ticketPrice / 100*20))
    result = ticketPrice - (ticketPrice / 100*20)
}   else if(age > 65){
    console.log(ticketPrice - (ticketPrice / 100*40))
    result = ticketPrice - (ticketPrice / 100*40)
}   

// Imposto 2 cifre decimali
result.toFixed(2);

// ! Fase produzione output

// Stabilisco il messaggio relativo ai chilometri da mostrare nel DOM
const kmresult = `Chilometri da percorrere: ${kmNumber} ${kmSuffix}`
kmresultElement.innerText = kmresult;

// Stabilisco il messaggio relativo all'età da mostrare nel DOM
const ageresult = `Età inserita: ${age} ${ageSuffix}`
ageresultElement.innerText = ageresult;

// Stabilisco il messaggio relativo al prezzo standard da mostrare nel DOM
const firsticket = `Il costo standard del tuo biglietto è di ${ticketPrice} ${priceSuffix} `
firsticketElement.innerText = firsticket;

// Stabilisco il messaggio del prezzo finale da mostrare nel DOM
const message = `Il costo finale del tuo biglietto è di ${result} ${priceSuffix}`
ticketElement.innerText = message;

