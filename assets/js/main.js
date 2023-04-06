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

// Variabile che riutilizzerò per ( numRandom() )
let num;

// Variabile che riutilizzerò per ( setTimeout(myCountdown, 3000) )
let clock1;

let clock2;

// Variabile array vuota
let array = [];

// Indice
let i = 0;

// Funzione custom
function playButton(){
    
    // Funzione per la creazione di numeri random all'interno di un'array vuoto
    function arrayNum() {        
        
        // Ciclo WHILE: Inserisco dentro l'array un Numero Random
        while ( array.length < 5 ) {

            // Invoco la funzione con una variabile per avere lo stesso valore ovunque
            num = numRandom() 
    
            // Se nell'array non c'è il valore ( num )
            if (!array.includes(num)) {
            
                // Viene pushato ( num )
                array.push(num)
            }    

            // Ogni volta aggiungo +1 a i
            i++

            // Ogni volta verrà inserita questa stringa
            ulNumeri.innerHTML +=
            `
                <li><h3>${i}o Numero:</h3> <h2>${num}</h2></li>
            `     
        }
    
        return array
    }
    console.log(arrayNum())

    // Invoco la funzione per far sparire la lista dopo 3 secondi
    clock1 = setTimeout(myCountdown, 3000);

    clock2 = setTimeout(myCountdown2, 3500);
}

// Array vuoto per i prompt
let arrayPrompt = [];

// Funzione per far sparire la lista
function myCountdown() {

    // Inserisco uno spazio vuoto per resettare il contenuto nel DOM
    ulNumeri.innerHTML = "";
}

// Funzione che parte dopo che la lista è sparita
function myCountdown2() {     
    
    while ( arrayPrompt.length < 5 ) {

        arrayPrompt.push( parseInt( prompt("Inserisci un numero") ) );
    }
}

console.log(arrayPrompt)