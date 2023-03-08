//*Istruzioni condizionali

//if (condizione 1) {
    //istruzione 1
    //stampo output 1

//} else if (condizione 2) {
    //istruzione 2
    //stampo output 2

//   } else {
      //istruzione 3
      //stampo output 3}

// Operatori relazionali
// == uguale
// === identità (si usa quasi sempre)
// != diverso
// !== non identità
// >= maggiore uguale
// <= minore uguale

&& and
|| or

// ? ESERCIZIO

//!pseudocodice
// chiedo all'utente l'età di due persone con due prompt

const firstUserage = parseInt(prompt("Quanti hanni ha la prima persona?"));
const secondUserage = parseInt(prompt("Quanti hanni ha la seconda persona?"));

console.log(firstUserage, secondUserage);

// se l'età 1 è maggiore dell'età 2 scrivo 'la prima persona è più grande'
// altrimenti se le due età sono uguali scrito ' le persona hanno la stessa età'
// altrimenti 'la seconda persona è più grande'
if (firstUserage > secondUserage) {
    console.log("La prima persona è più grande")
} else if (firstUserage === secondUserage) {
    console.log("le due persone sono coatenee")
} else {
    console.log("La prima persona è più piccola")
}







