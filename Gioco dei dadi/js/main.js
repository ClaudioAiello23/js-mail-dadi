'use strict';

/*impostare un Alert per iniziare il gioco;*/
alert('Sei pronto? Scopri se hai vinto al GIOCO DEI DADI');

/*creare una variabile playerNumber che crei un numero random
da 1 a 6 per il giocatore;*/
alert('Incrocia le dita, clicca per estrarre il tuo numero!');
const playerNumber = Math.floor(Math.random() * 6) + 1;
alert('Il tuo numero è: '+ playerNumber);
console.log("Numero giocatore: ", playerNumber);

/*creare una variabile cpuNumber che crei un numero random
da 1 a 6 per la cpu;*/
alert('Clicca per estrarre il numero della CPU');
const cpuNumber = Math.floor(Math.random() * 6) + 1;
alert('Il numero della CPU è: '+ cpuNumber);
console.log("Numero cpu: ", cpuNumber);

/*Creare una variabile finalNumber che faccia la differenza tra il
numero giocatore e il numero cpu;*/
const finalNumber = playerNumber - cpuNumber;
console.log("Differenza N.Giocatore - N.Cpu: ", finalNumber);


/*Impostare una IF con le seguenti casistiche:
- se la differenza tra playerNumber e cpuNumber è maggiore di zero,
mostrare un alert che premia il giocatore come vincitore;
- se la differenza tra playerNumber e cpuNumber è maggiore di zero,
mostrare un alert che premia il giocatore come vincitore;
- se la differenza tra playerNumber e cpuNumber è maggiore di zero,
mostrare un alert che premia il giocatore come vincitore;*/
if (finalNumber > 0){
    alert('SIIIIIIIIII, HAI VINTO!!!!');
    document.getElementById('final_message').innerHTML = 'SIIIIIIIIII, HAI VINTO !!!!';
    console.log("Risultato: Ha vinto il giocatore");
    
} else if (finalNumber < 0){
    alert('PECCATO, HA VINTO LA CPU! !!!!');
    document.getElementById('final_message').innerHTML = 'PECCATO, HA VINTO LA CPU ! !!!!';
    console.log("Risultato: Ha vinto la Cpu");

} else {
    alert('ABBIAMO PAREGGIATO, 1-1......ICS!!!!');
    document.getElementById('final_message').innerHTML = 'ABBIAMO PAREGGIATO, 1-1......ICS !!!!';
    console.log("Risultato: Pareggio");

}

document.getElementById('player_number').innerHTML = `Numero Giocatore: ${playerNumber}`;
document.getElementById('cpu_number').innerHTML = `Numero Cpu: ${cpuNumber}`;


// SWITCH NON FUNZIONA CORRETTAMENTE - CHIEDERE
// switch (finalNumber){

//     case finalNumber < 0 :
//     // alert('SIIIIIIIIII, HAI VINTO!!!!');
//     console.log("hai vinto");
//     break;

//     case finalNumber < 0 :
//     // alert('PECCATO, HA VINTO LA CPU! !!!!');
//     console.log("hai perso");
//     break;

//     default: 
//     // alert('ABBIAMO PAREGGIATO, 1-1......ICS!!!!');
//     console.log("pareggio");
    
// }