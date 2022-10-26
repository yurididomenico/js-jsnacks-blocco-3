// JAVASCRIPT //

console.log("Ciao!");

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