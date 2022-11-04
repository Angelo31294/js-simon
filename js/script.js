"use strict"
/*----------------
    FUNCTION
----------------*/

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

/*----------------
    MAIN
----------------*/
// 1. Creo un array di 5 numeri non duplicati
const cpuNumbers = [];

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
const userNumberMemory = [];

setTimeout( function () {
    // 4a. Mi salvo i numeri inseriti dall'utente nell'array "userNumberMemory"
    for (let i = 0; i < cpuNumbers.length; i++) {
        const userNumber = Number(prompt("Inserisci i numeri che ricordi"));
            userNumberMemory.push(userNumber);
    }
    console.log(userNumberMemory);
}, 4000);

// 5. Il software stampa i numeri indovinati

setTimeout(() => {
    if ( userNumberMemory.includes(cpuNumbers)){
        alert("Bravo hai indovinato!");
    } 
}, 5000);
