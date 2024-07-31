
/* SCALETTA

1- Recupero gli elementi del DOM di mio interesse
2- Chiedo all'utente il numero di km che deve percorrere
3- Chiedo all'utente la sua età
4- Calcolo il prezzo del biglietto in base ai km ed all'età
5- Stampo nel DOM

*/

// ! Fase preparatoria

const ticketElement = document.getElementById('ticket');
console.log(ticketElement)

// Preparo il suffisso dei km
const kmSuffix = 'km'
// Preparo il suffisso dell'età
const ageSuffix = 'anni'

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
console.log(ticketPrice)
