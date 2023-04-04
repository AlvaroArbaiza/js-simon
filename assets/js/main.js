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
    
            // Viene pushato ( numRandom() )
            array.push( num )
            
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
}

// Array vuoto per i prompt
let arrayPrompt = [];

// Funzione per far sparire la lista
function myCountdown() {

    // Inserisco uno spazio vuoto per resettare il contenuto nel DOM
    ulNumeri.innerHTML = "";
    
    // Costante per avere un intervallo di tempo tra il reset del DOM e la comparsa dei PROMPT
    const myInterval = setInterval(myTimer, 1);
    
    // Funzione per avere un intervallo di 1 millisecondo di tempo
    function myTimer() {

        // Creazione array prompt
        arrayPrompt[0] = parseInt(prompt("Inserisci un numero di quelli che hai visto"));
        arrayPrompt[1] = parseInt(prompt("Inserisci un numero"));
        arrayPrompt[2] = parseInt(prompt("Inserisci un numero")); 
        arrayPrompt[3] = parseInt(prompt("Inserisci un numero"));
        arrayPrompt[4] = parseInt(prompt("Inserisci un numero")); 
        
        // arrayPrompt[0]
        if (arrayPrompt[0] == array[0]) {
            
            ulNumeri.innerHTML += 
            `
                <li>
                    Il numero che hai inserito: 
                    <strong>${arrayPrompt[0]}</strong>, è lo stesso del 1o Numero!
                </li>   
            `
        } else  {

            ulNumeri.innerHTML += 
            `
                <li>
                    Il numero che hai inserito: 
                    <strong>${arrayPrompt[0]}</strong>, è diverso dal 1o Numero!
                </li>   
            `
        }

        // arrayPrompt[1]
        if (arrayPrompt[1] == array[1]) {
            
            ulNumeri.innerHTML += 
            `
                <li>
                    Il numero che hai inserito: 
                    <strong>${arrayPrompt[1]}</strong>, è lo stesso del 2o Numero!
                </li>   
            `
        } else  {

            ulNumeri.innerHTML += 
            `
                <li>
                    Il numero che hai inserito: 
                    <strong>${arrayPrompt[1]}</strong>, è diverso dal 2o Numero!
                </li>   
            `
        }

        // arrayPrompt[2]
        if (arrayPrompt[2] == array[2]) {
            
            ulNumeri.innerHTML += 
            `
                <li>
                    Il numero che hai inserito: 
                    <strong>${arrayPrompt[2]}</strong>, è lo stesso del 3o Numero!
                </li>   
            `
        } else  {

            ulNumeri.innerHTML += 
            `
                <li>
                    Il numero che hai inserito: 
                    <strong>${arrayPrompt[2]}</strong>, è diverso dal 3o Numero!
                </li>   
            `
        }

        // arrayPrompt[3]
        if (arrayPrompt[3] == array[3]) {
            
            ulNumeri.innerHTML += 
            `
                <li>
                    Il numero che hai inserito: 
                    <strong>${arrayPrompt[3]}</strong>, è lo stesso del 4o Numero!
                </li>   
            `
        } else  {

            ulNumeri.innerHTML += 
            `
                <li>
                    Il numero che hai inserito: 
                    <strong>${arrayPrompt[3]}</strong>, è diverso dal 4o Numero!
                </li>   
            `
        }

        // arrayPrompt[4]
        if (arrayPrompt[4] == array[4]) {
            
            ulNumeri.innerHTML += 
            `
                <li>
                    Il numero che hai inserito: 
                    <strong>${arrayPrompt[4]}</strong>, è lo stesso del 5o Numero!
                </li>   
            `
        } else  {

            ulNumeri.innerHTML += 
            `
                <li>
                    Il numero che hai inserito: 
                    <strong>${arrayPrompt[4]}</strong>, è diverso dal 5o Numero!
                </li>   
            `
        }
    }

    // Funzione per fermare SetInterval dopo 1 millisecondo
    setTimeout( function() {

        clearInterval(myInterval)
    }, 1)

    console.log(arrayPrompt)

}
