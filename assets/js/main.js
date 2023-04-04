/*
Descrizione:
    - Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
    - Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
    - Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

/* ------------------- Sviluppo Esercizio ------------------ */

// 1.- Inizio col creare la funzione per i 5 numeri random

// 2.- Creo un'array vuoto dove inserire i numeri random

// 3.- Creo una condizione che mi permetta di inserire i numeri random senza che si ripetano:
//       - Ogni volta che il numero viene inserito nell'array dovrà essere mostrato e stampato anche sul documento
//       - Al termine dell'inserimento i numeri dovranno scomparire
//       - Dovrà comparire un input che mi permetterà di inserire i numeri all'interno dell'array:
//          ° Dopo aver scritto i numeri, una condizione mi dirà se i numeri sono presenti all'interno dell'array

/* --------------------------- Esercizio --------------------------- */

// Funzione per la creazione dei numeri random
function numRandom() {
    return Math.floor( Math.random() * 100 ) - 1;
}

function arrayNum() {
    
    // Variabile array vuota
    let array = [];
    
    // Inserisco dentro l'array un Numero Random che non sia già presente
    while ( array.length < 5 ) {
    
        // Se nell'array non c'è il Numero Random ( numRandom() )
        if (!array.includes( numRandom() )) {
        
            // Viene pushato ( numRandom() )
            array.push( numRandom() )
        }    
    }
    return array
}

console.log(arrayNum())