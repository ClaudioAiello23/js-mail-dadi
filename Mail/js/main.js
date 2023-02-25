'use strict';

// crea lista di partenza di utenti iscritti ad un sito (arrey)
const webUsers = ["orsacchiotto83@gmail.com", "vanitosaDebrutt@libero.it", "freedomGuy@gmail.com", "diegomilito@gmail.com", "clod23@gmail.com", "nintendaro@gmail.com", "boolean65@libero.it", "prettygirl@libero.it", "giuseppina@gmail.com", "mirkodallemarche@gmail.com"];

// chiedi all'utente di inserire la mail (prompt)
const insertMail = prompt("DIGITA LA TUA E-MAIL");

/*dichiara con una variabile booleana che la mail di base non è
presente nella lista iscritti (webUsers)*/
let acceptedUser = false;

/*apri un ciclo 'for' in modo da far scorrere tutti gli elementi
della lista array "webUsers"; l'index è lungo quanto la lista webUsers.*/
for (let i = 0; i < webUsers.length; i++) {

    // Se la mail inserita è in lista webUsers, la variabile booleana è vera
    if (insertMail === webUsers[i]){
        acceptedUser = true;

    }

 }


 /*Una volta uscito dal ciclo 'For', imposto una CONDIZIONE "IF" che
 se la variabile booleana è vera, apparirà un alert che comunica all'utente
 che risulta già iscritto al sito; infine verrà stampata in console la mail scelta.*/
 
 if (acceptedUser === true){
        alert("ATTENZIONE! LA MAIL INSERITA RISULTA GIA' PRESENTE NEL SITO");
        document.getElementById('user_mail').innerHTML = `Attenzione, l'indirizzo e-mail ${insertMail} risulta già presente nel sito.`;

/*In caso contrario apparirà un alert che informa che la mail è stata aggiunta
al sito.*/
    }  else{
        alert("COMPLIMENTI ! LA MAIL SELEZIONATA E' STATA AGGIUNTA AL SITO");
        document.getElementById('user_mail').innerHTML = `Complimenti, l'indirizzo e-mail è stato aggiunto al sito: ${insertMail}`;

    }

/*Infine chiedo alla console di stampare la mail inserita dall'utente*/
    console.log("Mail inserita dall'utente: ", insertMail);