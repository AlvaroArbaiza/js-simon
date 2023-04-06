/*
Descrizione:
    - Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
    - Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
    - Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

/* ----------------------------------- Esercizio ----------------------------------- */

// Funzione per la creazione dei numeri random
function numRandom() {
    return Math.floor( Math.random() * 100 ) + 1;
}

/* ------------------ Creazione funzione al click ------------------ */

// Creo una variabile per selezionare l'elemento nel DOM
let play = document.getElementById("play");

// Funzione al click
play.addEventListener( `click`, function(){    
    // Invocazione al Play
    playButton()
})

// Variabile che selezione l'elemento ul#numeri
let ulNumeri = document.querySelector("#numeri");

// Indice
let i = 0;

// Variabile array vuota
let numeriRandom = [];

// Funzione custom
function playButton(){
        
    // Ciclo WHILE: Inserisco dentro l'array un Numero Random
    while ( numeriRandom.length < 5 ) {

        // Invoco la funzione con una variabile per avere lo stesso valore ovunque
        let num = numRandom() 

        // Se in numeriRandom non c'è il valore ( num )
        if (!numeriRandom.includes(num)) {
        
            // Viene pushato ( num )
            numeriRandom.push(num)
        }    

        // Ogni volta aggiungo +1 a i
        i++

        // Ogni volta verrà inserita questa stringa
        ulNumeri.innerHTML +=
        `
            <li><h3>${i}o Numero:</h3> <h2>${num}</h2></li>
        `     
    }
    
    // Invoco la funzione per far sparire la lista dopo 3 sec
    const clock1 = setTimeout(myCountdown, 3000);
    
    // Invoco la funzione per far apparire i propmt dopo 3.5 sec
    const clock2 = setTimeout(myCountdown2, 3500);

    console.log(numeriRandom)
}

// Funzione per far sparire la lista
function myCountdown() {
    
    // Inserisco uno spazio vuoto per resettare il contenuto nel DOM
    ulNumeri.innerHTML = "";
}

// Array vuoto per i prompt
let numeriInseriti = [];

// Arrray numeri uguali
let numeriUguali = [];

// Array numeri diversi
let numeriDiversi = [];

// Funzione che parte dopo che la lista è sparita
function myCountdown2() {     
    
    // Ciclo WHILE: Creazione elementi prompt dentro array prompt
    while ( numeriInseriti.length < 5 ) {

        // Inserisco il valore di prompt ogni giro
        numeriInseriti.push( parseInt( prompt("Inserisci un numero") ) );
    }

    for ( let k = 0; k < numeriInseriti.length; k++ ) {

        // IF: Se il valore di (numeriInseriti) è incluso in (numeriRandom)
        if ( numeriRandom.includes(numeriInseriti[k]) ) {

            // Inserisco il valore nell'array (numeriUguali)
            numeriUguali.push(numeriInseriti[k])

        // ELSE IF: Altrimenti se il valore di (numeriInseriti) non è incluso in (numeriRandom)
        } else if ( !numeriRandom.includes(numeriInseriti[k]) ) {

            // Inserisco il valore nell'array (numeriDiversi)
            numeriDiversi.push(numeriInseriti[k])
        }
    }

    console.log(numeriInseriti)
    console.log(numeriUguali)
    console.log(numeriDiversi)
}
