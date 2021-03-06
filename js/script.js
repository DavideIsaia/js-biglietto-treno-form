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

        // alert di errore se non inserisco nome o numero di km o fascia di età
        if (document.getElementById("user-name").value === "" || isNaN (kmNumber) || document.getElementById("age-select").value === "") {
            alert("Dati non inseriti correttamente");
        // altrimenti calcolo la tariffa
        } else {
        let discount;
        let fare = (document.getElementById("age-select").value);

        if (fare === "Standard") {          
            discount = 0;
        } else if (fare === "Under-18") {           
            discount = price * 0.2;
        } else if (fare === "Over-65") {
            discount = price * 0.4;
        }

        // sottraggo lo sconto, se presente, dal prezzo pieno
        price = price - discount;
        console.log(price);

        // tolgo i decimali superflui dal risultato
        const ticketPrice = price.toFixed(2);
        console.log(ticketPrice);

        // compilo il biglietto
        const ticketName = document.querySelector(".result .name div");
        ticketName.innerHTML = `${userName}`;
        console.log(ticketName);

        const ageFare = document.querySelector(".result .age div");
        ageFare.innerHTML = `Tariffa ${ageSelect}`;
        console.log(ageFare);

        const wagonNumber = document.querySelector(".result .wagon div");
        wagonNumber.innerHTML = Math.floor(Math.random() * 10) + 1;
        console.log(wagonNumber);

        const codCP = document.querySelector(".result .cod-cp div");
        codCP.innerHTML = Math.floor(Math.random() * (99999 - 90000 + 1) ) + 90000;
        console.log(codCP);
        
        const totalPrice = document.querySelector(".result .price div");
        totalPrice.innerHTML = `${ticketPrice} €`;
        console.log(totalPrice);

        // visualizzo nella pagina il biglietto
        const resultContainer = document.querySelector(".result");
        console.log(resultContainer);
        resultContainer.classList.remove("d-none");
        }
    }
);

// creo un bottone che riporta la pagina al punto di partenza
const formClearBtn = document.getElementById("form-clear-btn");
console.log(formClearBtn);

formClearBtn.addEventListener("click", 
    function() {
        
        // nascondo il risultato
        const resultContainer = document.querySelector(".result");
        resultContainer.classList.add("d-none");

        // svuoto il form
        const userName = document.getElementById("user-name");
        userName.value = "";

        const kmNumber = document.getElementById("km-number");
        kmNumber.value = "";

        const ageSelect = document.getElementById("age-select");
        ageSelect.value = "";
    }
);