"use strict"

// 1. Creo un array di 5 numeri non duplicati
const cpuNumbers = [];

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  while ( cpuNumbers.length < 5 ) {
    const numberRandom = getRndInteger( 1, 100 );
    if ( cpuNumbers.includes(numberRandom) === false) {
        cpuNumbers.push(numberRandom);
    }
  }

console.log(cpuNumbers);

// 2. Stampo i 5 numeri da ricordare
document.getElementById("show-numbers").innerHTML = (cpuNumbers);

// 3. Parte il timer di 30 sec.
setTimeout(() => {
    let element = document.getElementById("show-numbers");
    // 3a. Spariscono i numeri
    element.classList.add("d-none");
}, 3000);

// 4. Chiedo all'utente di inserire i numeri memorizzati nel "prompt"
let userNumberMemory = [];

setTimeout( function () {

    for (let i = 0; i < cpuNumbers.length; i++) {
        let userNumber = prompt("Inserisci i numeri che ricordi");
        if ( userNumberMemory.length === cpuNumbers.length){
            userNumberMemory.push(userNumber);
        }
    }

}, 4000);

console.log(userNumberMemory);
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.