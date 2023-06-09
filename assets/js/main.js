/*
Descrizione:
    - Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
    - Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
    - Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

/* ----------------------------------- Esercizio ----------------------------------- */

// Funzione per la creazione dei numeri random
function numRandom(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

/* ------------------ Creazione funzione al click ------------------ */

// Creo una variabile per selezionare l'elemento nel DOM
let play = document.getElementById("play");


// Variabile che selezione l'elemento ul#numeri
let ulNumeri = document.querySelector("#numeri");

// Indice
let i = 0;

// Funzione al click e invocazione al Play
play.addEventListener( `click`, function(){    
    
    playButton()
})

let numeriRandom;

// Funzione custom
function playButton(){
    
    // Variabile array vuota
    numeriRandom = [];
        
    // Ciclo WHILE: Inserisco dentro l'array un Numero Random
    while ( numeriRandom.length < 5 ) {

        // Invoco la funzione con una variabile per avere lo stesso valore ovunque
        let num = numRandom(100, 1);

        // Se in numeriRandom non c'è il valore ( num )
        if (!numeriRandom.includes(num)) {
        
            // Viene pushato ( num )
            numeriRandom.push(num)
        }        
    }

    let indice = 0

    let interval = setInterval( function() {

        if ( indice < numeriRandom.length) {

            ulNumeri.innerHTML =
            `
                <h2 class="numeriRandom">${numeriRandom[indice]}</h2>
            ` 
        } else {

            ulNumeri.innerHTML =` ` 
        }

        indice++


    }, 1000)
    
    console.log(numeriRandom)
    
    // Invoco la funzione per far sparire la lista dopo 6 sec
    const clock1 = setTimeout(myCountdown, 6000);
    
    // Invoco la funzione per far apparire i prompt dopo 6.5 sec
    const clock2 = setTimeout(myCountdown2, 6500);
}

// Funzione per far sparire la lista dopo 3 sec
function myCountdown() {
    
    ulNumeri.innerHTML = " ";
}

// Array per i prompt
let numeriInseriti;

// Arrray numeri uguali
let numeriUguali;

// Array numeri diversi
let numeriDiversi;

// Funzione che parte dopo che la lista è sparita
function myCountdown2() {     

    numeriInseriti = [];

    numeriUguali = [];
    
    numeriDiversi = [];

    // Ciclo WHILE: Creazione elementi prompt dentro array prompt
    while ( numeriInseriti.length < 5 ) {

        let valorePrompt = parseInt( prompt("Inserisci un numero") );

        // IF: Se il numero non è incluso
        if ( !numeriInseriti.includes(valorePrompt) ) {

            // Inserisco il valore di prompt ogni giro
            numeriInseriti.push( valorePrompt );

        // ELSE IF: Altrimenti se il numero è incluso
        } else {
            
            // Inserisco un prompt diverso per poi ricominciare il giro 
            valorePrompt = parseInt( prompt("Inserisci un numero diverso!") )
        }
    }

    // Ciclo FOR: Creazione elementi per due array, (numeriUguali) e (numeriDiversi)
    for ( let k = 0; k < numeriInseriti.length; k++ ) {

        // IF: Se il valore di (numeriInseriti) è incluso in (numeriRandom)
        if ( numeriRandom.includes(numeriInseriti[k]) ) {

            // Inserisco il valore nell'array (numeriUguali)
            numeriUguali.push(numeriInseriti[k])

        // ELSE IF: Altrimenti se il valore di (numeriInseriti) non è incluso in (numeriRandom)
        } else {

            // Inserisco il valore nell'array (numeriDiversi)
            numeriDiversi.push(numeriInseriti[k])
        }  
    }
    
    let score = numeriUguali.length * 10;

    console.log(numeriInseriti)
    console.log(numeriUguali)
    console.log(numeriDiversi)

    // Inserimento stringhe nel DOM
   document.getElementById("ciao").innerHTML = 
    `
        <p>Il tuo punteggio è di ${score} perché hai indovinato ${numeriUguali.length} numeri</p> 

        <p>Numeri indovinati: ${numeriUguali.join(" ")}</p>

        <p>Numeri non indovinati: ${numeriDiversi.join(" ")}</p>
    `
}