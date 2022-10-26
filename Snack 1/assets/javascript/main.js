// JAVASCRIPT //

console.log("Ciao!");

/*
*Snack1*
-Crea un array vuoto
-Chiedi all’utente un numero da inserire nell’array.
-Chiedere i numeri all’utente
-Inserirli nell’array fino a quando la somma degli elementi è minore di 50.
*/

let v = [];
let somma = 0;
let i = 0;

while(somma < 50)
{
    v[i] = parseInt(prompt('Valore: ')); console.log(v[i]);
    somma += v[i];
    i++;
}

console.log(`La somma è: ${somma}`);

















// ----- FINE :) -----