// JAVASCRIPT //

console.log("Ciao!");

/* 
*Snack2*
Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti. 
*/

let i=0;
let somma=0;

while(i < 5)
{
    somma += parseInt(prompt(`Numero ${i+1}: `));
    i++;
}

console.log(somma);

// ----- FINE :) -----