'use strict';

// crea lista di partenza di utenti iscritti ad un sito (arrey)
const webUsers = ["Orsacchiotto83", "VanitosaDebrutt", "FreedomGuy", "DiegoMilito", "Clod23", "Nintendaro", "Boolean65", "PrettyGirl", "Giuseppina", "MirkoDalleMarche"];

// chiedi all'utente di inserire username (prompt)
const insertUsername = prompt("DIGITA LA TUA USERNAME");

/*dichiara con una variabile booleana che l'utente di base non è
un utente in lista iscritti*/
let acceptedUser = false;

/*apri un ciclo for in modo da far scorrere tutti gli elementi
della lista array; l'index è lungo quanto la lista webUsers.*/
for (let i = 0; i < webUsers.length; i++) {

    // Se l'username inserito è in lista webUsers, la variabile booleana è vera
    if (insertUsername === webUsers[i]){
        acceptedUser = true;

    }

 }


 /*Una volta uscito dal ciclo For, imposto una CONDIZIONE "IF" che
 se la variabile booleana è vera, apparirà un prompt che chiede 
 la mail dell'utente; infine verrà stampata in console la mail scelta.*/
 
 if (acceptedUser === true){
        const yourMail = prompt('RISULTI ISCRITTO! INSERISCI LA TUA E-MAIL');
        console.log("La tua E-Mail: ", yourMail);
        document.getElementById('user_mail').innerHTML = `Ciao, hai scelto il seguente indirizzo E-Mail: ${yourMail}`;

/*In caso contrario apparirà un alert che informa che l'utente non risulta
iscritto al sito.*/
    }  else{
        alert("SPIACENTE, NON RISULTI ISCRITTO AL SITO!");

    }


