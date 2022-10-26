// JAVASCRIPT //

console.log("Ciao!");

/*
*Snack1*
-Crea un array vuoto
-Chiedi all’utente un numero da inserire nell’array.
-Chiedere i numeri all’utente
-Inserirli nell’array fino a quando la somma degli elementi è minore di 50.
*/
/* let v = [];
let somma = 0;
let i = 0;

while(somma < 50)
{
    v[i] = parseInt(prompt('Valore: ')); console.log(v[i]);
    somma += v[i];
    i++;
}

console.log(`La somma è: ${somma}`);
*/


/* 
*Snack2*
Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti. 
*/
/* 
let i=0;
let somma=0;

while(i < 5)
{
    somma += parseInt(prompt(`Numero ${i+1}: `));
    i++;
}

console.log(somma);
*/

/* 
*Snack3* (Bonus)
Fai inserire un numero, che chiameremo N, all’utente.
Genera N array,
ognuno formato da 10 numeri casuali da 1 a 100.
Ogni volta che ne crei uno, stampalo.
*/
/* 
let N = parseInt(prompt(`N° Vettori da stampare: `)); 
let cont = 0;
let array = []

while(cont < N)
{
    for(let i = 0; i < 10; i++)
    {
        array[i] = Math.floor(Math.random() * 100) + 1;
    }

    console.log(array);
    cont++;
}
*/

/* 
*Snack4 (Bonus)*
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby.
-Chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
-Interrompi il ciclo appena il nome è stato trovato.
*/

let listaNomi = ["Giuseppino", "Alfonsetto", "Rodolfuccio"];
let i=0;
let flagOn = false;

let nome = prompt(`Nome: `);

while(i < listaNomi.length)
{
    if(nome != listaNomi[i])
    {
        flagOn = false;
    }
    else
    {
        flagOn = true;
        console.log("test");
        break;
    }

    i++;
}


if(flagOn == true)
{
    console.log(`Sei presente nella lista! :)`);
}
else
{
    console.log(`Mi dispiace ma non puoi entrare! :(`);
}

















// ----- FINE :) -----