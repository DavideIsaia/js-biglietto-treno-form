// creo un bottone che stampa il biglietto in base ai dati inseriti dall'utente nel form
const formBtn = document.getElementById("form-btn");
console.log(formBtn);

formBtn.addEventListener("click", 
    function() {
        // assegno a delle variabili js i valori inseriti dall'utente nel form
        const userName = document.getElementById("user-name").value;
        console.log(userName);

        const kmNumber = document.getElementById("km-number").value;
        console.log(kmNumber, typeof (kmNumber));

        const ageSelect = document.getElementById("age-select").value;
        console.log(ageSelect, typeof (ageSelect));

        // compilo il biglietto
        const ticketName = document.querySelector(".result h2");
        ticketName.innerHTML = `Nome Passeggero ${userName}`;
        console.log(ticketName);

        const ageFare = document.querySelector(".result p");
        ageFare.innerHTML = `Biglietto ${ageSelect}`;
        console.log(ageFare);

        // visualizzo nella pagina il biglietto
        const resultContainer = document.querySelector(".result");
        console.log(resultContainer);
        resultContainer.classList.remove("d-none");
    }
);

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