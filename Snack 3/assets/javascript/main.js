// JAVASCRIPT //

console.log("Ciao!");

/* 
*Snack3* (Bonus)
Fai inserire un numero, che chiameremo N, all’utente.
Genera N array,
ognuno formato da 10 numeri casuali da 1 a 100.
Ogni volta che ne crei uno, stampalo.
*/

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

















// ----- FINE :) -----