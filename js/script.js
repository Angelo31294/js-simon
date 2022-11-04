"use strict"

// 1. Creo un array di 5 numeri non duplicati
const numberCasual = []

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  while ( numberCasual.length < 5 ) {
    const numberRandom = getRndInteger( 1, 100 );
    if ( numberCasual.includes(numberRandom) === false) {
        numberCasual.push(numberRandom);
    }
  }

console.log(numberCasual);

//  2. Stampo i 5 numeri da ricordare
document.getElementById("show-numbers").innerHTML = (numberCasual);





// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.