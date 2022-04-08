// creo un bottone che stampa il biglietto in base ai dati inseriti dall'utente nel form
const formBtn = document.getElementById("form-btn");
console.log(formBtn);

formBtn.addEventListener("click", 
    function() {
        // assegno a delle variabili js i valori inseriti dall'utente nel form
        const userName = document.getElementById("user-name").value;
        console.log(userName, typeof (userName));

        const kmNumber = parseInt (document.getElementById("km-number").value);
        console.log(kmNumber, typeof (kmNumber));

        const ageSelect = document.getElementById("age-select").value;
        console.log(ageSelect, typeof (ageSelect));

        // moltiplico i km inseriti per 0.21
        let price = kmNumber * 0.21;
        console.log(price, typeof (price));

        // calcolo la tariffa
        let discount;
        let fare;

        if (ageSelect) {          
            discount = 0;
        } else if (ageSelect) {           
            discount = (price * 20) / 100;
        } else if (ageSelect) {
            discount = (price * 40) / 100;
        }
        // sottraggo lo sconto, se presente, dal prezzo pieno
        let ticketPrice = price - discount;
        console.log(ticketPrice, typeof (ticketPrice));

        // tolgo i decimali superflui dal risultato
        const ticketPriceEuro = ticketPrice.toFixed(2);
        console.log(ticketPriceEuro);

        // compilo il biglietto
        const ticketName = document.querySelector(".result h2");
        ticketName.innerHTML = `Nome Passeggero ${userName}`;
        console.log(ticketName);

        const ageFare = document.querySelector(".result p");
        ageFare.innerHTML = `Biglietto ${ageSelect}`;
        console.log(ageFare);
        
        const totalPrice = document.querySelector(".result span");
        totalPrice.innerHTML = `${ticketPriceEuro} €`;
        console.log(totalPrice);

        // visualizzo nella pagina il biglietto
        const resultContainer = document.querySelector(".result");
        console.log(resultContainer);
        resultContainer.classList.remove("d-none");
    }
);

// = `${ticketPriceEuro} €`;