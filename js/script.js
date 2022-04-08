// chiedo all'utente il numero di km che percorrerà
// const kmNumber = parseInt(prompt('Inserisci il numero di km che percorrerai'));
// console.log(kmNumber, typeof (kmNumber));

// // chiedo l'età
// const ageNumber = parseInt(prompt('Inserisci la tua età'));
// console.log(ageNumber, typeof (ageNumber));

// // moltiplico i km inseriti per 0.21
// let price = kmNumber * 0.21;
// console.log(price, typeof (price));

// // se l'età è compresa tra 18 e 65 mostro il risultato, altrimenti se l'età è inferiore a 18, tolgo il 20% dal risultato, altrimenti se l'età è superiore a 65 tolgo il 40% dal risultato.
// let discount;
// let fare;

// if (ageNumber >= 18 && ageNumber <= 65) {
//     // console.log(string = "tariffa normale");
//     fare = (string = "tariffa normale");
//     discount = 0;
// } else if (ageNumber < 18) {
//     // console.log(string = "minorenne");
//     fare = (string = "tariffa minorenni");
//     discount = (price * 20) / 100;
// } else if (ageNumber > 65) {
//     // console.log(string = "senior");
//     fare = (string = "tariffa anziani");
//     discount = (price * 40) / 100;
// }
// // sottraggo lo sconto, se presente, dal prezzo pieno
// let ticketPrice = price - discount;
// console.log(ticketPrice, typeof (ticketPrice));

// // tolgo i decimali superflui dal risultato
// const ticketPriceEuro = ticketPrice.toFixed(2);
// console.log(ticketPriceEuro);

// // mostro il risultato del prezzo nell'html
// const message = `Il prezzo del biglietto per ${kmNumber}Km con ${fare} è di: ${ticketPriceEuro} €`;
// document.getElementById('ticket-price').innerHTML = message;